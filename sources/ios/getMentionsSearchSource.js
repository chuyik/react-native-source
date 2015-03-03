__d("getMentionsSearchSource",["AtSignMentionsStrategy","CapitalizedNameMentionsStrategy","DocumentCompositeMentionsSource","DocumentMentionsSource","EntitySearchSource","FilteredSearchSource"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        var require/*t*/ = new p({
                bootstrapFriends: !0,
                groupID: global/*e*/
            }),
            requireDynamic/*n*/ = new p({
                entityTypes: [h],
                bootstrapFriends: !0,
                groupID: global/*e*/
            }),
            requireLazy/*r*/ = new d(a, requireDynamic/*n*/);
        return new u([new c(s, require/*t*/), new c(l, requireLazy/*r*/)])
    }

    function a(global/*e*/) {
        var require/*t*/ = Math.floor(global/*e*/.getOrder() / 10);
        return 0 === require/*t*/ || 1 === require/*t*/
    }
    var s = require/*t*/("AtSignMentionsStrategy"),
        l = require/*t*/("CapitalizedNameMentionsStrategy"),
        u = require/*t*/("DocumentCompositeMentionsSource"),
        c = require/*t*/("DocumentMentionsSource"),
        p = require/*t*/("EntitySearchSource"),
        d = require/*t*/("FilteredSearchSource"),
        h = "User";
    module/*i*/.exports = o
});