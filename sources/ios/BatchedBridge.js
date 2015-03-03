__d("BatchedBridge",["BatchedBridgeFactory","MessageQueue"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("BatchedBridgeFactory"),
        exports/*a*/ = require/*t*/("MessageQueue"),
        BatchedBridgeFactory/*s*/ = __fbBatchedBridgeConfig.remoteModuleConfig,
        MessageQueue/*l*/ = __fbBatchedBridgeConfig.localModulesConfig,
        u = o.create(exports/*a*/, BatchedBridgeFactory/*s*/, MessageQueue/*l*/);
    u._config = BatchedBridgeFactory/*s*/, module/*i*/.exports = u
});