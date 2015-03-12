__d("findRanges",[],function (e, t, n, r, i) {
    function o(e, t, n) {
        for (var r, i = 0, o = 0, a = 0; a < e.length; a++) o++, r = e[a], r !== e[a + 1] && (t(r) && n(i, o), i = o)
    }
    i.exports = o
});