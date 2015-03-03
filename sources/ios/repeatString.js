__d("repeatString",["invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        if (1 === require/*t*/) return global/*e*/;
        require/*t*/ >= 0 || a(0, "Can not repeat by negative number: %s", require/*t*/);
        for (var requireDynamic/*n*/ = ""; require/*t*/;) 1 & require/*t*/ && (requireDynamic/*n*/ += global/*e*/), (require/*t*/ >>= 1) && (global/*e*/ += global/*e*/);
        return requireDynamic/*n*/
    }
    var a = require/*t*/("invariant");
    module/*i*/.exports = o
});