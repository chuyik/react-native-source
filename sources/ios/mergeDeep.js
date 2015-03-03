__d("mergeDeep",["mergeHelpers","mergeDeepInto"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("mergeHelpers"),
        a = require/*t*/("mergeDeepInto"),
        s = o.checkArrayStrategy,
        l = o.checkMergeObjectArgs,
        u = o.normalizeMergeArg,
        c = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
            var requireLazy/*r*/ = u(global/*e*/),
                module/*i*/ = u(require/*t*/);
            l(requireLazy/*r*/, module/*i*/), s(requireDynamic/*n*/);
            var o = {};
            return a(o, requireLazy/*r*/, requireDynamic/*n*/), a(o, module/*i*/, requireDynamic/*n*/), o
        };
    module/*i*/.exports = c
});