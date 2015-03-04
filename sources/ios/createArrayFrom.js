__d("createArrayFrom",["toArray"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        return !!global/*e*/ && ("object" == typeof global/*e*/ || "function" == typeof global/*e*/) && "length" in global/*e*/ && !("setInterval" in global/*e*/) && "number" != typeof global/*e*/.nodeType && (Array.isArray(global/*e*/) || "callee" in global/*e*/ || "item" in global/*e*/)
    }

    function a(global/*e*/) {
        return o(global/*e*/) ? Array.isArray(global/*e*/) ? global/*e*/.slice() : toArray/*s*/(global/*e*/) : [global/*e*/]
    }
    var toArray/*s*/ = require/*t*/("toArray");
    module/*i*/.exports = a
});