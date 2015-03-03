__d("ReactIOSGlobalResponderHandler",["NativeModules","ReactIOSTagHandles"],function (global/*e*/, require/*ReactIOSTagHandles/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*ReactIOSTagHandles/*t*/*/("NativeModules").RKUIManager,
        exports/*a*/ = require/*ReactIOSTagHandles/*t*/*/("ReactIOSTagHandles"),
        NativeModules/*s*/ = {
            onChange: function(global/*e*/, require/*ReactIOSTagHandles/*t*/*/) {
                null !== require/*ReactIOSTagHandles/*t*/*/ ? o.setJSResponder(exports/*a*/.mostRecentMountedNodeHandleForRootNodeID(require/*ReactIOSTagHandles/*t*/*/)) : o.clearJSResponder()
            }
        };
    module/*i*/.exports = NativeModules/*s*/
});