__d("ReactIOSDOMIDOperations",["ReactIOSTagHandles","ReactMultiChildUpdateTypes","NativeModulesDeprecated","ReactPerf"],function (e, t, n, r, i) {
    "use strict";
    var ReactIOSTagHandles/*o*/ = t("ReactIOSTagHandles"),
        ReactMultiChildUpdateTypes/*a*/ = t("ReactMultiChildUpdateTypes"),
        NativeModulesDeprecated/*s*/ = t("NativeModulesDeprecated").RKUIManager,
        ReactPerf/*l*/ = t("ReactPerf"),
        u = function(e, t) {
            if (e.length) {
                for (var n = {}, r = 0; r < e.length; r++) {
                    var i = e[r],
                        ReactPerf/*l*/ = ReactIOSTagHandles/*o*/.mostRecentMountedNodeHandleForRootNodeID(i.parentID),
                        u = n[ReactPerf/*l*/] || (n[ReactPerf/*l*/] = {});
                    if (i.type === ReactMultiChildUpdateTypes/*a*/.MOVE_EXISTING)(u.moveFromIndices || (u.moveFromIndices = [])).push(i.fromIndex), (u.moveToIndices || (u.moveToIndices = [])).push(i.toIndex);
                    else if (i.type === ReactMultiChildUpdateTypes/*a*/.REMOVE_NODE)(u.removeAtIndices || (u.removeAtIndices = [])).push(i.fromIndex);
                    else if (i.type === ReactMultiChildUpdateTypes/*a*/.INSERT_MARKUP) {
                        var c = t[i.markupIndex],
                            p = c.tag,
                            d = c.rootNodeID;
                        ReactIOSTagHandles/*o*/.associateRootNodeIDWithMountedNodeHandle(d, p), (u.addAtIndices || (u.addAtIndices = [])).push(i.toIndex), (u.addChildTags || (u.addChildTags = [])).push(p)
                    }
                }
                for (var h in n) {
                    var f = +h,
                        m = n[f];
                    NativeModulesDeprecated/*s*/.manageChildren(f, m.moveFromIndices, m.moveToIndices, m.addChildTags, m.addAtIndices, m.removeAtIndices)
                }
            }
        },
        c = {
            dangerouslyProcessChildrenUpdates: ReactPerf/*l*/.measure("ReactDOMIDOperations", "dangerouslyProcessChildrenUpdates", u),
            dangerouslyReplaceNodeWithMarkupByID: ReactPerf/*l*/.measure("ReactDOMIDOperations", "dangerouslyReplaceNodeWithMarkupByID", function(e, t) {
                var n = ReactIOSTagHandles/*o*/.mostRecentMountedNodeHandleForRootNodeID(e);
                NativeModulesDeprecated/*s*/.replaceExistingNonRootView(n, t.tag), ReactIOSTagHandles/*o*/.associateRootNodeIDWithMountedNodeHandle(e, t.tag)
            })
        };
    i.exports = c
});