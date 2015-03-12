__d("GraphQLDeferredQueryTracker",["ErrorUtils","GraphQL_EXPERIMENTAL","GraphQLCodedError","GraphQLStore","Map","forEachObject","invariant","isEmpty","setImmediate"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        var n = e.getQuery(),
            r = n.getDeferredFragmentNames();
        if (r) {
            var i = n.rootCall().hasRefParam() ? D.get(n.getID()) || {} : g.getIDsFromQuery(e);
            forEachObject/*y*/(i, function(e) {
                var n = C.get(e) || {};
                forEachObject/*y*/(r, function(r) {
                    delete n[r], t(e, r)
                }), isEmpty/*S*/(n) ? C.delete(e) : C.set(e, n)
            })
        }
    }

    function a(e) {
        var t = f(e),
            n = E.get(t) || [];
        n = n.filter(function(t) {
            return t !== e
        }), n.length ? E.set(t, n) : E.delete(t), D.delete(e.getQuery().getID())
    }

    function s(e, t) {
        for (var n = e.getQuery(), r = E.get(n.getID()) || [], i = 0; i < r.length; i++) {
            var o = r[i],
                a = o.getQuery(),
                s = a.getDeferredFragmentNames(),
                l = d(t, o);
            D.set(a.getID(), l), forEachObject/*y*/(l, function(e) {
                var t = C.get(e) || {};
                Object.assign(t, s), C.set(e, t)
            })
        }
    }

    function l(e) {
        for (var t = e.getQuery().getID(), n = E.get(t) || [], r = 0; r < n.length; r++) D.delete(n[r].getQuery().getID());
        E.delete(t)
    }

    function u(e, t) {
        w || (w = [], setImmediate/*b*/(p)), w.push({
            dataID: e,
            fragmentName: t,
            error: null
        })
    }

    function c(e, t, n) {
        w || (w = [], setImmediate/*b*/(p)), w.push({
            dataID: e,
            fragmentName: t,
            error: n
        })
    }

    function p() {
        if (w) {
            for (var e = 0; e < R.length; e++)
                for (var t = R[e], n = 0; n < w.length; n++) {
                    var r, i, o = w[n],
                        a = o.dataID,
                        s = o.error,
                        l = o.fragmentName;
                    s ? (r = t.callbacks.onFailure, i = [a, l, s]) : (r = t.callbacks.onSuccess, i = [a, l]), ErrorUtils/*m*/.applyWithGuard(r, null, i, null, "GraphQLDeferredQueryTracker")
                }
            w = null
        }
    }

    function d(e, t) {
        var n = t.getQuery().rootCall().getRefTarget();
        if (!n) return {};
        var r = {},
            i = n.split(".");
        return h(r, e, i, 1), r
    }

    function h(e, t, n, r) {
        if (r === n.length && "string" == typeof t) return void(e[t] = t);
        if (!(r >= n.length || !t || "object" != typeof t || Array.isArray(t))) {
            var i = n[r];
            "*" === i ? forEachObject/*y*/(t, function(t) {
                h(e, t, n, r + 1)
            }) : t.hasOwnProperty(i) && h(e, t[i], n, r + 1)
        }
    }

    function f(e) {
        return e.getQuery().rootCall().getSourceQueryID()
    }
    var ErrorUtils/*m*/ = t("ErrorUtils"),
        g = (t("GraphQL_EXPERIMENTAL"), t("GraphQLCodedError"), t("GraphQLStore")),
        Map/*_*/ = t("Map"),
        forEachObject/*y*/ = t("forEachObject"),
        invariant/*v*/ = t("invariant"),
        isEmpty/*S*/ = t("isEmpty"),
        setImmediate/*b*/ = t("setImmediate"),
        R = [],
        w = null,
        C = new Map/*_*/,
        E = new Map/*_*/,
        D = new Map/*_*/,
        T = {
            addListenerForFragment: function(e, t, n) {
                var r = {
                    callbacks: n,
                    dataID: e,
                    fragmentName: t
                };
                return R.push(r), {
                    remove: function() {
                        var e = R.indexOf(r);
                        e >= 0 || invariant/*v*/(0, "remove() can only be called once"), R.splice(e, 1)
                    }
                }
            },
            recordQuery: function(e) {
                var t = f(e);
                if (t) {
                    var n = E.get(t) || [];
                    n.push(e), E.set(t, n)
                } else {
                    var r = e.getQuery().getDeferredFragmentNames();
                    if (r) {
                        var i = g.getIDsFromQuery(e);
                        forEachObject/*y*/(i, function(e) {
                            var t = C.get(e) || {};
                            Object.assign(t, r), C.set(e, t)
                        })
                    }
                }
            },
            resolveQuery: function(e, t) {
                var n = f(e);
                e.getQuery().isDeferred() ? (o(e, u), n && a(e)) : t && s(e, t)
            },
            rejectQuery: function(e, t) {
                var n = f(e);
                e.getQuery().isDeferred() ? (o(e, function(e, n) {
                    c(e, n, t)
                }), n && a(e)) : l(e)
            },
            isQueryPending: function(e) {
                var t = e.getQuery().getAllFragmentNames(),
                    n = g.getIDsFromQuery(e);
                for (var r in n)
                    if (n.hasOwnProperty(r) && C.has(n[r])) {
                        var i = C.get(n[r]);
                        for (var o in t)
                            if (t.hasOwnProperty(o) && i.hasOwnProperty(o)) return !0
                    }
                return !1
            },
            reset: function() {
                C = new Map/*_*/, D = new Map/*_*/, E = new Map/*_*/, R = [], w = []
            }
        };
    i.exports = T
});