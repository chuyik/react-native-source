__d("ReactIOSTagHandles",["invariant","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("invariant"),
        exports/*a*/ = require/*t*/("warning"),
        invariant/*s*/ = 1,
        warning/*l*/ = {
            tagsStartAt: invariant/*s*/,
            tagCount: invariant/*s*/,
            allocateTag: function() {
                for (; this.reactTagIsNativeTopRootID(warning/*l*/.tagCount);) warning/*l*/.tagCount++;
                var global/*e*/ = warning/*l*/.tagCount;
                return warning/*l*/.tagCount++, global/*e*/
            },
            associateRootNodeIDWithMountedNodeHandle: function(global/*e*/, require/*t*/) {
                exports/*a*/(global/*e*/ && require/*t*/, "Root node or tag is null when associating"), warning/*l*/.tagToRootNodeID[require/*t*/] = global/*e*/, warning/*l*/.rootNodeIDToTag[global/*e*/] = require/*t*/
            },
            allocateRootNodeIDForTag: function(global/*e*/) {
                return this.reactTagIsNativeTopRootID(global/*e*/) || o(0, "Expect exports/*a*/ native root tag, instead got ", global/*e*/), ".requireLazy/*r*/[" + global/*e*/ + "]{TOP_LEVEL}"
            },
            reactTagIsNativeTopRootID: function(global/*e*/) {
                return global/*e*/ % 10 === 1
            },
            mostRecentMountedNodeHandleForRootNodeID: function(global/*e*/) {
                return warning/*l*/.rootNodeIDToTag[global/*e*/]
            },
            tagToRootNodeID: [],
            rootNodeIDToTag: {}
        };
    module/*i*/.exports = warning/*l*/
});