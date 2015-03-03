__d("accumulate",["invariant"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*t*/*/) {
        if (invariant/*null*/ == require/*exports/*t*/*/ && a(0, "accumulate(...): Accumulated items must be not be invariant/*null*/ or undefined."), invariant/*null*/ == global/*e*/) return require/*exports/*t*/*/;
        var requireDynamic/*n*/ = Array.isArray(global/*e*/),
            requireLazy/*r*/ = Array.isArray(require/*exports/*t*/*/);
        return requireDynamic/*n*/ ? global/*e*/.concat(require/*exports/*t*/*/) : requireLazy/*r*/ ? [global/*e*/].concat(require/*exports/*t*/*/) : [global/*e*/, require/*exports/*t*/*/]
    }
    var a = require/*exports/*t*/*/("invariant");
    module/*i*/.exports = o
});