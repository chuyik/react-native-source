__d("throwImmediate",["setImmediate"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        throw global/*e*/
    }

    function a(global/*e*/) {
        s(o, global/*e*/)
    }
    var s = require/*t*/("setImmediate");
    module/*i*/.exports = a
});