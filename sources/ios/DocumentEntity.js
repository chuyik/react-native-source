__d("DocumentEntity",["DocumentEntityInstance","invariant"],function (e, t, n, r, i) {
    var DocumentEntityInstance/*o*/ = t("DocumentEntityInstance"),
        invariant/*a*/ = t("invariant"),
        s = {},
        l = 0,
        u = {
            create: function(e, t, n) {
                return u.add(new DocumentEntityInstance/*o*/(e, t, n))
            },
            add: function(e) {
                return s[++l] = e, l.toString()
            },
            get: function(e) {
                var t = s[e];
                return t || invariant/*a*/(0, "Unknown DocumentEntity key."), t
            }
        };
    i.exports = u
});