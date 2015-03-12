__d("GroupRemoveUserAction",["GraphQLMutationAction","GraphQLMutationQueryCreator","defaultRQLMutationCallback","rql"],function (e, t, n, r, i) {
    "use strict";
    var GraphQLMutationAction/*o*/ = t("GraphQLMutationAction"),
        GraphQLMutationQueryCreator/*a*/ = t("GraphQLMutationQueryCreator"),
        defaultRQLMutationCallback/*s*/ = t("defaultRQLMutationCallback"),
        rql/*l*/ = t("rql"),
        u = "treehouse_group_mall",
        c = {
            removeMemberFromGroup: function(e, t, n) {
                var r = GraphQLMutationQueryCreator/*a*/.createQuery("group_remove_member", {
                        group: t
                    }),
                    i = function(e) {
                        var t = rql/*l*/.__GraphQL;
                        return new t.Mutation("GroupRemoveUserAction_m0", "GroupRemoveMemberResponsePayload", new t.Callv("group_remove_member", [new t.CallVariable("input")]), [new t.Field("client_mutation_id", null, null, null, null, null, {
                            generated: !0,
                            requisite: !0
                        })], [rql/*l*/.__frag(e)])
                    }(r),
                    c = new GraphQLMutationAction/*o*/;
                c.runServerAction(i, {
                    group_id: t,
                    user_id: e,
                    source: u
                }, function(e, t) {
                    !e && n && n(), defaultRQLMutationCallback/*s*/(e, t, i)
                })
            }
        };
    i.exports = c
});