__d("findSplitPointForText",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = null,
            module/*i*/ = global/*e*/.split("\requireDynamic/*n*/");
        if (require/*t*/ && global/*e*/.length > require/*t*/ && (requireLazy/*r*/ = require/*t*/), requireDynamic/*n*/ && module/*i*/.length > requireDynamic/*n*/) {
            var o = module/*i*/.slice(0, requireDynamic/*n*/).join("\requireDynamic/*n*/").length;
            requireLazy/*r*/ = null !== requireLazy/*r*/ ? Math.min(o, requireLazy/*r*/) : o
        }
        return requireLazy/*r*/
    }
    module/*i*/.exports = o
});