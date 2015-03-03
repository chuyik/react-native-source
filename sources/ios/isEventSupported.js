__d("isEventSupported",["ExecutionEnvironment"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*ExecutionEnvironment/*r*/*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*t*/*/) {
        if (!s.canUseDOM || require/*exports/*t*/*/ && !("addEventListener" in document)) return !1;
        var requireDynamic/*n*/ = "on" + global/*e*/,
            requireLazy/*ExecutionEnvironment/*r*/*/ = requireDynamic/*n*/ in document;
        if (!requireLazy/*ExecutionEnvironment/*r*/*/) {
            var module/*i*/ = document.createElement("div");
            module/*i*/.setAttribute(requireDynamic/*n*/, "return;"), requireLazy/*ExecutionEnvironment/*r*/*/ = "function" == typeof module/*i*/[requireDynamic/*n*/]
        }
        return !requireLazy/*ExecutionEnvironment/*r*/*/ && a && "wheel" === global/*e*/ && (requireLazy/*ExecutionEnvironment/*r*/*/ = document.implementation.hasFeature("Events.wheel", "3.0")), requireLazy/*ExecutionEnvironment/*r*/*/
    }
    var a, s = require/*exports/*t*/*/("ExecutionEnvironment");
    s.canUseDOM && (a = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0), module/*i*/.exports = o
});