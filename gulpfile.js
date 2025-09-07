import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { plugins } from "./gulp/config/plugins.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { jest } from "./gulp/tasks/jest.js";
import { images } from "./gulp/tasks/images.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";
import { ttfToWoff, fontStyle } from "./gulp/tasks/fonts.js";

import { deleteAsync } from "del";

global.app = {
    isBuild: process.argv.includes("--build"),
    isDev: !process.argv.includes("--build"),
    path,
    gulp,
    plugins,
};

async function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.ts, js);
    gulp.watch(path.watch.jest, jest);
    gulp.watch(path.watch.images, images);
    gulp.watch(path.watch.svgicons, svgSprive);
}

export { svgSprive };

const fonts = gulp.series(ttfToWoff, fontStyle);
const browser = gulp.parallel(watcher, server);
const jscript = gulp.series(jest, js);

const mainTasks = gulp.series(
    fonts,
    gulp.parallel(copy, html, scss, jscript, images)
);

const dev = gulp.series(reset, mainTasks, browser);
const build = gulp.series(reset, mainTasks);
const deployZip = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

export { dev };
export { build };
export { deployZip };
export { deployFTP };
