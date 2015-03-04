__d("NativeModules",["BatchedBridge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var BatchedBridge/*o*/ = require/*t*/("BatchedBridge").RemoteModules;
    Object.keys(BatchedBridge/*o*/).forEach(function(global/*e*/) {
        var require/*t*/ = global/*e*/.replace(/^RCT/, "RK");
        BatchedBridge/*o*/[require/*t*/] = BatchedBridge/*o*/[global/*e*/]
    }), module/*i*/.exports = BatchedBridge/*o*/
});