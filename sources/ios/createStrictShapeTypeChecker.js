__d("createStrictShapeTypeChecker",["ReactPropTypeLocationNames","invariant","merge"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        function t(t, n, r, i, o) {
            if (!n[r]) return void(t && invariant/*s*/(0, "Required object `" + r + "` was not specified in " + ("`" + i + "`.")));
            var u = n[r],
                c = typeof u,
                p = ReactPropTypeLocationNames/*a*/[o];
            "object" !== c && invariant/*s*/(0, "Invalid " + p + " `" + r + "` of type `" + c + "` " + ("supplied to `" + i + "`, expected `object`."));
            var d = merge/*l*/(n[r], e);
            for (var h in d) {
                var f = e[h];
                f || invariant/*s*/(0, "Invalid props." + r + " key `" + h + "` supplied to `" + i + "`.\nBad object: " + JSON.stringify(n[r], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
                var m = f(u, h, i, o);
                if (m) return invariant/*s*/(0, m.message + "\nBad object: " + JSON.stringify(n[r], null, "  ")), m
            }
        }
        var n = t.bind(null, !1);
        return n.isRequired = t.bind(null, !0), n
    }
    var ReactPropTypeLocationNames/*a*/ = t("ReactPropTypeLocationNames"),
        invariant/*s*/ = t("invariant"),
        merge/*l*/ = t("merge");
    i.exports = o
});