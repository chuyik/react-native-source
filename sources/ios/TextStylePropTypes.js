__d("TextStylePropTypes",["ReactPropTypes","ViewStylePropTypes","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ReactPropTypes"),
        exports/*a*/ = require/*t*/("ViewStylePropTypes"),
        ReactPropTypes/*s*/ = require/*t*/("merge"),
        ViewStylePropTypes/*l*/ = ReactPropTypes/*s*/(exports/*a*/, {
            fontFamily: o.string,
            merge/*fontSize*/: o.number,
            fontWeight: o.oneOf(["normal", "bold"]),
            lineHeight: o.number,
            color: o.string,
            containerBackgroundColor: o.string,
            textAlign: o.oneOf(["auto", "left", "right", "center"]),
            writingDirection: o.oneOf(["auto", "ltr", "rtl"])
        }),
        u = Object.keys({
            padding: null,
            paddingTop: null,
            paddingLeft: null,
            paddingRight: null,
            paddingBottom: null,
            paddingVertical: null,
            paddingHorizontal: null
        });
    for (var c in u) delete ViewStylePropTypes/*l*/[c];
    module/*i*/.exports = ViewStylePropTypes/*l*/
});