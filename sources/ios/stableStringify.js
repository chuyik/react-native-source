__d("stableStringify",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        return null !== global/*e*/ && "[object Object]" === Object.prototype.toString.call(global/*e*/)
    }

    function a(global/*e*/) {
        var require/*t*/ = Object.keys(global/*e*/);
        if (require/*t*/.length) {
            var requireDynamic/*n*/ = [];
            require/*t*/.sort();
            for (var requireLazy/*r*/ = 0; requireLazy/*r*/ < require/*t*/.length; requireLazy/*r*/++) {
                var module/*i*/ = require/*t*/[requireLazy/*r*/],
                    exports/*s*/ = global/*e*/[module/*i*/];
                exports/*s*/ = o(exports/*s*/) || Array.isArray(exports/*s*/) ? a(exports/*s*/) : JSON.stringify(exports/*s*/), requireDynamic/*n*/.push(module/*i*/ + ":" + exports/*s*/)
            }
            return Array.isArray(global/*e*/) ? "[" + requireDynamic/*n*/.join(",") + "]" : "{" + requireDynamic/*n*/.join(",") + "}"
        }
        return JSON.stringify(global/*e*/)
    }
    module/*i*/.exports = a
});