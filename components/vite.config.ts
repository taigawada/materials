import path from 'path';
import { defineConfig } from 'vite';
import { createVuePlugin as vue2 } from 'vite-plugin-vue2';

export default defineConfig({
    resolve: {
        alias: [
            { find: '~', replacement: '../node_modules/' },
            { find: '@', replacement: path.resolve(__dirname, 'src/') },
        ],
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, './src/build.ts'),
            name: 'components',
            fileName: 'components',
        },
        rollupOptions: {
            external: ['vue-demi', 'vue'],
            output: {
                globals: {
                    vue2: 'vue',
                    'vue-demi': 'VueDemi',
                },
            },
        },
    },
    plugins: [vue2()],
    server: {
        host: true,
    },
});
