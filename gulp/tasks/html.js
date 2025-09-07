import fileinclude from "gulp-file-include";
import versionNumber from "gulp-version-number";
import webphtml from "gulp-webp-html-nosvg";
import htmlmin from "gulp-htmlmin";

export function html(done) {
    return app.gulp
        .src(app.path.src.html)
        .pipe(
            app.plugins.gulpPlumber(
                app.plugins.gulpNotify.onError({
                    title: "HTML",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(fileinclude())
        .pipe(app.plugins.replace("../../img/", "./img/"))
        .pipe(webphtml())
        .pipe(
            versionNumber({
                value: "%DT%",
                append: {
                    key: "_v",
                    cover: 0,
                    to: ["css", "js"],
                },
                output: { file: "gulp/version.json" },
            })
        )
        .pipe(
            app.plugins.gulpIf(
                app.isBuild,
                htmlmin({ collapseWhitespace: true })
            )
        )
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browserSync.stream())
        .on("end", done);
}
