import type { Config } from 'jest';

const config: Config = {
    testPathIgnorePatterns: [
        "src/attributes/test.ts",
    ],
};

export default config;