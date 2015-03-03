__d("getEntityMatcher",["DocumentEntity","findRanges"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        return require/*t*/ = require/*t*/ || a.get,
            function(requireDynamic/*n*/, requireLazy/*r*/) {
                s(requireDynamic/*n*/.getEntities(), function(requireDynamic/*n*/) {
                    return null !== requireDynamic/*n*/ && global/*e*/(require/*t*/(requireDynamic/*n*/))
                }, requireLazy/*r*/)
            }
    }
    var a = require/*t*/("DocumentEntity"),
        s = require/*t*/("findRanges");
    module/*i*/.exports = o
});