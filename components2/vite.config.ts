import path from 'path';
import { defineConfig } from 'vite';
import { createVuePlugin as vue2 } from 'vite-plugin-vue2';

export default defineConfig({
    plugins: [vue2()],
    resolve: {
        alias: {
            '~': '../node_modules/',
            '@': path.resolve(__dirname, './src/'),
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, './src/build.ts'),
            name: 'components2',
            fileName: 'components2',
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
});
