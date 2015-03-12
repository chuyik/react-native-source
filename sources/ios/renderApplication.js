__d("renderApplication",["React","invariant"],function (e, t, n, r, i) {
    "use strict";

    function o(component, initialProps, rootTag) {
        rootTag || invariant/*s*/(0, "Expect to have React/*a*/ valid rootTag, instead got ", rootTag),
        React/*a*/.render(React/*a*/.createElement(component, Object.assign({}, initialProps)), rootTag)
    }
    var React/*a*/ = t("React"),
        invariant/*s*/ = t("invariant");
    i.exports = o
});
