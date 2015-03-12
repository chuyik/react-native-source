__d("RCTLog",["invariant"],function (e, t, n, r, i) {
    "use strict";

    function o() {}
    var invariant/*a*/ = t("invariant"),
        s = {
            log: "log",
            info: "info",
            warn: "warn",
            error: "error",
            mustfix: "error"
        };
    o.logIfNoNativeHook = function() {
        var e = Array.prototype.slice.call(arguments),
            t = e.shift(),
            n = s[t];
        return n || invariant/*a*/(0, 'Level "' + t + '" not one of ' + Object.keys(s)), "undefined" == typeof nativeLoggingHook && console[n].apply(console, e), !0
    }, i.exports = o
});