__d("StoryDeleteActions",["GraphQLMutationAction","GraphQLMutatorHub","rql"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        return {
            story_delete: {
                deleted_story_id: e
            }
        }
    }
    var GraphQLMutationAction/*a*/ = t("GraphQLMutationAction"),
        GraphQLMutatorHub/*s*/ = t("GraphQLMutatorHub"),
        rql/*l*/ = t("rql");
    GraphQLMutatorHub/*s*/.registerForNodeDeleteMutationType("story_delete", {
        deletedIDFieldName: "deleted_story_id"
    });
    var u = {
        deleteStory: function(e, t) {
            var n = new GraphQLMutationAction/*a*/,
                r = o(e);
            n.runOptimisticAction(r);
            var i = function() {
                var e = rql/*l*/.__GraphQL;
                return new e.Mutation("StoryDeleteActions_m0", "StoryDeleteResponsePayload", new e.Callv("story_delete", [new e.CallVariable("input")]), [new e.Field("deleted_story_id"), new e.Field("client_mutation_id", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })])
            }();
            n.runServerAction(i, {
                story_id: e,
                story_location: t
            })
        }
    };
    i.exports = u
});