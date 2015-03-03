__d("styleDiffer",["deepDiffer"],function (global/*e*/, require/*exports/*deepDiffer/*t*/*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*deepDiffer/*t*/*/*/) {
        return !a(global/*e*/, require/*exports/*deepDiffer/*t*/*/*/)
    }

    function a(global/*e*/, require/*exports/*deepDiffer/*t*/*/*/) {
        if (!global/*e*/) return !require/*exports/*deepDiffer/*t*/*/*/;
        if (!require/*exports/*deepDiffer/*t*/*/*/) return !global/*e*/;
        if (typeof global/*e*/ != typeof require/*exports/*deepDiffer/*t*/*/*/) return !1;
        if ("number" == typeof global/*e*/) return global/*e*/ === require/*exports/*deepDiffer/*t*/*/*/;
        if (Array.isArray(global/*e*/)) {
            if (!Array.isArray(require/*exports/*deepDiffer/*t*/*/*/) || global/*e*/.length !== require/*exports/*deepDiffer/*t*/*/*/.length) return !1;
            for (var requireDynamic/*n*/ = 0; requireDynamic/*n*/ < global/*e*/.length; ++requireDynamic/*n*/)
                if (!a(global/*e*/[requireDynamic/*n*/], require/*exports/*deepDiffer/*t*/*/*/[requireDynamic/*n*/])) return !1;
            return !0
        }
        for (var requireLazy/*r*/ in global/*e*/)
            if (s(global/*e*/[requireLazy/*r*/], require/*exports/*deepDiffer/*t*/*/*/[requireLazy/*r*/])) return !1;
        for (var requireLazy/*r*/ in require/*exports/*deepDiffer/*t*/*/*/)
            if (!global/*e*/.hasOwnProperty(requireLazy/*r*/)) return !1;
        return !0
    }
    var s = require/*exports/*deepDiffer/*t*/*/*/("deepDiffer");
    module/*i*/.exports = o
});