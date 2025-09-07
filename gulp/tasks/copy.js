export function copy(done) {
    return app.gulp
        .src(app.path.src.files)
        .pipe(app.gulp.dest(app.path.build.files))
        .on("end", done);
}
