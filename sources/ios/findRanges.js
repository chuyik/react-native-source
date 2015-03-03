__d("findRanges",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        for (var requireLazy/*r*/, module/*i*/ = 0, o = 0, a = 0; a < global/*e*/.length; a++) o++, requireLazy/*r*/ = global/*e*/[a], requireLazy/*r*/ !== global/*e*/[a + 1] && (require/*t*/(requireLazy/*r*/) && requireDynamic/*n*/(module/*i*/, o), module/*i*/ = o)
    }
    module/*i*/.exports = o
});