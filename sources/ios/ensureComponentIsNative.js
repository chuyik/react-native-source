__d("ensureComponentIsNative",["invariant"],function (e, t, n, r, i) {
    "use strict";
    var invariant/*o*/ = t("invariant"),
        a = function(e) {
            e && "function" == typeof e.setNativeProps || invariant/*o*/(0, "Touchable child must either be native or forward setNativeProps to a native component")
        };
    i.exports = a
});