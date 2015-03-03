__d("getDocumentEntityRemovalDiffs",["DocumentEntity","ComposedEntityMutability","checkRangeOverlap","fillArray","getRangesForDocumentEntity"],function (global/*e*/, require/*exports/*fillArray/*t*/*/*/, requireDynamic/*DocumentEntity/*n*/*/, requireLazy/*ComposedEntityMutability/*r*/*/, module/*i*/) {
    function checkRangeOverlap/*o*/(global/*e*/, require/*exports/*fillArray/*t*/*/*/, requireDynamic/*DocumentEntity/*n*/*/, requireLazy/*ComposedEntityMutability/*r*/*/) {
        var module/*i*/ = s.get(require/*exports/*fillArray/*t*/*/*/),
            checkRangeOverlap/*o*/ = p(global/*e*/, require/*exports/*fillArray/*t*/*/*/),
            getRangesForDocumentEntity/*l*/ = module/*i*/.getMutability();
        return checkRangeOverlap/*o*/ = checkRangeOverlap/*o*/.filter(function(global/*e*/) {
            return u(requireDynamic/*DocumentEntity/*n*/*/, requireLazy/*ComposedEntityMutability/*r*/*/, global/*e*/.start, global/*e*/.end)
        }), checkRangeOverlap/*o*/.map(getRangesForDocumentEntity/*l*/ === d ? function(require/*exports/*fillArray/*t*/*/*/) {
            return a(global/*e*/, Math.max(require/*exports/*fillArray/*t*/*/*/.start, requireDynamic/*DocumentEntity/*n*/*/), Math.min(require/*exports/*fillArray/*t*/*/*/.end, requireLazy/*ComposedEntityMutability/*r*/*/))
        } : function(require/*exports/*fillArray/*t*/*/*/) {
            return a(global/*e*/, require/*exports/*fillArray/*t*/*/*/.start, require/*exports/*fillArray/*t*/*/*/.end)
        })
    }

    function a(global/*e*/, require/*exports/*fillArray/*t*/*/*/, requireDynamic/*DocumentEntity/*n*/*/) {
        var requireLazy/*ComposedEntityMutability/*r*/*/ = global/*e*/.getEntities().slice(require/*exports/*fillArray/*t*/*/*/, requireDynamic/*DocumentEntity/*n*/*/);
        return {
            from: {
                entities: requireLazy/*ComposedEntityMutability/*r*/*/,
                start: require/*exports/*fillArray/*t*/*/*/,
                end: requireDynamic/*DocumentEntity/*n*/*/
            },
            to: {
                entities: c(requireLazy/*ComposedEntityMutability/*r*/*/.length, null),
                start: require/*exports/*fillArray/*t*/*/*/,
                end: requireDynamic/*DocumentEntity/*n*/*/
            }
        }
    }
    var s = require/*exports/*fillArray/*t*/*/*/("DocumentEntity"),
        getRangesForDocumentEntity/*l*/ = require/*exports/*fillArray/*t*/*/*/("ComposedEntityMutability"),
        u = require/*exports/*fillArray/*t*/*/*/("checkRangeOverlap"),
        c = require/*exports/*fillArray/*t*/*/*/("fillArray"),
        p = require/*exports/*fillArray/*t*/*/*/("getRangesForDocumentEntity"),
        d = getRangesForDocumentEntity/*l*/.MUTABLE;
    module/*i*/.exports = checkRangeOverlap/*o*/
});