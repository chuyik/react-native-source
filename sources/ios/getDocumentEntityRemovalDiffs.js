__d("getDocumentEntityRemovalDiffs",["DocumentEntity","ComposedEntityMutability","checkRangeOverlap","fillArray","getRangesForDocumentEntity"],function (e, t, n, r, i) {
    function o(e, t, n, r) {
        var i = DocumentEntity/*s*/.get(t),
            o = getRangesForDocumentEntity/*p*/(e, t),
            ComposedEntityMutability/*l*/ = i.getMutability();
        return o = o.filter(function(e) {
            return checkRangeOverlap/*u*/(n, r, e.start, e.end)
        }), o.map(ComposedEntityMutability/*l*/ === d ? function(t) {
            return a(e, Math.max(t.start, n), Math.min(t.end, r))
        } : function(t) {
            return a(e, t.start, t.end)
        })
    }

    function a(e, t, n) {
        var r = e.getEntities().slice(t, n);
        return {
            from: {
                entities: r,
                start: t,
                end: n
            },
            to: {
                entities: fillArray/*c*/(r.length, null),
                start: t,
                end: n
            }
        }
    }
    var DocumentEntity/*s*/ = t("DocumentEntity"),
        ComposedEntityMutability/*l*/ = t("ComposedEntityMutability"),
        checkRangeOverlap/*u*/ = t("checkRangeOverlap"),
        fillArray/*c*/ = t("fillArray"),
        getRangesForDocumentEntity/*p*/ = t("getRangesForDocumentEntity"),
        d = ComposedEntityMutability/*l*/.MUTABLE;
    i.exports = o
});