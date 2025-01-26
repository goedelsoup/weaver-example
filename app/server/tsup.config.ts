import { type Options, defineConfig } from 'tsup';

export default defineConfig((options: Options) => ({
    ...options,
    entryPoints: ['src/server.ts'],
    clean: true,
    dts: true,
    bundle: true,
    format: ['esm'],
}));