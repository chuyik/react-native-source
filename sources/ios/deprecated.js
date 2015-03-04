__d("deprecated",["warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
        var o = !1;
        if (__DEV__) {
            var s = function() {
                return warning/*a*/(o, global/*e*/ + "." + require/*t*/ + " will be deprecated in warning/*a*/ future version. " + ("Use " + global/*e*/ + "." + requireDynamic/*n*/ + " instead.")), o = !0, module/*i*/.apply(requireLazy/*r*/, arguments)
            };
            return s.displayName = global/*e*/ + "_" + require/*t*/, s
        }
        return module/*i*/
    }
    var warning/*a*/ = require/*t*/("warning");
    module/*i*/.exports = o
});