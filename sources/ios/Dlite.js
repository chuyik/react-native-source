__d("Dlite",["DliteLogger","DliteRouter","DliteRoutingWrapper","GraphQLQueryRunner","GraphQLStore","React","extendArray","forEachObject","mapObject","splitDeferredQueries"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        return mapObject/*f*/(t, function(t, n) {
            var r = e + "." + n;
            return function() {
                var e = DliteLogger/*a*/.logClientEvent(r),
                    n = t.apply(this, arguments);
                return e.stop(), n
            }
        })
    }
    var DliteLogger/*a*/ = t("DliteLogger"),
        DliteRouter/*s*/ = t("DliteRouter"),
        DliteRoutingWrapper/*l*/ = t("DliteRoutingWrapper"),
        GraphQLQueryRunner/*u*/ = t("GraphQLQueryRunner"),
        GraphQLStore/*c*/ = t("GraphQLStore"),
        React/*p*/ = t("React"),
        extendArray/*d*/ = t("extendArray"),
        forEachObject/*h*/ = t("forEachObject"),
        mapObject/*f*/ = t("mapObject"),
        splitDeferredQueries/*m*/ = t("splitDeferredQueries"),
        g = {
            createAndExecuteQueries: function(e, t, n, r) {
                var i = g.createQueries(e, t);
                return n.refetch ? GraphQLQueryRunner/*u*/.forceFetch(i, r) : GraphQLQueryRunner/*u*/.run(i, r)
            },
            createQueries: function(e, t) {
                return e.getQueriesForRoute(t)
            },
            createComponent: function(e, t, n, r) {
                return DliteRouter/*s*/.addRoute(t.constructor), Object.assign(n, mapObject/*f*/(g.createQueries(e, t), function(e) {
                    if (e) {
                        var t = GraphQLStore/*c*/.resolvePointersForQuery(e),
                            n = Object.keys(t)[0];
                        return t[n]
                    }
                    return null
                })), React/*p*/.createElement(DliteRoutingWrapper/*l*/, {
                    childFactory: function() {
                        return React/*p*/.createElement(e, Object.assign({}, n))
                    },
                    onRef: r,
                    route: t
                })
            },
            createDeferredQueries: function(e, t) {
                var n = [];
                return forEachObject/*h*/(e.getQueriesForRoute(t), function(e) {
                    e && extendArray/*d*/(n, splitDeferredQueries/*m*/(e))
                }), n
            },
            insertQueryResponses: function(e, t) {
                forEachObject/*h*/(e, function(e, n) {
                    GraphQLStore/*c*/.handleUpdate(t[n], e)
                })
            }
        };
    i.exports = o("Dlite", g)
});