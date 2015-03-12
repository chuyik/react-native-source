__d("UniversalWorkerNodeHandle",["ReactIOSTagHandles","invariant"],function (e, t, n, r, i) {
    var ReactIOSTagHandles/*o*/ = t("ReactIOSTagHandles"),
        invariant/*a*/ = t("invariant"),
        s = {
            getRootNodeID: function(e) {
                return (void 0 === e || null === e || 0 === e) && invariant/*a*/(0, "No node handle defined"), ReactIOSTagHandles/*o*/.tagToRootNodeID[e]
            }
        };
    i.exports = s
});