__d("mergeDeep",["mergeHelpers","mergeDeepInto"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var mergeHelpers/*o*/ = require/*t*/("mergeHelpers"),
        mergeDeepInto/*a*/ = require/*t*/("mergeDeepInto"),
        s = mergeHelpers/*o*/.checkArrayStrategy,
        l = mergeHelpers/*o*/.checkMergeObjectArgs,
        u = mergeHelpers/*o*/.normalizeMergeArg,
        c = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
            var requireLazy/*r*/ = u(global/*e*/),
                module/*i*/ = u(require/*t*/);
            l(requireLazy/*r*/, module/*i*/), s(requireDynamic/*n*/);
            var mergeHelpers/*o*/ = {};
            return mergeDeepInto/*a*/(mergeHelpers/*o*/, requireLazy/*r*/, requireDynamic/*n*/), mergeDeepInto/*a*/(mergeHelpers/*o*/, module/*i*/, requireDynamic/*n*/), mergeHelpers/*o*/
        };
    module/*i*/.exports = c
});