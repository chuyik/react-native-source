__d("NativeModules",["BatchedBridge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("BatchedBridge").RemoteModules;
    Object.keys(o).forEach(function(global/*e*/) {
        var require/*t*/ = global/*e*/.replace(/^RCT/, "RK");
        o[require/*t*/] = o[global/*e*/]
    }), module/*i*/.exports = o
});