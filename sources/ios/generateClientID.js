__d("generateClientID",["crc32","performanceNow"],function (e, t, n, r, i) {
    "use strict";

    function o() {
        return u + l++
    }
    var crc32/*a*/ = t("crc32"),
        performanceNow/*s*/ = t("performanceNow"),
        l = 1,
        u = "client:" + crc32/*a*/("" + performanceNow/*s*/());
    i.exports = o
});