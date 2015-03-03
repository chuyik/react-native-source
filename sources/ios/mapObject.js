__d("mapObject",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        if (!global/*e*/) return null;
        var requireLazy/*r*/ = {};
        for (var module/*i*/ in global/*e*/) a.call(global/*e*/, module/*i*/) && (requireLazy/*r*/[module/*i*/] = require/*t*/.call(requireDynamic/*n*/, global/*e*/[module/*i*/], module/*i*/, global/*e*/));
        return requireLazy/*r*/
    }
    var a = Object.prototype.hasOwnProperty;
    module/*i*/.exports = o
});