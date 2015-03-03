__d("findSplitPointForText",[],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = null,
            module/*i*/ = global/*e*/.split("\requireDynamic/*n*/");
        if (require/*exports/*t*/*/ && global/*e*/.length > require/*exports/*t*/*/ && (requireLazy/*r*/ = require/*exports/*t*/*/), requireDynamic/*n*/ && module/*i*/.length > requireDynamic/*n*/) {
            var o = module/*i*/.slice(0, requireDynamic/*n*/).join("\requireDynamic/*n*/").length;
            requireLazy/*r*/ = null !== requireLazy/*r*/ ? Math.min(o, requireLazy/*r*/) : o
        }
        return requireLazy/*r*/
    }
    module/*i*/.exports = o
});