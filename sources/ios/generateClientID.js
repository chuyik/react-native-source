__d("generateClientID",["crc32","performanceNow"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        return u + l++
    }
    var a = require/*t*/("crc32"),
        s = require/*t*/("performanceNow"),
        l = 1,
        u = "client:" + a("" + s());
    module/*i*/.exports = o
});