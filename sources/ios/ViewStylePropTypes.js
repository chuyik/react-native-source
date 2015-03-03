__d("ViewStylePropTypes",["LayoutPropTypes","ReactPropTypes","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("LayoutPropTypes"),
        a = require/*t*/("ReactPropTypes"),
        s = require/*t*/("merge"),
        l = s(o, {
            backgroundColor: a.string,
            borderColor: a.string,
            borderTopColor: a.string,
            borderRightColor: a.string,
            borderBottomColor: a.string,
            borderLeftColor: a.string,
            borderRadius: a.number,
            opacity: a.number,
            overflow: a.oneOf(["visible", "hidden"]),
            shadowColor: a.string,
            shadowOffset: a.shape({
                h: a.number,
                w: a.number
            }),
            shadowOpacity: a.number,
            shadowRadius: a.number,
            transformMatrix: a.arrayOf(a.number),
            rotation: a.number,
            scaleX: a.number,
            scaleY: a.number,
            translateX: a.number,
            translateY: a.number
        });
    module/*i*/.exports = l
});