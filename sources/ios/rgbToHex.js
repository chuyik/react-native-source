__d("rgbToHex",[],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        var t = Math.round(e).toString(16);
        return 1 === t.length ? "0" + t : t
    }

    function a(e, t, n) {
        return "#" + o(e) + o(t) + o(n)
    }
    i.exports = a
});