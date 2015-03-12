__d("isEmpty",[],function (e, t, n, r, i) {
    function o(e) {
        if (Array.isArray(e)) return 0 === e.length;
        if ("object" == typeof e) {
            for (var t in e) return !1;
            return !0
        }
        return !e
    }
    i.exports = o
});