__d("partitionTextAndRanges",[],function (e, t, n, r, i) {
    function o(e, t) {
        var n = e.offset + e.length;
        return t > e.offset && n > t
    }

    function a(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            if (o(r, t)) return r.offset
        }
        return t
    }
    var s = function(e, t, n) {
        for (var r = [], i = [], o = a(t, n), s = 0; s < t.length; s++) {
            var l = t[s];
            l.offset < o ? r.push(l) : i.push({
                offset: l.offset - o,
                length: l.length,
                entity: l.entity
            })
        }
        return {
            before: {
                ranges: r,
                text: e.substr(0, o)
            },
            after: {
                ranges: i,
                text: e.substr(o)
            }
        }
    };
    i.exports = s
});