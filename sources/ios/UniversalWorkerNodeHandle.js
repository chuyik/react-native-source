__d("UniversalWorkerNodeHandle",["ReactIOSTagHandles","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = require/*t*/("ReactIOSTagHandles"),
        exports/*a*/ = require/*t*/("invariant"),
        ReactIOSTagHandles/*s*/ = {
            getRootNodeID: function(global/*e*/) {
                return (void 0 === global/*e*/ || null === global/*e*/ || 0 === global/*e*/) && exports/*a*/(0, "No node handle defined"), invariant/*o.tagToRootNodeID*/[global/*e*/]
            }
        };
    module/*i*/.exports = ReactIOSTagHandles/*s*/
});