__d("TextStylePropTypes",["ReactPropTypes","ViewStylePropTypes","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ReactPropTypes"),
        a = require/*t*/("ViewStylePropTypes"),
        s = require/*t*/("merge"),
        l = s(a, {
            fontFamily: o.string,
            fontSize: o.number,
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
    for (var c in u) delete l[c];
    module/*i*/.exports = l
});