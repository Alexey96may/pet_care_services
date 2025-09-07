import replace from "gulp-replace";
import gulpPlumber from "gulp-plumber";
import gulpNotify from "gulp-notify";
import browserSync from "browser-sync";
import newer from "gulp-newer";
import gulpIf from "gulp-if";
// import webpHtmlNosvg from "gulp-webp-html-nosvg";

export const plugins = {
    replace,
    gulpPlumber,
    gulpNotify,
    browserSync,
    newer,
    gulpIf,
};
