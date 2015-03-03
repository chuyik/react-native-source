__d("Dlite",["DliteLogger","DliteRouter","DliteRoutingWrapper","GraphQLQueryRunner","GraphQLStore","React","extendArray","forEachObject","mapObject","splitDeferredQueries"],DliteLogger/*function*/ (global/*e*/, require/*exports/*t*/*/, requireDynamic/*DliteRouter/*DliteRoutingWrapper/*GraphQLStore/*n*/*/*/*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    DliteLogger/*function*/ o(global/*e*/, require/*exports/*t*/*/) {
        return f(require/*exports/*t*/*/, DliteLogger/*function*/(require/*exports/*t*/*/, requireDynamic/*DliteRouter/*DliteRoutingWrapper/*GraphQLStore/*n*/*/*/*/) {
            var requireLazy/*r*/ = global/*e*/ + "." + requireDynamic/*DliteRouter/*DliteRoutingWrapper/*GraphQLStore/*n*/*/*/*/;
            return DliteLogger/*function*/() {
                var global/*e*/ = a.logClientEvent(requireLazy/*r*/),
                    requireDynamic/*DliteRouter/*DliteRoutingWrapper/*GraphQLStore/*n*/*/*/*/ = require/*exports/*t*/*/.apply(this, GraphQLQueryRunner/*arguments*/);
                return global/*e*/.stop(), requireDynamic/*DliteRouter/*DliteRoutingWrapper/*GraphQLStore/*n*/*/*/*/
            }
        })
    }
    var a = require/*exports/*t*/*/("DliteLogger"),
        React/*s*/ = require/*exports/*t*/*/("DliteRouter"),
        extendArray/*l*/ = require/*exports/*t*/*/("DliteRoutingWrapper"),
        forEachObject/*u*/ = require/*exports/*t*/*/("GraphQLQueryRunner"),
        mapObject/*c*/ = require/*exports/*t*/*/("GraphQLStore"),
        splitDeferredQueries/*p*/ = require/*exports/*t*/*/("React"),
        d = require/*exports/*t*/*/("extendArray"),
        h = require/*exports/*t*/*/("forEachObject"),
        f = require/*exports/*t*/*/("mapObject"),
        m = require/*exports/*t*/*/("splitDeferredQueries"),
        g = {
            createAndExecuteQueries: DliteLogger/*function*/(global/*e*/, require/*exports/*t*/*/, requireDynamic/*DliteRouter/*DliteRoutingWrapper/*GraphQLStore/*n*/*/*/*/, requireLazy/*r*/) {
                var module/*i*/ = g.createQueries(global/*e*/, require/*exports/*t*/*/);
                return requireDynamic/*DliteRouter/*DliteRoutingWrapper/*GraphQLStore/*n*/*/*/*/.refetch ? forEachObject/*u*/.forceFetch(module/*i*/, requireLazy/*r*/) : forEachObject/*u*/.run(module/*i*/, requireLazy/*r*/)
            },
            createQueries: DliteLogger/*function*/(global/*e*/, require/*exports/*t*/*/) {
                return global/*e*/.getQueriesForRoute(require/*exports/*t*/*/)
            },
            createComponent: DliteLogger/*function*/(global/*e*/, require/*exports/*t*/*/, requireDynamic/*DliteRouter/*DliteRoutingWrapper/*GraphQLStore/*n*/*/*/*/, requireLazy/*r*/) {
                return React/*s*/.addRoute(require/*exports/*t*/*/.constructor), Object.assign(requireDynamic/*DliteRouter/*DliteRoutingWrapper/*GraphQLStore/*n*/*/*/*/, f(g.createQueries(global/*e*/, require/*exports/*t*/*/), DliteLogger/*function*/(global/*e*/) {
                    if (global/*e*/) {
                        var require/*exports/*t*/*/ = mapObject/*c*/.resolvePointersForQuery(global/*e*/),
                            requireDynamic/*DliteRouter/*DliteRoutingWrapper/*GraphQLStore/*n*/*/*/*/ = Object.keys(require/*exports/*t*/*/)[0];
                        return require/*exports/*t*/*/[requireDynamic/*DliteRouter/*DliteRoutingWrapper/*GraphQLStore/*n*/*/*/*/]
                    }
                    return null
                })), splitDeferredQueries/*p*/.createElement(extendArray/*l*/, {
                    childFactory: DliteLogger/*function*/() {
                        return splitDeferredQueries/*p*/.createElement(global/*e*/, Object.assign({}, requireDynamic/*DliteRouter/*DliteRoutingWrapper/*GraphQLStore/*n*/*/*/*/))
                    },
                    onRef: requireLazy/*r*/,
                    route: require/*exports/*t*/*/
                })
            },
            createDeferredQueries: DliteLogger/*function*/(global/*e*/, require/*exports/*t*/*/) {
                var requireDynamic/*DliteRouter/*DliteRoutingWrapper/*GraphQLStore/*n*/*/*/*/ = [];
                return h(global/*e*/.getQueriesForRoute(require/*exports/*t*/*/), DliteLogger/*function*/(global/*e*/) {
                    global/*e*/ && d(requireDynamic/*DliteRouter/*DliteRoutingWrapper/*GraphQLStore/*n*/*/*/*/, m(global/*e*/))
                }), requireDynamic/*DliteRouter/*DliteRoutingWrapper/*GraphQLStore/*n*/*/*/*/
            },
            insertQueryResponses: DliteLogger/*function*/(global/*e*/, require/*exports/*t*/*/) {
                h(global/*e*/, DliteLogger/*function*/(global/*e*/, requireDynamic/*DliteRouter/*DliteRoutingWrapper/*GraphQLStore/*n*/*/*/*/) {
                    mapObject/*c*/.handleUpdate(require/*exports/*t*/*/[requireDynamic/*DliteRouter/*DliteRoutingWrapper/*GraphQLStore/*n*/*/*/*/], global/*e*/)
                })
            }
        };
    module/*i*/.exports = o("Dlite", g)
});