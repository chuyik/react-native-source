__d("GraphQLNodeStatus",["GraphQLStatusConstants","GraphQLStore","GraphQLStoreDataHandler"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var GraphQLStatusConstants/*o*/ = require/*t*/("GraphQLStatusConstants"),
        GraphQLStore/*a*/ = require/*t*/("GraphQLStore"),
        GraphQLStoreDataHandler/*s*/ = require/*t*/("GraphQLStoreDataHandler"),
        l = {
            isOptimistic: function(global/*e*/) {
                return GraphQLStore/*a*/.isQueuedNodeID(GraphQLStoreDataHandler/*s*/.getID(global/*e*/))
            },
            hasError: function(global/*e*/) {
                var require/*t*/ = global/*e*/.__status__;
                return require/*t*/ == GraphQLStatusConstants/*o*/.ERROR
            }
        };
    module/*i*/.exports = l
});