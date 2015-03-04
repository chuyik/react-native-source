__d("generateClientID",["crc32","performanceNow"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        return u + l++
    }
    var crc32/*a*/ = require/*t*/("crc32"),
        performanceNow/*s*/ = require/*t*/("performanceNow"),
        l = 1,
        u = "client:" + crc32/*a*/("" + performanceNow/*s*/());
    module/*i*/.exports = o
});