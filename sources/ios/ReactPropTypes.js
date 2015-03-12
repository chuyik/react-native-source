__d("ReactPropTypes",["ReactElement","ReactPropTypeLocationNames","emptyFunction"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        function t(t, n, r, i, o) {
            if (i = i || R, null != n[r]) return e(n, r, i, o);
            var a = ReactPropTypeLocationNames/*S*/[o];
            return t ? new Error("Required " + a + " `" + r + "` was not specified in " + ("`" + i + "`.")) : void 0
        }
        var n = t.bind(null, !1);
        return n.isRequired = t.bind(null, !0), n
    }

    function a(e) {
        function t(t, n, r, i) {
            var o = t[n],
                a = _(o);
            if (a !== e) {
                var s = ReactPropTypeLocationNames/*S*/[i],
                    l = y(o);
                return new Error("Invalid " + s + " `" + n + "` of type `" + l + "` " + ("supplied to `" + r + "`, expected `" + e + "`."))
            }
        }
        return o(t)
    }

    function s() {
        return o(emptyFunction/*b*/.thatReturns())
    }

    function l(e) {
        function t(t, n, r, i) {
            var o = t[n];
            if (!Array.isArray(o)) {
                var a = ReactPropTypeLocationNames/*S*/[i],
                    s = _(o);
                return new Error("Invalid " + a + " `" + n + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected an array."))
            }
            for (var l = 0; l < o.length; l++) {
                var u = e(o, l, r, i);
                if (u instanceof Error) return u
            }
        }
        return o(t)
    }

    function u() {
        function e(e, t, n, r) {
            if (!ReactElement/*v*/.isValidElement(e[t])) {
                var i = ReactPropTypeLocationNames/*S*/[r];
                return new Error("Invalid " + i + " `" + t + "` supplied to " + ("`" + n + "`, expected a React component."))
            }
        }
        return o(e)
    }

    function c(e) {
        function t(t, n, r, i) {
            if (!(t[n] instanceof e)) {
                var o = ReactPropTypeLocationNames/*S*/[i],
                    a = e.name || R;
                return new Error("Invalid " + o + " `" + n + "` supplied to " + ("`" + r + "`, expected instance of `" + a + "`."))
            }
        }
        return o(t)
    }

    function p(e) {
        function t(t, n, r, i) {
            for (var o = t[n], a = 0; a < e.length; a++)
                if (o === e[a]) return;
            var s = ReactPropTypeLocationNames/*S*/[i],
                l = JSON.stringify(e);
            return new Error("Invalid " + s + " `" + n + "` of value `" + o + "` " + ("supplied to `" + r + "`, expected one of " + l + "."))
        }
        return o(t)
    }

    function d(e) {
        function t(t, n, r, i) {
            var o = t[n],
                a = _(o);
            if ("object" !== a) {
                var s = ReactPropTypeLocationNames/*S*/[i];
                return new Error("Invalid " + s + " `" + n + "` of type " + ("`" + a + "` supplied to `" + r + "`, expected an object."))
            }
            for (var l in o)
                if (o.hasOwnProperty(l)) {
                    var u = e(o, l, r, i);
                    if (u instanceof Error) return u
                }
        }
        return o(t)
    }

    function h(e) {
        function t(t, n, r, i) {
            for (var o = 0; o < e.length; o++) {
                var a = e[o];
                if (null == a(t, n, r, i)) return
            }
            var s = ReactPropTypeLocationNames/*S*/[i];
            return new Error("Invalid " + s + " `" + n + "` supplied to " + ("`" + r + "`."))
        }
        return o(t)
    }

    function f() {
        function e(e, t, n, r) {
            if (!g(e[t])) {
                var i = ReactPropTypeLocationNames/*S*/[r];
                return new Error("Invalid " + i + " `" + t + "` supplied to " + ("`" + n + "`, expected a renderable prop."))
            }
        }
        return o(e)
    }

    function m(e) {
        function t(t, n, r, i) {
            var o = t[n],
                a = _(o);
            if ("object" !== a) {
                var s = ReactPropTypeLocationNames/*S*/[i];
                return new Error("Invalid " + s + " `" + n + "` of type `" + a + "` " + ("supplied to `" + r + "`, expected `object`."))
            }
            for (var l in e) {
                var u = e[l];
                if (u) {
                    var c = u(o, l, r, i);
                    if (c) return c
                }
            }
        }
        return o(t, "expected `object`")
    }

    function g(e) {
        switch (typeof e) {
            case "number":
            case "string":
                return !0;
            case "boolean":
                return !e;
            case "object":
                if (Array.isArray(e)) return e.every(g);
                if (ReactElement/*v*/.isValidElement(e)) return !0;
                for (var t in e)
                    if (!g(e[t])) return !1;
                return !0;
            default:
                return !1
        }
    }

    function _(e) {
        var t = typeof e;
        return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : t
    }

    function y(e) {
        var t = _(e);
        if ("object" === t) {
            if (e instanceof Date) return "date";
            if (e instanceof RegExp) return "regexp"
        }
        return t
    }
    var ReactElement/*v*/ = t("ReactElement"),
        ReactPropTypeLocationNames/*S*/ = t("ReactPropTypeLocationNames"),
        emptyFunction/*b*/ = t("emptyFunction"),
        R = "<<anonymous>>",
        w = {
            array: a("array"),
            bool: a("boolean"),
            func: a("function"),
            number: a("number"),
            object: a("object"),
            string: a("string"),
            any: s(),
            arrayOf: l,
            component: u(),
            instanceOf: c,
            objectOf: d,
            oneOf: p,
            oneOfType: h,
            renderable: f(),
            shape: m
        };
    i.exports = w
});