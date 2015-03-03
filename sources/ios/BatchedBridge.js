__d("BatchedBridge",["BatchedBridgeFactory","MessageQueue"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("BatchedBridgeFactory"),
        a = require/*t*/("MessageQueue"),
        s = __fbBatchedBridgeConfig.remoteModuleConfig,
        l = __fbBatchedBridgeConfig.localModulesConfig,
        u = o.create(a, s, l);
    u._config = s, module/*i*/.exports = u
});