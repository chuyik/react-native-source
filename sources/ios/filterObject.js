__d("filterObject",[],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
        if (!global/*e*/) return null;
        var requireLazy/*r*/ = {};
        for (var module/*i*/ in global/*e*/) global/*e*/.hasOwnProperty(module/*i*/) && require/*exports/*t*/*/.call(requireDynamic/*n*/, global/*e*/[module/*i*/], module/*i*/) && (requireLazy/*r*/[module/*i*/] = global/*e*/[module/*i*/]);
        return requireLazy/*r*/
    }
    module/*i*/.exports = o
});