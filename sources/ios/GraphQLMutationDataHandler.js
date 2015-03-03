__d("GraphQLMutationDataHandler",["invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("invariant"),
        exports/*a*/ = {
            getMutationType: function(global/*e*/) {
                return global/*e*/ && 1 === invariant/*Object.keys*/(global/*e*/).length || o(0, "malformed mutation result payload received"), invariant/*Object.keys*/(global/*e*/)[0]
            }
        };
    module/*i*/.exports = exports/*a*/
});