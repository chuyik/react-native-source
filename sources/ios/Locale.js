__d("Locale",["Style","ExecutionEnvironment","UnicodeBidiDirection"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o() {
        return ExecutionEnvironment/*u*/.canUseDOM ? void 0 === s && (s = "rtl" === Style/*l*/.get(document.body, "direction")) : s = !1, s
    }

    function a() {
        return o() ? UnicodeBidiDirection/*c*/.RTL : UnicodeBidiDirection/*c*/.LTR
    }
    var s, Style/*l*/ = require/*t*/("Style"),
        ExecutionEnvironment/*u*/ = require/*t*/("ExecutionEnvironment"),
        UnicodeBidiDirection/*c*/ = require/*t*/("UnicodeBidiDirection"),
        p = {
            isRTL: o,
            getDirection: a
        };
    module/*i*/.exports = p
});