__d("requestAnimationFrame",["emptyFunction","nativeRequestAnimationFrame"],function (e, t, n, r, i) {
    var emptyFunction/*o*/ = t("emptyFunction"),
        nativeRequestAnimationFrame/*a*/ = t("nativeRequestAnimationFrame"),
        s = 0,
        l = nativeRequestAnimationFrame/*a*/ || function(t) {
            var n = Date.now(),
                r = Math.max(0, 16 - (n - s));
            return s = n + r, e.setTimeout(function() {
                t(Date.now())
            }, r)
        };
    l(emptyFunction/*o*/), i.exports = l
});