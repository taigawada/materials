import path from 'path';
import { defineConfig } from 'vite';
import { createVuePlugin as vue2 } from 'vite-plugin-vue2';

export default defineConfig({
    optimizeDeps: {
        exclude: ['vue-demi'],
    },
    plugins: [vue2()],
    resolve: {
        alias: [
            { find: '~', replacement: '../node_modules/' },
            { find: '@', replacement: path.resolve(__dirname, 'src/components/') },
            // vue-demi の仕様により、composition apiを正しく読み込めないのをaliasで矯正
            { find: /^@vue\/composition-api$/, replacement: '@vue/composition-api/dist/vue-composition-api.mjs' },
        ],
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, './src/build.ts'),
            name: 'components',
            fileName: 'components',
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
