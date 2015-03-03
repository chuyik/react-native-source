__d("generateClientID",["crc32","performanceNow"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        return performanceNow/*u*/ + crc32/*l*/++
    }
    var a = require/*t*/("crc32"),
        exports/*s*/ = require/*t*/("performanceNow"),
        crc32/*l*/ = 1,
        performanceNow/*u*/ = "client:" + a("" + exports/*s*/());
    module/*i*/.exports = o
});