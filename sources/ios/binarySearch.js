__d("binarySearch",[],function (e, t, n, r, i) {
    function o(e, t) {
        if (__DEV__ && "number" != typeof e.length) throw new TypeError("binarySearch() must be passed array-like object.");
        for (var n = 0, r = e.length - 1; r >= n;) {
            var i = Math.floor((r + n) / 2),
                o = t(e[i], i);
            if (0 === o) return i;
            o > 0 ? r = i - 1 : n = i + 1
        }
        return -1
    }
    i.exports = o
});