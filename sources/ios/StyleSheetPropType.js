__d("StyleSheetPropType",["createStrictShapeTypeChecker","flattenStyle"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        var t = createStrictShapeTypeChecker/*a*/(e);
        return function(e, n, r, i) {
            var o = e;
            return e[n] && (o = {}, o[n] = flattenStyle/*s*/(e[n])), t(o, n, r, i)
        }
    }
    var createStrictShapeTypeChecker/*a*/ = t("createStrictShapeTypeChecker"),
        flattenStyle/*s*/ = t("flattenStyle");
    i.exports = o
});