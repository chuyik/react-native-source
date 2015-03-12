__d("subtractQuery",["GraphQL_EXPERIMENTAL"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        var n = e.getQuery(),
            r = t.getQuery();
        if (!f(n, r)) return e;
        var i = n.isRefQueryDependency(),
            o = a(n, [r], i);
        return o === n ? e : o ? !i && l(o) ? null : new GraphQL_EXPERIMENTAL/*g*/.QueryWithValues(o) : null
    }

    function a(e, t, n) {
        var r = e.getOwnFields(),
            i = m(r, function(e) {
                return s(e, t, n)
            }),
            o = e.getFragments(),
            l = m(o, function(e) {
                return a(e, t, n)
            });
        return !n && i && 1 === i.length && "id" === i[0].getFieldName() && (i = null), r === i && o === l ? e : i && 0 !== i.length || l && 0 !== l.length ? e.shallowClone(i, l) : null
    }

    function s(e, t, n) {
        var r = e.getFieldName();
        if (e.hasOwnFields() || e.getFragments().length) {
            var i;
            if (t.forEach(function(t) {
                    u(t, r, function(t) {
                        p(e, t) && (i = i || [], i.push(t))
                    })
                }), i) return a(e, i, n)
        } else if (!e.isRequisite() && "id" !== r) {
            var o = t.some(function(t) {
                return c(t, r, function(t) {
                    return p(e, t)
                })
            });
            if (o) return null
        }
        return e
    }

    function l(e) {
        var t = e.getOwnFields(),
            n = e.getFragments();
        return t.length || n.length ? t.every(l) && n.every(l) : "id" === e.getFieldName() || e.isRequisite()
    }

    function u(e, t, n) {
        c(e, t, function() {
            n.apply(this, arguments)
        })
    }

    function c(e, t, n) {
        for (var r, i = [e]; r = i.shift();) {
            if (r.getOwnUnaliasedFields(t).some(n)) return !0;
            _.apply(i, r.getFragments())
        }
        return !1
    }

    function p(e, t) {
        var n = e.getCalls(),
            r = t.getCalls(),
            i = n.length;
        if (i !== r.length) return !1;
        if (i)
            for (var o = e.isConnection() ? d : h, a = 0; i > a; a++) {
                var s = n[a],
                    l = r[a];
                if (s.getName() !== l.getName() || !o(s, l)) return !1
            }
        return !0
    }

    function d(e, t) {
        var n = e.getName();
        return "first" === n || "last" === n ? e.getArgs()[0] <= t.getArgs()[0] : h(e, t)
    }

    function h(e, t) {
        var n = e.getArgs(),
            r = t.getArgs(),
            i = n.length;
        if (i !== r.length) return !1;
        for (var o = 0; i > o; o++)
            if (!n[o].equals(r[o])) return !1;
        return !0
    }

    function f(e, t) {
        return e.rootCall().equals(t.rootCall())
    }

    function m(e, t) {
        if (0 === e.length) return e;
        var n = null;
        return e.forEach(function(r, i) {
            var o = t(r);
            o !== r && (n = n || e.slice(0, i)), null !== n && null !== o && n.push(o)
        }), n ? 0 === n.length ? null : n : e
    }
    var GraphQL_EXPERIMENTAL/*g*/ = t("GraphQL_EXPERIMENTAL"),
        _ = Array.prototype.push;
    i.exports = o
});