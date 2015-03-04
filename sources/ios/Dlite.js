__d("Dlite",["DliteLogger","DliteRouter","DliteRoutingWrapper","GraphQLQueryRunner","GraphQLStore","React","extendArray","forEachObject","mapObject","splitDeferredQueries"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        return mapObject/*f*/(require/*t*/, function(require/*t*/, requireDynamic/*n*/) {
            var requireLazy/*r*/ = global/*e*/ + "." + requireDynamic/*n*/;
            return function() {
                var global/*e*/ = DliteLogger/*a*/.logClientEvent(requireLazy/*r*/),
                    requireDynamic/*n*/ = require/*t*/.apply(this, arguments);
                return global/*e*/.stop(), requireDynamic/*n*/
            }
        })
    }
    var DliteLogger/*a*/ = require/*t*/("DliteLogger"),
        DliteRouter/*s*/ = require/*t*/("DliteRouter"),
        DliteRoutingWrapper/*l*/ = require/*t*/("DliteRoutingWrapper"),
        GraphQLQueryRunner/*u*/ = require/*t*/("GraphQLQueryRunner"),
        GraphQLStore/*c*/ = require/*t*/("GraphQLStore"),
        React/*p*/ = require/*t*/("React"),
        extendArray/*d*/ = require/*t*/("extendArray"),
        forEachObject/*h*/ = require/*t*/("forEachObject"),
        mapObject/*f*/ = require/*t*/("mapObject"),
        splitDeferredQueries/*m*/ = require/*t*/("splitDeferredQueries"),
        g = {
            createAndExecuteQueries: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                var module/*i*/ = g.createQueries(global/*e*/, require/*t*/);
                return requireDynamic/*n*/.refetch ? GraphQLQueryRunner/*u*/.forceFetch(module/*i*/, requireLazy/*r*/) : GraphQLQueryRunner/*u*/.run(module/*i*/, requireLazy/*r*/)
            },
            createQueries: function(global/*e*/, require/*t*/) {
                return global/*e*/.getQueriesForRoute(require/*t*/)
            },
            createComponent: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                return DliteRouter/*s*/.addRoute(require/*t*/.constructor), Object.assign(requireDynamic/*n*/, mapObject/*f*/(g.createQueries(global/*e*/, require/*t*/), function(global/*e*/) {
                    if (global/*e*/) {
                        var require/*t*/ = GraphQLStore/*c*/.resolvePointersForQuery(global/*e*/),
                            requireDynamic/*n*/ = Object.keys(require/*t*/)[0];
                        return require/*t*/[requireDynamic/*n*/]
                    }
                    return null
                })), React/*p*/.createElement(DliteRoutingWrapper/*l*/, {
                    childFactory: function() {
                        return React/*p*/.createElement(global/*e*/, Object.assign({}, requireDynamic/*n*/))
                    },
                    onRef: requireLazy/*r*/,
                    route: require/*t*/
                })
            },
            createDeferredQueries: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = [];
                return forEachObject/*h*/(global/*e*/.getQueriesForRoute(require/*t*/), function(global/*e*/) {
                    global/*e*/ && extendArray/*d*/(requireDynamic/*n*/, splitDeferredQueries/*m*/(global/*e*/))
                }), requireDynamic/*n*/
            },
            insertQueryResponses: function(global/*e*/, require/*t*/) {
                forEachObject/*h*/(global/*e*/, function(global/*e*/, requireDynamic/*n*/) {
                    GraphQLStore/*c*/.handleUpdate(require/*t*/[requireDynamic/*n*/], global/*e*/)
                })
            }
        };
    module/*i*/.exports = o("Dlite", g)
});