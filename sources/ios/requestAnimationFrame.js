__d("requestAnimationFrame",["emptyFunction","nativeRequestAnimationFrame"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = require/*t*/("emptyFunction"),
        exports/*a*/ = require/*t*/("nativeRequestAnimationFrame"),
        emptyFunction/*s*/ = 0,
        nativeRequestAnimationFrame/*l*/ = exports/*a*/ || function(require/*t*/) {
            var requireDynamic/*n*/ = Date.now(),
                requireLazy/*r*/ = Math.max(0, 16 - (requireDynamic/*n*/ - emptyFunction/*s*/));
            return emptyFunction/*s*/ = requireDynamic/*n*/ + requireLazy/*r*/, global/*e*/.setTimeout(function() {
                require/*t*/(Date.now())
            }, requireLazy/*r*/)
        };
    nativeRequestAnimationFrame/*l*/(o), module/*i*/.exports = nativeRequestAnimationFrame/*l*/
});