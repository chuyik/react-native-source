__d("forEachObject",[],function (e, t, n, r, i) {
    "use strict";

    function o(e, t, n) {
        for (var r in e) a.call(e, r) && t.call(n, e[r], r, e)
    }
    var a = Object.prototype.hasOwnProperty;
    i.exports = o
});