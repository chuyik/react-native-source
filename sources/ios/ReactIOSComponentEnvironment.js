__d("ReactIOSComponentEnvironment",["NativeModulesDeprecated","ReactIOSDOMIDOperations","ReactIOSReconcileTransaction","ReactIOSTagHandles","ReactPerf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("NativeModulesDeprecated").RKUIManager,
        a = require/*t*/("ReactIOSDOMIDOperations"),
        s = require/*t*/("ReactIOSReconcileTransaction"),
        l = require/*t*/("ReactIOSTagHandles"),
        u = require/*t*/("ReactPerf"),
        c = {
            BackendIDOperations: a,
            unmountIDFromEnvironment: function() {},
            clearNode: function() {},
            mountImageIntoNode: u.measure("ReactComponentBrowserEnvironment", "mountImageIntoNode", function(global/*e*/, require/*t*/) {
                l.associateRootNodeIDWithMountedNodeHandle(global/*e*/.rootNodeID, global/*e*/.tag);
                var requireDynamic/*n*/ = [global/*e*/.tag],
                    requireLazy/*r*/ = [0];
                o.manageChildren(l.mostRecentMountedNodeHandleForRootNodeID(require/*t*/), null, null, requireDynamic/*n*/, requireLazy/*r*/, null)
            }),
            ReactReconcileTransaction: s
        };
    module/*i*/.exports = c
});