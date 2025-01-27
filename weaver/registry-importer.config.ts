
import type { Config } from "@internal/registry-importer/config";

const config: Config = {
    outDir: '.imported',
    registries: {
        local: {
            name: 'local',
            path: '.',
        },
        remote: {
            acme: {
                name: 'acme',
                repository: 'goedelsoup/weaver-example-internal-registry',
                version: 'v0.1.0',
                include: ['model'],
            },
            opentelemetry: {
                name: 'opentelemetry',
                repository: 'open-telemetry/semantic-conventions',
                version: 'v1.30.0',
            },
        },
    },
};

export default config;