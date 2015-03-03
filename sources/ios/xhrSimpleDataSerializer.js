__d("xhrSimpleDataSerializer",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        var require/*t*/, requireDynamic/*n*/ = [];
        for (require/*t*/ in global/*e*/) requireDynamic/*n*/.push(encodeURIComponent(require/*t*/) + "=" + encodeURIComponent(global/*e*/[require/*t*/]));
        return requireDynamic/*n*/.join("&")
    }
    module/*i*/.exports = o
});