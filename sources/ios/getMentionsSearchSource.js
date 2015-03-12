__d("getMentionsSearchSource",["AtSignMentionsStrategy","CapitalizedNameMentionsStrategy","DocumentCompositeMentionsSource","DocumentMentionsSource","EntitySearchSource","FilteredSearchSource"],function (e, t, n, r, i) {
    function o(e) {
        var t = new EntitySearchSource/*p*/({
                bootstrapFriends: !0,
                groupID: e
            }),
            n = new EntitySearchSource/*p*/({
                entityTypes: [h],
                bootstrapFriends: !0,
                groupID: e
            }),
            r = new FilteredSearchSource/*d*/(a, n);
        return new DocumentCompositeMentionsSource/*u*/([new DocumentMentionsSource/*c*/(AtSignMentionsStrategy/*s*/, t), new DocumentMentionsSource/*c*/(CapitalizedNameMentionsStrategy/*l*/, r)])
    }

    function a(e) {
        var t = Math.floor(e.getOrder() / 10);
        return 0 === t || 1 === t
    }
    var AtSignMentionsStrategy/*s*/ = t("AtSignMentionsStrategy"),
        CapitalizedNameMentionsStrategy/*l*/ = t("CapitalizedNameMentionsStrategy"),
        DocumentCompositeMentionsSource/*u*/ = t("DocumentCompositeMentionsSource"),
        DocumentMentionsSource/*c*/ = t("DocumentMentionsSource"),
        EntitySearchSource/*p*/ = t("EntitySearchSource"),
        FilteredSearchSource/*d*/ = t("FilteredSearchSource"),
        h = "User";
    i.exports = o
});