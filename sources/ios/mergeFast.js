__d("mergeFast",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = function(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = {};
        for (var requireLazy/*r*/ in global/*e*/) requireDynamic/*n*/[requireLazy/*r*/] = global/*e*/[requireLazy/*r*/];
        for (var module/*i*/ in require/*t*/) requireDynamic/*n*/[module/*i*/] = require/*t*/[module/*i*/];
        return requireDynamic/*n*/
    };
    module/*i*/.exports = o
});