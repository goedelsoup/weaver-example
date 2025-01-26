
import fetch from 'node-fetch';
import fs from 'node:fs/promises';
import * as tar from 'tar';

import type { Config, RemoteConfig } from './config';

export type ImportResult = { failed?: RemoteConfig[]; succeeded?: RemoteConfig[] };

console.debug = () => {}
console.trace = () => {};

const GITHUB_DEFAULT_HEADERS = {
    'Accept': 'application/vnd.github.v3+json',
    'X-GitHub-Api-Version': '2022-11-28',
};

const TAG_ARCHIVE_BASE = 'archive/refs/tags';

function apiUrl(remote: RemoteConfig, rest?: string) {
    const base = `https://api.github.com/repos/${remote.repository}`;
    return rest ? `${base}/${rest}` : base
}

function repoUrl(remote: RemoteConfig, rest?: string) {
    const base = `https://github.com/${remote.repository}`;
    return rest ? `${base}/${rest}` : base
}

/**
 * Gets the latest release of a remote registry; used when no version is specified in the configuration.
 * @param remote the remote configuration for the registry
 * @returns the latest release version
 */
async function getLatestRelease(remote: RemoteConfig): Promise<string | undefined> {
    const response = await fetch(apiUrl(remote, 'releases/latest'), {
        headers: GITHUB_DEFAULT_HEADERS,
    });
    if (!response.ok) {
        throw new Error(`Failed to retrieve latest release from ${remote.repository}`);
    }
    // biome-ignore: lint/suspicious/noExplicitAny: internal script
    const body = await response.json() as any;
    if (body && 'tag_name' in body) {
        return body.tag_name;
    }
    return undefined;
}

/**
 * Filters the registry files to only include models and schemas.
 * @param path the path to the file being filtered
 * @returns true if the file is a model or schema
 */
const registryFilter = (path: string) => {
    console.trace(`Filtering ${path}`);
    const isModel = path.includes('/model/') && path.endsWith('.yaml');
    if (isModel) {
        console.debug(`Importing model ${path}`);
    }
    const isSchema = path.includes('/schemas/');
    if (isSchema) {
        console.debug(`Importing schema ${path}`);
    }
    return isModel || isSchema;
};

/**
 * Retrieves the registry archive and returns a stream of the extracted files which are tracked locally. This
 * mitigates the need for utilizing a submodule to track the registry.
 * 
 * GitHub Remote Example: https://github.com/open-telemetry/semantic-conventions/archive/refs/tags/v1.30.0.tar.gz
 * 
 * @param remote a remote OpenTelemetry semantic conventions registry
 * @param path the path to the local registry
 * @param outdir the output directory for the imported registry
 * 
 * @returns a stream of the extracted files
 */
async function downloadRegistry(remote: RemoteConfig, path: string, outdir: string): Promise<tar.Parser> {
    const version = remote.version || await getLatestRelease(remote);
    if (!version) {
        throw new Error(`Failed to retrieve version for ${remote.repository}`);
    }
    const archiveUrl = repoUrl(remote, `${TAG_ARCHIVE_BASE}/${version}.tar.gz`);
    const targetDir = `${path}/${outdir}/${remote.name}`;
    console.log(`Creating directory ${targetDir}`);
    await fs.mkdir(targetDir, { recursive: true });
    console.log(`Fetching registry from ${archiveUrl}`);
    const response = await fetch(archiveUrl);
    const archiveOptions: tar.TarOptionsWithAliasesAsyncNoFile = {
        strip: 1,
        cwd: targetDir,
        filter: registryFilter,
    };
    if (!response.ok) {
        console.log(response.statusText);
        throw new Error(`Failed to download registry from ${archiveUrl}`, {
            cause: response.statusText,
        });
    }
    if (!response.body) {
        throw new Error(`Failed to retrieve archive from ${archiveUrl}`);
    }
    return Promise.resolve(response.body.pipe(tar.x(archiveOptions)))
        .then((p) => {
            console.log(`Imported registry ${remote.name} to ${targetDir}`);
            return p;
        });
}

function cloneToLocal(remote: RemoteConfig, path: string, outdir: string): () => Promise<void> {
    const fromBase = `${path}/${outdir}/${remote.name}`;
    return async () => {
        return await Promise.all(["model", "schemas"]
                .map((dir) => {
                    const source = `${fromBase}/${dir}/**/*`;
                    const destination = `${path}/${dir}/${outdir}/`;
                    console.log(`Copying ${source} to ${destination}`);
                    return fs.copyFile(source, destination)
                }))
                .then();
    };
}

export async function importRegistries(config: Config) {
    const { registries } = config;
    const { local, remote } = registries;

    const loadRegistry = async (r: [string, RemoteConfig]) => {
        const [name, remote] = r;
        console.log(`Importing registry ${name} from ${remote.repository}`);
        await downloadRegistry(remote, local.path, config.outDir);
        return r;
    };

    const cloneRegistry = async (r: [string, RemoteConfig]) => {
        const [name, remote] = r;
        console.log(`Importing registry ${name} to ${local.path}`);
        await cloneToLocal(remote, local.path, config.outDir);
        return r;
    };

    const identityP: Promise<ImportResult> = Promise.resolve({ failed: [], succeeded: [] });
    const remotes = Object.entries(remote);

    const result = remotes.reduce(async (acc, r) => {
        const [name, remote] = r;
        return loadRegistry(r)
            .then(cloneRegistry)
            .then(r => acc.then(result => {
                return {
                    succeeded: result.succeeded ? [...result.succeeded, remote] : [remote],
                    failed: result.failed,
                }
            }))
            .catch(e => {
                console.log(`Failed to import registry ${name}`);
                return acc.then(a => {
                    return {
                        succeeded: a.succeeded,
                        failed: a.failed ? [...a.failed, remote] : [remote],
                    };
                });
            });
    }, identityP);
    return result;
}