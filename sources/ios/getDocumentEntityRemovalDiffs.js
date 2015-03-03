__d("getDocumentEntityRemovalDiffs",["DocumentEntity","ComposedEntityMutability","checkRangeOverlap","fillArray","getRangesForDocumentEntity"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
        var module/*i*/ = s.get(require/*t*/),
            o = p(global/*e*/, require/*t*/),
            l = module/*i*/.getMutability();
        return o = o.filter(function(global/*e*/) {
            return u(requireDynamic/*n*/, requireLazy/*r*/, global/*e*/.start, global/*e*/.end)
        }), o.map(l === d ? function(require/*t*/) {
            return a(global/*e*/, Math.max(require/*t*/.start, requireDynamic/*n*/), Math.min(require/*t*/.end, requireLazy/*r*/))
        } : function(require/*t*/) {
            return a(global/*e*/, require/*t*/.start, require/*t*/.end)
        })
    }

    function a(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = global/*e*/.getEntities().slice(require/*t*/, requireDynamic/*n*/);
        return {
            from: {
                entities: requireLazy/*r*/,
                start: require/*t*/,
                end: requireDynamic/*n*/
            },
            to: {
                entities: c(requireLazy/*r*/.length, null),
                start: require/*t*/,
                end: requireDynamic/*n*/
            }
        }
    }
    var s = require/*t*/("DocumentEntity"),
        l = require/*t*/("ComposedEntityMutability"),
        u = require/*t*/("checkRangeOverlap"),
        c = require/*t*/("fillArray"),
        p = require/*t*/("getRangesForDocumentEntity"),
        d = l.MUTABLE;
    module/*i*/.exports = o
});