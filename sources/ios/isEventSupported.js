__d("isEventSupported",["ExecutionEnvironment"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        if (!ExecutionEnvironment/*s*/.canUseDOM || require/*t*/ && !("addEventListener" in document)) return !1;
        var requireDynamic/*n*/ = "on" + global/*e*/,
            requireLazy/*r*/ = requireDynamic/*n*/ in document;
        if (!requireLazy/*r*/) {
            var module/*i*/ = document.createElement("div");
            module/*i*/.setAttribute(requireDynamic/*n*/, "return;"), requireLazy/*r*/ = "function" == typeof module/*i*/[requireDynamic/*n*/]
        }
        return !requireLazy/*r*/ && a && "wheel" === global/*e*/ && (requireLazy/*r*/ = document.implementation.hasFeature("Events.wheel", "3.0")), requireLazy/*r*/
    }
    var a, ExecutionEnvironment/*s*/ = require/*t*/("ExecutionEnvironment");
    ExecutionEnvironment/*s*/.canUseDOM && (a = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0), module/*i*/.exports = o
});