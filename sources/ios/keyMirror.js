__d("keyMirror",["invariant"],function (global/*e*/, require/*t*/, requireDynamic/*invariant/*n*/*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("invariant"),
        exports/*a*/ = function(global/*e*/) {
            var require/*t*/, requireDynamic/*invariant/*n*/*/ = {};
            global/*e*/ instanceof Object && !Array.isArray(global/*e*/) || o(0, "keyMirror(...): Argument must be an object.");
            for (require/*t*/ in global/*e*/) global/*e*/.hasOwnProperty(require/*t*/) && (requireDynamic/*invariant/*n*/*/[require/*t*/] = require/*t*/);
            return requireDynamic/*invariant/*n*/*/
        };
    module/*i*/.exports = exports/*a*/
});