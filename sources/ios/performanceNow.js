__d("performanceNow",["performance"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var performance/*o*/ = require/*t*/("performance");
    performance/*o*/ && performance/*o*/.now || (performance/*o*/ = Date);
    var a = performance/*o*/.now.bind(performance/*o*/);
    module/*i*/.exports = a
});