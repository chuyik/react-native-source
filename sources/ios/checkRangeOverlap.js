__d("checkRangeOverlap",["invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
        return require/*t*/ >= global/*e*/ && requireLazy/*r*/ >= requireDynamic/*n*/ || invariant/*a*/(0, "Start of range must be before or equal to end of range."), requireLazy/*r*/ > global/*e*/ && require/*t*/ > requireDynamic/*n*/
    }
    var invariant/*a*/ = require/*t*/("invariant");
    module/*i*/.exports = o
});