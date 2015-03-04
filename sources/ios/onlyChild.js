__d("onlyChild",["ReactElement","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        return ReactElement/*a*/.isValidElement(global/*e*/) || invariant/*s*/(0, "onlyChild must be passed ReactElement/*a*/ children with exactly one child."), global/*e*/
    }
    var ReactElement/*a*/ = require/*t*/("ReactElement"),
        invariant/*s*/ = require/*t*/("invariant");
    module/*i*/.exports = o
});