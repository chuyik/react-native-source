__d("GroupPendingPostAction",["GraphQLMutationAction","GraphQLMutatorHub","GraphQLStore","defaultRQLMutationCallback","invariant","rql"],function (e, t, n, r, i) {
    "use strict";
    var GraphQLMutationAction/*o*/ = t("GraphQLMutationAction"),
        a = (t("GraphQLMutatorHub"), t("GraphQLStore")),
        defaultRQLMutationCallback/*s*/ = t("defaultRQLMutationCallback"),
        invariant/*l*/ = t("invariant"),
        rql/*u*/ = t("rql"),
        c = {
            mutatePendingPost: function(e) {
                var t = e.groupID,
                    n = e.storyID,
                    r = e.approved,
                    i = e.onSuccess,
                    c = e.onFailure;
                t && n && null != r || invariant/*l*/(0, "Invalid parameters for editPendingPost"), c || invariant/*l*/(0, "mutatePendingPost requres onFailure callback."), a.isValidNodeID(n) || invariant/*l*/(0, "Action taken on unknown story " + n);
                var p;
                p = r ? function() {
                    var e = rql/*u*/.__GraphQL;
                    return new e.Mutation("UnknownFile_m0", "GroupApprovePendingStoryResponsePayload", new e.Callv("group_approve_pending_story", [new e.CallVariable("input")]), [new e.Field("story", [new e.Field("id", null, null, null, null, null, {
                        requisite: !0
                    })], null, null, null, null, {
                        rootCall: "node",
                        pk: "id"
                    }), new e.Field("client_mutation_id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })])
                }() : function() {
                    var e = rql/*u*/.__GraphQL;
                    return new e.Mutation("UnknownFile_m1", "GroupDeletePendingStoryResponsePayload", new e.Callv("group_delete_pending_story", [new e.CallVariable("input")]), [new e.Field("story", [new e.Field("id", null, null, null, null, null, {
                        requisite: !0
                    })], null, null, null, null, {
                        rootCall: "node",
                        pk: "id"
                    }), new e.Field("client_mutation_id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })])
                }();
                var d = new GraphQLMutationAction/*o*/;
                d.runServerAction(p, {
                    group_id: t,
                    story_id: n
                }, function(e, t) {
                    e ? c(e) : i && i(), defaultRQLMutationCallback/*s*/(e, t, p)
                })
            }
        };
    i.exports = c
});