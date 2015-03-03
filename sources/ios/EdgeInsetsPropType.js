__d("EdgeInsetsPropType",["ReactPropTypes","createStrictShapeTypeChecker","insetsDiffer"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ReactPropTypes"),
        a = require/*t*/("createStrictShapeTypeChecker"),
        s = require/*t*/("insetsDiffer"),
        l = a({
            top: o.number,
            left: o.number,
            bottom: o.number,
            right: o.number
        });
    l.differ = s, module/*i*/.exports = l
});