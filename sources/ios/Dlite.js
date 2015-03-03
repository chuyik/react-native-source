__d("Dlite",["DliteLogger","DliteRouter","DliteRoutingWrapper","GraphQLQueryRunner","GraphQLStore","React","extendArray","forEachObject","mapObject","splitDeferredQueries"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        return f(require/*t*/, function(require/*t*/, requireDynamic/*n*/) {
            var requireLazy/*r*/ = global/*e*/ + "." + requireDynamic/*n*/;
            return function() {
                var global/*e*/ = a.logClientEvent(requireLazy/*r*/),
                    requireDynamic/*n*/ = require/*t*/.apply(this, arguments);
                return global/*e*/.stop(), requireDynamic/*n*/
            }
        })
    }
    var a = require/*t*/("DliteLogger"),
        s = require/*t*/("DliteRouter"),
        l = require/*t*/("DliteRoutingWrapper"),
        u = require/*t*/("GraphQLQueryRunner"),
        c = require/*t*/("GraphQLStore"),
        p = require/*t*/("React"),
        d = require/*t*/("extendArray"),
        h = require/*t*/("forEachObject"),
        f = require/*t*/("mapObject"),
        m = require/*t*/("splitDeferredQueries"),
        g = {
            createAndExecuteQueries: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                var module/*i*/ = g.createQueries(global/*e*/, require/*t*/);
                return requireDynamic/*n*/.refetch ? u.forceFetch(module/*i*/, requireLazy/*r*/) : u.run(module/*i*/, requireLazy/*r*/)
            },
            createQueries: function(global/*e*/, require/*t*/) {
                return global/*e*/.getQueriesForRoute(require/*t*/)
            },
            createComponent: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                return s.addRoute(require/*t*/.constructor), Object.assign(requireDynamic/*n*/, f(g.createQueries(global/*e*/, require/*t*/), function(global/*e*/) {
                    if (global/*e*/) {
                        var require/*t*/ = c.resolvePointersForQuery(global/*e*/),
                            requireDynamic/*n*/ = Object.keys(require/*t*/)[0];
                        return require/*t*/[requireDynamic/*n*/]
                    }
                    return null
                })), p.createElement(l, {
                    childFactory: function() {
                        return p.createElement(global/*e*/, Object.assign({}, requireDynamic/*n*/))
                    },
                    onRef: requireLazy/*r*/,
                    route: require/*t*/
                })
            },
            createDeferredQueries: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = [];
                return h(global/*e*/.getQueriesForRoute(require/*t*/), function(global/*e*/) {
                    global/*e*/ && d(requireDynamic/*n*/, m(global/*e*/))
                }), requireDynamic/*n*/
            },
            insertQueryResponses: function(global/*e*/, require/*t*/) {
                h(global/*e*/, function(global/*e*/, requireDynamic/*n*/) {
                    c.handleUpdate(require/*t*/[requireDynamic/*n*/], global/*e*/)
                })
            }
        };
    module/*i*/.exports = o("Dlite", g)
});