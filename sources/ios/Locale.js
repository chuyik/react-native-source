__d("Locale",["Style","ExecutionEnvironment","UnicodeBidiDirection"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o() {
        return u.canUseDOM ? void 0 === s && (s = "rtl" === l.get(document.body, "direction")) : s = !1, s
    }

    function a() {
        return o() ? c.RTL : c.LTR
    }
    var s, l = require/*t*/("Style"),
        u = require/*t*/("ExecutionEnvironment"),
        c = require/*t*/("UnicodeBidiDirection"),
        p = {
            isRTL: o,
            getDirection: a
        };
    module/*i*/.exports = p
});