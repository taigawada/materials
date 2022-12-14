import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    optimizeDeps: {
        exclude: ['vue-demi'],
    },
    resolve: {
        alias: [
            { find: '~', replacement: '../node_modules/' },
            { find: '@', replacement: path.resolve(__dirname, 'src/') },
            { find: 'globalStyleSheet', replacement: './stylesheet.scss' },
        ],
    },
    build: {
        minify: 'esbuild',
        lib: {
            entry: path.resolve(__dirname, './src/build.ts'),
            name: 'components',
            fileName: 'components',
        },
        rollupOptions: {
            external: ['vue', 'vue-demi', '@vueuse/core'],
            output: {
                globals: {
                    vue: 'vue',
                    'vue-demi': 'VueDemi',
                    '@vueuse/core': '@vueuse/core',
                },
            },
        },
    },
    server: {
        host: true,
    },
});
