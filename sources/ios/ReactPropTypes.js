__d("ReactPropTypes",["ReactElement","ReactPropTypeLocationNames","emptyFunction"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        function require/*t*/(require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o) {
            if (module/*i*/ = module/*i*/ || R, null != requireDynamic/*n*/[requireLazy/*r*/]) return global/*e*/(requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o);
            var a = S[o];
            return require/*t*/ ? new Error("Required " + a + " `" + requireLazy/*r*/ + "` was not specified in " + ("`" + module/*i*/ + "`.")) : void 0
        }
        var requireDynamic/*n*/ = require/*t*/.bind(null, !1);
        return requireDynamic/*n*/.isRequired = require/*t*/.bind(null, !0), requireDynamic/*n*/
    }

    function a(global/*e*/) {
        function require/*t*/(require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
            var o = require/*t*/[requireDynamic/*n*/],
                a = _(o);
            if (a !== global/*e*/) {
                var s = S[module/*i*/],
                    l = y(o);
                return new Error("Invalid " + s + " `" + requireDynamic/*n*/ + "` of type `" + l + "` " + ("supplied to `" + requireLazy/*r*/ + "`, expected `" + global/*e*/ + "`."))
            }
        }
        return o(require/*t*/)
    }

    function s() {
        return o(b.thatReturns())
    }

    function l(global/*e*/) {
        function require/*t*/(require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
            var o = require/*t*/[requireDynamic/*n*/];
            if (!Array.isArray(o)) {
                var a = S[module/*i*/],
                    s = _(o);
                return new Error("Invalid " + a + " `" + requireDynamic/*n*/ + "` of type " + ("`" + s + "` supplied to `" + requireLazy/*r*/ + "`, expected an array."))
            }
            for (var l = 0; l < o.length; l++) {
                var u = global/*e*/(o, l, requireLazy/*r*/, module/*i*/);
                if (u instanceof Error) return u
            }
        }
        return o(require/*t*/)
    }

    function u() {
        function global/*e*/(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
            if (!v.isValidElement(global/*e*/[require/*t*/])) {
                var module/*i*/ = S[requireLazy/*r*/];
                return new Error("Invalid " + module/*i*/ + " `" + require/*t*/ + "` supplied to " + ("`" + requireDynamic/*n*/ + "`, expected a React component."))
            }
        }
        return o(global/*e*/)
    }

    function c(global/*e*/) {
        function require/*t*/(require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
            if (!(require/*t*/[requireDynamic/*n*/] instanceof global/*e*/)) {
                var o = S[module/*i*/],
                    a = global/*e*/.name || R;
                return new Error("Invalid " + o + " `" + requireDynamic/*n*/ + "` supplied to " + ("`" + requireLazy/*r*/ + "`, expected instance of `" + a + "`."))
            }
        }
        return o(require/*t*/)
    }

    function p(global/*e*/) {
        function require/*t*/(require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
            for (var o = require/*t*/[requireDynamic/*n*/], a = 0; a < global/*e*/.length; a++)
                if (o === global/*e*/[a]) return;
            var s = S[module/*i*/],
                l = JSON.stringify(global/*e*/);
            return new Error("Invalid " + s + " `" + requireDynamic/*n*/ + "` of value `" + o + "` " + ("supplied to `" + requireLazy/*r*/ + "`, expected one of " + l + "."))
        }
        return o(require/*t*/)
    }

    function d(global/*e*/) {
        function require/*t*/(require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
            var o = require/*t*/[requireDynamic/*n*/],
                a = _(o);
            if ("object" !== a) {
                var s = S[module/*i*/];
                return new Error("Invalid " + s + " `" + requireDynamic/*n*/ + "` of type " + ("`" + a + "` supplied to `" + requireLazy/*r*/ + "`, expected an object."))
            }
            for (var l in o)
                if (o.hasOwnProperty(l)) {
                    var u = global/*e*/(o, l, requireLazy/*r*/, module/*i*/);
                    if (u instanceof Error) return u
                }
        }
        return o(require/*t*/)
    }

    function h(global/*e*/) {
        function require/*t*/(require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
            for (var o = 0; o < global/*e*/.length; o++) {
                var a = global/*e*/[o];
                if (null == a(require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/)) return
            }
            var s = S[module/*i*/];
            return new Error("Invalid " + s + " `" + requireDynamic/*n*/ + "` supplied to " + ("`" + requireLazy/*r*/ + "`."))
        }
        return o(require/*t*/)
    }

    function f() {
        function global/*e*/(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
            if (!g(global/*e*/[require/*t*/])) {
                var module/*i*/ = S[requireLazy/*r*/];
                return new Error("Invalid " + module/*i*/ + " `" + require/*t*/ + "` supplied to " + ("`" + requireDynamic/*n*/ + "`, expected a renderable prop."))
            }
        }
        return o(global/*e*/)
    }

    function m(global/*e*/) {
        function require/*t*/(require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
            var o = require/*t*/[requireDynamic/*n*/],
                a = _(o);
            if ("object" !== a) {
                var s = S[module/*i*/];
                return new Error("Invalid " + s + " `" + requireDynamic/*n*/ + "` of type `" + a + "` " + ("supplied to `" + requireLazy/*r*/ + "`, expected `object`."))
            }
            for (var l in global/*e*/) {
                var u = global/*e*/[l];
                if (u) {
                    var c = u(o, l, requireLazy/*r*/, module/*i*/);
                    if (c) return c
                }
            }
        }
        return o(require/*t*/, "expected `object`")
    }

    function g(global/*e*/) {
        switch (typeof global/*e*/) {
            case "number":
            case "string":
                return !0;
            case "boolean":
                return !global/*e*/;
            case "object":
                if (Array.isArray(global/*e*/)) return global/*e*/.every(g);
                if (v.isValidElement(global/*e*/)) return !0;
                for (var require/*t*/ in global/*e*/)
                    if (!g(global/*e*/[require/*t*/])) return !1;
                return !0;
            default:
                return !1
        }
    }

    function _(global/*e*/) {
        var require/*t*/ = typeof global/*e*/;
        return Array.isArray(global/*e*/) ? "array" : global/*e*/ instanceof RegExp ? "object" : require/*t*/
    }

    function y(global/*e*/) {
        var require/*t*/ = _(global/*e*/);
        if ("object" === require/*t*/) {
            if (global/*e*/ instanceof Date) return "date";
            if (global/*e*/ instanceof RegExp) return "regexp"
        }
        return require/*t*/
    }
    var v = require/*t*/("ReactElement"),
        S = require/*t*/("ReactPropTypeLocationNames"),
        b = require/*t*/("emptyFunction"),
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
    module/*i*/.exports = w
});