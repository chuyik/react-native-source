__d("RCTLog",["invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {}
    var invariant/*a*/ = require/*t*/("invariant"),
        s = {
            log: "log",
            info: "info",
            warn: "warn",
            error: "error",
            mustfix: "error"
        };
    o.logIfNoNativeHook = function() {
        var global/*e*/ = Array.prototype.slice.call(arguments),
            require/*t*/ = global/*e*/.shift(),
            requireDynamic/*n*/ = s[require/*t*/];
        return requireDynamic/*n*/ || invariant/*a*/(0, 'Level "' + require/*t*/ + '" not one of ' + Object.keys(s)), "undefined" == typeof nativeLoggingHook && console[requireDynamic/*n*/].apply(console, global/*e*/), !0
    }, module/*i*/.exports = o
});