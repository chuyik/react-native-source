__d("ReactIOSComponentEnvironment",["NativeModulesDeprecated","ReactIOSDOMIDOperations","ReactIOSReconcileTransaction","ReactIOSTagHandles","ReactPerf"],function (e, t, n, r, i) {
    "use strict";
    var NativeModulesDeprecated/*o*/ = t("NativeModulesDeprecated").RKUIManager,
        ReactIOSDOMIDOperations/*a*/ = t("ReactIOSDOMIDOperations"),
        ReactIOSReconcileTransaction/*s*/ = t("ReactIOSReconcileTransaction"),
        ReactIOSTagHandles/*l*/ = t("ReactIOSTagHandles"),
        ReactPerf/*u*/ = t("ReactPerf"),
        c = {
            BackendIDOperations: ReactIOSDOMIDOperations/*a*/,
            unmountIDFromEnvironment: function() {},
            clearNode: function() {},
            mountImageIntoNode: ReactPerf/*u*/.measure("ReactComponentBrowserEnvironment", "mountImageIntoNode", function(e, t) {
                ReactIOSTagHandles/*l*/.associateRootNodeIDWithMountedNodeHandle(e.rootNodeID, e.tag);
                var n = [e.tag],
                    r = [0];
                NativeModulesDeprecated/*o*/.manageChildren(ReactIOSTagHandles/*l*/.mostRecentMountedNodeHandleForRootNodeID(t), null, null, n, r, null)
            }),
            ReactReconcileTransaction: ReactIOSReconcileTransaction/*s*/
        };
    i.exports = c
});