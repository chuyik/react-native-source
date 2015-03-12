__d("onlyChild",["ReactElement","invariant"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        return ReactElement/*a*/.isValidElement(e) || invariant/*s*/(0, "onlyChild must be passed ReactElement/*a*/ children with exactly one child."), e
    }
    var ReactElement/*a*/ = t("ReactElement"),
        invariant/*s*/ = t("invariant");
    i.exports = o
});