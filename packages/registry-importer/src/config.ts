
import type { CosmiconfigResult } from 'cosmiconfig';

type NamedConfig = { name: string; };

// biome-ignore: lint/suspicious/noExplicitAny: required for type guard
function isNamedConfig(x: any): x is NamedConfig {
    return "name" in x && typeof x.name === "string" && x.name.length > 0;
}

export type LocalConfig = {
    path: string;
} & NamedConfig;

// biome-ignore: lint/suspicious/noExplicitAny: required for type guard
function isLocalConfig(x: any): x is LocalConfig {
    return isNamedConfig(x) && "path" in x && typeof x.path === "string";
}

export type RemoteConfig = {
    repository: string;
    version?: string;
} & NamedConfig;

// biome-ignore: lint/suspicious/noExplicitAny: required for type guard
function isRemoteConfig(x: any): x is RemoteConfig {
    return "repository" in x && "name" in x;
}

type RegistryConfig = {
    local: LocalConfig;
    remote: Record<string, RemoteConfig>;
};

// biome-ignore: lint/suspicious/noExplicitAny: required for type guard
function isRegistryConfig(x: any): x is RegistryConfig {
    return "local" in x && isLocalConfig(x.local) && "remote" in x && Object.values(x.remote).every(isRemoteConfig);
}

type ExtendedModuleConfig = {
    rootDir?: string;
};

export type Config = {
    outDir: string;
    registries: RegistryConfig;
} & ExtendedModuleConfig;

// biome-ignore: lint/suspicious/noExplicitAny: required for type guard
export function isConfig(x: any): x is Config {
    return "outDir" in x && "registries" in x && isRegistryConfig(x.registries);
}

export async function validateConfig(result: CosmiconfigResult): Promise<Config> {
    if (result === undefined || result === null) {
        throw new Error('Resulting configuration was undefined');
    }
    if (result.isEmpty) {
        throw new Error(`No configuration found in resolved path: ${result.filepath}`);
    }
    if (!isConfig(result.config)) {
        console.log(result.config);
        throw new Error('Invalid configuration');
    }
    return result.config;
}