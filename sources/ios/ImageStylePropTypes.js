__d("ImageStylePropTypes",["ImageResizeMode","LayoutPropTypes","ReactPropTypes","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ImageResizeMode"),
        exports/*a*/ = require/*t*/("LayoutPropTypes"),
        ImageResizeMode/*s*/ = require/*t*/("ReactPropTypes"),
        LayoutPropTypes/*l*/ = require/*t*/("merge"),
        ReactPropTypes/*u*/ = LayoutPropTypes/*l*/(exports/*a*/, {
            resizeMode: ImageResizeMode/*s*/.oneOf(Object.keys(o)),
            merge/*backgroundColor*/: ImageResizeMode/*s*/.string,
            borderColor: ImageResizeMode/*s*/.string,
            borderWidth: ImageResizeMode/*s*/.number,
            borderRadius: ImageResizeMode/*s*/.number,
            tintColor: ImageResizeMode/*s*/.string,
            opacity: ImageResizeMode/*s*/.number
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
    for (var p in c) delete ReactPropTypes/*u*/[p];
    module/*i*/.exports = ReactPropTypes/*u*/
});