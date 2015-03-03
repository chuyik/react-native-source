__d("DliteDebugger",["GraphQL_EXPERIMENTAL","GraphQLStore","GraphQLStoreDataHandler","filterObject","mapObject"],filterObject/*function*/ (global/*e*/, require/*exports/*t*/*/, requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/, requireLazy/*GraphQLStore/*r*/*/, module/*i*/) {
    "use strict";

    filterObject/*function*/ o(global/*e*/, require/*exports/*t*/*/) {
        var requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/ = global/*e*/.constructor.getQuery(require/*exports/*t*/*/).getQueryFragment(global/*e*/.context.route, global/*e*/.queryParams);
        if (requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/ instanceof d.QueryFragment) {
            var requireLazy/*GraphQLStore/*r*/*/ = f.getID(global/*e*/.props[require/*exports/*t*/*/]);
            requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/ = h.buildFragmentQueryForDataID(requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/, requireLazy/*GraphQLStore/*r*/*/)
        }
        return requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/
    }

    filterObject/*function*/ a(global/*e*/) {
        var require/*exports/*t*/*/ = global/*e*/.constructor,
            requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/ = g(require/*exports/*t*/*/.queries, filterObject/*function*/(require/*exports/*t*/*/, requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/) {
                return global/*e*/.props[requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/]
            });
        return m(requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/, filterObject/*function*/(global/*e*/) {
            return global/*e*/ && Object.keys(global/*e*/).some(filterObject/*function*/(global/*e*/) {
                return !global/*e*/.startsWith("__")
            })
        })
    }

    filterObject/*function*/ s(global/*e*/) {
        var require/*exports/*t*/*/ = a(global/*e*/);
        require/*exports/*t*/*/ && (require/*exports/*t*/*/.component = global/*e*/.constructor.displayName);
        var requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/;
        return global/*e*/._renderedComponent ? requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/ = s(global/*e*/._renderedComponent) : global/*e*/._renderedChildren && (requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/ = Object.keys(global/*e*/._renderedChildren).map(filterObject/*function*/(require/*exports/*t*/*/) {
            return s(global/*e*/._renderedChildren[require/*exports/*t*/*/])
        }).filter(filterObject/*function*/(global/*e*/) {
            return global/*e*/
        })), Array.isArray(requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/) && (1 === requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/.length ? requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/ = requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/[0] : requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/.length || (requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/ = null)), require/*exports/*t*/*/ && requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/ && (require/*exports/*t*/*/.children = requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/), require/*exports/*t*/*/ || requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/
    }

    filterObject/*function*/ l(global/*e*/, require/*exports/*t*/*/) {
        var requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/ = global/*e*/.props[require/*exports/*t*/*/];
        return !!(requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/ && "object" == typeof requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/ && !Array.isArray(requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/) && f.getID(requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/) && global/*e*/.constructor.getQuery && global/*e*/.constructor.getQuery(require/*exports/*t*/*/))
    }

    filterObject/*function*/ u(global/*e*/, require/*exports/*t*/*/) {
        var requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/ = {};
        for (var requireLazy/*GraphQLStore/*r*/*/ in global/*e*/.props) l(global/*e*/, requireLazy/*GraphQLStore/*r*/*/) && (requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/[requireLazy/*GraphQLStore/*r*/*/] = require/*exports/*t*/*/(global/*e*/, requireLazy/*GraphQLStore/*r*/*/));
        return requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/
    }

    filterObject/*function*/ c(global/*e*/, require/*exports/*t*/*/) {
        var requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/ = o(global/*e*/, require/*exports/*t*/*/).getQuery(),
            requireLazy/*GraphQLStore/*r*/*/ = s(global/*e*/),
            module/*i*/ = requireLazy/*GraphQLStore/*r*/*/[require/*exports/*t*/*/];
        console.log(require/*exports/*t*/*/, module/*i*/, _ + encodeURIComponent(requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/))
    }

    filterObject/*function*/ p(global/*e*/, require/*exports/*t*/*/, requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/) {
        Object.defineProperty(global/*e*/, require/*exports/*t*/*/, {
            configurable: !0,
            enumerable: !0,
            get: requireDynamic/*GraphQLStoreDataHandler/*mapObject/*n*/*/*/
        })
    }
    var d = require/*exports/*t*/*/("GraphQL_EXPERIMENTAL"),
        h = require/*exports/*t*/*/("GraphQLStore"),
        f = require/*exports/*t*/*/("GraphQLStoreDataHandler"),
        m = require/*exports/*t*/*/("filterObject"),
        g = require/*exports/*t*/*/("mapObject"),
        _ = "https://our.intern.facebook.com/intern/graphiql?query=",
        y = {
            getQueries: filterObject/*function*/(global/*e*/) {
                return u(global/*e*/, o)
            },
            getProps: filterObject/*function*/(global/*e*/) {
                return s(global/*e*/)
            },
            logProps: filterObject/*function*/(global/*e*/) {
                Object.keys(global/*e*/.props).filter(filterObject/*function*/(require/*exports/*t*/*/) {
                    return l(global/*e*/, require/*exports/*t*/*/)
                }).forEach(filterObject/*function*/(require/*exports/*t*/*/) {
                    return c(global/*e*/, require/*exports/*t*/*/)
                })
            },
            installIntoComponent: filterObject/*function*/(global/*e*/) {
                p(global/*e*/, "debugQueries", filterObject/*function*/() {
                    return g(y.getQueries(global/*e*/), filterObject/*function*/(global/*e*/) {
                        return global/*e*/.getQuery().toString()
                    })
                }), p(global/*e*/, "debugProps", filterObject/*function*/() {
                    return g(y.getProps(global/*e*/), filterObject/*function*/(global/*e*/) {
                        return JSON.stringify(global/*e*/, null, "	")
                    })
                }), p(global/*e*/, "debugConsole", filterObject/*function*/() {
                    return y.logProps(global/*e*/), "Info logged to console..."
                })
            }
        };
    module/*i*/.exports = y
});