__d("mergeDeepInto",["invariant","mergeHelpers"],function (e, t, n, r, i) {
    "use strict";
    var invariant/*o*/ = t("invariant"),
        mergeHelpers/*a*/ = t("mergeHelpers"),
        s = mergeHelpers/*a*/.ArrayStrategies,
        l = mergeHelpers/*a*/.checkArrayStrategy,
        u = mergeHelpers/*a*/.checkMergeArrayArgs,
        c = mergeHelpers/*a*/.checkMergeLevel,
        p = mergeHelpers/*a*/.checkMergeObjectArgs,
        d = mergeHelpers/*a*/.isTerminal,
        h = mergeHelpers/*a*/.normalizeMergeArg,
        f = function(e, t, n, r) {
            p(e, t), c(r);
            for (var i = t ? Object.keys(t) : [], invariant/*o*/ = 0; invariant/*o*/ < i.length; invariant/*o*/++) {
                var mergeHelpers/*a*/ = i[invariant/*o*/];
                g(e, t, mergeHelpers/*a*/, n, r)
            }
        },
        m = function(e, t, n, r) {
            u(e, t), c(r);
            for (var i = Math.max(e.length, t.length), invariant/*o*/ = 0; i > invariant/*o*/; invariant/*o*/++) g(e, t, invariant/*o*/, n, r)
        },
        g = function(e, t, n, r, i) {
            var mergeHelpers/*a*/ = t[n],
                l = t.hasOwnProperty(n),
                u = l && d(mergeHelpers/*a*/),
                c = l && Array.isArray(mergeHelpers/*a*/),
                p = l && !c && !c,
                h = e[n],
                g = e.hasOwnProperty(n),
                _ = g && d(h),
                y = g && Array.isArray(h),
                v = g && !y && !y;
            _ ? u ? e[n] = mergeHelpers/*a*/ : c ? (e[n] = [], m(e[n], mergeHelpers/*a*/, r, i + 1)) : p ? (e[n] = {}, f(e[n], mergeHelpers/*a*/, r, i + 1)) : l || (e[n] = h) : y ? u ? e[n] = mergeHelpers/*a*/ : c ? (s[r] || invariant/*o*/(0, "mergeDeepInto(...): Attempted to merge two arrays, but mergeHelpers/*a*/ valid ArrayStrategy was not specified."), r === s.Clobber && (h.length = 0), m(h, mergeHelpers/*a*/, r, i + 1)) : p && (e[n] = {}, f(e[n], mergeHelpers/*a*/, r, i + 1)) : v ? u ? e[n] = mergeHelpers/*a*/ : c ? (e[n] = [], m(e[n], mergeHelpers/*a*/, r, i + 1)) : p && f(h, mergeHelpers/*a*/, r, i + 1) : g || (u ? e[n] = mergeHelpers/*a*/ : c ? (e[n] = [], m(e[n], mergeHelpers/*a*/, r, i + 1)) : p && (e[n] = {}, f(e[n], mergeHelpers/*a*/, r, i + 1)))
        },
        _ = function(e, t, n) {
            var r = h(t);
            l(n), f(e, r, n, 0)
        };
    i.exports = _
});