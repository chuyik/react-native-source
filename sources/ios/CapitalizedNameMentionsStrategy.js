__d("CapitalizedNameMentionsStrategy",["DocumentMentionsRegex"],function (e, t, n, r, i) {
    var DocumentMentionsRegex/*o*/ = t("DocumentMentionsRegex"),
        a = 2,
        s = new RegExp("(?:" + DocumentMentionsRegex/*o*/.NAME + "{" + a + ",})$"),
        l = {
            findMentionableString: function(e) {
                var t = s.exec(e);
                return null !== t ? {
                    matchingString: t[0],
                    leadOffset: t[0].length
                } : null
            }
        };
    i.exports = l
});