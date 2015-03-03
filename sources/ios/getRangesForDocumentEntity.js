__d("getRangesForDocumentEntity",["findRanges","invariant"],findRanges/*invariant/*function*/*/ (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    findRanges/*invariant/*function*/*/ o(global/*e*/, require/*exports/*t*/*/) {
        var requireDynamic/*n*/ = [];
        return a(global/*e*/.getEntities(), findRanges/*invariant/*function*/*/(global/*e*/) {
            return global/*e*/ === require/*exports/*t*/*/
        }, findRanges/*invariant/*function*/*/(global/*e*/, require/*exports/*t*/*/) {
            requireDynamic/*n*/.push({
                start: global/*e*/,
                end: require/*exports/*t*/*/
            })
        }), requireDynamic/*n*/.length || s(0, "Entity key not found in this range."), requireDynamic/*n*/
    }
    var a = require/*exports/*t*/*/("findRanges"),
        s = require/*exports/*t*/*/("invariant");
    module/*i*/.exports = o
});