__d("NativeModulesDeprecated",["BatchedBridge"],function (e, t, n, r, i) {
    "use strict";
    var BatchedBridge/*o*/ = t("BatchedBridge").RemoteModulesDeprecated;
    Object.keys(BatchedBridge/*o*/).forEach(function(e) {
        var t = e.replace(/^RCT/, "RK");
        BatchedBridge/*o*/[t] = BatchedBridge/*o*/[e]
    }), i.exports = BatchedBridge/*o*/
});