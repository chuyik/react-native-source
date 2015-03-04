__d("ReactIOSGlobalResponderHandler",["NativeModules","ReactIOSTagHandles"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var NativeModules/*o*/ = require/*t*/("NativeModules").RKUIManager,
        ReactIOSTagHandles/*a*/ = require/*t*/("ReactIOSTagHandles"),
        s = {
            onChange: function(global/*e*/, require/*t*/) {
                null !== require/*t*/ ? NativeModules/*o*/.setJSResponder(ReactIOSTagHandles/*a*/.mostRecentMountedNodeHandleForRootNodeID(require/*t*/)) : NativeModules/*o*/.clearJSResponder()
            }
        };
    module/*i*/.exports = s
});