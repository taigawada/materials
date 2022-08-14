import path from 'path';
import { defineConfig } from 'vite';
import { createVuePlugin as vue2 } from 'vite-plugin-vue2';
import vue from 'rollup-plugin-vue';
import sass from 'rollup-plugin-sass';

export default defineConfig({
    optimizeDeps: {
        exclude: ['vue-demi'],
    },
    resolve: {
        alias: [
            { find: '~', replacement: '../node_modules/' },
            { find: '@', replacement: path.resolve(__dirname, 'src/components/') },
            // vue-demi の仕様により、composition apiを正しく読み込めないのをaliasで矯正
            { find: /^@vue\/composition-api$/, replacement: '@vue/composition-api/dist/vue-composition-api.mjs' },
            // { find: /^vue$/, replacement: 'vue3' },
        ],
        dedupe: ['vue'],
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, './src/build.ts'),
            name: 'components',
            fileName: 'components',
        },
        rollupOptions: {
            // plugins: [vue(), sass()],
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
    plugins: [vue2()],
});
