__d("PointPropType",["ReactPropTypes","createStrictShapeTypeChecker","pointsDiffer"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var ReactPropTypes/*o*/ = require/*t*/("ReactPropTypes"),
        createStrictShapeTypeChecker/*a*/ = require/*t*/("createStrictShapeTypeChecker"),
        pointsDiffer/*s*/ = require/*t*/("pointsDiffer"),
        l = createStrictShapeTypeChecker/*a*/({
            x: ReactPropTypes/*o*/.number,
            y: ReactPropTypes/*o*/.number
        });
    l.differ = pointsDiffer/*s*/, module/*i*/.exports = l
});