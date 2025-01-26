import { type Options, defineConfig } from 'tsup';

export default defineConfig((options: Options) => ({
    entryPoints: ['src/import.ts'],
    clean: true,
    dts: true,
    bundle: true,
    format: ['esm'],
    ...options,
}));