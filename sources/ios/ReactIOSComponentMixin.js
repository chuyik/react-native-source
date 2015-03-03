__d("ReactIOSComponentMixin",["ReactIOSTagHandles"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ReactIOSTagHandles"),
        a = {
            getNativeNode: function() {
                return o.rootNodeIDToTag[this._rootNodeID]
            },
            getNodeHandle: function() {
                return o.rootNodeIDToTag[this._rootNodeID]
            }
        };
    module/*i*/.exports = a
});