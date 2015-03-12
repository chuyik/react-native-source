__d("repeatString",["invariant"],function (e, t, n, r, i) {
    function o(e, t) {
        if (1 === t) return e;
        t >= 0 || invariant/*a*/(0, "Can not repeat by negative number: %s", t);
        for (var n = ""; t;) 1 & t && (n += e), (t >>= 1) && (e += e);
        return n
    }
    var invariant/*a*/ = t("invariant");
    i.exports = o
});