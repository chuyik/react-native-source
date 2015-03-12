__d("GroupPinPostAction",["GraphQL_EXPERIMENTAL","GraphQLMutationAction","GraphQLMutationQueryCreator","GraphQLMutatorHub","defaultRQLMutationCallback","rql"],function (e, t, n, r, i) {
    "use strict";
    var o = (t("GraphQL_EXPERIMENTAL"), t("GraphQLMutationAction")),
        GraphQLMutationQueryCreator/*a*/ = t("GraphQLMutationQueryCreator"),
        s = (t("GraphQLMutatorHub"), t("defaultRQLMutationCallback")),
        rql/*l*/ = t("rql"),
        u = {
            updatePinnedPost: function(e, t, n, r, i) {
                var u, c;
                n ? (u = GraphQLMutationQueryCreator/*a*/.createQuery("group_pin_story", {
                    group: e
                }), c = function(e) {
                    var t = rql/*l*/.__GraphQL;
                    return new t.Mutation("GroupPinPostAction_m0", "GroupPinStoryResponsePayload", new t.Callv("group_pin_story", [new t.CallVariable("input")]), [new t.Field("client_mutation_id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })], [rql/*l*/.__frag(e)])
                }(u)) : (u = GraphQLMutationQueryCreator/*a*/.createQuery("group_unpin_story", {
                    group: e
                }), c = function(e) {
                    var t = rql/*l*/.__GraphQL;
                    return new t.Mutation("GroupPinPostAction_m1", "GroupUnpinStoryResponsePayload", new t.Callv("group_unpin_story", [new t.CallVariable("input")]), [new t.Field("client_mutation_id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })], [rql/*l*/.__frag(e)])
                }(u));
                var p = new o;
                p.runServerAction(c, {
                    group_id: e,
                    story_id: t,
                    source: r
                }, function(e, t, n, r) {
                    if (s(e, t, n, r), e) throw e;
                    t && i && i()
                })
            }
        };
    i.exports = u
});