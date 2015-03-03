__d("StoryDeleteActions",["GraphQLMutationAction","GraphQLMutatorHub","rql"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        return {
            story_delete: {
                deleted_story_id: global/*e*/
            }
        }
    }
    var a = require/*t*/("GraphQLMutationAction"),
        s = require/*t*/("GraphQLMutatorHub"),
        l = require/*t*/("rql");
    s.registerForNodeDeleteMutationType("story_delete", {
        deletedIDFieldName: "deleted_story_id"
    });
    var u = {
        deleteStory: function(global/*e*/, require/*t*/) {
            var requireDynamic/*n*/ = new a,
                requireLazy/*r*/ = o(global/*e*/);
            requireDynamic/*n*/.runOptimisticAction(requireLazy/*r*/);
            var module/*i*/ = function() {
                var global/*e*/ = l.__GraphQL;
                return new global/*e*/.Mutation("StoryDeleteActions_m0", "StoryDeleteResponsePayload", new global/*e*/.Callv("story_delete", [new global/*e*/.CallVariable("input")]), [new global/*e*/.Field("deleted_story_id"), new global/*e*/.Field("client_mutation_id", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })])
            }();
            requireDynamic/*n*/.runServerAction(module/*i*/, {
                story_id: global/*e*/,
                story_location: require/*t*/
            })
        }
    };
    module/*i*/.exports = u
});