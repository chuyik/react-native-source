__d("GraphQLNodeStatus",["GraphQLStatusConstants","GraphQLStore","GraphQLStoreDataHandler"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("GraphQLStatusConstants"),
        a = require/*t*/("GraphQLStore"),
        s = require/*t*/("GraphQLStoreDataHandler"),
        l = {
            isOptimistic: function(global/*e*/) {
                return a.isQueuedNodeID(s.getID(global/*e*/))
            },
            hasError: function(global/*e*/) {
                var require/*t*/ = global/*e*/.__status__;
                return require/*t*/ == o.ERROR
            }
        };
    module/*i*/.exports = l
});