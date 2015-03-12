__d("eprintf",[],function (e, t, n, r, i) {
    var o = function(e) {
        var t = Array.prototype.slice.call(arguments).map(function(e) {
                return String(e)
            }),
            n = e.split("%s").length - 1;
        if (n !== t.length - 1) return o("eprintf args number mismatch: %s", JSON.stringify(t));
        var r = 1;
        return e.replace(/%s/g, function() {
            return String(t[r++])
        })
    };
    i.exports = o
});