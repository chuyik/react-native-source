__d("ReactIOSTagHandles",["invariant","warning"],function (e, t, n, r, i) {
    "use strict";
    var invariant/*o*/ = t("invariant"),
        warning/*a*/ = t("warning"),
        s = 1,
        l = {
            tagsStartAt: s,
            tagCount: s,
            allocateTag: function() {
                for (; this.reactTagIsNativeTopRootID(l.tagCount);) l.tagCount++;
                var e = l.tagCount;
                return l.tagCount++, e
            },
            associateRootNodeIDWithMountedNodeHandle: function(e, t) {
                warning/*a*/(e && t, "Root node or tag is null when associating"), l.tagToRootNodeID[t] = e, l.rootNodeIDToTag[e] = t
            },
            allocateRootNodeIDForTag: function(e) {
                return this.reactTagIsNativeTopRootID(e) || invariant/*o*/(0, "Expect warning/*a*/ native root tag, instead got ", e), ".r[" + e + "]{TOP_LEVEL}"
            },
            reactTagIsNativeTopRootID: function(e) {
                return e % 10 === 1
            },
            mostRecentMountedNodeHandleForRootNodeID: function(e) {
                return l.rootNodeIDToTag[e]
            },
            tagToRootNodeID: [],
            rootNodeIDToTag: {}
        };
    i.exports = l
});