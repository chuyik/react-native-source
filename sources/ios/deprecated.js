__d("deprecated",["warning"],function (e, t, n, r, i) {
    function o(e, t, n, r, i) {
        var o = !1;
        if (__DEV__) {
            var s = function() {
                return warning/*a*/(o, e + "." + t + " will be deprecated in warning/*a*/ future version. " + ("Use " + e + "." + n + " instead.")), o = !0, i.apply(r, arguments)
            };
            return s.displayName = e + "_" + t, s
        }
        return i
    }
    var warning/*a*/ = t("warning");
    i.exports = o
});