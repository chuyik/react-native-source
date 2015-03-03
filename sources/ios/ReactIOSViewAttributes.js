__d("ReactIOSViewAttributes",["merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("merge"),
        exports/*a*/ = {};
    exports/*a*/.UIView = {
        pointerEvents: !0,
        merge/*accessible*/: !0,
        accessibilityLabel: !0,
        testID: !0
    }, exports/*a*/.RKView = o(exports/*a*/.UIView, {
        removeClippedSubviews: !0
    }), module/*i*/.exports = exports/*a*/
});