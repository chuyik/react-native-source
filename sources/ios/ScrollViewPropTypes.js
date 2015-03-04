__d("ScrollViewPropTypes",["EdgeInsetsPropType","PointPropType","ReactPropTypes","StyleSheetPropType","ViewStylePropTypes","nativePropType"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var EdgeInsetsPropType/*o*/ = require/*t*/("EdgeInsetsPropType"),
        PointPropType/*a*/ = require/*t*/("PointPropType"),
        ReactPropTypes/*s*/ = require/*t*/("ReactPropTypes"),
        StyleSheetPropType/*l*/ = require/*t*/("StyleSheetPropType"),
        ViewStylePropTypes/*u*/ = require/*t*/("ViewStylePropTypes"),
        nativePropType/*c*/ = require/*t*/("nativePropType"),
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
    module/*i*/.exports = p
});