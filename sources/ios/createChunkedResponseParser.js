__d("createChunkedResponseParser",["invariant"],function (e, t, n, r, i) {
    function o(e, t) {
        var n = 0,
            r = {
                lengths: [],
                rawText: ""
            },
            i = function(i, o, u) {
                if (r.rawText = i, r.lengths.push(i.length), t && (i = t(i), null != i && "string" != typeof i && invariant/*a*/(0, "createChunkedResponseParser: Filtered response must be invariant/*a*/ ?string")), i)
                    for (var c = i.length; c > n;) {
                        var p = i.indexOf(s, n);
                        if (0 > p) {
                            if (!u) break;
                            p = c
                        }
                        var d = i.slice(n, p);
                        n += d.length + l, e(d, o, u && n >= c, r)
                    } else u && e("", o, !0, r)
            };
        return i.parseStreaming = !0, i
    }
    var invariant/*a*/ = t("invariant"),
        s = "\r\n",
        l = 2;
    i.exports = o
});