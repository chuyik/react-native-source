__d("isEmpty",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        if (Array.isArray(global/*e*/)) return 0 === global/*e*/.length;
        if ("object" == typeof global/*e*/) {
            for (var require/*t*/ in global/*e*/) return !1;
            return !0
        }
        return !global/*e*/
    }
    module/*i*/.exports = o
});