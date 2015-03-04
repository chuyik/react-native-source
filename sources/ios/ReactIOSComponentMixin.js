__d("ReactIOSComponentMixin",["ReactIOSTagHandles"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var ReactIOSTagHandles/*o*/ = require/*t*/("ReactIOSTagHandles"),
        a = {
            getNativeNode: function() {
                return ReactIOSTagHandles/*o*/.rootNodeIDToTag[this._rootNodeID]
            },
            getNodeHandle: function() {
                return ReactIOSTagHandles/*o*/.rootNodeIDToTag[this._rootNodeID]
            }
        };
    module/*i*/.exports = a
});