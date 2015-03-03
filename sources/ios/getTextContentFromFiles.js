__d("getTextContentFromFiles",["DocumentCharacters"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = 0,
            requireLazy/*r*/ = [];
        global/*e*/.forEach(function(module/*i*/) {
            a(module/*i*/, function(module/*i*/) {
                requireDynamic/*n*/++, module/*i*/ && requireLazy/*r*/.push(module/*i*/), requireDynamic/*n*/ == global/*e*/.length && require/*t*/(requireLazy/*r*/.join(l))
            })
        })
    }

    function a(require/*t*/, requireDynamic/*n*/) {
        if (!global/*e*/.FileReader || require/*t*/.type && !(require/*t*/.type in c)) return void requireDynamic/*n*/("");
        if ("" === require/*t*/.type && u.test(require/*t*/.name)) return void requireDynamic/*n*/(require/*t*/.name.replace(u, ""));
        var requireLazy/*r*/ = new FileReader;
        requireLazy/*r*/.onload = function() {
            requireDynamic/*n*/(requireLazy/*r*/.result)
        }, requireLazy/*r*/.onerror = function() {
            requireDynamic/*n*/("")
        }, requireLazy/*r*/.readAsText(require/*t*/)
    }
    var s = require/*t*/("DocumentCharacters"),
        l = s.BLOCK_DELIMITER,
        u = /\.textClipping$/,
        c = {
            "text/plain": !0,
            "text/html": !0,
            "text/rtf": !0
        };
    module/*i*/.exports = o
});