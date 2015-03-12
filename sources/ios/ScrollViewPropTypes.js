__d("ScrollViewPropTypes",["EdgeInsetsPropType","PointPropType","ReactPropTypes","StyleSheetPropType","ViewStylePropTypes","nativePropType"],function (e, t, n, r, i) {
    "use strict";
    var EdgeInsetsPropType/*o*/ = t("EdgeInsetsPropType"),
        PointPropType/*a*/ = t("PointPropType"),
        ReactPropTypes/*s*/ = t("ReactPropTypes"),
        StyleSheetPropType/*l*/ = t("StyleSheetPropType"),
        ViewStylePropTypes/*u*/ = t("ViewStylePropTypes"),
        nativePropType/*c*/ = t("nativePropType"),
        p = {
            automaticallyAdjustContentInsets: nativePropType/*c*/(ReactPropTypes/*s*/.bool),
            contentInset: nativePropType/*c*/(EdgeInsetsPropType/*o*/),
            contentOffset: nativePropType/*c*/(PointPropType/*a*/),
            onScroll: ReactPropTypes/*s*/.func,
            onScrollAnimationEnd: ReactPropTypes/*s*/.func,
            scrollEnabled: nativePropType/*c*/(ReactPropTypes/*s*/.bool),
            scrollIndicatorInsets: nativePropType/*c*/(EdgeInsetsPropType/*o*/),
            showsHorizontalScrollIndicator: nativePropType/*c*/(ReactPropTypes/*s*/.bool),
            showsVerticalScrollIndicator: nativePropType/*c*/(ReactPropTypes/*s*/.bool),
            style: StyleSheetPropType/*l*/(ViewStylePropTypes/*u*/),
            throttleScrollCallbackMS: nativePropType/*c*/(ReactPropTypes/*s*/.number)
        };
    i.exports = p
});