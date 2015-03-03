__d("getCharacterRemovalRange",["DocumentEntity","ComposedEntityMutability","DocumentEntitySegments","DocumentRemovalDirection","UnicodeUtils","checkRangeOverlap","getRangesForDocumentEntity","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = global/*e*/.getText(),
            module/*i*/ = require/*t*/ - (requireDynamic/*n*/ === f ? 1 : 0),
            o = requireLazy/*r*/.charCodeAt(module/*i*/),
            s = module/*i*/,
            u = module/*i*/ + 1;
        if (c.isCodeUnitInSurrogateRange(o)) {
            var _;
            requireDynamic/*n*/ === f ? (s--, _ = requireLazy/*r*/.charCodeAt(s)) : (u++, _ = requireLazy/*r*/.charCodeAt(u)), c.isCodeUnitInSurrogateRange(_) || h(0, "Cursor position cannot be between two units of a surrogate pair via normal browser interaction.")
        }
        var y = global/*e*/.getEntities()[s];
        if (!y) return {
            start: s,
            end: u
        };
        var v = a.get(y),
            S = v.getMutability();
        if (S === m) return {
            start: s,
            end: u
        };
        var b = d(global/*e*/, y).filter(function(global/*e*/) {
            return p(s, u, global/*e*/.start, global/*e*/.end)
        });
        1 != b.length && h(0, "There should only be one entity range within this removal range.");
        var R = b[0];
        return S === g ? R : l.getRemovalRange(s, u, global/*e*/.getText().slice(R.start, R.end), R.start, requireDynamic/*n*/)
    }
    var a = require/*t*/("DocumentEntity"),
        s = require/*t*/("ComposedEntityMutability"),
        l = require/*t*/("DocumentEntitySegments"),
        u = require/*t*/("DocumentRemovalDirection"),
        c = require/*t*/("UnicodeUtils"),
        p = require/*t*/("checkRangeOverlap"),
        d = require/*t*/("getRangesForDocumentEntity"),
        h = require/*t*/("invariant"),
        f = u.BACKWARD,
        m = s.MUTABLE,
        g = s.IMMUTABLE;
    module/*i*/.exports = o
});