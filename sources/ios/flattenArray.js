__d("flattenArray",[],function (e, t, n, r, i) {
    function o(e) {
        for (var t = e.slice(), n = []; t.length;) {
            var r = t.pop();
            Array.isArray(r) ? Array.prototype.push.apply(t, r) : n.push(r)
        }
        return n.reverse()
    }
    i.exports = o
});