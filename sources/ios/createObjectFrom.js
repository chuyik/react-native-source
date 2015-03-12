__d("createObjectFrom",[],function (e, t, n, r, i) {
    function o(e, t) {
        if (__DEV__ && !Array.isArray(e)) throw new TypeError("Must pass an array of keys.");
        var n = {},
            r = Array.isArray(t);
        "undefined" == typeof t && (t = !0);
        for (var i = e.length; i--;) n[e[i]] = r ? t[i] : t;
        return n
    }
    i.exports = o
});