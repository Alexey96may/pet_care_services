import babel from "gulp-babel";
import jestGulp from "gulp-jest";
import ts from "gulp-typescript";

export function jest(done) {
    return app.gulp
        .src(app.path.src.jest)
        .pipe(
            app.plugins.gulpPlumber(
                app.plugins.gulpNotify.onError({
                    title: "Jest",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(
            ts({
                module: "ESNext",
                noImplicitAny: true,
                skipLibCheck: true,
            })
        )
        .pipe(app.gulp.dest(app.path.srcFolder + "/ts/tests"))
        .pipe(
            babel({
                presets: ["@babel/env"],
            })
        )
        .pipe(
            jestGulp.default({
                preprocessorIgnorePatterns: [
                    "<rootDir>/dist/",
                    "<rootDir>/node_modules/",
                ],
                automock: false,
                verbose: true,
                testMatch: ["**/tests/**/*.test.js"],
            })
        )
        .pipe(app.plugins.browserSync.stream())
        .on("end", done);
}
