__d("clamp",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        return global/*e*/ > require/*t*/ ? global/*e*/ : require/*t*/ > requireDynamic/*n*/ ? requireDynamic/*n*/ : require/*t*/
    }
    module/*i*/.exports = o
});