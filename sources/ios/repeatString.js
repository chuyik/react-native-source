__d("repeatString",["invariant"],function (global/*e*/, require/*exports/*invariant/*t*/*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*exports/*invariant/*t*/*/*/) {
        if (1 === require/*exports/*invariant/*t*/*/*/) return global/*e*/;
        require/*exports/*invariant/*t*/*/*/ >= 0 || a(0, "Can not repeat by negative number: %s", require/*exports/*invariant/*t*/*/*/);
        for (var requireDynamic/*n*/ = ""; require/*exports/*invariant/*t*/*/*/;) 1 & require/*exports/*invariant/*t*/*/*/ && (requireDynamic/*n*/ += global/*e*/), (require/*exports/*invariant/*t*/*/*/ >>= 1) && (global/*e*/ += global/*e*/);
        return requireDynamic/*n*/
    }
    var a = require/*exports/*invariant/*t*/*/*/("invariant");
    module/*i*/.exports = o
});