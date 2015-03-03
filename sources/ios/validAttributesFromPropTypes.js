__d("validAttributesFromPropTypes",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        var require/*t*/ = {};
        for (var requireDynamic/*n*/ in global/*e*/) {
            var requireLazy/*r*/ = global/*e*/[requireDynamic/*n*/];
            if (requireLazy/*r*/ && requireLazy/*r*/.isNative) {
                var module/*i*/ = requireLazy/*r*/.differ;
                require/*t*/[requireDynamic/*n*/] = module/*i*/ ? {
                    diff: module/*i*/
                } : !0
            }
        }
        return require/*t*/
    }
    module/*i*/.exports = o
});