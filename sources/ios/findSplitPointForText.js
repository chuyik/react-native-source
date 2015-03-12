__d("findSplitPointForText",[],function (e, t, n, r, i) {
    function o(e, t, n) {
        var r = null,
            i = e.split("\n");
        if (t && e.length > t && (r = t), n && i.length > n) {
            var o = i.slice(0, n).join("\n").length;
            r = null !== r ? Math.min(o, r) : o
        }
        return r
    }
    i.exports = o
});