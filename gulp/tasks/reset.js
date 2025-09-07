import { deleteSync } from "del";

export function reset(done) {
    return deleteSync(app.path.clean), done();
}
