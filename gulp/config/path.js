import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
    build: {
        scripts: `${buildFolder}/js/`,
        images: `${buildFolder}/img/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        fonts: `${buildFolder}/fonts/`,
    },
    src: {
        ts: `${srcFolder}/ts/**/*.ts`,
        js: `${srcFolder}/js/**/*.js`,
        jest: `${srcFolder}/ts/tests/**/*.ts`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
    },
    watch: {
        ts: `${srcFolder}/ts/**/*.ts`,
        js: `${srcFolder}/ts/**/*.js`,
        jest: `${srcFolder}/ts/tests/**/*.ts`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
    },
    clean: [`${buildFolder}/*`, `!${buildFolder}/img/`],
    buildFolder: buildFolder,
    srcFolder,
    rootFolder,
    ftp: "test",
};
