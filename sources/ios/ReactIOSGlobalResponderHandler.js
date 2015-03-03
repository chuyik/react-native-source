__d("ReactIOSGlobalResponderHandler",["NativeModules","ReactIOSTagHandles"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("NativeModules").RKUIManager,
        a = require/*t*/("ReactIOSTagHandles"),
        s = {
            onChange: function(global/*e*/, require/*t*/) {
                null !== require/*t*/ ? o.setJSResponder(a.mostRecentMountedNodeHandleForRootNodeID(require/*t*/)) : o.clearJSResponder()
            }
        };
    module/*i*/.exports = s
});