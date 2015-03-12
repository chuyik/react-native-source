__d("filterObject",[],function (e, t, n, r, i) {
    "use strict";

    function o(e, t, n) {
        if (!e) return null;
        var r = {};
        for (var i in e) e.hasOwnProperty(i) && t.call(n, e[i], i) && (r[i] = e[i]);
        return r
    }
    i.exports = o
});