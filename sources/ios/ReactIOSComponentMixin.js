__d("ReactIOSComponentMixin",["ReactIOSTagHandles"],function (e, t, n, r, i) {
    "use strict";
    var ReactIOSTagHandles/*o*/ = t("ReactIOSTagHandles"),
        a = {
            getNativeNode: function() {
                return ReactIOSTagHandles/*o*/.rootNodeIDToTag[this._rootNodeID]
            },
            getNodeHandle: function() {
                return ReactIOSTagHandles/*o*/.rootNodeIDToTag[this._rootNodeID]
            }
        };
    i.exports = a
});