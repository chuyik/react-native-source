__d("generateRQLFieldAlias",["crc32"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        var require/*t*/ = global/*e*/.indexOf(".");
        return -1 === require/*t*/ ? global/*e*/ : s + global/*e*/.substr(0, require/*t*/) + a(global/*e*/).toString(36)
    }
    var a = require/*t*/("crc32"),
        s = "_";
    module/*i*/.exports = o
});