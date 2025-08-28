import { defineConfig }           from 'vite';
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// see https://vitejs.dev/config
export default defineConfig({
    server: {
        port: 3000,
    },
    envPrefix: 'PB',
    base: './',
    build: {
        chunkSizeWarningLimit: 1000,
        reportCompressedSize: false,
    },
    plugins: [
        svelte({
            preprocess: [vitePreprocess()],
            // Enable Svelte 5 runes while keeping compat for existing Svelte 4 code
            compilerOptions: {
                runes: true,
                compat: true,
            },
            onwarn: (warning, handler) => {
                if (warning.code && String(warning.code).startsWith('a11y-')) {
                    return; // silence a11y warnings
                }
                handler(warning);
            },
        }),
    ],
    resolve: {
        alias: {
            '@': __dirname + '/src',
        }
    },
})
