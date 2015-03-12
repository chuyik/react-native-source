__d("ReactIOSViewAttributes",["merge"],function (e, t, n, r, i) {
    "use strict";
    var merge/*o*/ = t("merge"),
        a = {};
    a.UIView = {
        pointerEvents: !0,
        accessible: !0,
        accessibilityLabel: !0,
        testID: !0
    }, a.RKView = merge/*o*/(a.UIView, {
        removeClippedSubviews: !0
    }), i.exports = a
});