import { configFTp } from "../config/ftp.js";
import vinylFTP from "vinyl-ftp";
import util from "gulp-util";

export function ftp(done) {
    configFTp.log = util.log;
    const ftpConnect = vinylFTP.create(configFTp);
    return app.gulp
        .src(`${app.path.buildFolder}/**/*.*`, { encoding: false })
        .pipe(
            app.plugins.gulpPlumber(
                app.plugins.gulpNotify.onError({
                    title: "FTP",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(ftpConnect.dest(`/${app.path.ftp}/${app.path.rootFolder}`))
        .on("end", done);
}
