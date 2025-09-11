import babel from "gulp-babel";
import webpack from "webpack-stream";
import ts from "gulp-typescript";

export function js(done) {
    return app.gulp
        .src([app.path.src.ts, `!${app.path.src.jest}`], {
            sourcemaps: app.isDev,
        })
        .pipe(
            app.plugins.gulpPlumber(
                app.plugins.gulpNotify.onError({
                    title: "JS",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(
            ts({
                module: "ESNext",
                target: "ESNext",
                noImplicitAny: true,
                skipLibCheck: true,
            })
        )
        .pipe(app.gulp.dest(app.path.srcFolder + "/js/fromTS"))
        .pipe(
            babel({
                presets: ["@babel/env"],
            })
        )
        .pipe(
            webpack({
                mode: app.isBuild ? "production" : "development",
                output: {
                    filename: "app.min.js",
                },
            })
        )
        .pipe(app.gulp.dest(app.path.build.scripts))
        .pipe(app.plugins.browserSync.stream())
        .on("end", done);
}
