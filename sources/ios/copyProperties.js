__d("copyProperties",[],function (e, t, n, r, i) {
    function o(e, t, n, r, i, o, a) {
        if (e = e || {}, __DEV__ && a) throw new Error("Too many arguments passed to copyProperties");
        for (var s, l = [t, n, r, i, o], u = 0; l[u];) {
            s = l[u++];
            for (var c in s) e[c] = s[c];
            s.hasOwnProperty && s.hasOwnProperty("toString") && "undefined" != typeof s.toString && e.toString !== s.toString && (e.toString = s.toString)
        }
        return e
    }
    i.exports = o
});