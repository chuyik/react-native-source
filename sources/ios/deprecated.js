__d("deprecated",["warning"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*warning/*n*/*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*exports/*t*/*/, requireDynamic/*warning/*n*/*/, requireLazy/*r*/, module/*i*/) {
        var o = !1;
        if (__DEV__) {
            var s = function() {
                return a(o, global/*e*/ + "." + require/*exports/*t*/*/ + " will be deprecated in a future version. " + ("Use " + global/*e*/ + "." + requireDynamic/*warning/*n*/*/ + " instead.")), o = !0, module/*i*/.apply(requireLazy/*r*/, arguments)
            };
            return s.displayName = global/*e*/ + "_" + require/*exports/*t*/*/, s
        }
        return module/*i*/
    }
    var a = require/*exports/*t*/*/("warning");
    module/*i*/.exports = o
});