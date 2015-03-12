__d("getHashtagMatches",["getHashtagRegex"],function (e, t, n, r, i) {
    function o(e, t) {
        for (var n, r, i, o, getHashtagRegex/*a*/ = e.getText(); null !== (n = s.exec(getHashtagRegex/*a*/));) r = n.index + n[1].length, i = n[2], o = n[3], t(r, r + i.length + o.length)
    }
    var getHashtagRegex/*a*/ = t("getHashtagRegex"),
        s = getHashtagRegex/*a*/();
    i.exports = o
});