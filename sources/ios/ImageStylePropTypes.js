__d("ImageStylePropTypes",["ImageResizeMode","LayoutPropTypes","ReactPropTypes","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var ImageResizeMode/*o*/ = require/*t*/("ImageResizeMode"),
        LayoutPropTypes/*a*/ = require/*t*/("LayoutPropTypes"),
        ReactPropTypes/*s*/ = require/*t*/("ReactPropTypes"),
        merge/*l*/ = require/*t*/("merge"),
        u = merge/*l*/(LayoutPropTypes/*a*/, {
            resizeMode: ReactPropTypes/*s*/.oneOf(Object.keys(ImageResizeMode/*o*/)),
            backgroundColor: ReactPropTypes/*s*/.string,
            borderColor: ReactPropTypes/*s*/.string,
            borderWidth: ReactPropTypes/*s*/.number,
            borderRadius: ReactPropTypes/*s*/.number,
            tintColor: ReactPropTypes/*s*/.string,
            opacity: ReactPropTypes/*s*/.number
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