__d("ImageStylePropTypes",["ImageResizeMode","LayoutPropTypes","ReactPropTypes","merge"],function (e, t, n, r, i) {
    "use strict";
    var ImageResizeMode/*o*/ = t("ImageResizeMode"),
        LayoutPropTypes/*a*/ = t("LayoutPropTypes"),
        ReactPropTypes/*s*/ = t("ReactPropTypes"),
        merge/*l*/ = t("merge"),
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
    i.exports = u
});