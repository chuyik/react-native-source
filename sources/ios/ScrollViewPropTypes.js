__d("ScrollViewPropTypes",["EdgeInsetsPropType","PointPropType","ReactPropTypes","StyleSheetPropType","ViewStylePropTypes","nativePropType"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("EdgeInsetsPropType"),
        a = require/*t*/("PointPropType"),
        s = require/*t*/("ReactPropTypes"),
        l = require/*t*/("StyleSheetPropType"),
        u = require/*t*/("ViewStylePropTypes"),
        c = require/*t*/("nativePropType"),
        p = {
            automaticallyAdjustContentInsets: c(s.bool),
            contentInset: c(o),
            contentOffset: c(a),
            onScroll: s.func,
            onScrollAnimationEnd: s.func,
            scrollEnabled: c(s.bool),
            scrollIndicatorInsets: c(o),
            showsHorizontalScrollIndicator: c(s.bool),
            showsVerticalScrollIndicator: c(s.bool),
            style: l(u),
            throttleScrollCallbackMS: c(s.number)
        };
    module/*i*/.exports = p
});