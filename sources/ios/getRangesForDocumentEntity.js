__d("getRangesForDocumentEntity",["findRanges","invariant"],function (e, t, n, r, i) {
    function o(e, t) {
        var n = [];
        return findRanges/*a*/(e.getEntities(), function(e) {
            return e === t
        }, function(e, t) {
            n.push({
                start: e,
                end: t
            })
        }), n.length || invariant/*s*/(0, "Entity key not found in this range."), n
    }
    var findRanges/*a*/ = t("findRanges"),
        invariant/*s*/ = t("invariant");
    i.exports = o
});