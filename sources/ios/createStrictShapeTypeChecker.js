__d("createStrictShapeTypeChecker",["ReactPropTypeLocationNames","invariant","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        function require/*t*/(require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o) {
            if (!requireDynamic/*n*/[requireLazy/*r*/]) return void(require/*t*/ && s(0, "Required object `" + requireLazy/*r*/ + "` was not specified in " + ("`" + module/*i*/ + "`.")));
            var u = requireDynamic/*n*/[requireLazy/*r*/],
                c = typeof u,
                p = a[o];
            "object" !== c && s(0, "Invalid " + p + " `" + requireLazy/*r*/ + "` of type `" + c + "` " + ("supplied to `" + module/*i*/ + "`, expected `object`."));
            var d = l(requireDynamic/*n*/[requireLazy/*r*/], global/*e*/);
            for (var h in d) {
                var f = global/*e*/[h];
                f || s(0, "Invalid props." + requireLazy/*r*/ + " key `" + h + "` supplied to `" + module/*i*/ + "`.\nBad object: " + JSON.stringify(requireDynamic/*n*/[requireLazy/*r*/], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(global/*e*/), null, "  "));
                var m = f(u, h, module/*i*/, o);
                if (m) return s(0, m.message + "\nBad object: " + JSON.stringify(requireDynamic/*n*/[requireLazy/*r*/], null, "  ")), m
            }
        }
        var requireDynamic/*n*/ = require/*t*/.bind(null, !1);
        return requireDynamic/*n*/.isRequired = require/*t*/.bind(null, !0), requireDynamic/*n*/
    }
    var a = require/*t*/("ReactPropTypeLocationNames"),
        s = require/*t*/("invariant"),
        l = require/*t*/("merge");
    module/*i*/.exports = o
});