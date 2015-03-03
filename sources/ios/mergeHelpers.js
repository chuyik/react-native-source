__d("mergeHelpers",["invariant","keyMirror"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("invariant"),
        a = require/*t*/("keyMirror"),
        s = 36,
        l = function(global/*e*/) {
            return "object" != typeof global/*e*/ || null === global/*e*/
        },
        u = {
            MAX_MERGE_DEPTH: s,
            isTerminal: l,
            normalizeMergeArg: function(global/*e*/) {
                return void 0 === global/*e*/ || null === global/*e*/ ? {} : global/*e*/
            },
            checkMergeArrayArgs: function(global/*e*/, require/*t*/) {
                Array.isArray(global/*e*/) && Array.isArray(require/*t*/) || o(0, "Tried to merge arrays, instead got %s and %s.", global/*e*/, require/*t*/)
            },
            checkMergeObjectArgs: function(global/*e*/, require/*t*/) {
                u.checkMergeObjectArg(global/*e*/), u.checkMergeObjectArg(require/*t*/)
            },
            checkMergeObjectArg: function(global/*e*/) {
                (l(global/*e*/) || Array.isArray(global/*e*/)) && o(0, "Tried to merge an object, instead got %s.", global/*e*/)
            },
            checkMergeIntoObjectArg: function(global/*e*/) {
                (l(global/*e*/) && "function" != typeof global/*e*/ || Array.isArray(global/*e*/)) && o(0, "Tried to merge into an object, instead got %s.", global/*e*/)
            },
            checkMergeLevel: function(global/*e*/) {
                s > global/*e*/ || o(0, "Maximum deep merge depth exceeded. You may be attempting to merge circular structures in an unsupported way.")
            },
            checkArrayStrategy: function(global/*e*/) {
                void 0 === global/*e*/ || global/*e*/ in u.ArrayStrategies || o(0, "You must provide an array strategy to deep merge functions to instruct the deep merge how to resolve merging two arrays.")
            },
            ArrayStrategies: a({
                Clobber: !0,
                IndexByIndex: !0
            })
        };
    module/*i*/.exports = u
});