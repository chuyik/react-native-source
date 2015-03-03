__d("createDocumentEntityFromGraphQLEntity",["ComposedEntityMutability","ComposedEntityType","DocumentEntity","GraphQLEntityType"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        var require/*t*/ = global/*e*/.__type__.name,
            requireDynamic/*n*/ = require/*t*/ === u.USER ? a.SEGMENTED : require/*t*/ === u.PAGE ? a.IMMUTABLE : a.MUTABLE;
        return l.create(s.MENTION, requireDynamic/*n*/, global/*e*/)
    }
    var a = require/*t*/("ComposedEntityMutability"),
        s = require/*t*/("ComposedEntityType"),
        l = require/*t*/("DocumentEntity"),
        u = require/*t*/("GraphQLEntityType");
    module/*i*/.exports = o
});