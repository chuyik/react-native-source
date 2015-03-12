__d("DliteDebugger",["GraphQL_EXPERIMENTAL","GraphQLStore","GraphQLStoreDataHandler","filterObject","mapObject"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        var n = e.constructor.getQuery(t).getQueryFragment(e.context.route, e.queryParams);
        if (n instanceof GraphQL_EXPERIMENTAL/*d*/.QueryFragment) {
            var r = GraphQLStoreDataHandler/*f*/.getID(e.props[t]);
            n = GraphQLStore/*h*/.buildFragmentQueryForDataID(n, r)
        }
        return n
    }

    function a(e) {
        var t = e.constructor,
            n = mapObject/*g*/(t.queries, function(t, n) {
                return e.props[n]
            });
        return filterObject/*m*/(n, function(e) {
            return e && Object.keys(e).some(function(e) {
                return !e.startsWith("__")
            })
        })
    }

    function s(e) {
        var t = a(e);
        t && (t.component = e.constructor.displayName);
        var n;
        return e._renderedComponent ? n = s(e._renderedComponent) : e._renderedChildren && (n = Object.keys(e._renderedChildren).map(function(t) {
            return s(e._renderedChildren[t])
        }).filter(function(e) {
            return e
        })), Array.isArray(n) && (1 === n.length ? n = n[0] : n.length || (n = null)), t && n && (t.children = n), t || n
    }

    function l(e, t) {
        var n = e.props[t];
        return !!(n && "object" == typeof n && !Array.isArray(n) && GraphQLStoreDataHandler/*f*/.getID(n) && e.constructor.getQuery && e.constructor.getQuery(t))
    }

    function u(e, t) {
        var n = {};
        for (var r in e.props) l(e, r) && (n[r] = t(e, r));
        return n
    }

    function c(e, t) {
        var n = o(e, t).getQuery(),
            r = s(e),
            i = r[t];
        console.log(t, i, _ + encodeURIComponent(n))
    }

    function p(e, t, n) {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            get: n
        })
    }
    var GraphQL_EXPERIMENTAL/*d*/ = t("GraphQL_EXPERIMENTAL"),
        GraphQLStore/*h*/ = t("GraphQLStore"),
        GraphQLStoreDataHandler/*f*/ = t("GraphQLStoreDataHandler"),
        filterObject/*m*/ = t("filterObject"),
        mapObject/*g*/ = t("mapObject"),
        _ = "https://our.intern.facebook.com/intern/graphiql?query=",
        y = {
            getQueries: function(e) {
                return u(e, o)
            },
            getProps: function(e) {
                return s(e)
            },
            logProps: function(e) {
                Object.keys(e.props).filter(function(t) {
                    return l(e, t)
                }).forEach(function(t) {
                    return c(e, t)
                })
            },
            installIntoComponent: function(e) {
                p(e, "debugQueries", function() {
                    return mapObject/*g*/(y.getQueries(e), function(e) {
                        return e.getQuery().toString()
                    })
                }), p(e, "debugProps", function() {
                    return mapObject/*g*/(y.getProps(e), function(e) {
                        return JSON.stringify(e, null, "	")
                    })
                }), p(e, "debugConsole", function() {
                    return y.logProps(e), "Info logged to console..."
                })
            }
        };
    i.exports = y
});