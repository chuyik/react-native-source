__d("createDocumentFromTextWithEntities",["DocumentContent","DocumentModifier","createDocumentEntityFromGraphQLEntity","emptyFunction"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        if (!e || !e.text) return new DocumentContent/*a*/;
        var t = new DocumentContent/*a*/(e.text);
        if (!e.ranges) return t;
        for (var n = 0; n < e.ranges.length; n++) {
            var r = e.ranges[n];
            if (r.entity) {
                var i = r.offset,
                    o = createDocumentEntityFromGraphQLEntity/*l*/(r.entity);
                DocumentModifier/*s*/.applyEntity(t, o, i, i + r.length, emptyFunction/*u*/)
            } else console.warn("Range:\n", r, "Missing entity in TextWithEntities:\n", e)
        }
        return t
    }
    var DocumentContent/*a*/ = t("DocumentContent"),
        DocumentModifier/*s*/ = t("DocumentModifier"),
        createDocumentEntityFromGraphQLEntity/*l*/ = t("createDocumentEntityFromGraphQLEntity"),
        emptyFunction/*u*/ = t("emptyFunction");
    i.exports = o
});