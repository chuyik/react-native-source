__d("BatchedBridge",["BatchedBridgeFactory","MessageQueue"],function (e, t, n, r, i) {
    "use strict";
    var BatchedBridgeFactory/*o*/ = t("BatchedBridgeFactory"),
        MessageQueue/*a*/ = t("MessageQueue"),
        s = __fbBatchedBridgeConfig.remoteModuleConfig,
        l = __fbBatchedBridgeConfig.localModulesConfig,
        u = BatchedBridgeFactory/*o*/.create(MessageQueue/*a*/, s, l);
    u._config = s, i.exports = u
});