__d("getEntityMatcher",["DocumentEntity","findRanges"],function (e, t, n, r, i) {
    function o(e, t) {
        return t = t || DocumentEntity/*a*/.get,
            function(n, r) {
                findRanges/*s*/(n.getEntities(), function(n) {
                    return null !== n && e(t(n))
                }, r)
            }
    }
    var DocumentEntity/*a*/ = t("DocumentEntity"),
        findRanges/*s*/ = t("findRanges");
    i.exports = o
});