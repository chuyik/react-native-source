__d("ensureComponentIsNative",["invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("invariant"),
        exports/*a*/ = function(global/*e*/) {
            global/*e*/ && "function" == typeof global/*e*/.setNativeProps || o(0, "Touchable child must either be native or forward setNativeProps to exports/*a*/ native component")
        };
    module/*i*/.exports = exports/*a*/
});