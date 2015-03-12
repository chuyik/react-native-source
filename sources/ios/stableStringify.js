__d("stableStringify",[],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        return null !== e && "[object Object]" === Object.prototype.toString.call(e)
    }

    function a(e) {
        var t = Object.keys(e);
        if (t.length) {
            var n = [];
            t.sort();
            for (var r = 0; r < t.length; r++) {
                var i = t[r],
                    s = e[i];
                s = o(s) || Array.isArray(s) ? a(s) : JSON.stringify(s), n.push(i + ":" + s)
            }
            return Array.isArray(e) ? "[" + n.join(",") + "]" : "{" + n.join(",") + "}"
        }
        return JSON.stringify(e)
    }
    i.exports = a
});