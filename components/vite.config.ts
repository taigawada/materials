import path from 'path';
import { defineConfig } from 'vite';
import { createVuePlugin as vue2 } from 'vite-plugin-vue2';

export default defineConfig({
    optimizeDeps: {
        exclude: ['vue-demi'],
    },
    resolve: {
        alias: [
            { find: '~', replacement: '../node_modules/' },
            { find: '@', replacement: path.resolve(__dirname, 'src/components/') },
        ],
        dedupe: ['vue-demi'],
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, './src/build.ts'),
            name: 'components',
            fileName: 'components',
        },
        rollupOptions: {
            external: ['vue-demi'],
            output: {
                globals: {
                    'vue-demi': 'VueDemi',
                },
            },
        },
    },
    plugins: [vue2()],
});
