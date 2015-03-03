__d("getTextContentFromFiles",["DocumentCharacters"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*DocumentCharacters/*r*/*/, module/*i*/) {
    function o(global/*e*/, require/*exports/*t*/*/) {
        var requireDynamic/*n*/ = 0,
            requireLazy/*DocumentCharacters/*r*/*/ = [];
        global/*e*/.forEach(function(module/*i*/) {
            a(module/*i*/, function(module/*i*/) {
                requireDynamic/*n*/++, module/*i*/ && requireLazy/*DocumentCharacters/*r*/*/.push(module/*i*/), requireDynamic/*n*/ == global/*e*/.length && require/*exports/*t*/*/(requireLazy/*DocumentCharacters/*r*/*/.join(l))
            })
        })
    }

    function a(require/*exports/*t*/*/, requireDynamic/*n*/) {
        if (!global/*e*/.FileReader || require/*exports/*t*/*/.type && !(require/*exports/*t*/*/.type in c)) return void requireDynamic/*n*/("");
        if ("" === require/*exports/*t*/*/.type && u.test(require/*exports/*t*/*/.name)) return void requireDynamic/*n*/(require/*exports/*t*/*/.name.replace(u, ""));
        var requireLazy/*DocumentCharacters/*r*/*/ = new FileReader;
        requireLazy/*DocumentCharacters/*r*/*/.onload = function() {
            requireDynamic/*n*/(requireLazy/*DocumentCharacters/*r*/*/.result)
        }, requireLazy/*DocumentCharacters/*r*/*/.onerror = function() {
            requireDynamic/*n*/("")
        }, requireLazy/*DocumentCharacters/*r*/*/.readAsText(require/*exports/*t*/*/)
    }
    var s = require/*exports/*t*/*/("DocumentCharacters"),
        l = s.BLOCK_DELIMITER,
        u = /\.textClipping$/,
        c = {
            "text/plain": !0,
            "text/html": !0,
            "text/rtf": !0
        };
    module/*i*/.exports = o
});