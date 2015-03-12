__d("generateRQLFieldAlias",["crc32"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        var t = e.indexOf(".");
        return -1 === t ? e : s + e.substr(0, t) + crc32/*a*/(e).toString(36)
    }
    var crc32/*a*/ = t("crc32"),
        s = "_";
    i.exports = o
});