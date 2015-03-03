__d("PointPropType",["ReactPropTypes","createStrictShapeTypeChecker","pointsDiffer"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ReactPropTypes"),
        a = require/*t*/("createStrictShapeTypeChecker"),
        s = require/*t*/("pointsDiffer"),
        l = a({
            x: o.number,
            y: o.number
        });
    l.differ = s, module/*i*/.exports = l
});