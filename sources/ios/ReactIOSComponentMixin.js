__d("ReactIOSComponentMixin",["ReactIOSTagHandles"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ReactIOSTagHandles"),
        exports/*a*/ = {
            getNativeNode: function() {
                return o.rootNodeIDToTag[this._rootNodeID]
            },
            ReactIOSTagHandles/*getNodeHandle*/: function() {
                return o.rootNodeIDToTag[this._rootNodeID]
            }
        };
    module/*i*/.exports = exports/*a*/
});