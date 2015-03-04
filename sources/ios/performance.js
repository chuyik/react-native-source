__d("performance",["ExecutionEnvironment"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o, ExecutionEnvironment/*a*/ = require/*t*/("ExecutionEnvironment");
    ExecutionEnvironment/*a*/.canUseDOM && (o = window.performance || window.msPerformance || window.webkitPerformance), module/*i*/.exports = o || {}
});