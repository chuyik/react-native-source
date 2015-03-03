__d("cssVar",["invariant","CSSVarConfig"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("invariant"),
        a = require/*t*/("CSSVarConfig"),
        s = function(global/*e*/) {
            return a[global/*e*/] || o(0, "invalid css variable " + global/*e*/), a[global/*e*/]
        };
    module/*i*/.exports = s
});