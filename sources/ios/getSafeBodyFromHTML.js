__d("getSafeBodyFromHTML",[],function (e, t, n, r, i) {
    function o(e) {
        var t, n = null;
        return document.implementation && document.implementation.createHTMLDocument && (t = document.implementation.createHTMLDocument("foo"), t.documentElement.innerHTML = e, n = t.getElementsByTagName("body")[0]), n
    }
    i.exports = o
});