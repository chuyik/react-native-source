__d("getActiveElement",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o() {
        try {
            return document.activeElement || document.body
        } catch (global/*e*/) {
            return document.body
        }
    }
    module/*i*/.exports = o
});