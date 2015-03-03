__d("createDocumentEntityFromGraphQLEntity",["ComposedEntityMutability","ComposedEntityType","DocumentEntity","GraphQLEntityType"],function (global/*ComposedEntityType/*e*/*/, require/*t*/, requireDynamic/*exports/*ComposedEntityMutability/*n*/*/*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*ComposedEntityType/*e*/*/) {
        var require/*t*/ = global/*ComposedEntityType/*e*/*/.__type__.name,
            requireDynamic/*exports/*ComposedEntityMutability/*n*/*/*/ = require/*t*/ === u.USER ? a.SEGMENTED : require/*t*/ === u.PAGE ? a.IMMUTABLE : a.MUTABLE;
        return GraphQLEntityType/*l*/.create(DocumentEntity/*s*/.MENTION, requireDynamic/*exports/*ComposedEntityMutability/*n*/*/*/, global/*ComposedEntityType/*e*/*/)
    }
    var a = require/*t*/("ComposedEntityMutability"),
        DocumentEntity/*s*/ = require/*t*/("ComposedEntityType"),
        GraphQLEntityType/*l*/ = require/*t*/("DocumentEntity"),
        u = require/*t*/("GraphQLEntityType");
    module/*i*/.exports = o
});