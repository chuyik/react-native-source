__d("diffRawProperties",[],function (e, t, n, r, i) {
    "use strict";

    function o(e, t, n, r) {
        var i, o, a, s, l;
        for (var u in n) i = r[u], i && (a = t && t[u], o = n[u], a !== o && (s = "object" != typeof o || null === o, l = s || !a || i.diff && i.diff(a, o), l && (e = e || {}, e[u] = o)));
        for (var u in t) i = r[u], i && (e && void 0 !== e[u] || (a = t[u], o = n && n[u], a !== o && (void 0 === o && (o = null), s = "object" != typeof o || null === o, l = s && a !== o || i.diff && i.diff(a, o), l && (e = e || {}, e[u] = o))));
        return e
    }
    i.exports = o
});