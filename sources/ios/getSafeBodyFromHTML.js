__d("getSafeBodyFromHTML",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        var require/*t*/, requireDynamic/*n*/ = null;
        return document.implementation && document.implementation.createHTMLDocument && (require/*t*/ = document.implementation.createHTMLDocument("foo"), require/*t*/.documentElement.innerHTML = global/*e*/, requireDynamic/*n*/ = require/*t*/.getElementsByTagName("body")[0]), requireDynamic/*n*/
    }
    module/*i*/.exports = o
});