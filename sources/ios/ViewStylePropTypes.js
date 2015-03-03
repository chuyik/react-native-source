__d("ViewStylePropTypes",["LayoutPropTypes","ReactPropTypes","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("LayoutPropTypes"),
        exports/*a*/ = require/*t*/("ReactPropTypes"),
        LayoutPropTypes/*s*/ = require/*t*/("merge"),
        ReactPropTypes/*l*/ = LayoutPropTypes/*s*/(o, {
            backgroundColor: exports/*a*/.string,
            merge/*borderColor*/: exports/*a*/.string,
            borderTopColor: exports/*a*/.string,
            borderRightColor: exports/*a*/.string,
            borderBottomColor: exports/*a*/.string,
            borderLeftColor: exports/*a*/.string,
            borderRadius: exports/*a*/.number,
            opacity: exports/*a*/.number,
            overflow: exports/*a*/.oneOf(["visible", "hidden"]),
            shadowColor: exports/*a*/.string,
            shadowOffset: exports/*a*/.shape({
                h: exports/*a*/.number,
                w: exports/*a*/.number
            }),
            shadowOpacity: exports/*a*/.number,
            shadowRadius: exports/*a*/.number,
            transformMatrix: exports/*a*/.arrayOf(exports/*a*/.number),
            rotation: exports/*a*/.number,
            scaleX: exports/*a*/.number,
            scaleY: exports/*a*/.number,
            translateX: exports/*a*/.number,
            translateY: exports/*a*/.number
        });
    module/*i*/.exports = ReactPropTypes/*l*/
});