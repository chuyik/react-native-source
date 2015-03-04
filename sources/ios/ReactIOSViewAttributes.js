__d("ReactIOSViewAttributes",["merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var merge/*o*/ = require/*t*/("merge"),
        a = {};
    a.UIView = {
        pointerEvents: !0,
        accessible: !0,
        accessibilityLabel: !0,
        testID: !0
    }, a.RKView = merge/*o*/(a.UIView, {
        removeClippedSubviews: !0
    }), module/*i*/.exports = a
});