export function isWebp() {
    function testWebp(cb) {
        console.log("from isWebp");
        var webp = new Image();
        webp.onload = webp.onerror = function () {
            cb(webp.height == 2);
        };
        webp.src =
            "data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMw" +
                "AgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA";
    }
    testWebp(function (support) {
        var className = support === true ? "webp" : "no-webp";
        document.documentElement.classList.add(className);
    });
}
