__d("mergeDeepInto",["invariant","mergeHelpers"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("invariant"),
        exports/*a*/ = require/*t*/("mergeHelpers"),
        invariant/*s*/ = exports/*a*/.ArrayStrategies,
        mergeHelpers/*l*/ = exports/*a*/.checkArrayStrategy,
        u = exports/*a*/.checkMergeArrayArgs,
        c = exports/*a*/.checkMergeLevel,
        p = exports/*a*/.checkMergeObjectArgs,
        d = exports/*a*/.isTerminal,
        h = exports/*a*/.normalizeMergeArg,
        f = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
            p(global/*e*/, require/*t*/), c(requireLazy/*r*/);
            for (var module/*i*/ = require/*t*/ ? Object.keys(require/*t*/) : [], o = 0; o < module/*i*/.length; o++) {
                var exports/*a*/ = module/*i*/[o];
                g(global/*e*/, require/*t*/, exports/*a*/, requireDynamic/*n*/, requireLazy/*r*/)
            }
        },
        m = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
            u(global/*e*/, require/*t*/), c(requireLazy/*r*/);
            for (var module/*i*/ = Math.max(global/*e*/.length, require/*t*/.length), o = 0; module/*i*/ > o; o++) g(global/*e*/, require/*t*/, o, requireDynamic/*n*/, requireLazy/*r*/)
        },
        g = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
            var exports/*a*/ = require/*t*/[requireDynamic/*n*/],
                mergeHelpers/*l*/ = require/*t*/.hasOwnProperty(requireDynamic/*n*/),
                u = mergeHelpers/*l*/ && d(exports/*a*/),
                c = mergeHelpers/*l*/ && Array.isArray(exports/*a*/),
                p = mergeHelpers/*l*/ && !c && !c,
                h = global/*e*/[requireDynamic/*n*/],
                g = global/*e*/.hasOwnProperty(requireDynamic/*n*/),
                _ = g && d(h),
                y = g && Array.isArray(h),
                v = g && !y && !y;
            _ ? u ? global/*e*/[requireDynamic/*n*/] = exports/*a*/ : c ? (global/*e*/[requireDynamic/*n*/] = [], m(global/*e*/[requireDynamic/*n*/], exports/*a*/, requireLazy/*r*/, module/*i*/ + 1)) : p ? (global/*e*/[requireDynamic/*n*/] = {}, f(global/*e*/[requireDynamic/*n*/], exports/*a*/, requireLazy/*r*/, module/*i*/ + 1)) : mergeHelpers/*l*/ || (global/*e*/[requireDynamic/*n*/] = h) : y ? u ? global/*e*/[requireDynamic/*n*/] = exports/*a*/ : c ? (invariant/*s*/[requireLazy/*r*/] || o(0, "mergeDeepInto(...): Attempted to merge two arrays, but exports/*a*/ valid ArrayStrategy was not specified."), requireLazy/*r*/ === invariant/*s*/.Clobber && (h.length = 0), m(h, exports/*a*/, requireLazy/*r*/, module/*i*/ + 1)) : p && (global/*e*/[requireDynamic/*n*/] = {}, f(global/*e*/[requireDynamic/*n*/], exports/*a*/, requireLazy/*r*/, module/*i*/ + 1)) : v ? u ? global/*e*/[requireDynamic/*n*/] = exports/*a*/ : c ? (global/*e*/[requireDynamic/*n*/] = [], m(global/*e*/[requireDynamic/*n*/], exports/*a*/, requireLazy/*r*/, module/*i*/ + 1)) : p && f(h, exports/*a*/, requireLazy/*r*/, module/*i*/ + 1) : g || (u ? global/*e*/[requireDynamic/*n*/] = exports/*a*/ : c ? (global/*e*/[requireDynamic/*n*/] = [], m(global/*e*/[requireDynamic/*n*/], exports/*a*/, requireLazy/*r*/, module/*i*/ + 1)) : p && (global/*e*/[requireDynamic/*n*/] = {}, f(global/*e*/[requireDynamic/*n*/], exports/*a*/, requireLazy/*r*/, module/*i*/ + 1)))
        },
        _ = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
            var requireLazy/*r*/ = h(require/*t*/);
            mergeHelpers/*l*/(requireDynamic/*n*/), f(global/*e*/, requireLazy/*r*/, requireDynamic/*n*/, 0)
        };
    module/*i*/.exports = _
});