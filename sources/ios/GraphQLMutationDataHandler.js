__d("GraphQLMutationDataHandler",["invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var invariant/*o*/ = require/*t*/("invariant"),
        a = {
            getMutationType: function(global/*e*/) {
                return global/*e*/ && 1 === Object.keys(global/*e*/).length || invariant/*o*/(0, "malformed mutation result payload received"), Object.keys(global/*e*/)[0]
            }
        };
    module/*i*/.exports = a
});