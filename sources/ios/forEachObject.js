__d("forEachObject",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        for (var requireLazy/*r*/ in global/*e*/) a.call(global/*e*/, requireLazy/*r*/) && require/*t*/.call(requireDynamic/*n*/, global/*e*/[requireLazy/*r*/], requireLazy/*r*/, global/*e*/)
    }
    var a = Object.prototype.hasOwnProperty;
    module/*i*/.exports = o
});