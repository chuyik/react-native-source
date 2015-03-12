__d("mapObject",[],function (e, t, n, r, i) {
    "use strict";

    function o(e, t, n) {
        if (!e) return null;
        var r = {};
        for (var i in e) a.call(e, i) && (r[i] = t.call(n, e[i], i, e));
        return r
    }
    var a = Object.prototype.hasOwnProperty;
    i.exports = o
});