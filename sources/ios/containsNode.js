__d("containsNode",["isTextNode"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        return global/*e*/ && require/*t*/ ? global/*e*/ === require/*t*/ ? !0 : isTextNode/*a*/(global/*e*/) ? !1 : isTextNode/*a*/(require/*t*/) ? o(global/*e*/, require/*t*/.parentNode) : global/*e*/.contains ? global/*e*/.contains(require/*t*/) : global/*e*/.compareDocumentPosition ? !!(16 & global/*e*/.compareDocumentPosition(require/*t*/)) : !1 : !1
    }
    var isTextNode/*a*/ = require/*t*/("isTextNode");
    module/*i*/.exports = o
});