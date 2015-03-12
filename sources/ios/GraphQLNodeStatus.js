__d("GraphQLNodeStatus",["GraphQLStatusConstants","GraphQLStore","GraphQLStoreDataHandler"],function (e, t, n, r, i) {
    "use strict";
    var GraphQLStatusConstants/*o*/ = t("GraphQLStatusConstants"),
        GraphQLStore/*a*/ = t("GraphQLStore"),
        GraphQLStoreDataHandler/*s*/ = t("GraphQLStoreDataHandler"),
        l = {
            isOptimistic: function(e) {
                return GraphQLStore/*a*/.isQueuedNodeID(GraphQLStoreDataHandler/*s*/.getID(e))
            },
            hasError: function(e) {
                var t = e.__status__;
                return t == GraphQLStatusConstants/*o*/.ERROR
            }
        };
    i.exports = l
});