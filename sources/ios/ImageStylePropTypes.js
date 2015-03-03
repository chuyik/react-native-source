__d("ImageStylePropTypes",["ImageResizeMode","LayoutPropTypes","ReactPropTypes","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ImageResizeMode"),
        a = require/*t*/("LayoutPropTypes"),
        s = require/*t*/("ReactPropTypes"),
        l = require/*t*/("merge"),
        u = l(a, {
            resizeMode: s.oneOf(Object.keys(o)),
            backgroundColor: s.string,
            borderColor: s.string,
            borderWidth: s.number,
            borderRadius: s.number,
            tintColor: s.string,
            opacity: s.number
        }),
        c = Object.keys({
            padding: null,
            paddingTop: null,
            paddingLeft: null,
            paddingRight: null,
            paddingBottom: null,
            paddingVertical: null,
            paddingHorizontal: null
        });
    for (var p in c) delete u[p];
    module/*i*/.exports = u
});