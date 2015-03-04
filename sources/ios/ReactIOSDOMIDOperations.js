__d("ReactIOSDOMIDOperations",["ReactIOSTagHandles","ReactMultiChildUpdateTypes","NativeModulesDeprecated","ReactPerf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var ReactIOSTagHandles/*o*/ = require/*t*/("ReactIOSTagHandles"),
        ReactMultiChildUpdateTypes/*a*/ = require/*t*/("ReactMultiChildUpdateTypes"),
        NativeModulesDeprecated/*s*/ = require/*t*/("NativeModulesDeprecated").RKUIManager,
        ReactPerf/*l*/ = require/*t*/("ReactPerf"),
        u = function(global/*e*/, require/*t*/) {
            if (global/*e*/.length) {
                for (var requireDynamic/*n*/ = {}, requireLazy/*r*/ = 0; requireLazy/*r*/ < global/*e*/.length; requireLazy/*r*/++) {
                    var module/*i*/ = global/*e*/[requireLazy/*r*/],
                        ReactPerf/*l*/ = ReactIOSTagHandles/*o*/.mostRecentMountedNodeHandleForRootNodeID(module/*i*/.parentID),
                        u = requireDynamic/*n*/[ReactPerf/*l*/] || (requireDynamic/*n*/[ReactPerf/*l*/] = {});
                    if (module/*i*/.type === ReactMultiChildUpdateTypes/*a*/.MOVE_EXISTING)(u.moveFromIndices || (u.moveFromIndices = [])).push(module/*i*/.fromIndex), (u.moveToIndices || (u.moveToIndices = [])).push(module/*i*/.toIndex);
                    else if (module/*i*/.type === ReactMultiChildUpdateTypes/*a*/.REMOVE_NODE)(u.removeAtIndices || (u.removeAtIndices = [])).push(module/*i*/.fromIndex);
                    else if (module/*i*/.type === ReactMultiChildUpdateTypes/*a*/.INSERT_MARKUP) {
                        var c = require/*t*/[module/*i*/.markupIndex],
                            p = c.tag,
                            d = c.rootNodeID;
                        ReactIOSTagHandles/*o*/.associateRootNodeIDWithMountedNodeHandle(d, p), (u.addAtIndices || (u.addAtIndices = [])).push(module/*i*/.toIndex), (u.addChildTags || (u.addChildTags = [])).push(p)
                    }
                }
                for (var h in requireDynamic/*n*/) {
                    var f = +h,
                        m = requireDynamic/*n*/[f];
                    NativeModulesDeprecated/*s*/.manageChildren(f, m.moveFromIndices, m.moveToIndices, m.addChildTags, m.addAtIndices, m.removeAtIndices)
                }
            }
        },
        c = {
            dangerouslyProcessChildrenUpdates: ReactPerf/*l*/.measure("ReactDOMIDOperations", "dangerouslyProcessChildrenUpdates", u),
            dangerouslyReplaceNodeWithMarkupByID: ReactPerf/*l*/.measure("ReactDOMIDOperations", "dangerouslyReplaceNodeWithMarkupByID", function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = ReactIOSTagHandles/*o*/.mostRecentMountedNodeHandleForRootNodeID(global/*e*/);
                NativeModulesDeprecated/*s*/.replaceExistingNonRootView(requireDynamic/*n*/, require/*t*/.tag), ReactIOSTagHandles/*o*/.associateRootNodeIDWithMountedNodeHandle(global/*e*/, require/*t*/.tag)
            })
        };
    module/*i*/.exports = c
});