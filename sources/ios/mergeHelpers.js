__d("mergeHelpers",["invariant","keyMirror"],function (e, t, n, r, i) {
    "use strict";
    var invariant/*o*/ = t("invariant"),
        keyMirror/*a*/ = t("keyMirror"),
        s = 36,
        l = function(e) {
            return "object" != typeof e || null === e
        },
        u = {
            MAX_MERGE_DEPTH: s,
            isTerminal: l,
            normalizeMergeArg: function(e) {
                return void 0 === e || null === e ? {} : e
            },
            checkMergeArrayArgs: function(e, t) {
                Array.isArray(e) && Array.isArray(t) || invariant/*o*/(0, "Tried to merge arrays, instead got %s and %s.", e, t)
            },
            checkMergeObjectArgs: function(e, t) {
                u.checkMergeObjectArg(e), u.checkMergeObjectArg(t)
            },
            checkMergeObjectArg: function(e) {
                (l(e) || Array.isArray(e)) && invariant/*o*/(0, "Tried to merge an object, instead got %s.", e)
            },
            checkMergeIntoObjectArg: function(e) {
                (l(e) && "function" != typeof e || Array.isArray(e)) && invariant/*o*/(0, "Tried to merge into an object, instead got %s.", e)
            },
            checkMergeLevel: function(e) {
                s > e || invariant/*o*/(0, "Maximum deep merge depth exceeded. You may be attempting to merge circular structures in an unsupported way.")
            },
            checkArrayStrategy: function(e) {
                void 0 === e || e in u.ArrayStrategies || invariant/*o*/(0, "You must provide an array strategy to deep merge functions to instruct the deep merge how to resolve merging two arrays.")
            },
            ArrayStrategies: keyMirror/*a*/({
                Clobber: !0,
                IndexByIndex: !0
            })
        };
    i.exports = u
});