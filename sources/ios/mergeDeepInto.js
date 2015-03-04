__d("mergeDeepInto",["invariant","mergeHelpers"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var invariant/*o*/ = require/*t*/("invariant"),
        mergeHelpers/*a*/ = require/*t*/("mergeHelpers"),
        s = mergeHelpers/*a*/.ArrayStrategies,
        l = mergeHelpers/*a*/.checkArrayStrategy,
        u = mergeHelpers/*a*/.checkMergeArrayArgs,
        c = mergeHelpers/*a*/.checkMergeLevel,
        p = mergeHelpers/*a*/.checkMergeObjectArgs,
        d = mergeHelpers/*a*/.isTerminal,
        h = mergeHelpers/*a*/.normalizeMergeArg,
        f = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
            p(global/*e*/, require/*t*/), c(requireLazy/*r*/);
            for (var module/*i*/ = require/*t*/ ? Object.keys(require/*t*/) : [], invariant/*o*/ = 0; invariant/*o*/ < module/*i*/.length; invariant/*o*/++) {
                var mergeHelpers/*a*/ = module/*i*/[invariant/*o*/];
                g(global/*e*/, require/*t*/, mergeHelpers/*a*/, requireDynamic/*n*/, requireLazy/*r*/)
            }
        },
        m = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
            u(global/*e*/, require/*t*/), c(requireLazy/*r*/);
            for (var module/*i*/ = Math.max(global/*e*/.length, require/*t*/.length), invariant/*o*/ = 0; module/*i*/ > invariant/*o*/; invariant/*o*/++) g(global/*e*/, require/*t*/, invariant/*o*/, requireDynamic/*n*/, requireLazy/*r*/)
        },
        g = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
            var mergeHelpers/*a*/ = require/*t*/[requireDynamic/*n*/],
                l = require/*t*/.hasOwnProperty(requireDynamic/*n*/),
                u = l && d(mergeHelpers/*a*/),
                c = l && Array.isArray(mergeHelpers/*a*/),
                p = l && !c && !c,
                h = global/*e*/[requireDynamic/*n*/],
                g = global/*e*/.hasOwnProperty(requireDynamic/*n*/),
                _ = g && d(h),
                y = g && Array.isArray(h),
                v = g && !y && !y;
            _ ? u ? global/*e*/[requireDynamic/*n*/] = mergeHelpers/*a*/ : c ? (global/*e*/[requireDynamic/*n*/] = [], m(global/*e*/[requireDynamic/*n*/], mergeHelpers/*a*/, requireLazy/*r*/, module/*i*/ + 1)) : p ? (global/*e*/[requireDynamic/*n*/] = {}, f(global/*e*/[requireDynamic/*n*/], mergeHelpers/*a*/, requireLazy/*r*/, module/*i*/ + 1)) : l || (global/*e*/[requireDynamic/*n*/] = h) : y ? u ? global/*e*/[requireDynamic/*n*/] = mergeHelpers/*a*/ : c ? (s[requireLazy/*r*/] || invariant/*o*/(0, "mergeDeepInto(...): Attempted to merge two arrays, but mergeHelpers/*a*/ valid ArrayStrategy was not specified."), requireLazy/*r*/ === s.Clobber && (h.length = 0), m(h, mergeHelpers/*a*/, requireLazy/*r*/, module/*i*/ + 1)) : p && (global/*e*/[requireDynamic/*n*/] = {}, f(global/*e*/[requireDynamic/*n*/], mergeHelpers/*a*/, requireLazy/*r*/, module/*i*/ + 1)) : v ? u ? global/*e*/[requireDynamic/*n*/] = mergeHelpers/*a*/ : c ? (global/*e*/[requireDynamic/*n*/] = [], m(global/*e*/[requireDynamic/*n*/], mergeHelpers/*a*/, requireLazy/*r*/, module/*i*/ + 1)) : p && f(h, mergeHelpers/*a*/, requireLazy/*r*/, module/*i*/ + 1) : g || (u ? global/*e*/[requireDynamic/*n*/] = mergeHelpers/*a*/ : c ? (global/*e*/[requireDynamic/*n*/] = [], m(global/*e*/[requireDynamic/*n*/], mergeHelpers/*a*/, requireLazy/*r*/, module/*i*/ + 1)) : p && (global/*e*/[requireDynamic/*n*/] = {}, f(global/*e*/[requireDynamic/*n*/], mergeHelpers/*a*/, requireLazy/*r*/, module/*i*/ + 1)))
        },
        _ = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
            var requireLazy/*r*/ = h(require/*t*/);
            l(requireDynamic/*n*/), f(global/*e*/, requireLazy/*r*/, requireDynamic/*n*/, 0)
        };
    module/*i*/.exports = _
});