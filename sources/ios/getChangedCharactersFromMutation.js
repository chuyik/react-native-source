__d("getChangedCharactersFromMutation",[],function (e, t, n, r, i) {
    function o(e, t) {
        var n, r = Math.min(e.length, t.length),
            i = r,
            o = r;
        for (n = 0; r > n; n++)
            if (e.charAt(n) !== t.charAt(n)) {
                i = n;
                break
            }
        for (n = 0; r > n; n++)
            if (e.charAt(e.length - n - 1) !== t.charAt(t.length - n - 1)) {
                o = n;
                break
            }
        return {
            prefix: i,
            suffix: o
        }
    }

    function a(e, t, n) {
        for (var r = 0; n > r; r++) t.charAt(e.prefix - 1).match(/^\s?$/) ? e.suffix-- : e.prefix--
    }

    function s(e, t) {
        return e.substr(t.prefix, e.length - t.prefix - t.suffix)
    }

    function l(e) {
        var t, n;
        if (3 === e.length) t = e[1], n = e[2];
        else {
            if (2 !== e.length) return;
            t = e[0], n = e[1]
        }
        if (t.target === n.target) {
            var r = t.oldValue,
                i = n.oldValue,
                l = n.target.data;
            if (l !== r && l.length > i.length && r.length > i.length) {
                var u = o(r, i),
                    c = o(l, i),
                    p = u.prefix < c.prefix ? u : c,
                    d = r.length - p.prefix - p.suffix,
                    h = r.length - i.length;
                return a(p, r, h - d), {
                    node: n.target,
                    offset: p.prefix,
                    oldText: s(r, p),
                    newText: s(l, p)
                }
            }
        }
    }
    i.exports = l
});