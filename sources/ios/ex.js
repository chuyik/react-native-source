__d("ex",["eprintf"],function (e, t, n, r, i) {
    var eprintf/*o*/ = t("eprintf"),
        a = function() {
            for (var e = [], t = 0, n = arguments.length; n > t; t++) e.push(arguments[t]);
            return e = e.map(function(e) {
                return String(e)
            }), e[0].split("%s").length !== e.length ? a("ex args number mismatch: %s", JSON.stringify(e)) : __DEV__ ? eprintf/*o*/.apply(null, e) : a._prefix + JSON.stringify(e) + a._suffix
        };
    a._prefix = "<![EX[", a._suffix = "]]>", i.exports = a
});