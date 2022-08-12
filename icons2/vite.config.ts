import path from "path";
import { defineConfig } from "vite";
import { createVuePlugin as vue2 } from "vite-plugin-vue2";
import { createSvgPlugin } from "vite-plugin-vue2-svg";

export default defineConfig({
    plugins: [vue2(), createSvgPlugin()],
    resolve: {
        alias: {
            "~": "../node_modules/",
            "@": path.resolve(__dirname, "./src/icons/"),
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, "./src/build.js"),
            name: "icons2",
            fileName: "icons2",
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
});
