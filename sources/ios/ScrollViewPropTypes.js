__d("ScrollViewPropTypes",["EdgeInsetsPropType","PointPropType","ReactPropTypes","StyleSheetPropType","ViewStylePropTypes","nativePropType"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("EdgeInsetsPropType"),
        exports/*a*/ = require/*t*/("PointPropType"),
        EdgeInsetsPropType/*s*/ = require/*t*/("ReactPropTypes"),
        PointPropType/*l*/ = require/*t*/("StyleSheetPropType"),
        ReactPropTypes/*u*/ = require/*t*/("ViewStylePropTypes"),
        StyleSheetPropType/*c*/ = require/*t*/("nativePropType"),
        ViewStylePropTypes/*p*/ = {
            automaticallyAdjustContentInsets: StyleSheetPropType/*c*/(EdgeInsetsPropType/*s*/.bool),
            nativePropType/*contentInset*/: StyleSheetPropType/*c*/(o),
            contentOffset: StyleSheetPropType/*c*/(exports/*a*/),
            onScroll: EdgeInsetsPropType/*s*/.func,
            onScrollAnimationEnd: EdgeInsetsPropType/*s*/.func,
            scrollEnabled: StyleSheetPropType/*c*/(EdgeInsetsPropType/*s*/.bool),
            scrollIndicatorInsets: StyleSheetPropType/*c*/(o),
            showsHorizontalScrollIndicator: StyleSheetPropType/*c*/(EdgeInsetsPropType/*s*/.bool),
            showsVerticalScrollIndicator: StyleSheetPropType/*c*/(EdgeInsetsPropType/*s*/.bool),
            style: PointPropType/*l*/(ReactPropTypes/*u*/),
            throttleScrollCallbackMS: StyleSheetPropType/*c*/(EdgeInsetsPropType/*s*/.number)
        };
    module/*i*/.exports = ViewStylePropTypes/*p*/
});