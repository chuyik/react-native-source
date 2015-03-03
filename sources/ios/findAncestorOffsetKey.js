__d("findAncestorOffsetKey",["getSelectionOffsetKeyForNode"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        for (; global/*e*/ && global/*e*/ !== document.documentElement;) {
            var require/*t*/ = a(global/*e*/);
            if (null != require/*t*/) return require/*t*/;
            global/*e*/ = global/*e*/.parentNode
        }
        return null
    }
    var a = require/*t*/("getSelectionOffsetKeyForNode");
    module/*i*/.exports = o
});