__d("ReactIOSDOMIDOperations",["ReactIOSTagHandles","ReactMultiChildUpdateTypes","NativeModulesDeprecated","ReactPerf"],function (global/*e*/, require/*ReactPerf/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*ReactPerf/*t*/*/("ReactIOSTagHandles"),
        exports/*a*/ = require/*ReactPerf/*t*/*/("ReactMultiChildUpdateTypes"),
        ReactIOSTagHandles/*s*/ = require/*ReactPerf/*t*/*/("NativeModulesDeprecated").RKUIManager,
        ReactMultiChildUpdateTypes/*l*/ = require/*ReactPerf/*t*/*/("ReactPerf"),
        NativeModulesDeprecated/*u*/ = function(global/*e*/, require/*ReactPerf/*t*/*/) {
            if (global/*e*/.length) {
                for (var requireDynamic/*n*/ = {}, requireLazy/*r*/ = 0; requireLazy/*r*/ < global/*e*/.length; requireLazy/*r*/++) {
                    var module/*i*/ = global/*e*/[requireLazy/*r*/],
                        ReactMultiChildUpdateTypes/*l*/ = o.mostRecentMountedNodeHandleForRootNodeID(module/*i*/.parentID),
                        NativeModulesDeprecated/*u*/ = requireDynamic/*n*/[ReactMultiChildUpdateTypes/*l*/] || (requireDynamic/*n*/[ReactMultiChildUpdateTypes/*l*/] = {});
                    if (module/*i*/.type === exports/*a*/.MOVE_EXISTING)(NativeModulesDeprecated/*u*/.moveFromIndices || (NativeModulesDeprecated/*u*/.moveFromIndices = [])).push(module/*i*/.fromIndex), (NativeModulesDeprecated/*u*/.moveToIndices || (NativeModulesDeprecated/*u*/.moveToIndices = [])).push(module/*i*/.toIndex);
                    else if (module/*i*/.type === exports/*a*/.REMOVE_NODE)(NativeModulesDeprecated/*u*/.removeAtIndices || (NativeModulesDeprecated/*u*/.removeAtIndices = [])).push(module/*i*/.fromIndex);
                    else if (module/*i*/.type === exports/*a*/.INSERT_MARKUP) {
                        var c = require/*ReactPerf/*t*/*/[module/*i*/.markupIndex],
                            p = c.tag,
                            d = c.rootNodeID;
                        o.associateRootNodeIDWithMountedNodeHandle(d, p), (NativeModulesDeprecated/*u*/.addAtIndices || (NativeModulesDeprecated/*u*/.addAtIndices = [])).push(module/*i*/.toIndex), (NativeModulesDeprecated/*u*/.addChildTags || (NativeModulesDeprecated/*u*/.addChildTags = [])).push(p)
                    }
                }
                for (var h in requireDynamic/*n*/) {
                    var f = +h,
                        m = requireDynamic/*n*/[f];
                    ReactIOSTagHandles/*s*/.manageChildren(f, m.moveFromIndices, m.moveToIndices, m.addChildTags, m.addAtIndices, m.removeAtIndices)
                }
            }
        },
        c = {
            dangerouslyProcessChildrenUpdates: ReactMultiChildUpdateTypes/*l*/.measure("ReactDOMIDOperations", "dangerouslyProcessChildrenUpdates", NativeModulesDeprecated/*u*/),
            dangerouslyReplaceNodeWithMarkupByID: ReactMultiChildUpdateTypes/*l*/.measure("ReactDOMIDOperations", "dangerouslyReplaceNodeWithMarkupByID", function(global/*e*/, require/*ReactPerf/*t*/*/) {
                var requireDynamic/*n*/ = o.mostRecentMountedNodeHandleForRootNodeID(global/*e*/);
                ReactIOSTagHandles/*s*/.replaceExistingNonRootView(requireDynamic/*n*/, require/*ReactPerf/*t*/*/.tag), o.associateRootNodeIDWithMountedNodeHandle(global/*e*/, require/*ReactPerf/*t*/*/.tag)
            })
        };
    module/*i*/.exports = c
});