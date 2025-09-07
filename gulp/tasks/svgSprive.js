import svgSprite from "gulp-svg-sprite";

const config = {
    shape: {
        dimension: {
            // Set maximum dimensions
            maxWidth: 32,
            maxHeight: 32,
        },
        spacing: {
            // Add padding
            padding: 10,
        },
        dest: "out/intermediate-svg", // Keep the intermediate files
    },
    mode: {
        view: {
            // Activate the «view» mode
            bust: false,
            render: {
                scss: true, // Activate Sass output (with default options)
            },
        },
        stack: {
            sprite: `../icons/icons.svg`,
            example: true,
        },
        symbol: true, // Activate the «symbol» mode
    },
};

export function svgSprive(done) {
    return app.gulp
        .src(app.path.src.svgicons)
        .pipe(
            app.plugins.gulpPlumber(
                app.plugins.gulpNotify.onError({
                    title: "SVG Icons",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(svgSprite(config))
        .pipe(app.gulp.dest(app.path.build.images))
        .on("end", done);
}
