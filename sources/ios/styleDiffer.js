__d("styleDiffer",["deepDiffer"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        return !a(global/*e*/, require/*t*/)
    }

    function a(global/*e*/, require/*t*/) {
        if (!global/*e*/) return !require/*t*/;
        if (!require/*t*/) return !global/*e*/;
        if (typeof global/*e*/ != typeof require/*t*/) return !1;
        if ("number" == typeof global/*e*/) return global/*e*/ === require/*t*/;
        if (Array.isArray(global/*e*/)) {
            if (!Array.isArray(require/*t*/) || global/*e*/.length !== require/*t*/.length) return !1;
            for (var requireDynamic/*n*/ = 0; requireDynamic/*n*/ < global/*e*/.length; ++requireDynamic/*n*/)
                if (!a(global/*e*/[requireDynamic/*n*/], require/*t*/[requireDynamic/*n*/])) return !1;
            return !0
        }
        for (var requireLazy/*r*/ in global/*e*/)
            if (s(global/*e*/[requireLazy/*r*/], require/*t*/[requireLazy/*r*/])) return !1;
        for (var requireLazy/*r*/ in require/*t*/)
            if (!global/*e*/.hasOwnProperty(requireLazy/*r*/)) return !1;
        return !0
    }
    var s = require/*t*/("deepDiffer");
    module/*i*/.exports = o
});