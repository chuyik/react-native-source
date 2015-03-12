__d("getTextContentFromFiles",["DocumentCharacters"],function (e, t, n, r, i) {
    function o(e, t) {
        var n = 0,
            r = [];
        e.forEach(function(i) {
            a(i, function(i) {
                n++, i && r.push(i), n == e.length && t(r.join(l))
            })
        })
    }

    function a(t, n) {
        if (!e.FileReader || t.type && !(t.type in c)) return void n("");
        if ("" === t.type && u.test(t.name)) return void n(t.name.replace(u, ""));
        var r = new FileReader;
        r.onload = function() {
            n(r.result)
        }, r.onerror = function() {
            n("")
        }, r.readAsText(t)
    }
    var DocumentCharacters/*s*/ = t("DocumentCharacters"),
        l = DocumentCharacters/*s*/.BLOCK_DELIMITER,
        u = /\.textClipping$/,
        c = {
            "text/plain": !0,
            "text/html": !0,
            "text/rtf": !0
        };
    i.exports = o
});