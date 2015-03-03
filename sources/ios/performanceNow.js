__d("performanceNow",["performance"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = require/*t*/("performance");
    o && o.now || (o = Date);
    var a = o.now.bind(o);
    module/*i*/.exports = a
});