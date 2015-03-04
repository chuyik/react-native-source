__d("accumulate",["invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        if (null == require/*t*/ && invariant/*a*/(0, "accumulate(...): Accumulated items must be not be null or undefined."), null == global/*e*/) return require/*t*/;
        var requireDynamic/*n*/ = Array.isArray(global/*e*/),
            requireLazy/*r*/ = Array.isArray(require/*t*/);
        return requireDynamic/*n*/ ? global/*e*/.concat(require/*t*/) : requireLazy/*r*/ ? [global/*e*/].concat(require/*t*/) : [global/*e*/, require/*t*/]
    }
    var invariant/*a*/ = require/*t*/("invariant");
    module/*i*/.exports = o
});