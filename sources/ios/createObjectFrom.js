__d("createObjectFrom",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        if (__DEV__ && !Array.isArray(global/*e*/)) throw new TypeError("Must pass an array of keys.");
        var requireDynamic/*n*/ = {},
            requireLazy/*r*/ = Array.isArray(require/*t*/);
        "undefined" == typeof require/*t*/ && (require/*t*/ = !0);
        for (var module/*i*/ = global/*e*/.length; module/*i*/--;) requireDynamic/*n*/[global/*e*/[module/*i*/]] = requireLazy/*r*/ ? require/*t*/[module/*i*/] : require/*t*/;
        return requireDynamic/*n*/
    }
    module/*i*/.exports = o
});