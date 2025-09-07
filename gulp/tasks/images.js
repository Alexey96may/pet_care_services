import webp from "gulp-webp";
import imagemin from "gulp-imagemin";
import avif from "gulp-avif";

export async function images(done) {
    return app.gulp
        .src(app.path.src.images, { encoding: false })
        .pipe(
            app.plugins.gulpPlumber(
                app.plugins.gulpNotify.onError({
                    title: "IMAGES",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(app.plugins.newer(app.path.build.images))
        .pipe(avif({ quality: 50 }))
        .pipe(app.gulp.dest(app.path.build.images))

        .pipe(app.gulp.src(app.path.src.images, { encoding: false }))
        .pipe(app.plugins.newer(app.path.build.images))
        .pipe(webp())
        .pipe(app.gulp.dest(app.path.build.images))

        .pipe(app.gulp.src(app.path.src.images, { encoding: false }))
        .pipe(app.plugins.newer(app.path.build.images))
        .pipe(
            app.plugins.gulpIf(
                app.isBuild,
                imagemin({
                    progressive: true,
                    svgoPlugins: [{ removeViewBox: false }],
                    interlaced: true,
                    optimizationLevel: 3,
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.gulp.src(app.path.src.svg, { encoding: false }))
        .pipe(app.plugins.newer(app.path.build.images))
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browserSync.stream())
        .on("end", done);
}
