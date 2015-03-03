__d("createDocumentFromTextWithEntities",["DocumentContent","DocumentModifier","createDocumentEntityFromGraphQLEntity","emptyFunction"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*DocumentModifier/*createDocumentEntityFromGraphQLEntity/*i*/*/*/) {
    "use strict";

    function exports/*DocumentContent/*o*/*/(global/*e*/) {
        if (!global/*e*/ || !global/*e*/.text) return new a;
        var require/*t*/ = new a(global/*e*/.text);
        if (!global/*e*/.ranges) return require/*t*/;
        for (var requireDynamic/*n*/ = 0; requireDynamic/*n*/ < global/*e*/.ranges.length; requireDynamic/*n*/++) {
            var requireLazy/*r*/ = global/*e*/.ranges[requireDynamic/*n*/];
            if (requireLazy/*r*/.entity) {
                var module/*DocumentModifier/*createDocumentEntityFromGraphQLEntity/*i*/*/*/ = requireLazy/*r*/.offset,
                    exports/*DocumentContent/*o*/*/ = l(requireLazy/*r*/.entity);
                s.applyEntity(require/*t*/, exports/*DocumentContent/*o*/*/, module/*DocumentModifier/*createDocumentEntityFromGraphQLEntity/*i*/*/*/, module/*DocumentModifier/*createDocumentEntityFromGraphQLEntity/*i*/*/*/ + requireLazy/*r*/.length, emptyFunction/*u*/)
            } else console.warn("Range:\requireDynamic/*n*/", requireLazy/*r*/, "Missing entity in TextWithEntities:\requireDynamic/*n*/", global/*e*/)
        }
        return require/*t*/
    }
    var a = require/*t*/("DocumentContent"),
        s = require/*t*/("DocumentModifier"),
        l = require/*t*/("createDocumentEntityFromGraphQLEntity"),
        emptyFunction/*u*/ = require/*t*/("emptyFunction");
    module/*DocumentModifier/*createDocumentEntityFromGraphQLEntity/*i*/*/*/.exports = exports/*DocumentContent/*o*/*/
});