__d("GraphQLMutationQueryCreator",["DliteLog","GraphQL_EXPERIMENTAL","GraphQLConstants","GraphQLMutationProperties","GraphQLStore","GraphQLStoreDataHandler","invariant","isEmpty"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t, n) {
        if (t = f(t), !l(t)) return e;
        for (var r = [], i = e.getOwnFields(), s = 0; s < i.length; s++) {
            var u = a(i[s], t, n);
            u && r.push(u)
        }
        for (var c = [], p = e.getFragments(), d = 0; d < p.length; d++) c.push(o(p[d], t, n));
        return e.shallowClone(r, c)
    }

    function a(e, t, n) {
        var r = e.getFieldName();
        if ("id" === r) return e;
        var i = t.getOwnField(r);
        if (!i) return null;
        if (l(i)) {
            var a = o(e, i, n);
            return a.hasFields() ? a : null
        }
        return e.isConnection() ? n && n(e) ? u(e) : e : e
    }

    function s(e) {
        return !e.isGenerated()
    }

    function l(e) {
        return e.getOwnFields().some(s)
    }

    function u(e) {
        for (var t = null, n = null, r = e.getOwnFields(), i = 0; i < r.length; i++) {
            var o = r[i],
                a = o.getFieldName(),
                s = a === GraphQLConstants/*_*/.EDGES || a === GraphQLConstants/*_*/.PAGE_INFO;
            s || (t = t || [], t.push(o))
        }
        for (var l = e.getFragments(), c = 0; c < l.length; c++) {
            var p = u(l[c]);
            p && (n = n || [], n.push(p))
        }
        return t || n ? e.shallowClone(t, n) : null
    }

    function c(e) {
        var t = e.getOwnFields().filter(function(e) {
                return e.getFieldName() !== GraphQLConstants/*_*/.NODE && e.getFieldName() !== GraphQLConstants/*_*/.CURSOR
            }),
            n = e.getFragments().map(c);
        return new GraphQL_EXPERIMENTAL/*g*/.QueryFragment("MutationQueryCreatorEdge", "UnknownType", t, n)
    }

    function p(e) {
        return Array.isArray(e)
    }

    function d(e) {
        var t, n = [];
        for (var r in e)
            if (!GraphQLStoreDataHandler/*S*/.isMetadataKey(r)) {
                if (t = null, "object" == typeof e[r])
                    if (Array.isArray(e[r]))
                        if (isEmpty/*R*/(e[r])) t = [];
                        else {
                            var i = e[r][0];
                            t = "object" == typeof i ? d(i) : []
                        } else t = d(e[r]);
                "node" === r && (t.push(new GraphQL_EXPERIMENTAL/*g*/.Field("id")), n.push(new GraphQL_EXPERIMENTAL/*g*/.Field("cursor")));
                var o = h(r, t);
                n.push(o)
            }
        return n
    }

    function h(e, t) {
        var n = e.indexOf(".");
        if (-1 === n) return new GraphQL_EXPERIMENTAL/*g*/.Field(e, t);
        for (var r = [], i = e.substring(n + 1), o = e.substring(0, n), a = i.split("."), s = 0; s < a.length; s++) {
            var l = a[s],
                u = l.match(/^(\w+)\(([^()]*)\)$/);
            u || invariant/*b*/(0, "Malformed field name %s provided in optimistic payload", e), r.push(new GraphQL_EXPERIMENTAL/*g*/.Callv(u[1], u[2].split(",")))
        }
        return new GraphQL_EXPERIMENTAL/*g*/.Field(o, t, null, r)
    }

    function f(e) {
        return 0 !== e.getFragments().length && invariant/*b*/(0, "Fat queries do not support fragments yet"), e
    }
    var DliteLog/*m*/ = t("DliteLog"),
        GraphQL_EXPERIMENTAL/*g*/ = t("GraphQL_EXPERIMENTAL"),
        GraphQLConstants/*_*/ = t("GraphQLConstants"),
        GraphQLMutationProperties/*y*/ = t("GraphQLMutationProperties"),
        GraphQLStore/*v*/ = t("GraphQLStore"),
        GraphQLStoreDataHandler/*S*/ = t("GraphQLStoreDataHandler"),
        invariant/*b*/ = t("invariant"),
        isEmpty/*R*/ = t("isEmpty"),
        w = {
            createQuery: function(e, t) {
                var n = f(GraphQLMutationProperties/*y*/.getFatQueryForType(e)),
                    r = [];
                for (var i in t)
                    if (t.hasOwnProperty(i)) {
                        n.hasOwnField(i) || invariant/*b*/(0, "Anything in the idMap for createQuery should be part of the relevant mutation's fat query.");
                        var a = n.getOwnField(i),
                            s = t[i],
                            l = GraphQLStore/*v*/.getTrackedQueryByID(s),
                            u = new GraphQL_EXPERIMENTAL/*g*/.Field(i, l.getOwnFields(), l.getFragments());
                        r.push(o(u, a))
                    }
                return new GraphQL_EXPERIMENTAL/*g*/.QueryFragment("MutationQuery", n.type(), r)
            },
            createRangeDeleteQuery: function(e, t, n, r) {
                var i = f(GraphQLMutationProperties/*y*/.getFatQueryForType(e));
                i.hasOwnField(n) || invariant/*b*/(0, "The fatQuery must include the range field for a delete mutation");
                var a = GraphQLStore/*v*/.getTrackedQueryByID(t),
                    s = new GraphQL_EXPERIMENTAL/*g*/.Field(n, a.getOwnFields(), a.getFragments()),
                    l = function(e) {
                        return e.getFieldName() === r
                    },
                    u = o(s, i.getOwnField(n), l);
                return new GraphQL_EXPERIMENTAL/*g*/.QueryFragment("MutationQuery", i.type(), [u])
            },
            createRangeAddQuery: function(e, t, n, r, i) {
                var a = f(GraphQLMutationProperties/*y*/.getFatQueryForType(e)),
                    s = GraphQLMutationProperties/*y*/.getRangeConfigForType(e),
                    l = GraphQLStore/*v*/.getTrackedQueryByID(r),
                    u = new GraphQL_EXPERIMENTAL/*g*/.Field(i ? i : "range_parent_field", l.getOwnFields(), l.getFragments()),
                    p = u.getUnaliasedFields(t),
                    d = r === GraphQLConstants/*_*/.VIEWER_CLIENT_ID ? [E] : [C];
                if (0 === p.length) return DliteLog/*m*/.warn("Did not find range as a child of the parent field"), d.push(D), new GraphQL_EXPERIMENTAL/*g*/.QueryFragment("MutationQuery", a.type(), [new GraphQL_EXPERIMENTAL/*g*/.Field(n, null, d)]);
                for (var h = [], GraphQLStoreDataHandler/*S*/ = [], invariant/*b*/ = {}, isEmpty/*R*/ = 0; isEmpty/*R*/ < p.length; isEmpty/*R*/++) {
                    var w = p[isEmpty/*R*/],
                        T = w.getUnaliasedFields(GraphQLConstants/*_*/.EDGES);
                    if (T.length) {
                        var x = w.getCalls().filter(function(e) {
                            return !GraphQLConstants/*_*/.RANGE_CALLS[e.getName()]
                        });
                        if (x.join(".") in s)
                            for (var P = 0; P < T.length; P++) {
                                for (var I = T[P], F = I.getUnaliasedFields(GraphQLConstants/*_*/.NODE), L = 0; L < F.length; L++) GraphQLStoreDataHandler/*S*/.push(new GraphQL_EXPERIMENTAL/*g*/.QueryFragment("MutationQueryCreatorEdge", "UnknownType", [F[L]]));
                                d.push(c(I))
                            } else invariant/*b*/[w.getGeneratedAlias()] = !0
                    }
                }
                GraphQLStoreDataHandler/*S*/.length ? h.push(new GraphQL_EXPERIMENTAL/*g*/.Field(n, null, GraphQLStoreDataHandler/*S*/.concat(d))) : __DEV__ && console.warn("Did you forget to update GraphQLMutationProperties.rangeConfigs for your mutation %s? No edge field could be added to the query.", e);
                var M = function(e) {
                    return !(e.getGeneratedAlias() in invariant/*b*/)
                };
                if (i && a.hasOwnField(i)) {
                    var Q = o(u, a.getOwnField(i), M);
                    Q.hasFields() && h.push(Q)
                }
                return new GraphQL_EXPERIMENTAL/*g*/.QueryFragment("MutationQuery", a.type(), h)
            },
            createQueryFromOptimisticPayload: function(e) {
                e && 1 === Object.keys(e).length || invariant/*b*/(0, "malformed optimistic payload received");
                var t = Object.keys(e)[0],
                    n = f(GraphQLMutationProperties/*y*/.getFatQueryForType(t)),
                    r = e[t];
                return new GraphQL_EXPERIMENTAL/*g*/.Mutation("OptimisticQuery", n.type(), new GraphQL_EXPERIMENTAL/*g*/.Call(t), d(p(r) ? r[0] : r))
            }
        },
        C = new GraphQL_EXPERIMENTAL/*g*/.QueryFragment("MutationQueryCreatorEdgeMetadata", "UnknownType", [new GraphQL_EXPERIMENTAL/*g*/.Field("cursor"), new GraphQL_EXPERIMENTAL/*g*/.Field("source", [new GraphQL_EXPERIMENTAL/*g*/.Field("id")])]),
        E = new GraphQL_EXPERIMENTAL/*g*/.QueryFragment("MutationQueryCreatorEdgeMetadata", "UnknownType", [new GraphQL_EXPERIMENTAL/*g*/.Field("cursor")]),
        D = new GraphQL_EXPERIMENTAL/*g*/.QueryFragment("MutationQueryCreatorEdgeMetadata", "UnknownType", [new GraphQL_EXPERIMENTAL/*g*/.Field("node", [new GraphQL_EXPERIMENTAL/*g*/.Field("id")])]);
    i.exports = w
});