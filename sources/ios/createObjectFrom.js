__d("createObjectFrom",[],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*exports/*t*/*/) {
        if (__DEV__ && !Array.isArray(global/*e*/)) throw new TypeError("Must pass an array of keys.");
        var requireDynamic/*n*/ = {},
            requireLazy/*r*/ = Array.isArray(require/*exports/*t*/*/);
        "undefined" == typeof require/*exports/*t*/*/ && (require/*exports/*t*/*/ = !0);
        for (var module/*i*/ = global/*e*/.length; module/*i*/--;) requireDynamic/*n*/[global/*e*/[module/*i*/]] = requireLazy/*r*/ ? require/*exports/*t*/*/[module/*i*/] : require/*exports/*t*/*/;
        return requireDynamic/*n*/
    }
    module/*i*/.exports = o
});