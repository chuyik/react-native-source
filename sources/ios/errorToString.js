__d("errorToString",["Platform","stacktrace-parser/index"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        var t = e.file.split("/"),
            n = t[t.length - 1];
        return e.methodName + "\n  in " + n + ":" + e.lineNumber + "\n"
    }

    function a(e, t) {
        try {
            var n = e.originalPositionFor({
                line: t.lineNumber,
                column: t.column
            });
            n && (t.file = n.source, t.lineNumber = n.line, t.column = n.column)
        } catch (r) {}
    }

    function s(e, t) {
        for (var n = u.parse(e.stack), r = e.framesToPop || 0; r--;) n.shift();
        return t && n.forEach(a.bind(null, t)), "android" === Platform/*l*/.OS ? n.map(o).join("\n") : n
    }
    var Platform/*l*/ = t("Platform"),
        u = t("stacktrace-parser/index");
    i.exports = s
});