__d("deepDiffer",[],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = function(global/*e*/, require/*exports/*t*/*/) {
        if (global/*e*/ === require/*exports/*t*/*/) return !1;
        if ("function" == typeof global/*e*/ && "function" == typeof require/*exports/*t*/*/) return !1;
        if ("object" != typeof global/*e*/ || null === global/*e*/) return global/*e*/ !== require/*exports/*t*/*/;
        if ("object" != typeof require/*exports/*t*/*/ || null === require/*exports/*t*/*/) return !0;
        if (global/*e*/.constructor !== require/*exports/*t*/*/.constructor) return !0;
        for (var requireDynamic/*n*/ in global/*e*/)
            if (o(global/*e*/[requireDynamic/*n*/], require/*exports/*t*/*/[requireDynamic/*n*/])) return !0;
        for (var requireLazy/*r*/ in require/*exports/*t*/*/)
            if (void 0 === global/*e*/[requireLazy/*r*/]) return !0;
        return !1
    };
    module/*i*/.exports = o
});