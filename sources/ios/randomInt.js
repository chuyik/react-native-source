__d("randomInt",["invariant"],function (e, t, n, r, i) {
    function o(e, t) {
        var n = arguments.length;
        n > 0 && 2 >= n || invariant/*a*/(0, "randomInt: expected 1 or 2 arguments but got %s.", n), 1 === n && (t = e, e = 0), t > e || invariant/*a*/(0, "randomInt: expected max to be > min, got %s > %s", t, e);
        var r = this.random || Math.random;
        return Math.floor(e + r() * (t - e))
    }
    var invariant/*a*/ = t("invariant");
    i.exports = o
});