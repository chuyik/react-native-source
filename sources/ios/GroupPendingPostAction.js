__d("GroupPendingPostAction",["GraphQLMutationAction","GraphQLMutatorHub","GraphQLStore","defaultRQLMutationCallback","invariant","rql"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("GraphQLMutationAction"),
        a = (require/*t*/("GraphQLMutatorHub"), require/*t*/("GraphQLStore")),
        s = require/*t*/("defaultRQLMutationCallback"),
        l = require/*t*/("invariant"),
        u = require/*t*/("rql"),
        c = {
            mutatePendingPost: function(global/*e*/) {
                var require/*t*/ = global/*e*/.groupID,
                    requireDynamic/*n*/ = global/*e*/.storyID,
                    requireLazy/*r*/ = global/*e*/.approved,
                    module/*i*/ = global/*e*/.onSuccess,
                    c = global/*e*/.onFailure;
                require/*t*/ && requireDynamic/*n*/ && null != requireLazy/*r*/ || l(0, "Invalid parameters for editPendingPost"), c || l(0, "mutatePendingPost requres onFailure callback."), a.isValidNodeID(requireDynamic/*n*/) || l(0, "Action taken on unknown story " + requireDynamic/*n*/);
                var p;
                p = requireLazy/*r*/ ? function() {
                    var global/*e*/ = u.__GraphQL;
                    return new global/*e*/.Mutation("UnknownFile_m0", "GroupApprovePendingStoryResponsePayload", new global/*e*/.Callv("group_approve_pending_story", [new global/*e*/.CallVariable("input")]), [new global/*e*/.Field("story", [new global/*e*/.Field("id", null, null, null, null, null, {
                        requisite: !0
                    })], null, null, null, null, {
                        rootCall: "node",
                        pk: "id"
                    }), new global/*e*/.Field("client_mutation_id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })])
                }() : function() {
                    var global/*e*/ = u.__GraphQL;
                    return new global/*e*/.Mutation("UnknownFile_m1", "GroupDeletePendingStoryResponsePayload", new global/*e*/.Callv("group_delete_pending_story", [new global/*e*/.CallVariable("input")]), [new global/*e*/.Field("story", [new global/*e*/.Field("id", null, null, null, null, null, {
                        requisite: !0
                    })], null, null, null, null, {
                        rootCall: "node",
                        pk: "id"
                    }), new global/*e*/.Field("client_mutation_id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })])
                }();
                var d = new o;
                d.runServerAction(p, {
                    group_id: require/*t*/,
                    story_id: requireDynamic/*n*/
                }, function(global/*e*/, require/*t*/) {
                    global/*e*/ ? c(global/*e*/) : module/*i*/ && module/*i*/(), s(global/*e*/, require/*t*/, p)
                })
            }
        };
    module/*i*/.exports = c
});