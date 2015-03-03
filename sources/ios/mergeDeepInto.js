__d("mergeDeepInto",["invariant","mergeHelpers"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("invariant"),
        a = require/*t*/("mergeHelpers"),
        s = a.ArrayStrategies,
        l = a.checkArrayStrategy,
        u = a.checkMergeArrayArgs,
        c = a.checkMergeLevel,
        p = a.checkMergeObjectArgs,
        d = a.isTerminal,
        h = a.normalizeMergeArg,
        f = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
            p(global/*e*/, require/*t*/), c(requireLazy/*r*/);
            for (var module/*i*/ = require/*t*/ ? Object.keys(require/*t*/) : [], o = 0; o < module/*i*/.length; o++) {
                var a = module/*i*/[o];
                g(global/*e*/, require/*t*/, a, requireDynamic/*n*/, requireLazy/*r*/)
            }
        },
        m = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
            u(global/*e*/, require/*t*/), c(requireLazy/*r*/);
            for (var module/*i*/ = Math.max(global/*e*/.length, require/*t*/.length), o = 0; module/*i*/ > o; o++) g(global/*e*/, require/*t*/, o, requireDynamic/*n*/, requireLazy/*r*/)
        },
        g = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
            var a = require/*t*/[requireDynamic/*n*/],
                l = require/*t*/.hasOwnProperty(requireDynamic/*n*/),
                u = l && d(a),
                c = l && Array.isArray(a),
                p = l && !c && !c,
                h = global/*e*/[requireDynamic/*n*/],
                g = global/*e*/.hasOwnProperty(requireDynamic/*n*/),
                _ = g && d(h),
                y = g && Array.isArray(h),
                v = g && !y && !y;
            _ ? u ? global/*e*/[requireDynamic/*n*/] = a : c ? (global/*e*/[requireDynamic/*n*/] = [], m(global/*e*/[requireDynamic/*n*/], a, requireLazy/*r*/, module/*i*/ + 1)) : p ? (global/*e*/[requireDynamic/*n*/] = {}, f(global/*e*/[requireDynamic/*n*/], a, requireLazy/*r*/, module/*i*/ + 1)) : l || (global/*e*/[requireDynamic/*n*/] = h) : y ? u ? global/*e*/[requireDynamic/*n*/] = a : c ? (s[requireLazy/*r*/] || o(0, "mergeDeepInto(...): Attempted to merge two arrays, but a valid ArrayStrategy was not specified."), requireLazy/*r*/ === s.Clobber && (h.length = 0), m(h, a, requireLazy/*r*/, module/*i*/ + 1)) : p && (global/*e*/[requireDynamic/*n*/] = {}, f(global/*e*/[requireDynamic/*n*/], a, requireLazy/*r*/, module/*i*/ + 1)) : v ? u ? global/*e*/[requireDynamic/*n*/] = a : c ? (global/*e*/[requireDynamic/*n*/] = [], m(global/*e*/[requireDynamic/*n*/], a, requireLazy/*r*/, module/*i*/ + 1)) : p && f(h, a, requireLazy/*r*/, module/*i*/ + 1) : g || (u ? global/*e*/[requireDynamic/*n*/] = a : c ? (global/*e*/[requireDynamic/*n*/] = [], m(global/*e*/[requireDynamic/*n*/], a, requireLazy/*r*/, module/*i*/ + 1)) : p && (global/*e*/[requireDynamic/*n*/] = {}, f(global/*e*/[requireDynamic/*n*/], a, requireLazy/*r*/, module/*i*/ + 1)))
        },
        _ = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
            var requireLazy/*r*/ = h(require/*t*/);
            l(requireDynamic/*n*/), f(global/*e*/, requireLazy/*r*/, requireDynamic/*n*/, 0)
        };
    module/*i*/.exports = _
});