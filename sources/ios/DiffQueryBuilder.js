__d("DiffQueryBuilder",["DliteLog","GraphQL_EXPERIMENTAL","GraphQLConstants","GraphQLRangeTracker","GraphQLStoreDataHandler","GraphQLStoreRangeUtils"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        this.$DiffQueryBuilder_store = global/*e*/, this.$DiffQueryBuilder_queryTracker = require/*t*/, this.$DiffQueryBuilder_rootFragments = null
    }
    var a = require/*t*/("DliteLog"),
        s = require/*t*/("GraphQL_EXPERIMENTAL"),
        l = require/*t*/("GraphQLConstants"),
        u = require/*t*/("GraphQLRangeTracker"),
        c = require/*t*/("GraphQLStoreDataHandler"),
        p = require/*t*/("GraphQLStoreRangeUtils"),
        d = [],
        h = new s.QueryFragment("DiffQueryFragment", "UnknownConnection", [new s.Field("edges", [new s.Field("node", [new s.Field("id")])])]);
    o.prototype.getDiffQueries = function(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = global/*e*/.getQuery(),
            requireLazy/*r*/ = requireDynamic/*n*/.rootCall().getName(),
            module/*i*/ = [];
        for (var o in require/*t*/) {
            var a = require/*t*/[o],
                l = this.$DiffQueryBuilder_diffNode(requireDynamic/*n*/, a),
                u = l.nodes;
            null === u && (u = [requireDynamic/*n*/]);
            for (var c = 0; c < u.length; c++) {
                var p = u[c].getFragments(),
                    d = u[c].getOwnFields(),
                    h = null;
                h = 1 === p.length && 0 === d.length ? p[0].getName() : u[c].getQueryName(), h = "diff_" + h, module/*i*/.push(new s.QueryWithValues(new s.Query(requireLazy/*r*/, "viewer" === requireLazy/*r*/ ? null : [o], d, p, null, h)))
            }
        }
        if (this.$DiffQueryBuilder_rootFragments)
            for (var f in this.$DiffQueryBuilder_rootFragments) module/*i*/.push(new s.QueryWithValues(new s.Query("node", [f], null, this.$DiffQueryBuilder_rootFragments[f])));
        return this.$DiffQueryBuilder_rootFragments = null, module/*i*/
    }, o.prototype.$DiffQueryBuilder_diffNode = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = null,
            module/*i*/ = null,
            o = !1,
            p = null,
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
                    !M && global/*e*/ instanceof s.Field && a.warn("DiffQueryBuilder: `%s`'s `edges` fields does not have an `EdgesID`", global/*e*/.getFieldName());
                    for (var Q = C.length > u.THRESHOLD, A = 0; A < C.length; A++) {
                        var k = C[A],
                            O = k.__dataID__;
                        if (!M || !u.hasEdge(x, O)) {
                            var N = k.node.__dataID__;
                            if (!c.isClientID(N)) {
                                if (global/*e*/.isFindable()) {
                                    var G = this.$DiffQueryBuilder_diffNode(x, O, !0),
                                        $ = G.nodes,
                                        B = G.trackedField;
                                    $ || ($ = [x]), $.length && (requireLazy/*r*/ = requireLazy/*r*/ || [], requireLazy/*r*/.push(global/*e*/.shallowClone($, [h], w.concat(new s.Call("find", N))))), B && (F = F || [], F.push(new s.QueryFragment("DiffQueryBuilderTrackedQuery", "UnknownConnectionEdge", B.getOwnFields(), B.getFragments())))
                                }
                                var H = this.$DiffQueryBuilder_getFragmentForNewQuery(L, N);
                                H && (I = I || [], I.push(H)), M && Q && u.trackEdge(x, O, require/*t*/)
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
            "id" === P && (o = !!D, module/*i*/ = x, D = null), (p || D) && (p = p || y.slice(0, E), null === D ? p.push(x) : D.length > 0 && p.push.apply(p, D)), T && (g = g || [], g.push(T))
        }
        for (var q = 0; q < v.length; q++) {
            var U = v[q],
                j = this.$DiffQueryBuilder_diffNode(U, require/*t*/),
                W = j.nodes,
                K = j.trackedField;
            (f || W) && (f = f || v.slice(0, q), null === W ? f.push(U) : W.length > 0 && f.push.apply(f, W)), K && (_ = _ || [], _.push(K))
        }
        return p = p || y, f = f || v, 0 === f.length && (0 === p.length || o && 1 === p.length && p[0] === module/*i*/) ? requireLazy/*r*/ = requireLazy/*r*/ || [] : p === y && f === v ? R ? (requireLazy/*r*/ = requireLazy/*r*/ || [], requireLazy/*r*/.push(global/*e*/.shallowClone(y, v, R))) : requireLazy/*r*/ && requireLazy/*r*/.push(global/*e*/) : (requireLazy/*r*/ = requireLazy/*r*/ || [], requireLazy/*r*/.push(R ? global/*e*/.shallowClone(p, f, R) : global/*e*/.shallowClone(p, f))), (g || _) && (m = global/*e*/.shallowClone(g, _), global/*e*/ instanceof s.QueryFragment || require/*t*/ !== l.VIEWER_CLIENT_ID && c.isClientID(require/*t*/) || this.$DiffQueryBuilder_queryTracker.addQueryForID(require/*t*/, m)), {
            nodes: requireLazy/*r*/,
            trackedField: m
        }
    }, o.prototype.$DiffQueryBuilder_diffField = function(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/, requireLazy/*r*/, module/*i*/ = p.getStorageKeyForField(global/*e*/, {}),
            o = require/*t*/[module/*i*/];
        if (void 0 === o) requireDynamic/*n*/ = null;
        else if (global/*e*/.isPlural())
            if (null === o || 0 === o.length) requireDynamic/*n*/ = d;
            else if (global/*e*/.hasFields())
            if ("node" === global/*e*/.getInferredRootCallName()) requireDynamic/*n*/ = d, requireLazy/*r*/ = this.$DiffQueryBuilder_getFragmentsForNewQuery(global/*e*/, o);
            else {
                var a = o[0].__dataID__;
                if (a && a in this.$DiffQueryBuilder_store) {
                    var s = this.$DiffQueryBuilder_diffNode(global/*e*/, a);
                    requireDynamic/*n*/ = s.nodes, requireLazy/*r*/ = s.trackedField
                }
            } else requireDynamic/*n*/ = d;
        else if (null !== o && global/*e*/.hasFields()) {
            var l = this.$DiffQueryBuilder_diffNode(global/*e*/, o.__dataID__);
            requireDynamic/*n*/ = l.nodes, requireLazy/*r*/ = l.trackedField
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
        for (var o, a = 0; a < requireLazy/*r*/.length; a++) o = new s.QueryFragment("DiffQueryBuilder", "Node", requireLazy/*r*/[a].getOwnFields(), requireLazy/*r*/[a].getFragments()), this.$DiffQueryBuilder_rootFragments = this.$DiffQueryBuilder_rootFragments || {}, this.$DiffQueryBuilder_rootFragments[require/*t*/] = this.$DiffQueryBuilder_rootFragments[require/*t*/] || [], this.$DiffQueryBuilder_rootFragments[require/*t*/].push(o);
        if (module/*i*/ || o) {
            var l;
            return l = module/*i*/ && o ? module/*i*/.getFragments().concat(o) : module/*i*/ ? module/*i*/.getFragments() : [o], new s.QueryFragment("DiffQueryBuilderTrackedQuery", "Node", module/*i*/ ? module/*i*/.getOwnFields() : null, l)
        }
        return null
    }, o.prototype.$DiffQueryBuilder_getRangeInfo = function(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/, requireLazy/*r*/, module/*i*/;
        if (p.isRangeNode(global/*e*/)) {
            var o = global/*e*/.getCalls();
            if (require/*t*/.__range__) {
                var a = require/*t*/.__range__.retrieveRangeInfoForQuery(o, {});
                module/*i*/ = require/*t*/.__filterCalls__ || [], a.diffCalls && a.diffCalls.length && (requireDynamic/*n*/ = module/*i*/.concat(a.diffCalls)), requireLazy/*r*/ = a.requestedEdges
            } else o && o.length && (requireDynamic/*n*/ = o)
        }
        return {
            diffCalls: requireDynamic/*n*/,
            filterCalls: module/*i*/,
            requestedEdges: requireLazy/*r*/
        }
    }, module/*i*/.exports = o
});