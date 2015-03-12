__d("GraphQLStoreRangeUtils",["GraphQL_EXPERIMENTAL","GraphQLConstants"],function (e, t, n, r, i) {
    var GraphQL_EXPERIMENTAL/*o*/ = t("GraphQL_EXPERIMENTAL"),
        GraphQLConstants/*a*/ = t("GraphQLConstants"),
        s = {},
        l = {
            isRangeClientID: function(e) {
                return !!s[e]
            },
            getClientIDForRangeWithID: function(e, t, n) {
                var r = e.getCalls().map(function(e) {
                        return e.toString(t)
                    }).join(","),
                    i = n + "_" + r,
                    GraphQL_EXPERIMENTAL/*o*/ = s[i];
                return GraphQL_EXPERIMENTAL/*o*/ || (s[i] = {
                    dataID: n,
                    calls: e.getCalls(),
                    callValues: t
                }), i
            },
            parseRangeClientID: function(e) {
                return s[e] || null
            },
            isRangeNode: function(e) {
                if (!(e instanceof GraphQL_EXPERIMENTAL/*o*/.Field && e.isLimitable())) return !1;
                if (e.hasUnaliasedField(GraphQLConstants/*a*/.EDGES) || e.hasUnaliasedField(GraphQLConstants/*a*/.PAGE_INFO)) return !0;
                var t = e.getCalls();
                if (t.length)
                    for (var n = 0; n < t.length; n++)
                        if (t[n].getName() in GraphQLConstants/*a*/.RANGE_CALLS) return !0;
                return !1
            },
            getStorageKeyForField: function(e, t) {
                var n = e.getFieldName(),
                    r = e.getCalls();
                return r.length && (l.isRangeNode(e) && (r = l.getFilterCalls(r)), r.length && (n += "." + r.map(function(e) {
                    return e.toString(t)
                }).join("."))), n
            },
            getFilterCalls: function(e) {
                for (var t = [], n = 0; n < e.length; n++) GraphQLConstants/*a*/.RANGE_CALLS[e[n].getName()] || t.push(e[n]);
                return t
            }
        };
    i.exports = l
});