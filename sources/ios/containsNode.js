__d("containsNode",["isTextNode"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*exports/*t*/*/) {
        return global/*e*/ && require/*exports/*t*/*/ ? global/*e*/ === require/*exports/*t*/*/ ? !0 : a(global/*e*/) ? !1 : a(require/*exports/*t*/*/) ? o(global/*e*/, require/*exports/*t*/*/.parentNode) : global/*e*/.contains ? global/*e*/.contains(require/*exports/*t*/*/) : global/*e*/.compareDocumentPosition ? !!(16 & global/*e*/.compareDocumentPosition(require/*exports/*t*/*/)) : !1 : !1
    }
    var a = require/*exports/*t*/*/("isTextNode");
    module/*i*/.exports = o
});