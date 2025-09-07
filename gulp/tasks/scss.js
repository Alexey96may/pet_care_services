import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import cleanCss from "gulp-clean-css";
import wepbCss from "gulp-webpcss";
import autoPrefixer from "gulp-autoprefixer";
import groupCssMedia from "gulp-group-css-media-queries";

const sass = gulpSass(dartSass);

export function scss(done) {
    return app.gulp
        .src(app.path.src.scss, { sourcemaps: app.isDev })
        .pipe(
            app.plugins.gulpPlumber(
                app.plugins.gulpNotify.onError({
                    title: "SCSS",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(app.plugins.replace(/@img\//g, "../img/"))
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(app.plugins.gulpIf(app.isBuild, groupCssMedia()))
        .pipe(
            app.plugins.gulpIf(
                app.isBuild,
                wepbCss({
                    webpClass: ".webp",
                    noWebpClass: ".no-webp",
                })
            )
        )
        .pipe(
            autoPrefixer({
                grid: "autoplace",
                cascade: true,
            })
        )
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCss())
        .pipe(
            rename({
                extname: ".min.css",
            })
        )
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browserSync.stream())
        .on("end", done);
}
