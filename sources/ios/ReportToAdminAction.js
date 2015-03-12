__d("ReportToAdminAction",["GraphQLMutationAction","GraphQLMutatorHub","GraphQLStore","defaultRQLMutationCallback","invariant","rql"],function (e, t, n, r, i) {
    "use strict";
    var GraphQLMutationAction/*o*/ = t("GraphQLMutationAction"),
        a = (t("GraphQLMutatorHub"), t("GraphQLStore")),
        defaultRQLMutationCallback/*s*/ = t("defaultRQLMutationCallback"),
        invariant/*l*/ = t("invariant"),
        rql/*u*/ = t("rql"),
        c = {
            reportStoryToAdmin: function(e) {
                var t = e.groupID,
                    n = e.storyID,
                    r = e.onSuccess,
                    i = e.onFailure;
                t && n || invariant/*l*/(0, "Invalid parameters for reportStoryToAdmin"), a.isValidNodeID(n) || invariant/*l*/(0, "Action taken on unknown story " + n);
                var c = function() {
                        var e = rql/*u*/.__GraphQL;
                        return new e.Mutation("UnknownFile_m0", "GroupReportStoryToAdminResponsePayload", new e.Callv("group_report_story_to_admin", [new e.CallVariable("input")]), [new e.Field("story", [new e.Field("id", null, null, null, null, null, {
                            requisite: !0
                        })], null, null, null, null, {
                            rootCall: "node",
                            pk: "id"
                        }), new e.Field("client_mutation_id", null, null, null, null, null, {
                            generated: !0,
                            requisite: !0
                        })])
                    }(),
                    p = new GraphQLMutationAction/*o*/;
                p.runServerAction(c, {
                    group_id: t,
                    story_id: n,
                    source: "unknown"
                }, function(e, t) {
                    e ? i && i(e) : r && r(), defaultRQLMutationCallback/*s*/(e, t, c)
                })
            }
        };
    i.exports = c
});