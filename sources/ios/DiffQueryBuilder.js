__d("DiffQueryBuilder",["DliteLog","GraphQL_EXPERIMENTAL","GraphQLConstants","GraphQLRangeTracker","GraphQLStoreDataHandler","GraphQLStoreRangeUtils"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        this.$DiffQueryBuilder_store = global/*e*/, this.$DiffQueryBuilder_queryTracker = require/*t*/, this.$DiffQueryBuilder_rootFragments = null
    }
    var DliteLog/*a*/ = require/*t*/("DliteLog"),
        GraphQL_EXPERIMENTAL/*s*/ = require/*t*/("GraphQL_EXPERIMENTAL"),
        GraphQLConstants/*l*/ = require/*t*/("GraphQLConstants"),
        GraphQLRangeTracker/*u*/ = require/*t*/("GraphQLRangeTracker"),
        GraphQLStoreDataHandler/*c*/ = require/*t*/("GraphQLStoreDataHandler"),
        GraphQLStoreRangeUtils/*p*/ = require/*t*/("GraphQLStoreRangeUtils"),
        d = [],
        h = new GraphQL_EXPERIMENTAL/*s*/.QueryFragment("DiffQueryFragment", "UnknownConnection", [new GraphQL_EXPERIMENTAL/*s*/.Field("edges", [new GraphQL_EXPERIMENTAL/*s*/.Field("node", [new GraphQL_EXPERIMENTAL/*s*/.Field("id")])])]);
    o.prototype.getDiffQueries = function(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = global/*e*/.getQuery(),
            requireLazy/*r*/ = requireDynamic/*n*/.rootCall().getName(),
            module/*i*/ = [];
        for (var o in require/*t*/) {
            var DliteLog/*a*/ = require/*t*/[o],
                GraphQLConstants/*l*/ = this.$DiffQueryBuilder_diffNode(requireDynamic/*n*/, DliteLog/*a*/),
                GraphQLRangeTracker/*u*/ = GraphQLConstants/*l*/.nodes;
            null === GraphQLRangeTracker/*u*/ && (GraphQLRangeTracker/*u*/ = [requireDynamic/*n*/]);
            for (var GraphQLStoreDataHandler/*c*/ = 0; GraphQLStoreDataHandler/*c*/ < GraphQLRangeTracker/*u*/.length; GraphQLStoreDataHandler/*c*/++) {
                var GraphQLStoreRangeUtils/*p*/ = GraphQLRangeTracker/*u*/[GraphQLStoreDataHandler/*c*/].getFragments(),
                    d = GraphQLRangeTracker/*u*/[GraphQLStoreDataHandler/*c*/].getOwnFields(),
                    h = null;
                h = 1 === GraphQLStoreRangeUtils/*p*/.length && 0 === d.length ? GraphQLStoreRangeUtils/*p*/[0].getName() : GraphQLRangeTracker/*u*/[GraphQLStoreDataHandler/*c*/].getQueryName(), h = "diff_" + h, module/*i*/.push(new GraphQL_EXPERIMENTAL/*s*/.QueryWithValues(new GraphQL_EXPERIMENTAL/*s*/.Query(requireLazy/*r*/, "viewer" === requireLazy/*r*/ ? null : [o], d, GraphQLStoreRangeUtils/*p*/, null, h)))
            }
        }
        if (this.$DiffQueryBuilder_rootFragments)
            for (var f in this.$DiffQueryBuilder_rootFragments) module/*i*/.push(new GraphQL_EXPERIMENTAL/*s*/.QueryWithValues(new GraphQL_EXPERIMENTAL/*s*/.Query("node", [f], null, this.$DiffQueryBuilder_rootFragments[f])));
        return this.$DiffQueryBuilder_rootFragments = null, module/*i*/
    }, o.prototype.$DiffQueryBuilder_diffNode = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = null,
            module/*i*/ = null,
            o = !1,
            GraphQLStoreRangeUtils/*p*/ = null,
            f = null,
            m = null,
            g = null,
            _ = null,
            y = global/*e*/.getOwnFields(),
            v = global/*e*/.getFragments(),
            S = this.$DiffQueryBuilder_store[require/*t*/];
        if (!S) return {
            nodes: null === S ? [] : [global/*e*/],
            trackedField: m
        };
        for (var b = this.$DiffQueryBuilder_getRangeInfo(global/*e*/, S), R = b.diffCalls, w = b.filterCalls, C = b.requestedEdges, E = 0; E < y.length; E++) {
            var D = null,
                T = null,
                x = y[E],
                P = x.getFieldName();
            if ("node" === P && requireDynamic/*n*/) D = d;
            else if ("edges" === P) {
                if (C) {
                    var I, F, L = x.getOwnField("node"),
                        M = x.getEdgesID();
                    !M && global/*e*/ instanceof GraphQL_EXPERIMENTAL/*s*/.Field && DliteLog/*a*/.warn("DiffQueryBuilder: `%GraphQL_EXPERIMENTAL/*s*/`'GraphQL_EXPERIMENTAL/*s*/ `edges` fields does not have an `EdgesID`", global/*e*/.getFieldName());
                    for (var Q = C.length > GraphQLRangeTracker/*u*/.THRESHOLD, A = 0; A < C.length; A++) {
                        var k = C[A],
                            O = k.__dataID__;
                        if (!M || !GraphQLRangeTracker/*u*/.hasEdge(x, O)) {
                            var N = k.node.__dataID__;
                            if (!GraphQLStoreDataHandler/*c*/.isClientID(N)) {
                                if (global/*e*/.isFindable()) {
                                    var G = this.$DiffQueryBuilder_diffNode(x, O, !0),
                                        $ = G.nodes,
                                        B = G.trackedField;
                                    $ || ($ = [x]), $.length && (requireLazy/*r*/ = requireLazy/*r*/ || [], requireLazy/*r*/.push(global/*e*/.shallowClone($, [h], w.concat(new GraphQL_EXPERIMENTAL/*s*/.Call("find", N))))), B && (F = F || [], F.push(new GraphQL_EXPERIMENTAL/*s*/.QueryFragment("DiffQueryBuilderTrackedQuery", "UnknownConnectionEdge", B.getOwnFields(), B.getFragments())))
                                }
                                var H = this.$DiffQueryBuilder_getFragmentForNewQuery(L, N);
                                H && (I = I || [], I.push(H)), M && Q && GraphQLRangeTracker/*u*/.trackEdge(x, O, require/*t*/)
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
            "id" === P && (o = !!D, module/*i*/ = x, D = null), (GraphQLStoreRangeUtils/*p*/ || D) && (GraphQLStoreRangeUtils/*p*/ = GraphQLStoreRangeUtils/*p*/ || y.slice(0, E), null === D ? GraphQLStoreRangeUtils/*p*/.push(x) : D.length > 0 && GraphQLStoreRangeUtils/*p*/.push.apply(GraphQLStoreRangeUtils/*p*/, D)), T && (g = g || [], g.push(T))
        }
        for (var q = 0; q < v.length; q++) {
            var U = v[q],
                j = this.$DiffQueryBuilder_diffNode(U, require/*t*/),
                W = j.nodes,
                K = j.trackedField;
            (f || W) && (f = f || v.slice(0, q), null === W ? f.push(U) : W.length > 0 && f.push.apply(f, W)), K && (_ = _ || [], _.push(K))
        }
        return GraphQLStoreRangeUtils/*p*/ = GraphQLStoreRangeUtils/*p*/ || y, f = f || v, 0 === f.length && (0 === GraphQLStoreRangeUtils/*p*/.length || o && 1 === GraphQLStoreRangeUtils/*p*/.length && GraphQLStoreRangeUtils/*p*/[0] === module/*i*/) ? requireLazy/*r*/ = requireLazy/*r*/ || [] : GraphQLStoreRangeUtils/*p*/ === y && f === v ? R ? (requireLazy/*r*/ = requireLazy/*r*/ || [], requireLazy/*r*/.push(global/*e*/.shallowClone(y, v, R))) : requireLazy/*r*/ && requireLazy/*r*/.push(global/*e*/) : (requireLazy/*r*/ = requireLazy/*r*/ || [], requireLazy/*r*/.push(R ? global/*e*/.shallowClone(GraphQLStoreRangeUtils/*p*/, f, R) : global/*e*/.shallowClone(GraphQLStoreRangeUtils/*p*/, f))), (g || _) && (m = global/*e*/.shallowClone(g, _), global/*e*/ instanceof GraphQL_EXPERIMENTAL/*s*/.QueryFragment || require/*t*/ !== GraphQLConstants/*l*/.VIEWER_CLIENT_ID && GraphQLStoreDataHandler/*c*/.isClientID(require/*t*/) || this.$DiffQueryBuilder_queryTracker.addQueryForID(require/*t*/, m)), {
            nodes: requireLazy/*r*/,
            trackedField: m
        }
    }, o.prototype.$DiffQueryBuilder_diffField = function(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/, requireLazy/*r*/, module/*i*/ = GraphQLStoreRangeUtils/*p*/.getStorageKeyForField(global/*e*/, {}),
            o = require/*t*/[module/*i*/];
        if (void 0 === o) requireDynamic/*n*/ = null;
        else if (global/*e*/.isPlural())
            if (null === o || 0 === o.length) requireDynamic/*n*/ = d;
            else if (global/*e*/.hasFields())
            if ("node" === global/*e*/.getInferredRootCallName()) requireDynamic/*n*/ = d, requireLazy/*r*/ = this.$DiffQueryBuilder_getFragmentsForNewQuery(global/*e*/, o);
            else {
                var DliteLog/*a*/ = o[0].__dataID__;
                if (DliteLog/*a*/ && DliteLog/*a*/ in this.$DiffQueryBuilder_store) {
                    var GraphQL_EXPERIMENTAL/*s*/ = this.$DiffQueryBuilder_diffNode(global/*e*/, DliteLog/*a*/);
                    requireDynamic/*n*/ = GraphQL_EXPERIMENTAL/*s*/.nodes, requireLazy/*r*/ = GraphQL_EXPERIMENTAL/*s*/.trackedField
                }
            } else requireDynamic/*n*/ = d;
        else if (null !== o && global/*e*/.hasFields()) {
            var GraphQLConstants/*l*/ = this.$DiffQueryBuilder_diffNode(global/*e*/, o.__dataID__);
            requireDynamic/*n*/ = GraphQLConstants/*l*/.nodes, requireLazy/*r*/ = GraphQLConstants/*l*/.trackedField
        } else requireDynamic/*n*/ = d;
        return {
            fields: requireDynamic/*n*/,
            trackedField: requireLazy/*r*/
        }
    }, o.prototype.$DiffQueryBuilder_getFragmentsForNewQuery = function(global/*e*/, require/*t*/) {
        for (var requireDynamic/*n*/ = null, requireLazy/*r*/ = 0; requireLazy/*r*/ < require/*t*/.length; requireLazy/*r*/++) {
            var module/*i*/ = require/*t*/[requireLazy/*r*/].__dataID__,
                o = this.$DiffQueryBuilder_getFragmentForNewQuery(global/*e*/, module/*i*/);
            o && (requireDynamic/*n*/ = requireDynamic/*n*/ || [], requireDynamic/*n*/.push(o))
        }
        return requireDynamic/*n*/ ? global/*e*/.shallowClone(null, requireDynamic/*n*/) : null
    }, o.prototype.$DiffQueryBuilder_getFragmentForNewQuery = function(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = this.$DiffQueryBuilder_diffNode(global/*e*/, require/*t*/),
            requireLazy/*r*/ = requireDynamic/*n*/.nodes,
            module/*i*/ = requireDynamic/*n*/.trackedField;
        null === requireLazy/*r*/ && (requireLazy/*r*/ = [global/*e*/]);
        for (var o, DliteLog/*a*/ = 0; DliteLog/*a*/ < requireLazy/*r*/.length; DliteLog/*a*/++) o = new GraphQL_EXPERIMENTAL/*s*/.QueryFragment("DiffQueryBuilder", "Node", requireLazy/*r*/[DliteLog/*a*/].getOwnFields(), requireLazy/*r*/[DliteLog/*a*/].getFragments()), this.$DiffQueryBuilder_rootFragments = this.$DiffQueryBuilder_rootFragments || {}, this.$DiffQueryBuilder_rootFragments[require/*t*/] = this.$DiffQueryBuilder_rootFragments[require/*t*/] || [], this.$DiffQueryBuilder_rootFragments[require/*t*/].push(o);
        if (module/*i*/ || o) {
            var GraphQLConstants/*l*/;
            return GraphQLConstants/*l*/ = module/*i*/ && o ? module/*i*/.getFragments().concat(o) : module/*i*/ ? module/*i*/.getFragments() : [o], new GraphQL_EXPERIMENTAL/*s*/.QueryFragment("DiffQueryBuilderTrackedQuery", "Node", module/*i*/ ? module/*i*/.getOwnFields() : null, GraphQLConstants/*l*/)
        }
        return null
    }, o.prototype.$DiffQueryBuilder_getRangeInfo = function(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/, requireLazy/*r*/, module/*i*/;
        if (GraphQLStoreRangeUtils/*p*/.isRangeNode(global/*e*/)) {
            var o = global/*e*/.getCalls();
            if (require/*t*/.__range__) {
                var DliteLog/*a*/ = require/*t*/.__range__.retrieveRangeInfoForQuery(o, {});
                module/*i*/ = require/*t*/.__filterCalls__ || [], DliteLog/*a*/.diffCalls && DliteLog/*a*/.diffCalls.length && (requireDynamic/*n*/ = module/*i*/.concat(DliteLog/*a*/.diffCalls)), requireLazy/*r*/ = DliteLog/*a*/.requestedEdges
            } else o && o.length && (requireDynamic/*n*/ = o)
        }
        return {
            diffCalls: requireDynamic/*n*/,
            filterCalls: module/*i*/,
            requestedEdges: requireLazy/*r*/
        }
    }, module/*i*/.exports = o
});