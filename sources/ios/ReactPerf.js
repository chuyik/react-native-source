__d("ReactPerf",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        return requireDynamic/*n*/
    }
    var a = {
        enableMeasure: !1,
        storedMeasure: o,
        measure: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
            if (__DEV__) {
                var requireLazy/*r*/ = null,
                    module/*i*/ = function() {
                        return a.enableMeasure ? (requireLazy/*r*/ || (requireLazy/*r*/ = a.storedMeasure(global/*e*/, require/*t*/, requireDynamic/*n*/)), requireLazy/*r*/.apply(this, arguments)) : requireDynamic/*n*/.apply(this, arguments)
                    };
                return module/*i*/.displayName = global/*e*/ + "_" + require/*t*/, module/*i*/
            }
            return requireDynamic/*n*/
        },
        injection: {
            injectMeasure: function(global/*e*/) {
                a.storedMeasure = global/*e*/
            }
        }
    };
    module/*i*/.exports = a
});