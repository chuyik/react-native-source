__d("CommentDeleteAction",["ClientIDs","GraphQLMutationAction","GraphQLMutationQueryCreator","GraphQLMutatorHub","GraphQLStore","defaultRQLMutationCallback","rql"],function (e, t, n, r, i) {
    "use strict";
    var o = (t("ClientIDs"), t("GraphQLMutationAction")),
        GraphQLMutationQueryCreator/*a*/ = t("GraphQLMutationQueryCreator"),
        GraphQLMutatorHub/*s*/ = t("GraphQLMutatorHub"),
        l = (t("GraphQLStore"), t("defaultRQLMutationCallback")),
        rql/*u*/ = t("rql");
    GraphQLMutatorHub/*s*/.registerForNodeDeleteMutationType("comment_delete", {
        deletedIDFieldName: "deleted_comment_id"
    });
    var c = {
        deleteComment: function(e, t, n, r) {
            var i = (function(e) {
                    var t = rql/*u*/.__GraphQL;
                    return new t.Query("node", [rql/*u*/.__var(e)], [new t.Field("top_level_comments", [new t.Field("count")], null, null, null, null, {
                        connection: !0
                    }), new t.Field("id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })], null, null, "CommentDeleteAction_q0")
                }(t), GraphQLMutationQueryCreator/*a*/.createRangeDeleteQuery("comment_delete", t, "feedback", "top_level_comments")),
                GraphQLMutatorHub/*s*/ = function(e) {
                    var t = rql/*u*/.__GraphQL;
                    return new t.Mutation("CommentDeleteAction_m0", "CommentDeleteResponsePayload", new t.Callv("comment_delete", [new t.CallVariable("input")]), [new t.Field("deleted_comment_id"), new t.Field("client_mutation_id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })], [rql/*u*/.__frag(e)])
                }(i),
                c = new o;
            c.runServerAction(GraphQLMutatorHub/*s*/, {
                comment_id: e
            }, function(e, t) {
                l(e, t, GraphQLMutatorHub/*s*/), e && n(e), t && r()
            })
        }
    };
    i.exports = c
});