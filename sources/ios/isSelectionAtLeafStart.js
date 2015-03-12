__d("isSelectionAtLeafStart",[],function (e, t, n, r, i) {
    function o(e, t) {
        var n = t.getStartOffset(),
            r = e.getKey(n);
        return e.getOffset(r) === n
    }
    i.exports = o
});