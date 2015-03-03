__d("diffRawProperties",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
        var module/*i*/, o, a, s, l;
        for (var u in requireDynamic/*n*/) module/*i*/ = requireLazy/*r*/[u], module/*i*/ && (a = require/*t*/ && require/*t*/[u], o = requireDynamic/*n*/[u], a !== o && (s = "object" != typeof o || null === o, l = s || !a || module/*i*/.diff && module/*i*/.diff(a, o), l && (global/*e*/ = global/*e*/ || {}, global/*e*/[u] = o)));
        for (var u in require/*t*/) module/*i*/ = requireLazy/*r*/[u], module/*i*/ && (global/*e*/ && void 0 !== global/*e*/[u] || (a = require/*t*/[u], o = requireDynamic/*n*/ && requireDynamic/*n*/[u], a !== o && (void 0 === o && (o = null), s = "object" != typeof o || null === o, l = s && a !== o || module/*i*/.diff && module/*i*/.diff(a, o), l && (global/*e*/ = global/*e*/ || {}, global/*e*/[u] = o))));
        return global/*e*/
    }
    module/*i*/.exports = o
});