__d("PointPropType",["ReactPropTypes","createStrictShapeTypeChecker","pointsDiffer"],function (e, t, n, r, i) {
    "use strict";
    var ReactPropTypes/*o*/ = t("ReactPropTypes"),
        createStrictShapeTypeChecker/*a*/ = t("createStrictShapeTypeChecker"),
        pointsDiffer/*s*/ = t("pointsDiffer"),
        l = createStrictShapeTypeChecker/*a*/({
            x: ReactPropTypes/*o*/.number,
            y: ReactPropTypes/*o*/.number
        });
    l.differ = pointsDiffer/*s*/, i.exports = l
});