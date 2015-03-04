__d("createDocumentFromTextWithEntities",["DocumentContent","DocumentModifier","createDocumentEntityFromGraphQLEntity","emptyFunction"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        if (!global/*e*/ || !global/*e*/.text) return new DocumentContent/*a*/;
        var require/*t*/ = new DocumentContent/*a*/(global/*e*/.text);
        if (!global/*e*/.ranges) return require/*t*/;
        for (var requireDynamic/*n*/ = 0; requireDynamic/*n*/ < global/*e*/.ranges.length; requireDynamic/*n*/++) {
            var requireLazy/*r*/ = global/*e*/.ranges[requireDynamic/*n*/];
            if (requireLazy/*r*/.entity) {
                var module/*i*/ = requireLazy/*r*/.offset,
                    o = createDocumentEntityFromGraphQLEntity/*l*/(requireLazy/*r*/.entity);
                DocumentModifier/*s*/.applyEntity(require/*t*/, o, module/*i*/, module/*i*/ + requireLazy/*r*/.length, emptyFunction/*u*/)
            } else console.warn("Range:\requireDynamic/*n*/", requireLazy/*r*/, "Missing entity in TextWithEntities:\requireDynamic/*n*/", global/*e*/)
        }
        return require/*t*/
    }
    var DocumentContent/*a*/ = require/*t*/("DocumentContent"),
        DocumentModifier/*s*/ = require/*t*/("DocumentModifier"),
        createDocumentEntityFromGraphQLEntity/*l*/ = require/*t*/("createDocumentEntityFromGraphQLEntity"),
        emptyFunction/*u*/ = require/*t*/("emptyFunction");
    module/*i*/.exports = o
});