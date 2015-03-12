__d("xhrSimpleDataSerializer",[],function (e, t, n, r, i) {
    function o(e) {
        var t, n = [];
        for (t in e) n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
        return n.join("&")
    }
    i.exports = o
});