__d("ReactIOSComponentEnvironment",["NativeModulesDeprecated","ReactIOSDOMIDOperations","ReactIOSReconcileTransaction","ReactIOSTagHandles","ReactPerf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("NativeModulesDeprecated").RKUIManager,
        exports/*a*/ = require/*t*/("ReactIOSDOMIDOperations"),
        NativeModulesDeprecated/*s*/ = require/*t*/("ReactIOSReconcileTransaction"),
        ReactIOSDOMIDOperations/*l*/ = require/*t*/("ReactIOSTagHandles"),
        ReactIOSReconcileTransaction/*u*/ = require/*t*/("ReactPerf"),
        ReactIOSTagHandles/*c*/ = {
            BackendIDOperations: exports/*a*/,
            ReactPerf/*unmountIDFromEnvironment*/: function() {},
            clearNode: function() {},
            mountImageIntoNode: ReactIOSReconcileTransaction/*u*/.measure("ReactComponentBrowserEnvironment", "mountImageIntoNode", function(global/*e*/, require/*t*/) {
                ReactIOSDOMIDOperations/*l*/.associateRootNodeIDWithMountedNodeHandle(global/*e*/.rootNodeID, global/*e*/.tag);
                var requireDynamic/*n*/ = [global/*e*/.tag],
                    requireLazy/*r*/ = [0];
                o.manageChildren(ReactIOSDOMIDOperations/*l*/.mostRecentMountedNodeHandleForRootNodeID(require/*t*/), null, null, requireDynamic/*n*/, requireLazy/*r*/, null)
            }),
            ReactReconcileTransaction: NativeModulesDeprecated/*s*/
        };
    module/*i*/.exports = ReactIOSTagHandles/*c*/
});