__d("getSafeBodyFromHTML",[],function (global/*e*/, require/*t*/, requireDynamic/*exports/*n*/*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        var require/*t*/, requireDynamic/*exports/*n*/*/ = null;
        return document.implementation && document.implementation.createHTMLDocument && (require/*t*/ = document.implementation.createHTMLDocument("foo"), require/*t*/.documentElement.innerHTML = global/*e*/, requireDynamic/*exports/*n*/*/ = require/*t*/.getElementsByTagName("body")[0]), requireDynamic/*exports/*n*/*/
    }
    module/*i*/.exports = o
});