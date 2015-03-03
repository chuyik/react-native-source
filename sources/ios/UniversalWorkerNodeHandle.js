__d("UniversalWorkerNodeHandle",["ReactIOSTagHandles","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = require/*t*/("ReactIOSTagHandles"),
        a = require/*t*/("invariant"),
        s = {
            getRootNodeID: function(global/*e*/) {
                return (void 0 === global/*e*/ || null === global/*e*/ || 0 === global/*e*/) && a(0, "No node handle defined"), o.tagToRootNodeID[global/*e*/]
            }
        };
    module/*i*/.exports = s
});