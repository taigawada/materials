import path from "path";
import { defineConfig } from "vite";
// import { createSvgPlugin } from "vite-plugin-vue2-svg";
import vueSvgPlugin from "vite-plugin-vue-svg";

const config = {
    plugins: [
        vueSvgPlugin(),
        // process.env.VUE_VERSION === "3" ? createSvgPlugin() : vueSvgPlugin(),
    ],
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
