__d("generateRQLFieldAlias",["crc32"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        var require/*exports/*t*/*/ = global/*e*/.indexOf(".");
        return -1 === require/*exports/*t*/*/ ? global/*e*/ : crc32/*s*/ + global/*e*/.substr(0, require/*exports/*t*/*/) + a(global/*e*/).toString(36)
    }
    var a = require/*exports/*t*/*/("crc32"),
        crc32/*s*/ = "_";
    module/*i*/.exports = o
});