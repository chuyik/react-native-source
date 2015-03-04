__d("requestAnimationFrame",["emptyFunction","nativeRequestAnimationFrame"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var emptyFunction/*o*/ = require/*t*/("emptyFunction"),
        nativeRequestAnimationFrame/*a*/ = require/*t*/("nativeRequestAnimationFrame"),
        s = 0,
        l = nativeRequestAnimationFrame/*a*/ || function(require/*t*/) {
            var requireDynamic/*n*/ = Date.now(),
                requireLazy/*r*/ = Math.max(0, 16 - (requireDynamic/*n*/ - s));
            return s = requireDynamic/*n*/ + requireLazy/*r*/, global/*e*/.setTimeout(function() {
                require/*t*/(Date.now())
            }, requireLazy/*r*/)
        };
    l(emptyFunction/*o*/), module/*i*/.exports = l
});