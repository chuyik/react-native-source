__d("getRangesForDocumentEntity",["findRanges","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = [];
        return a(global/*e*/.getEntities(), function(global/*e*/) {
            return global/*e*/ === require/*t*/
        }, function(global/*e*/, require/*t*/) {
            requireDynamic/*n*/.push({
                start: global/*e*/,
                end: require/*t*/
            })
        }), requireDynamic/*n*/.length || s(0, "Entity key not found in this range."), requireDynamic/*n*/
    }
    var a = require/*t*/("findRanges"),
        s = require/*t*/("invariant");
    module/*i*/.exports = o
});