import { type Options, defineConfig } from 'tsup';

export default defineConfig((options: Options) => ({
    entryPoints: ['src/entrypoint.ts'],
    clean: true,
    dts: true,
    bundle: true,
    format: ['esm'],
    ...options,
}));