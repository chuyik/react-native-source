__d("DiffQueryBuilder",["DliteLog","GraphQL_EXPERIMENTAL","GraphQLConstants","GraphQLRangeTracker","GraphQLStoreDataHandler","GraphQLStoreRangeUtils"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        this.$DiffQueryBuilder_store = e, this.$DiffQueryBuilder_queryTracker = t, this.$DiffQueryBuilder_rootFragments = null
    }
    var DliteLog/*a*/ = t("DliteLog"),
        GraphQL_EXPERIMENTAL/*s*/ = t("GraphQL_EXPERIMENTAL"),
        GraphQLConstants/*l*/ = t("GraphQLConstants"),
        GraphQLRangeTracker/*u*/ = t("GraphQLRangeTracker"),
        GraphQLStoreDataHandler/*c*/ = t("GraphQLStoreDataHandler"),
        GraphQLStoreRangeUtils/*p*/ = t("GraphQLStoreRangeUtils"),
        d = [],
        h = new GraphQL_EXPERIMENTAL/*s*/.QueryFragment("DiffQueryFragment", "UnknownConnection", [new GraphQL_EXPERIMENTAL/*s*/.Field("edges", [new GraphQL_EXPERIMENTAL/*s*/.Field("node", [new GraphQL_EXPERIMENTAL/*s*/.Field("id")])])]);
    o.prototype.getDiffQueries = function(e, t) {
        var n = e.getQuery(),
            r = n.rootCall().getName(),
            i = [];
        for (var o in t) {
            var DliteLog/*a*/ = t[o],
                GraphQLConstants/*l*/ = this.$DiffQueryBuilder_diffNode(n, DliteLog/*a*/),
                GraphQLRangeTracker/*u*/ = GraphQLConstants/*l*/.nodes;
            null === GraphQLRangeTracker/*u*/ && (GraphQLRangeTracker/*u*/ = [n]);
            for (var GraphQLStoreDataHandler/*c*/ = 0; GraphQLStoreDataHandler/*c*/ < GraphQLRangeTracker/*u*/.length; GraphQLStoreDataHandler/*c*/++) {
                var GraphQLStoreRangeUtils/*p*/ = GraphQLRangeTracker/*u*/[GraphQLStoreDataHandler/*c*/].getFragments(),
                    d = GraphQLRangeTracker/*u*/[GraphQLStoreDataHandler/*c*/].getOwnFields(),
                    h = null;
                h = 1 === GraphQLStoreRangeUtils/*p*/.length && 0 === d.length ? GraphQLStoreRangeUtils/*p*/[0].getName() : GraphQLRangeTracker/*u*/[GraphQLStoreDataHandler/*c*/].getQueryName(), h = "diff_" + h, i.push(new GraphQL_EXPERIMENTAL/*s*/.QueryWithValues(new GraphQL_EXPERIMENTAL/*s*/.Query(r, "viewer" === r ? null : [o], d, GraphQLStoreRangeUtils/*p*/, null, h)))
            }
        }
        if (this.$DiffQueryBuilder_rootFragments)
            for (var f in this.$DiffQueryBuilder_rootFragments) i.push(new GraphQL_EXPERIMENTAL/*s*/.QueryWithValues(new GraphQL_EXPERIMENTAL/*s*/.Query("node", [f], null, this.$DiffQueryBuilder_rootFragments[f])));
        return this.$DiffQueryBuilder_rootFragments = null, i
    }, o.prototype.$DiffQueryBuilder_diffNode = function(e, t, n) {
        var r = null,
            i = null,
            o = !1,
            GraphQLStoreRangeUtils/*p*/ = null,
            f = null,
            m = null,
            g = null,
            _ = null,
            y = e.getOwnFields(),
            v = e.getFragments(),
            S = this.$DiffQueryBuilder_store[t];
        if (!S) return {
            nodes: null === S ? [] : [e],
            trackedField: m
        };
        for (var b = this.$DiffQueryBuilder_getRangeInfo(e, S), R = b.diffCalls, w = b.filterCalls, C = b.requestedEdges, E = 0; E < y.length; E++) {
            var D = null,
                T = null,
                x = y[E],
                P = x.getFieldName();
            if ("node" === P && n) D = d;
            else if ("edges" === P) {
                if (C) {
                    var I, F, L = x.getOwnField("node"),
                        M = x.getEdgesID();
                    !M && e instanceof GraphQL_EXPERIMENTAL/*s*/.Field && DliteLog/*a*/.warn("DiffQueryBuilder: `%GraphQL_EXPERIMENTAL/*s*/`'GraphQL_EXPERIMENTAL/*s*/ `edges` fields does not have an `EdgesID`", e.getFieldName());
                    for (var Q = C.length > GraphQLRangeTracker/*u*/.THRESHOLD, A = 0; A < C.length; A++) {
                        var k = C[A],
                            O = k.__dataID__;
                        if (!M || !GraphQLRangeTracker/*u*/.hasEdge(x, O)) {
                            var N = k.node.__dataID__;
                            if (!GraphQLStoreDataHandler/*c*/.isClientID(N)) {
                                if (e.isFindable()) {
                                    var G = this.$DiffQueryBuilder_diffNode(x, O, !0),
                                        $ = G.nodes,
                                        B = G.trackedField;
                                    $ || ($ = [x]), $.length && (r = r || [], r.push(e.shallowClone($, [h], w.concat(new GraphQL_EXPERIMENTAL/*s*/.Call("find", N))))), B && (F = F || [], F.push(new GraphQL_EXPERIMENTAL/*s*/.QueryFragment("DiffQueryBuilderTrackedQuery", "UnknownConnectionEdge", B.getOwnFields(), B.getFragments())))
                                }
                                var H = this.$DiffQueryBuilder_getFragmentForNewQuery(L, N);
                                H && (I = I || [], I.push(H)), M && Q && GraphQLRangeTracker/*u*/.trackEdge(x, O, t)
                            }
                        }
                    }(I || F) && (T = x.shallowClone(I ? [L.shallowClone(null, I)] : null, F))
                }
                D = R ? null : d
            } else if ("page_info" === P) D = R ? null : d;
            else {
                var V = this.$DiffQueryBuilder_diffField(x, S);
                D = V.fields, T = V.trackedField
            }
            "id" === P && (o = !!D, i = x, D = null), (GraphQLStoreRangeUtils/*p*/ || D) && (GraphQLStoreRangeUtils/*p*/ = GraphQLStoreRangeUtils/*p*/ || y.slice(0, E), null === D ? GraphQLStoreRangeUtils/*p*/.push(x) : D.length > 0 && GraphQLStoreRangeUtils/*p*/.push.apply(GraphQLStoreRangeUtils/*p*/, D)), T && (g = g || [], g.push(T))
        }
        for (var q = 0; q < v.length; q++) {
            var U = v[q],
                j = this.$DiffQueryBuilder_diffNode(U, t),
                W = j.nodes,
                K = j.trackedField;
            (f || W) && (f = f || v.slice(0, q), null === W ? f.push(U) : W.length > 0 && f.push.apply(f, W)), K && (_ = _ || [], _.push(K))
        }
        return GraphQLStoreRangeUtils/*p*/ = GraphQLStoreRangeUtils/*p*/ || y, f = f || v, 0 === f.length && (0 === GraphQLStoreRangeUtils/*p*/.length || o && 1 === GraphQLStoreRangeUtils/*p*/.length && GraphQLStoreRangeUtils/*p*/[0] === i) ? r = r || [] : GraphQLStoreRangeUtils/*p*/ === y && f === v ? R ? (r = r || [], r.push(e.shallowClone(y, v, R))) : r && r.push(e) : (r = r || [], r.push(R ? e.shallowClone(GraphQLStoreRangeUtils/*p*/, f, R) : e.shallowClone(GraphQLStoreRangeUtils/*p*/, f))), (g || _) && (m = e.shallowClone(g, _), e instanceof GraphQL_EXPERIMENTAL/*s*/.QueryFragment || t !== GraphQLConstants/*l*/.VIEWER_CLIENT_ID && GraphQLStoreDataHandler/*c*/.isClientID(t) || this.$DiffQueryBuilder_queryTracker.addQueryForID(t, m)), {
            nodes: r,
            trackedField: m
        }
    }, o.prototype.$DiffQueryBuilder_diffField = function(e, t) {
        var n, r, i = GraphQLStoreRangeUtils/*p*/.getStorageKeyForField(e, {}),
            o = t[i];
        if (void 0 === o) n = null;
        else if (e.isPlural())
            if (null === o || 0 === o.length) n = d;
            else if (e.hasFields())
            if ("node" === e.getInferredRootCallName()) n = d, r = this.$DiffQueryBuilder_getFragmentsForNewQuery(e, o);
            else {
                var DliteLog/*a*/ = o[0].__dataID__;
                if (DliteLog/*a*/ && DliteLog/*a*/ in this.$DiffQueryBuilder_store) {
                    var GraphQL_EXPERIMENTAL/*s*/ = this.$DiffQueryBuilder_diffNode(e, DliteLog/*a*/);
                    n = GraphQL_EXPERIMENTAL/*s*/.nodes, r = GraphQL_EXPERIMENTAL/*s*/.trackedField
                }
            } else n = d;
        else if (null !== o && e.hasFields()) {
            var GraphQLConstants/*l*/ = this.$DiffQueryBuilder_diffNode(e, o.__dataID__);
            n = GraphQLConstants/*l*/.nodes, r = GraphQLConstants/*l*/.trackedField
        } else n = d;
        return {
            fields: n,
            trackedField: r
        }
    }, o.prototype.$DiffQueryBuilder_getFragmentsForNewQuery = function(e, t) {
        for (var n = null, r = 0; r < t.length; r++) {
            var i = t[r].__dataID__,
                o = this.$DiffQueryBuilder_getFragmentForNewQuery(e, i);
            o && (n = n || [], n.push(o))
        }
        return n ? e.shallowClone(null, n) : null
    }, o.prototype.$DiffQueryBuilder_getFragmentForNewQuery = function(e, t) {
        var n = this.$DiffQueryBuilder_diffNode(e, t),
            r = n.nodes,
            i = n.trackedField;
        null === r && (r = [e]);
        for (var o, DliteLog/*a*/ = 0; DliteLog/*a*/ < r.length; DliteLog/*a*/++) o = new GraphQL_EXPERIMENTAL/*s*/.QueryFragment("DiffQueryBuilder", "Node", r[DliteLog/*a*/].getOwnFields(), r[DliteLog/*a*/].getFragments()), this.$DiffQueryBuilder_rootFragments = this.$DiffQueryBuilder_rootFragments || {}, this.$DiffQueryBuilder_rootFragments[t] = this.$DiffQueryBuilder_rootFragments[t] || [], this.$DiffQueryBuilder_rootFragments[t].push(o);
        if (i || o) {
            var GraphQLConstants/*l*/;
            return GraphQLConstants/*l*/ = i && o ? i.getFragments().concat(o) : i ? i.getFragments() : [o], new GraphQL_EXPERIMENTAL/*s*/.QueryFragment("DiffQueryBuilderTrackedQuery", "Node", i ? i.getOwnFields() : null, GraphQLConstants/*l*/)
        }
        return null
    }, o.prototype.$DiffQueryBuilder_getRangeInfo = function(e, t) {
        var n, r, i;
        if (GraphQLStoreRangeUtils/*p*/.isRangeNode(e)) {
            var o = e.getCalls();
            if (t.__range__) {
                var DliteLog/*a*/ = t.__range__.retrieveRangeInfoForQuery(o, {});
                i = t.__filterCalls__ || [], DliteLog/*a*/.diffCalls && DliteLog/*a*/.diffCalls.length && (n = i.concat(DliteLog/*a*/.diffCalls)), r = DliteLog/*a*/.requestedEdges
            } else o && o.length && (n = o)
        }
        return {
            diffCalls: n,
            filterCalls: i,
            requestedEdges: r
        }
    }, i.exports = o
});