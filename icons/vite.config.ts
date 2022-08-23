import path from "path";
import { defineConfig } from "vite";
import svgLoader from "vite-svg-loader";

const config = {
    plugins: [svgLoader()],
    resolve: {
        alias: {
            "~": "../node_modules/",
            "@": path.resolve(__dirname, "./src/icons/"),
        },
        dedupe: ["vue"],
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, "./src/build.js"),
            name: "icons",
            fileName: "icons",
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
};

export default defineConfig(config);
