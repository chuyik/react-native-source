__d("createStrictShapeTypeChecker",["ReactPropTypeLocationNames","invariant","merge"],function (global/*e*/, require/*t*/, requireDynamic/*exports/*n*/*/, requireLazy/*ReactPropTypeLocationNames/*r*/*/, module/*invariant/*i*/*/) {
    "use strict";

    function merge/*o*/(global/*e*/) {
        function require/*t*/(require/*t*/, requireDynamic/*exports/*n*/*/, requireLazy/*ReactPropTypeLocationNames/*r*/*/, module/*invariant/*i*/*/, merge/*o*/) {
            if (!requireDynamic/*exports/*n*/*/[requireLazy/*ReactPropTypeLocationNames/*r*/*/]) return void(require/*t*/ && s(0, "Required object `" + requireLazy/*ReactPropTypeLocationNames/*r*/*/ + "` was not specified in " + ("`" + module/*invariant/*i*/*/ + "`.")));
            var u = requireDynamic/*exports/*n*/*/[requireLazy/*ReactPropTypeLocationNames/*r*/*/],
                c = typeof u,
                p = a[merge/*o*/];
            "object" !== c && s(0, "Invalid " + p + " `" + requireLazy/*ReactPropTypeLocationNames/*r*/*/ + "` of type `" + c + "` " + ("supplied to `" + module/*invariant/*i*/*/ + "`, expected `object`."));
            var d = l(requireDynamic/*exports/*n*/*/[requireLazy/*ReactPropTypeLocationNames/*r*/*/], global/*e*/);
            for (var h in d) {
                var f = global/*e*/[h];
                f || s(0, "Invalid props." + requireLazy/*ReactPropTypeLocationNames/*r*/*/ + " key `" + h + "` supplied to `" + module/*invariant/*i*/*/ + "`.\nBad object: " + JSON.stringify(requireDynamic/*exports/*n*/*/[requireLazy/*ReactPropTypeLocationNames/*r*/*/], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(global/*e*/), null, "  "));
                var m = f(u, h, module/*invariant/*i*/*/, merge/*o*/);
                if (m) return s(0, m.message + "\nBad object: " + JSON.stringify(requireDynamic/*exports/*n*/*/[requireLazy/*ReactPropTypeLocationNames/*r*/*/], null, "  ")), m
            }
        }
        var requireDynamic/*exports/*n*/*/ = require/*t*/.bind(null, !1);
        return requireDynamic/*exports/*n*/*/.isRequired = require/*t*/.bind(null, !0), requireDynamic/*exports/*n*/*/
    }
    var a = require/*t*/("ReactPropTypeLocationNames"),
        s = require/*t*/("invariant"),
        l = require/*t*/("merge");
    module/*invariant/*i*/*/.exports = merge/*o*/
});