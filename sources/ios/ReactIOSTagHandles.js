__d("ReactIOSTagHandles",["invariant","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var invariant/*o*/ = require/*t*/("invariant"),
        warning/*a*/ = require/*t*/("warning"),
        s = 1,
        l = {
            tagsStartAt: s,
            tagCount: s,
            allocateTag: function() {
                for (; this.reactTagIsNativeTopRootID(l.tagCount);) l.tagCount++;
                var global/*e*/ = l.tagCount;
                return l.tagCount++, global/*e*/
            },
            associateRootNodeIDWithMountedNodeHandle: function(global/*e*/, require/*t*/) {
                warning/*a*/(global/*e*/ && require/*t*/, "Root node or tag is null when associating"), l.tagToRootNodeID[require/*t*/] = global/*e*/, l.rootNodeIDToTag[global/*e*/] = require/*t*/
            },
            allocateRootNodeIDForTag: function(global/*e*/) {
                return this.reactTagIsNativeTopRootID(global/*e*/) || invariant/*o*/(0, "Expect warning/*a*/ native root tag, instead got ", global/*e*/), ".requireLazy/*r*/[" + global/*e*/ + "]{TOP_LEVEL}"
            },
            reactTagIsNativeTopRootID: function(global/*e*/) {
                return global/*e*/ % 10 === 1
            },
            mostRecentMountedNodeHandleForRootNodeID: function(global/*e*/) {
                return l.rootNodeIDToTag[global/*e*/]
            },
            tagToRootNodeID: [],
            rootNodeIDToTag: {}
        };
    module/*i*/.exports = l
});