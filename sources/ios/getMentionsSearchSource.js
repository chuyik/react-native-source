__d("getMentionsSearchSource",["AtSignMentionsStrategy","CapitalizedNameMentionsStrategy","DocumentCompositeMentionsSource","DocumentMentionsSource","EntitySearchSource","FilteredSearchSource"],function (global/*e*/, require/*FilteredSearchSource/*t*/*/, requireDynamic/*AtSignMentionsStrategy/*EntitySearchSource/*n*/*/*/, requireLazy/*DocumentMentionsSource/*r*/*/, module/*i*/) {
    function o(global/*e*/) {
        var require/*FilteredSearchSource/*t*/*/ = new p({
                CapitalizedNameMentionsStrategy/*bootstrapFriends*/: !0,
                exports/*DocumentCompositeMentionsSource/*groupID*/*/: global/*e*/
            }),
            requireDynamic/*AtSignMentionsStrategy/*EntitySearchSource/*n*/*/*/ = new p({
                entityTypes: [h],
                CapitalizedNameMentionsStrategy/*bootstrapFriends*/: !0,
                exports/*DocumentCompositeMentionsSource/*groupID*/*/: global/*e*/
            }),
            requireLazy/*DocumentMentionsSource/*r*/*/ = new d(a, requireDynamic/*AtSignMentionsStrategy/*EntitySearchSource/*n*/*/*/);
        return new u([new c(s, require/*FilteredSearchSource/*t*/*/), new c(l, requireLazy/*DocumentMentionsSource/*r*/*/)])
    }

    function a(global/*e*/) {
        var require/*FilteredSearchSource/*t*/*/ = Math.floor(global/*e*/.getOrder() / 10);
        return 0 === require/*FilteredSearchSource/*t*/*/ || 1 === require/*FilteredSearchSource/*t*/*/
    }
    var s = require/*FilteredSearchSource/*t*/*/("AtSignMentionsStrategy"),
        l = require/*FilteredSearchSource/*t*/*/("CapitalizedNameMentionsStrategy"),
        u = require/*FilteredSearchSource/*t*/*/("DocumentCompositeMentionsSource"),
        c = require/*FilteredSearchSource/*t*/*/("DocumentMentionsSource"),
        p = require/*FilteredSearchSource/*t*/*/("EntitySearchSource"),
        d = require/*FilteredSearchSource/*t*/*/("FilteredSearchSource"),
        h = "User";
    module/*i*/.exports = o
});