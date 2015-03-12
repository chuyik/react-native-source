__d("isEventSupported",["ExecutionEnvironment"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        if (!ExecutionEnvironment/*s*/.canUseDOM || t && !("addEventListener" in document)) return !1;
        var n = "on" + e,
            r = n in document;
        if (!r) {
            var i = document.createElement("div");
            i.setAttribute(n, "return;"), r = "function" == typeof i[n]
        }
        return !r && a && "wheel" === e && (r = document.implementation.hasFeature("Events.wheel", "3.0")), r
    }
    var a, ExecutionEnvironment/*s*/ = t("ExecutionEnvironment");
    ExecutionEnvironment/*s*/.canUseDOM && (a = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0), i.exports = o
});