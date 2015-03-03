__d("isNode",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        return !(!global/*e*/ || !("function" == typeof Node ? global/*e*/ instanceof Node : "object" == typeof global/*e*/ && "number" == typeof global/*e*/.nodeType && "string" == typeof global/*e*/.nodeName))
    }
    module/*i*/.exports = o
});