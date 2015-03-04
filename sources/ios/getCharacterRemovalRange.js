__d("getCharacterRemovalRange",["DocumentEntity","ComposedEntityMutability","DocumentEntitySegments","DocumentRemovalDirection","UnicodeUtils","checkRangeOverlap","getRangesForDocumentEntity","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = global/*e*/.getText(),
            module/*i*/ = require/*t*/ - (requireDynamic/*n*/ === f ? 1 : 0),
            o = requireLazy/*r*/.charCodeAt(module/*i*/),
            ComposedEntityMutability/*s*/ = module/*i*/,
            DocumentRemovalDirection/*u*/ = module/*i*/ + 1;
        if (UnicodeUtils/*c*/.isCodeUnitInSurrogateRange(o)) {
            var _;
            requireDynamic/*n*/ === f ? (ComposedEntityMutability/*s*/--, _ = requireLazy/*r*/.charCodeAt(ComposedEntityMutability/*s*/)) : (DocumentRemovalDirection/*u*/++, _ = requireLazy/*r*/.charCodeAt(DocumentRemovalDirection/*u*/)), UnicodeUtils/*c*/.isCodeUnitInSurrogateRange(_) || invariant/*h*/(0, "Cursor position cannot be between two units of DocumentEntity/*a*/ surrogate pair via normal browser interaction.")
        }
        var y = global/*e*/.getEntities()[ComposedEntityMutability/*s*/];
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
        var b = getRangesForDocumentEntity/*d*/(global/*e*/, y).filter(function(global/*e*/) {
            return checkRangeOverlap/*p*/(ComposedEntityMutability/*s*/, DocumentRemovalDirection/*u*/, global/*e*/.start, global/*e*/.end)
        });
        1 != b.length && invariant/*h*/(0, "There should only be one entity range within this removal range.");
        var R = b[0];
        return S === g ? R : DocumentEntitySegments/*l*/.getRemovalRange(ComposedEntityMutability/*s*/, DocumentRemovalDirection/*u*/, global/*e*/.getText().slice(R.start, R.end), R.start, requireDynamic/*n*/)
    }
    var DocumentEntity/*a*/ = require/*t*/("DocumentEntity"),
        ComposedEntityMutability/*s*/ = require/*t*/("ComposedEntityMutability"),
        DocumentEntitySegments/*l*/ = require/*t*/("DocumentEntitySegments"),
        DocumentRemovalDirection/*u*/ = require/*t*/("DocumentRemovalDirection"),
        UnicodeUtils/*c*/ = require/*t*/("UnicodeUtils"),
        checkRangeOverlap/*p*/ = require/*t*/("checkRangeOverlap"),
        getRangesForDocumentEntity/*d*/ = require/*t*/("getRangesForDocumentEntity"),
        invariant/*h*/ = require/*t*/("invariant"),
        f = DocumentRemovalDirection/*u*/.BACKWARD,
        m = ComposedEntityMutability/*s*/.MUTABLE,
        g = ComposedEntityMutability/*s*/.IMMUTABLE;
    module/*i*/.exports = o
});