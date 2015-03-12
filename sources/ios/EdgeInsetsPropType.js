__d("EdgeInsetsPropType",["ReactPropTypes","createStrictShapeTypeChecker","insetsDiffer"],function (e, t, n, r, i) {
    "use strict";
    var ReactPropTypes/*o*/ = t("ReactPropTypes"),
        createStrictShapeTypeChecker/*a*/ = t("createStrictShapeTypeChecker"),
        insetsDiffer/*s*/ = t("insetsDiffer"),
        l = createStrictShapeTypeChecker/*a*/({
            top: ReactPropTypes/*o*/.number,
            left: ReactPropTypes/*o*/.number,
            bottom: ReactPropTypes/*o*/.number,
            right: ReactPropTypes/*o*/.number
        });
    l.differ = insetsDiffer/*s*/, i.exports = l
});