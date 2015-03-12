__d("ReactIOSGlobalResponderHandler",["NativeModules","ReactIOSTagHandles"],function (e, t, n, r, i) {
    "use strict";
    var NativeModules/*o*/ = t("NativeModules").RKUIManager,
        ReactIOSTagHandles/*a*/ = t("ReactIOSTagHandles"),
        s = {
            onChange: function(e, t) {
                null !== t ? NativeModules/*o*/.setJSResponder(ReactIOSTagHandles/*a*/.mostRecentMountedNodeHandleForRootNodeID(t)) : NativeModules/*o*/.clearJSResponder()
            }
        };
    i.exports = s
});