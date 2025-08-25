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
            compilerOptions: { runes: true, compatibility: { componentApi: 4 } },
            // If you rely on third-party components that still use `new Component(...)`
            // you can temporarily enable backwards compatibility by uncommenting:
            // compilerOptions: { compatibility: { componentApi: 4 } },
            onwarn: (warning, handler) => {
                if (warning.code.startsWith('a11y-')) {
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
