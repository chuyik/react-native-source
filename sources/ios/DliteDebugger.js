__d("DliteDebugger",["GraphQL_EXPERIMENTAL","GraphQLStore","GraphQLStoreDataHandler","filterObject","mapObject"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = global/*e*/.constructor.getQuery(require/*t*/).getQueryFragment(global/*e*/.context.route, global/*e*/.queryParams);
        if (requireDynamic/*n*/ instanceof GraphQL_EXPERIMENTAL/*d*/.QueryFragment) {
            var requireLazy/*r*/ = GraphQLStoreDataHandler/*f*/.getID(global/*e*/.props[require/*t*/]);
            requireDynamic/*n*/ = GraphQLStore/*h*/.buildFragmentQueryForDataID(requireDynamic/*n*/, requireLazy/*r*/)
        }
        return requireDynamic/*n*/
    }

    function a(global/*e*/) {
        var require/*t*/ = global/*e*/.constructor,
            requireDynamic/*n*/ = mapObject/*g*/(require/*t*/.queries, function(require/*t*/, requireDynamic/*n*/) {
                return global/*e*/.props[requireDynamic/*n*/]
            });
        return filterObject/*m*/(requireDynamic/*n*/, function(global/*e*/) {
            return global/*e*/ && Object.keys(global/*e*/).some(function(global/*e*/) {
                return !global/*e*/.startsWith("__")
            })
        })
    }

    function s(global/*e*/) {
        var require/*t*/ = a(global/*e*/);
        require/*t*/ && (require/*t*/.component = global/*e*/.constructor.displayName);
        var requireDynamic/*n*/;
        return global/*e*/._renderedComponent ? requireDynamic/*n*/ = s(global/*e*/._renderedComponent) : global/*e*/._renderedChildren && (requireDynamic/*n*/ = Object.keys(global/*e*/._renderedChildren).map(function(require/*t*/) {
            return s(global/*e*/._renderedChildren[require/*t*/])
        }).filter(function(global/*e*/) {
            return global/*e*/
        })), Array.isArray(requireDynamic/*n*/) && (1 === requireDynamic/*n*/.length ? requireDynamic/*n*/ = requireDynamic/*n*/[0] : requireDynamic/*n*/.length || (requireDynamic/*n*/ = null)), require/*t*/ && requireDynamic/*n*/ && (require/*t*/.children = requireDynamic/*n*/), require/*t*/ || requireDynamic/*n*/
    }

    function l(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = global/*e*/.props[require/*t*/];
        return !!(requireDynamic/*n*/ && "object" == typeof requireDynamic/*n*/ && !Array.isArray(requireDynamic/*n*/) && GraphQLStoreDataHandler/*f*/.getID(requireDynamic/*n*/) && global/*e*/.constructor.getQuery && global/*e*/.constructor.getQuery(require/*t*/))
    }

    function u(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = {};
        for (var requireLazy/*r*/ in global/*e*/.props) l(global/*e*/, requireLazy/*r*/) && (requireDynamic/*n*/[requireLazy/*r*/] = require/*t*/(global/*e*/, requireLazy/*r*/));
        return requireDynamic/*n*/
    }

    function c(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = o(global/*e*/, require/*t*/).getQuery(),
            requireLazy/*r*/ = s(global/*e*/),
            module/*i*/ = requireLazy/*r*/[require/*t*/];
        console.log(require/*t*/, module/*i*/, _ + encodeURIComponent(requireDynamic/*n*/))
    }

    function p(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        Object.defineProperty(global/*e*/, require/*t*/, {
            configurable: !0,
            enumerable: !0,
            get: requireDynamic/*n*/
        })
    }
    var GraphQL_EXPERIMENTAL/*d*/ = require/*t*/("GraphQL_EXPERIMENTAL"),
        GraphQLStore/*h*/ = require/*t*/("GraphQLStore"),
        GraphQLStoreDataHandler/*f*/ = require/*t*/("GraphQLStoreDataHandler"),
        filterObject/*m*/ = require/*t*/("filterObject"),
        mapObject/*g*/ = require/*t*/("mapObject"),
        _ = "https://our.intern.facebook.com/intern/graphiql?query=",
        y = {
            getQueries: function(global/*e*/) {
                return u(global/*e*/, o)
            },
            getProps: function(global/*e*/) {
                return s(global/*e*/)
            },
            logProps: function(global/*e*/) {
                Object.keys(global/*e*/.props).filter(function(require/*t*/) {
                    return l(global/*e*/, require/*t*/)
                }).forEach(function(require/*t*/) {
                    return c(global/*e*/, require/*t*/)
                })
            },
            installIntoComponent: function(global/*e*/) {
                p(global/*e*/, "debugQueries", function() {
                    return mapObject/*g*/(y.getQueries(global/*e*/), function(global/*e*/) {
                        return global/*e*/.getQuery().toString()
                    })
                }), p(global/*e*/, "debugProps", function() {
                    return mapObject/*g*/(y.getProps(global/*e*/), function(global/*e*/) {
                        return JSON.stringify(global/*e*/, null, "	")
                    })
                }), p(global/*e*/, "debugConsole", function() {
                    return y.logProps(global/*e*/), "Info logged to console..."
                })
            }
        };
    module/*i*/.exports = y
});