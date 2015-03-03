__d("getCharacterRemovalRange",["DocumentEntity","ComposedEntityMutability","DocumentEntitySegments","DocumentRemovalDirection","UnicodeUtils","checkRangeOverlap","getRangesForDocumentEntity","invariant"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*DocumentEntity/*n*/*/, requireLazy/*r*/, module/*ComposedEntityMutability/*i*/*/) {
    function DocumentEntitySegments/*o*/(global/*e*/, require/*exports/*t*/*/, requireDynamic/*DocumentEntity/*n*/*/) {
        var requireLazy/*r*/ = global/*e*/.getText(),
            module/*ComposedEntityMutability/*i*/*/ = require/*exports/*t*/*/ - (requireDynamic/*DocumentEntity/*n*/*/ === f ? 1 : 0),
            DocumentEntitySegments/*o*/ = requireLazy/*r*/.charCodeAt(module/*ComposedEntityMutability/*i*/*/),
            DocumentRemovalDirection/*s*/ = module/*ComposedEntityMutability/*i*/*/,
            UnicodeUtils/*u*/ = module/*ComposedEntityMutability/*i*/*/ + 1;
        if (invariant/*c.isCodeUnitInSurrogateRange*/(DocumentEntitySegments/*o*/)) {
            var checkRangeOverlap/*getRangesForDocumentEntity/*_*/*/;
            requireDynamic/*DocumentEntity/*n*/*/ === f ? (DocumentRemovalDirection/*s*/--, checkRangeOverlap/*getRangesForDocumentEntity/*_*/*/ = requireLazy/*r*/.charCodeAt(DocumentRemovalDirection/*s*/)) : (UnicodeUtils/*u*/++, checkRangeOverlap/*getRangesForDocumentEntity/*_*/*/ = requireLazy/*r*/.charCodeAt(UnicodeUtils/*u*/)), invariant/*c.isCodeUnitInSurrogateRange*/(checkRangeOverlap/*getRangesForDocumentEntity/*_*/*/) || h(0, "Cursor position cannot be between two units of a surrogate pair via normal browser interaction.")
        }
        var y = global/*e*/.getEntities()[DocumentRemovalDirection/*s*/];
        if (!y) return {
            start: DocumentRemovalDirection/*s*/,
            end: UnicodeUtils/*u*/
        };
        var v = a.get(y),
            S = v.getMutability();
        if (S === m) return {
            start: DocumentRemovalDirection/*s*/,
            end: UnicodeUtils/*u*/
        };
        var b = d(global/*e*/, y).filter(function(global/*e*/) {
            return p(DocumentRemovalDirection/*s*/, UnicodeUtils/*u*/, global/*e*/.start, global/*e*/.end)
        });
        1 != b.length && h(0, "There should only be one entity range within this removal range.");
        var R = b[0];
        return S === g ? R : l.getRemovalRange(DocumentRemovalDirection/*s*/, UnicodeUtils/*u*/, global/*e*/.getText().slice(R.start, R.end), R.start, requireDynamic/*DocumentEntity/*n*/*/)
    }
    var a = require/*exports/*t*/*/("DocumentEntity"),
        DocumentRemovalDirection/*s*/ = require/*exports/*t*/*/("ComposedEntityMutability"),
        l = require/*exports/*t*/*/("DocumentEntitySegments"),
        UnicodeUtils/*u*/ = require/*exports/*t*/*/("DocumentRemovalDirection"),
        c = require/*exports/*t*/*/("UnicodeUtils"),
        p = require/*exports/*t*/*/("checkRangeOverlap"),
        d = require/*exports/*t*/*/("getRangesForDocumentEntity"),
        h = require/*exports/*t*/*/("invariant"),
        f = UnicodeUtils/*u*/.BACKWARD,
        m = DocumentRemovalDirection/*s*/.MUTABLE,
        g = DocumentRemovalDirection/*s*/.IMMUTABLE;
    module/*ComposedEntityMutability/*i*/*/.exports = DocumentEntitySegments/*o*/
});