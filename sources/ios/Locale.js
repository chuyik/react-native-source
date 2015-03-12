__d("Locale",["Style","ExecutionEnvironment","UnicodeBidiDirection"],function (e, t, n, r, i) {
    function o() {
        return ExecutionEnvironment/*u*/.canUseDOM ? void 0 === s && (s = "rtl" === Style/*l*/.get(document.body, "direction")) : s = !1, s
    }

    function a() {
        return o() ? UnicodeBidiDirection/*c*/.RTL : UnicodeBidiDirection/*c*/.LTR
    }
    var s, Style/*l*/ = t("Style"),
        ExecutionEnvironment/*u*/ = t("ExecutionEnvironment"),
        UnicodeBidiDirection/*c*/ = t("UnicodeBidiDirection"),
        p = {
            isRTL: o,
            getDirection: a
        };
    i.exports = p
});