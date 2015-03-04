__d("ReactIOSComponentEnvironment",["NativeModulesDeprecated","ReactIOSDOMIDOperations","ReactIOSReconcileTransaction","ReactIOSTagHandles","ReactPerf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var NativeModulesDeprecated/*o*/ = require/*t*/("NativeModulesDeprecated").RKUIManager,
        ReactIOSDOMIDOperations/*a*/ = require/*t*/("ReactIOSDOMIDOperations"),
        ReactIOSReconcileTransaction/*s*/ = require/*t*/("ReactIOSReconcileTransaction"),
        ReactIOSTagHandles/*l*/ = require/*t*/("ReactIOSTagHandles"),
        ReactPerf/*u*/ = require/*t*/("ReactPerf"),
        c = {
            BackendIDOperations: ReactIOSDOMIDOperations/*a*/,
            unmountIDFromEnvironment: function() {},
            clearNode: function() {},
            mountImageIntoNode: ReactPerf/*u*/.measure("ReactComponentBrowserEnvironment", "mountImageIntoNode", function(global/*e*/, require/*t*/) {
                ReactIOSTagHandles/*l*/.associateRootNodeIDWithMountedNodeHandle(global/*e*/.rootNodeID, global/*e*/.tag);
                var requireDynamic/*n*/ = [global/*e*/.tag],
                    requireLazy/*r*/ = [0];
                NativeModulesDeprecated/*o*/.manageChildren(ReactIOSTagHandles/*l*/.mostRecentMountedNodeHandleForRootNodeID(require/*t*/), null, null, requireDynamic/*n*/, requireLazy/*r*/, null)
            }),
            ReactReconcileTransaction: ReactIOSReconcileTransaction/*s*/
        };
    module/*i*/.exports = c
});