__d("createDocumentEntityFromGraphQLEntity",["ComposedEntityMutability","ComposedEntityType","DocumentEntity","GraphQLEntityType"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        var t = e.__type__.name,
            n = t === GraphQLEntityType/*u*/.USER ? ComposedEntityMutability/*a*/.SEGMENTED : t === GraphQLEntityType/*u*/.PAGE ? ComposedEntityMutability/*a*/.IMMUTABLE : ComposedEntityMutability/*a*/.MUTABLE;
        return DocumentEntity/*l*/.create(ComposedEntityType/*s*/.MENTION, n, e)
    }
    var ComposedEntityMutability/*a*/ = t("ComposedEntityMutability"),
        ComposedEntityType/*s*/ = t("ComposedEntityType"),
        DocumentEntity/*l*/ = t("DocumentEntity"),
        GraphQLEntityType/*u*/ = t("GraphQLEntityType");
    i.exports = o
});