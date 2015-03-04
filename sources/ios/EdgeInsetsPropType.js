__d("EdgeInsetsPropType",["ReactPropTypes","createStrictShapeTypeChecker","insetsDiffer"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var ReactPropTypes/*o*/ = require/*t*/("ReactPropTypes"),
        createStrictShapeTypeChecker/*a*/ = require/*t*/("createStrictShapeTypeChecker"),
        insetsDiffer/*s*/ = require/*t*/("insetsDiffer"),
        l = createStrictShapeTypeChecker/*a*/({
            top: ReactPropTypes/*o*/.number,
            left: ReactPropTypes/*o*/.number,
            bottom: ReactPropTypes/*o*/.number,
            right: ReactPropTypes/*o*/.number
        });
    l.differ = insetsDiffer/*s*/, module/*i*/.exports = l
});