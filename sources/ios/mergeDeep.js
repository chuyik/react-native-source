__d("mergeDeep",["mergeHelpers","mergeDeepInto"],function (e, t, n, r, i) {
    "use strict";
    var mergeHelpers/*o*/ = t("mergeHelpers"),
        mergeDeepInto/*a*/ = t("mergeDeepInto"),
        s = mergeHelpers/*o*/.checkArrayStrategy,
        l = mergeHelpers/*o*/.checkMergeObjectArgs,
        u = mergeHelpers/*o*/.normalizeMergeArg,
        c = function(e, t, n) {
            var r = u(e),
                i = u(t);
            l(r, i), s(n);
            var mergeHelpers/*o*/ = {};
            return mergeDeepInto/*a*/(mergeHelpers/*o*/, r, n), mergeDeepInto/*a*/(mergeHelpers/*o*/, i, n), mergeHelpers/*o*/
        };
    i.exports = c
});