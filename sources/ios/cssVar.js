__d("cssVar",["invariant","CSSVarConfig"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var invariant/*o*/ = require/*t*/("invariant"),
        CSSVarConfig/*a*/ = require/*t*/("CSSVarConfig"),
        s = function(global/*e*/) {
            return CSSVarConfig/*a*/[global/*e*/] || invariant/*o*/(0, "invalid css variable " + global/*e*/), CSSVarConfig/*a*/[global/*e*/]
        };
    module/*i*/.exports = s
});