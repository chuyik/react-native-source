__d("getCharacterRemovalRange",["DocumentEntity","ComposedEntityMutability","DocumentEntitySegments","DocumentRemovalDirection","UnicodeUtils","checkRangeOverlap","getRangesForDocumentEntity","invariant"],function (e, t, n, r, i) {
    function o(e, t, n) {
        var r = e.getText(),
            i = t - (n === f ? 1 : 0),
            o = r.charCodeAt(i),
            ComposedEntityMutability/*s*/ = i,
            DocumentRemovalDirection/*u*/ = i + 1;
        if (UnicodeUtils/*c*/.isCodeUnitInSurrogateRange(o)) {
            var _;
            n === f ? (ComposedEntityMutability/*s*/--, _ = r.charCodeAt(ComposedEntityMutability/*s*/)) : (DocumentRemovalDirection/*u*/++, _ = r.charCodeAt(DocumentRemovalDirection/*u*/)), UnicodeUtils/*c*/.isCodeUnitInSurrogateRange(_) || invariant/*h*/(0, "Cursor position cannot be between two units of DocumentEntity/*a*/ surrogate pair via normal browser interaction.")
        }
        var y = e.getEntities()[ComposedEntityMutability/*s*/];
        if (!y) return {
            start: ComposedEntityMutability/*s*/,
            end: DocumentRemovalDirection/*u*/
        };
        var v = DocumentEntity/*a*/.get(y),
            S = v.getMutability();
        if (S === m) return {
            start: ComposedEntityMutability/*s*/,
            end: DocumentRemovalDirection/*u*/
        };
        var b = getRangesForDocumentEntity/*d*/(e, y).filter(function(e) {
            return checkRangeOverlap/*p*/(ComposedEntityMutability/*s*/, DocumentRemovalDirection/*u*/, e.start, e.end)
        });
        1 != b.length && invariant/*h*/(0, "There should only be one entity range within this removal range.");
        var R = b[0];
        return S === g ? R : DocumentEntitySegments/*l*/.getRemovalRange(ComposedEntityMutability/*s*/, DocumentRemovalDirection/*u*/, e.getText().slice(R.start, R.end), R.start, n)
    }
    var DocumentEntity/*a*/ = t("DocumentEntity"),
        ComposedEntityMutability/*s*/ = t("ComposedEntityMutability"),
        DocumentEntitySegments/*l*/ = t("DocumentEntitySegments"),
        DocumentRemovalDirection/*u*/ = t("DocumentRemovalDirection"),
        UnicodeUtils/*c*/ = t("UnicodeUtils"),
        checkRangeOverlap/*p*/ = t("checkRangeOverlap"),
        getRangesForDocumentEntity/*d*/ = t("getRangesForDocumentEntity"),
        invariant/*h*/ = t("invariant"),
        f = DocumentRemovalDirection/*u*/.BACKWARD,
        m = ComposedEntityMutability/*s*/.MUTABLE,
        g = ComposedEntityMutability/*s*/.IMMUTABLE;
    i.exports = o
});