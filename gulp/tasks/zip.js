import { deleteSync } from "del";
import gulpZip from "gulp-zip";

export function zip(done) {
    deleteSync(`./${app.path.rootFolder}.zip`);
    return app.gulp
        .src(`${app.path.buildFolder}/**/*.*`, { encoding: false })
        .pipe(
            app.plugins.gulpPlumber(
                app.plugins.gulpNotify.onError({
                    title: "ZIP",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(gulpZip(`${app.path.rootFolder}.zip`))
        .pipe(app.gulp.dest(`./`))
        .on("end", done);
}
