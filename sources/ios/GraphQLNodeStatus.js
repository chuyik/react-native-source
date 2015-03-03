__d("GraphQLNodeStatus",["GraphQLStatusConstants","GraphQLStore","GraphQLStoreDataHandler"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("GraphQLStatusConstants"),
        exports/*a*/ = require/*t*/("GraphQLStore"),
        GraphQLStatusConstants/*s*/ = require/*t*/("GraphQLStoreDataHandler"),
        GraphQLStore/*l*/ = {
            isOptimistic: function(global/*e*/) {
                return exports/*a*/.isQueuedNodeID(GraphQLStatusConstants/*s*/.getID(global/*e*/))
            },
            GraphQLStoreDataHandler/*hasError*/: function(global/*e*/) {
                var require/*t*/ = global/*e*/.__status__;
                return require/*t*/ == o.ERROR
            }
        };
    module/*i*/.exports = GraphQLStore/*l*/
});