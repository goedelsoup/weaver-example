
import fetch, { type Response } from 'node-fetch';
import fs from 'node:fs/promises';
import path from 'node:path';
import * as tar from 'tar';

import type { Config, RemoteConfig } from './config';
import { dir } from 'node:console';

console.debug = () => {};
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

const createDir = (path: string) => {
    console.trace(`Creating directory ${path}`);
    return fs.mkdir(path, { recursive: true });
};

const fetchArchive = (url: string) => {
    console.debug(`Fetching registry from ${url}`);
    return fetch(url);
};

function handleArchiveResponse(archiveOptions: tar.TarOptionsWithAliasesAsyncNoFile) {
    return (response: Response) => {
        if (!response.ok) {
            throw new Error(`Failed to download registry from ${response.url}`, {
                cause: response.statusText,
            });
        }
        if (!response.body) {
            throw new Error(`Failed to retrieve archive from ${response.url}`);
        }
        const tarx = tar.x(archiveOptions);
        return response.body.pipe(tarx, {});
    }
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
function downloadRegistry(remote: RemoteConfig, path: string, outdir: string): Promise<tar.Unpack> {
    const version = Promise.resolve(remote.version) || getLatestRelease(remote);
    // Create stage directory for the imported registry
    const targetDir = `${path}/${outdir}/${remote.name}`;
    // Retrieve the archive
    const archiveOptions: tar.TarOptionsWithAliasesAsyncNoFile = {
        strip: 1,
        cwd: targetDir,
        filter: registryFilter,
    };
    return createDir(targetDir)
        .then(_ => version.then(version => fetchArchive(repoUrl(remote, `${TAG_ARCHIVE_BASE}/${version}.tar.gz`))))
        .then(handleArchiveResponse(archiveOptions))
        .then(async u => await new Promise(resolve => u.on('finish', resolve)));
}

/**
 * Replicates the remote registry to the local registry to allow Weaver to see them as one.
 * @param remote the remote registry configuration
 * @param path the path to the local registry
 * @param outdir the output directory for the imported registry
 */
function cloneToLocal(_path: string, outdir: string): (record: [string, RemoteConfig]) => Promise<[string, RemoteConfig]> {
    return (record: [string, RemoteConfig]) => {
        const [_, remote] = record;
        const SUPPORTED_DIRS = ["model", "schemas"];
        const fromBase = path.resolve(`${_path}/${outdir}/${remote.name}`);
        const clone = (dir: string) => {
            const source = path.resolve(`${fromBase}/${dir}/`);
            const destination = path.resolve(`${_path}/${dir}/${outdir.replace('.', '')}/${remote.name}/`);
            console.log(`Copying ${source} to ${destination}`);
            return fs.mkdir(destination, { recursive: true })
                .then(_ => fs.cp(source, destination, { recursive: true }));
        }
        const dirs = remote.include ? remote.include.filter(v => SUPPORTED_DIRS.includes(v)) : SUPPORTED_DIRS;
        return Promise.all(dirs.map(clone)).then(_ => record);
    };
}

/**
 * Imports all registries defined in the configuration.
 * @param config the configuration for the registry importer
 */
export async function importRegistries(config: Config): Promise<[string, RemoteConfig][]> {
    const { registries } = config;
    const { local, remote } = registries;
    console.log(`Importing registries: ${Object.keys(remote).join(', ')}`);

    const loadRegistry = (r: [string, RemoteConfig]) => {
        const [name, remote] = r;
        console.log(`Importing registry ${name} from ${remote.repository}`);
        return downloadRegistry(remote, local.path, config.outDir)
            .then(_ => r);
    };
    const remotes = Object.entries(remote);
    return Promise.all(remotes.map(r => loadRegistry(r).then(cloneToLocal(local.path, config.outDir))));
}