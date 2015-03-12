__d("AtSignMentionsStrategy",["DocumentMentionsRegex"],function (e, t, n, r, i) {
    var DocumentMentionsRegex/*o*/ = t("DocumentMentionsRegex"),
        a = DocumentMentionsRegex/*o*/.PUNCTUATION,
        s = ["@", "\\uff20"].join(""),
        l = "[^" + s + a + "\\s]",
        u = "(?:\\.[ |$]| |[" + a + "]|)",
        c = new RegExp("(?:^|\\s)([" + s + "]((?:" + l + u + "){0,20}))$"),
        p = {
            findMentionableString: function(e) {
                var t = c.exec(e);
                if (null !== t) {
                    var n = t[2];
                    if (n.length) return {
                        matchingString: n,
                        leadOffset: t[1].length
                    }
                }
                return null
            }
        };
    i.exports = p
});