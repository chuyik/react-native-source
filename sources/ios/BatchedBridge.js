__d("BatchedBridge",["BatchedBridgeFactory","MessageQueue"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var BatchedBridgeFactory/*o*/ = require/*t*/("BatchedBridgeFactory"),
        MessageQueue/*a*/ = require/*t*/("MessageQueue"),
        s = __fbBatchedBridgeConfig.remoteModuleConfig,
        l = __fbBatchedBridgeConfig.localModulesConfig,
        u = BatchedBridgeFactory/*o*/.create(MessageQueue/*a*/, s, l);
    u._config = s, module/*i*/.exports = u
});