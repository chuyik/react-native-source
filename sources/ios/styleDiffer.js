__d("styleDiffer",["deepDiffer"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        return !a(e, t)
    }

    function a(e, t) {
        if (!e) return !t;
        if (!t) return !e;
        if (typeof e != typeof t) return !1;
        if ("number" == typeof e) return e === t;
        if (Array.isArray(e)) {
            if (!Array.isArray(t) || e.length !== t.length) return !1;
            for (var n = 0; n < e.length; ++n)
                if (!a(e[n], t[n])) return !1;
            return !0
        }
        for (var r in e)
            if (deepDiffer/*s*/(e[r], t[r])) return !1;
        for (var r in t)
            if (!e.hasOwnProperty(r)) return !1;
        return !0
    }
    var deepDiffer/*s*/ = t("deepDiffer");
    i.exports = o
});