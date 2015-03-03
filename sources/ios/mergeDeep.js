__d("mergeDeep",["mergeHelpers","mergeDeepInto"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("mergeHelpers"),
        exports/*a*/ = require/*t*/("mergeDeepInto"),
        mergeHelpers/*s*/ = o.checkArrayStrategy,
        mergeDeepInto/*l*/ = o.checkMergeObjectArgs,
        u = o.normalizeMergeArg,
        c = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
            var requireLazy/*r*/ = u(global/*e*/),
                module/*i*/ = u(require/*t*/);
            mergeDeepInto/*l*/(requireLazy/*r*/, module/*i*/), mergeHelpers/*s*/(requireDynamic/*n*/);
            var o = {};
            return exports/*a*/(o, requireLazy/*r*/, requireDynamic/*n*/), exports/*a*/(o, module/*i*/, requireDynamic/*n*/), o
        };
    module/*i*/.exports = c
});