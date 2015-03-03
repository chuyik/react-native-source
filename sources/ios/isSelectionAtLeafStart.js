__d("isSelectionAtLeafStart",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = require/*t*/.getStartOffset(),
            requireLazy/*r*/ = global/*e*/.getKey(requireDynamic/*n*/);
        return global/*e*/.getOffset(requireLazy/*r*/) === requireDynamic/*n*/
    }
    module/*i*/.exports = o
});