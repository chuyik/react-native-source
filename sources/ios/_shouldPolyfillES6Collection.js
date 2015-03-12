__d("_shouldPolyfillES6Collection",[],function (e, t, n, r, i) {
    function o(t) {
        var n = e[t];
        if (null == n) return !0;
        var r = n.prototype;
        return null == n || "function" != typeof n || "function" != typeof r.clear || 0 !== (new n).size || "function" != typeof r.keys || "function" != typeof r.forEach || s(n) || !a(n)
    }

    function a(e) {
        function t() {
            "use strict";
            null !== e && e.apply(this, arguments)
        }
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        var r = null === e ? null : e.prototype;
        t.prototype = Object.create(r), t.prototype.constructor = t, t.__superConstructor__ = e;
        try {
            var i = new t([]);
            return i.size, i instanceof e
        } catch (o) {
            return !1
        }
    }

    function s(e) {
        try {
            e()
        } catch (t) {
            return !1
        }
        return !0
    }
    i.exports = o
});