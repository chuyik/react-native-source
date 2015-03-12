__d("GroupReportedPostAction",["GraphQLMutationAction","GraphQLMutatorHub","GraphQLStore","defaultRQLMutationCallback","invariant","keyMirror","rql"],function (e, t, n, r, i) {
    "use strict";
    var GraphQLMutationAction/*o*/ = t("GraphQLMutationAction"),
        a = (t("GraphQLMutatorHub"), t("GraphQLStore")),
        defaultRQLMutationCallback/*s*/ = t("defaultRQLMutationCallback"),
        invariant/*l*/ = t("invariant"),
        keyMirror/*u*/ = t("keyMirror"),
        rql/*c*/ = t("rql"),
        p = {
            mutateReportedPost: function(e) {
                var t = e.groupID,
                    n = e.storyID,
                    r = e.action,
                    i = e.onSuccess,
                    keyMirror/*u*/ = e.onFailure;
                t && n && null != r || invariant/*l*/(0, "Invalid parameters for mutateReportedPost"), keyMirror/*u*/ || invariant/*l*/(0, "mutateReportedPost requres onFailure callback."), a.isValidNodeID(n) || invariant/*l*/(0, "Action taken on unknown story " + n);
                var p, h;
                r === this.Actions.Ignore ? (p = function() {
                    var e = rql/*c*/.__GraphQL;
                    return new e.Mutation("UnknownFile_m0", "GroupIgnoreReportedStoryResponsePayload", new e.Callv("group_ignore_reported_story", [new e.CallVariable("input")]), [new e.Field("story", [new e.Field("id", null, null, null, null, null, {
                        requisite: !0
                    })], null, null, null, null, {
                        rootCall: "node",
                        pk: "id"
                    }), new e.Field("client_mutation_id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })])
                }(), h = {
                    group_id: t,
                    story_id: n
                }) : (p = function() {
                    var e = rql/*c*/.__GraphQL;
                    return new e.Mutation("UnknownFile_m1", "GroupDeleteReportedStoryResponsePayload", new e.Callv("group_delete_reported_story", [new e.CallVariable("input")]), [new e.Field("story", [new e.Field("id", null, null, null, null, null, {
                        requisite: !0
                    })], null, null, null, null, {
                        rootCall: "node",
                        pk: "id"
                    }), new e.Field("client_mutation_id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })])
                }(), h = {
                    group_id: t,
                    story_id: n,
                    author_consequence: d[r]
                });
                var r = new GraphQLMutationAction/*o*/;
                r.runServerAction(p, h, function(e, t) {
                    e ? keyMirror/*u*/(e) : i && i(), defaultRQLMutationCallback/*s*/(e, t, p)
                })
            }
        };
    p.Actions = keyMirror/*u*/({
        Undecided: null,
        Remove: null,
        RemoveAndBan: null,
        Ignore: null
    });
    var d = {};
    d[p.Actions.Remove] = "none", d[p.Actions.RemoveAndBan] = "ban_author", i.exports = p
});