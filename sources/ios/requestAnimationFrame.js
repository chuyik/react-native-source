__d("requestAnimationFrame",["emptyFunction","nativeRequestAnimationFrame"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = require/*t*/("emptyFunction"),
        a = require/*t*/("nativeRequestAnimationFrame"),
        s = 0,
        l = a || function(require/*t*/) {
            var requireDynamic/*n*/ = Date.now(),
                requireLazy/*r*/ = Math.max(0, 16 - (requireDynamic/*n*/ - s));
            return s = requireDynamic/*n*/ + requireLazy/*r*/, global/*e*/.setTimeout(function() {
                require/*t*/(Date.now())
            }, requireLazy/*r*/)
        };
    l(o), module/*i*/.exports = l
});