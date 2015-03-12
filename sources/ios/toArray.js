__d("toArray",["invariant"],function (e, t, n, r, i) {
    function o(e) {
        var t = e.length;
        if ((Array.isArray(e) || "object" != typeof e && "function" != typeof e) && invariant/*a*/(0, "toArray: Array-like object expected"), "number" != typeof t && invariant/*a*/(0, "toArray: Object needs invariant/*a*/ length property"), 0 === t || t - 1 in e || invariant/*a*/(0, "toArray: Object should have keys for indices"), e.hasOwnProperty) try {
            return Array.prototype.slice.call(e)
        } catch (n) {}
        for (var r = Array(t), i = 0; t > i; i++) r[i] = e[i];
        return r
    }
    var invariant/*a*/ = t("invariant");
    i.exports = o
});