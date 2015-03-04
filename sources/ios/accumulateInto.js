__d("accumulateInto",["invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        if (null == require/*t*/ && invariant/*a*/(0, "accumulateInto(...): Accumulated items must not be null or undefined."), null == global/*e*/) return require/*t*/;
        var requireDynamic/*n*/ = Array.isArray(global/*e*/),
            requireLazy/*r*/ = Array.isArray(require/*t*/);
        return requireDynamic/*n*/ && requireLazy/*r*/ ? (global/*e*/.push.apply(global/*e*/, require/*t*/), global/*e*/) : requireDynamic/*n*/ ? (global/*e*/.push(require/*t*/), global/*e*/) : requireLazy/*r*/ ? [global/*e*/].concat(require/*t*/) : [global/*e*/, require/*t*/]
    }
    var invariant/*a*/ = require/*t*/("invariant");
    module/*i*/.exports = o
});