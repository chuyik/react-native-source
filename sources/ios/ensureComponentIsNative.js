__d("ensureComponentIsNative",["invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var invariant/*o*/ = require/*t*/("invariant"),
        a = function(global/*e*/) {
            global/*e*/ && "function" == typeof global/*e*/.setNativeProps || invariant/*o*/(0, "Touchable child must either be native or forward setNativeProps to a native component")
        };
    module/*i*/.exports = a
});