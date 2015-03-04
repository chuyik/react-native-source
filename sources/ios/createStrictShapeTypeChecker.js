__d("createStrictShapeTypeChecker",["ReactPropTypeLocationNames","invariant","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        function require/*t*/(require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o) {
            if (!requireDynamic/*n*/[requireLazy/*r*/]) return void(require/*t*/ && invariant/*s*/(0, "Required object `" + requireLazy/*r*/ + "` was not specified in " + ("`" + module/*i*/ + "`.")));
            var u = requireDynamic/*n*/[requireLazy/*r*/],
                c = typeof u,
                p = ReactPropTypeLocationNames/*a*/[o];
            "object" !== c && invariant/*s*/(0, "Invalid " + p + " `" + requireLazy/*r*/ + "` of type `" + c + "` " + ("supplied to `" + module/*i*/ + "`, expected `object`."));
            var d = merge/*l*/(requireDynamic/*n*/[requireLazy/*r*/], global/*e*/);
            for (var h in d) {
                var f = global/*e*/[h];
                f || invariant/*s*/(0, "Invalid props." + requireLazy/*r*/ + " key `" + h + "` supplied to `" + module/*i*/ + "`.\nBad object: " + JSON.stringify(requireDynamic/*n*/[requireLazy/*r*/], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(global/*e*/), null, "  "));
                var m = f(u, h, module/*i*/, o);
                if (m) return invariant/*s*/(0, m.message + "\nBad object: " + JSON.stringify(requireDynamic/*n*/[requireLazy/*r*/], null, "  ")), m
            }
        }
        var requireDynamic/*n*/ = require/*t*/.bind(null, !1);
        return requireDynamic/*n*/.isRequired = require/*t*/.bind(null, !0), requireDynamic/*n*/
    }
    var ReactPropTypeLocationNames/*a*/ = require/*t*/("ReactPropTypeLocationNames"),
        invariant/*s*/ = require/*t*/("invariant"),
        merge/*l*/ = require/*t*/("merge");
    module/*i*/.exports = o
});