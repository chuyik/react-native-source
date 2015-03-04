__d("createDocumentEntityFromGraphQLEntity",["ComposedEntityMutability","ComposedEntityType","DocumentEntity","GraphQLEntityType"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        var require/*t*/ = global/*e*/.__type__.name,
            requireDynamic/*n*/ = require/*t*/ === GraphQLEntityType/*u*/.USER ? ComposedEntityMutability/*a*/.SEGMENTED : require/*t*/ === GraphQLEntityType/*u*/.PAGE ? ComposedEntityMutability/*a*/.IMMUTABLE : ComposedEntityMutability/*a*/.MUTABLE;
        return DocumentEntity/*l*/.create(ComposedEntityType/*s*/.MENTION, requireDynamic/*n*/, global/*e*/)
    }
    var ComposedEntityMutability/*a*/ = require/*t*/("ComposedEntityMutability"),
        ComposedEntityType/*s*/ = require/*t*/("ComposedEntityType"),
        DocumentEntity/*l*/ = require/*t*/("DocumentEntity"),
        GraphQLEntityType/*u*/ = require/*t*/("GraphQLEntityType");
    module/*i*/.exports = o
});