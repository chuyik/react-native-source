__d("deepDiffer",[],function (e, t, n, r, i) {
    "use strict";
    var o = function(e, t) {
        if (e === t) return !1;
        if ("function" == typeof e && "function" == typeof t) return !1;
        if ("object" != typeof e || null === e) return e !== t;
        if ("object" != typeof t || null === t) return !0;
        if (e.constructor !== t.constructor) return !0;
        for (var n in e)
            if (o(e[n], t[n])) return !0;
        for (var r in t)
            if (void 0 === e[r]) return !0;
        return !1
    };
    i.exports = o
});