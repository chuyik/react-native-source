__d("ViewStylePropTypes",["LayoutPropTypes","ReactPropTypes","merge"],function (e, t, n, r, i) {
    "use strict";
    var LayoutPropTypes/*o*/ = t("LayoutPropTypes"),
        ReactPropTypes/*a*/ = t("ReactPropTypes"),
        merge/*s*/ = t("merge"),
        l = merge/*s*/(LayoutPropTypes/*o*/, {
            backgroundColor: ReactPropTypes/*a*/.string,
            borderColor: ReactPropTypes/*a*/.string,
            borderTopColor: ReactPropTypes/*a*/.string,
            borderRightColor: ReactPropTypes/*a*/.string,
            borderBottomColor: ReactPropTypes/*a*/.string,
            borderLeftColor: ReactPropTypes/*a*/.string,
            borderRadius: ReactPropTypes/*a*/.number,
            opacity: ReactPropTypes/*a*/.number,
            overflow: ReactPropTypes/*a*/.oneOf(["visible", "hidden"]),
            shadowColor: ReactPropTypes/*a*/.string,
            shadowOffset: ReactPropTypes/*a*/.shape({
                h: ReactPropTypes/*a*/.number,
                w: ReactPropTypes/*a*/.number
            }),
            shadowOpacity: ReactPropTypes/*a*/.number,
            shadowRadius: ReactPropTypes/*a*/.number,
            transformMatrix: ReactPropTypes/*a*/.arrayOf(ReactPropTypes/*a*/.number),
            rotation: ReactPropTypes/*a*/.number,
            scaleX: ReactPropTypes/*a*/.number,
            scaleY: ReactPropTypes/*a*/.number,
            translateX: ReactPropTypes/*a*/.number,
            translateY: ReactPropTypes/*a*/.number
        });
    i.exports = l
});