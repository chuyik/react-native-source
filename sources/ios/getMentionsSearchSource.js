__d("getMentionsSearchSource",["AtSignMentionsStrategy","CapitalizedNameMentionsStrategy","DocumentCompositeMentionsSource","DocumentMentionsSource","EntitySearchSource","FilteredSearchSource"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        var require/*t*/ = new EntitySearchSource/*p*/({
                bootstrapFriends: !0,
                groupID: global/*e*/
            }),
            requireDynamic/*n*/ = new EntitySearchSource/*p*/({
                entityTypes: [h],
                bootstrapFriends: !0,
                groupID: global/*e*/
            }),
            requireLazy/*r*/ = new FilteredSearchSource/*d*/(a, requireDynamic/*n*/);
        return new DocumentCompositeMentionsSource/*u*/([new DocumentMentionsSource/*c*/(AtSignMentionsStrategy/*s*/, require/*t*/), new DocumentMentionsSource/*c*/(CapitalizedNameMentionsStrategy/*l*/, requireLazy/*r*/)])
    }

    function a(global/*e*/) {
        var require/*t*/ = Math.floor(global/*e*/.getOrder() / 10);
        return 0 === require/*t*/ || 1 === require/*t*/
    }
    var AtSignMentionsStrategy/*s*/ = require/*t*/("AtSignMentionsStrategy"),
        CapitalizedNameMentionsStrategy/*l*/ = require/*t*/("CapitalizedNameMentionsStrategy"),
        DocumentCompositeMentionsSource/*u*/ = require/*t*/("DocumentCompositeMentionsSource"),
        DocumentMentionsSource/*c*/ = require/*t*/("DocumentMentionsSource"),
        EntitySearchSource/*p*/ = require/*t*/("EntitySearchSource"),
        FilteredSearchSource/*d*/ = require/*t*/("FilteredSearchSource"),
        h = "User";
    module/*i*/.exports = o
});