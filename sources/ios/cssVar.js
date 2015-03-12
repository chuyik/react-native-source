__d("cssVar",["invariant","CSSVarConfig"],function (e, t, n, r, i) {
    "use strict";
    var invariant/*o*/ = t("invariant"),
        CSSVarConfig/*a*/ = t("CSSVarConfig"),
        s = function(e) {
            return CSSVarConfig/*a*/[e] || invariant/*o*/(0, "invalid css variable " + e), CSSVarConfig/*a*/[e]
        };
    i.exports = s
});