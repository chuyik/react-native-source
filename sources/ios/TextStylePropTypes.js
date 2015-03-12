__d("TextStylePropTypes",["ReactPropTypes","ViewStylePropTypes","merge"],function (e, t, n, r, i) {
    "use strict";
    var ReactPropTypes/*o*/ = t("ReactPropTypes"),
        ViewStylePropTypes/*a*/ = t("ViewStylePropTypes"),
        merge/*s*/ = t("merge"),
        l = merge/*s*/(ViewStylePropTypes/*a*/, {
            fontFamily: ReactPropTypes/*o*/.string,
            fontSize: ReactPropTypes/*o*/.number,
            fontWeight: ReactPropTypes/*o*/.oneOf(["normal", "bold"]),
            lineHeight: ReactPropTypes/*o*/.number,
            color: ReactPropTypes/*o*/.string,
            containerBackgroundColor: ReactPropTypes/*o*/.string,
            textAlign: ReactPropTypes/*o*/.oneOf(["auto", "left", "right", "center"]),
            writingDirection: ReactPropTypes/*o*/.oneOf(["auto", "ltr", "rtl"])
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
    i.exports = l
});