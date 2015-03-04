__d("keyMirror",["invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var invariant/*o*/ = require/*t*/("invariant"),
        a = function(global/*e*/) {
            var require/*t*/, requireDynamic/*n*/ = {};
            global/*e*/ instanceof Object && !Array.isArray(global/*e*/) || invariant/*o*/(0, "keyMirror(...): Argument must be an object.");
            for (require/*t*/ in global/*e*/) global/*e*/.hasOwnProperty(require/*t*/) && (requireDynamic/*n*/[require/*t*/] = require/*t*/);
            return requireDynamic/*n*/
        };
    module/*i*/.exports = a
});