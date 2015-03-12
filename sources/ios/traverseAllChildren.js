__d("traverseAllChildren",["ReactElement","ReactInstanceHandles","invariant"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        return m[e]
    }

    function a(e, t) {
        return e && null != e.key ? l(e.key) : t.toString(36)
    }

    function s(e) {
        return ("" + e).replace(g, o)
    }

    function l(e) {
        return "$" + s(e)
    }

    function u(e, t, n) {
        return null == e ? 0 : _(e, "", 0, t, n)
    }
    var ReactElement/*c*/ = t("ReactElement"),
        ReactInstanceHandles/*p*/ = t("ReactInstanceHandles"),
        invariant/*d*/ = t("invariant"),
        h = ReactInstanceHandles/*p*/.SEPARATOR,
        f = ":",
        m = {
            "=": "=0",
            ".": "=1",
            ":": "=2"
        },
        g = /[=.:]/g,
        _ = function(e, t, n, r, i) {
            var o, s, u = 0;
            if (Array.isArray(e))
                for (var ReactInstanceHandles/*p*/ = 0; ReactInstanceHandles/*p*/ < e.length; ReactInstanceHandles/*p*/++) {
                    var m = e[ReactInstanceHandles/*p*/];
                    o = t + (t ? f : h) + a(m, ReactInstanceHandles/*p*/), s = n + u, u += _(m, o, s, r, i)
                } else {
                    var g = typeof e,
                        y = "" === t,
                        v = y ? h + a(e, 0) : t;
                    if (null == e || "boolean" === g) r(i, null, v, n), u = 1;
                    else if ("string" === g || "number" === g || ReactElement/*c*/.isValidElement(e)) r(i, e, v, n), u = 1;
                    else if ("object" === g) {
                        e && 1 === e.nodeType && invariant/*d*/(0, "traverseAllChildren(...): Encountered an invalid child; DOM elements are not valid children of React components.");
                        for (var S in e) e.hasOwnProperty(S) && (o = t + (t ? f : h) + l(S) + f + a(e[S], 0), s = n + u, u += _(e[S], o, s, r, i))
                    }
                }
            return u
        };
    i.exports = u
});