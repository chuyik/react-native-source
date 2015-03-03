__d("binarySearch",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        if (__DEV__ && "number" != typeof global/*e*/.length) throw new TypeError("binarySearch() must be passed array-like object.");
        for (var requireDynamic/*n*/ = 0, requireLazy/*r*/ = global/*e*/.length - 1; requireLazy/*r*/ >= requireDynamic/*n*/;) {
            var module/*i*/ = Math.floor((requireLazy/*r*/ + requireDynamic/*n*/) / 2),
                o = require/*t*/(global/*e*/[module/*i*/], module/*i*/);
            if (0 === o) return module/*i*/;
            o > 0 ? requireLazy/*r*/ = module/*i*/ - 1 : requireDynamic/*n*/ = module/*i*/ + 1
        }
        return -1
    }
    module/*i*/.exports = o
});