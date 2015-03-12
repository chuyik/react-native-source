__d("DocumentRemovableWord",["TokenizeUtil"],function (e, t, n, r, i) {
    function o(e, t) {
        var n = t ? d.exec(e) : c.exec(e);
        return n ? n[0] : null
    }
    var TokenizeUtil/*a*/ = t("TokenizeUtil"),
        s = TokenizeUtil/*a*/.getPunctuation();
    s = s.replace("'", "").slice(1, -1);
    var l = "\\s" + s,
        u = "^([" + l + "]*[^" + l + "]+|[" + l + "]+)",
        c = new RegExp(u),
        p = "([^" + l + "]+[" + l + "]*|[" + l + "]+)$",
        d = new RegExp(p),
        h = {
            getBackward: function(e) {
                return o(e, !0)
            },
            getForward: function(e) {
                return o(e, !1)
            }
        };
    i.exports = h
});