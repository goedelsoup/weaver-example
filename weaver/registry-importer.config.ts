
import type { Config } from "@internal/registry-importer/config";

const config: Config = {
    outDir: '.imported',
    registries: {
        local: {
            name: 'local',
            path: '.',
        },
        remote: {
            opentelemetry: {
                name: 'opentelemetry',
                repository: 'open-telemetry/semantic-conventions',
                version: 'v1.30.0',
            },
        },
    },
};

export default config;