__d("getDocumentEntityRemovalDiffs",["DocumentEntity","ComposedEntityMutability","checkRangeOverlap","fillArray","getRangesForDocumentEntity"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
        var module/*i*/ = DocumentEntity/*s*/.get(require/*t*/),
            o = getRangesForDocumentEntity/*p*/(global/*e*/, require/*t*/),
            ComposedEntityMutability/*l*/ = module/*i*/.getMutability();
        return o = o.filter(function(global/*e*/) {
            return checkRangeOverlap/*u*/(requireDynamic/*n*/, requireLazy/*r*/, global/*e*/.start, global/*e*/.end)
        }), o.map(ComposedEntityMutability/*l*/ === d ? function(require/*t*/) {
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
                entities: fillArray/*c*/(requireLazy/*r*/.length, null),
                start: require/*t*/,
                end: requireDynamic/*n*/
            }
        }
    }
    var DocumentEntity/*s*/ = require/*t*/("DocumentEntity"),
        ComposedEntityMutability/*l*/ = require/*t*/("ComposedEntityMutability"),
        checkRangeOverlap/*u*/ = require/*t*/("checkRangeOverlap"),
        fillArray/*c*/ = require/*t*/("fillArray"),
        getRangesForDocumentEntity/*p*/ = require/*t*/("getRangesForDocumentEntity"),
        d = ComposedEntityMutability/*l*/.MUTABLE;
    module/*i*/.exports = o
});