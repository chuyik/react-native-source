__d("GroupBlockUserAction",["GraphQLMutationAction","GraphQLMutationQueryCreator","rql"],function (e, t, n, r, i) {
    "use strict";
    var GraphQLMutationAction/*o*/ = t("GraphQLMutationAction"),
        GraphQLMutationQueryCreator/*a*/ = t("GraphQLMutationQueryCreator"),
        rql/*s*/ = t("rql"),
        l = "treehouse_group_mall",
        u = {
            blockUserFromGroup: function(e, t, n) {
                var r = GraphQLMutationQueryCreator/*a*/.createQuery("group_block", {
                        group: t
                    }),
                    i = function(e) {
                        var t = rql/*s*/.__GraphQL;
                        return new t.Mutation("GroupBlockUserAction_m0", "GroupBlockResponsePayload", new t.Callv("group_block", [new t.CallVariable("input")]), [new t.Field("client_mutation_id", null, null, null, null, null, {
                            generated: !0,
                            requisite: !0
                        })], [rql/*s*/.__frag(e)])
                    }(r),
                    u = new GraphQLMutationAction/*o*/;
                u.runServerAction(i, {
                    group_id: t,
                    user_id: e,
                    source: l
                }, function(e) {
                    if (e) throw e;
                    n && n()
                })
            }
        };
    i.exports = u
});