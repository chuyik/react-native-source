__d("GroupPendingPostAction",["GraphQLMutationAction","GraphQLMutatorHub","GraphQLStore","defaultRQLMutationCallback","invariant","rql"],function (global/*e*/, require/*GraphQLMutationAction/*t*/*/, requireDynamic/*rql/*n*/*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*GraphQLMutationAction/*t*/*/("GraphQLMutationAction"),
        exports/*a*/ = (require/*GraphQLMutationAction/*t*/*/("GraphQLMutatorHub"), require/*GraphQLMutationAction/*t*/*/("GraphQLStore")),
        GraphQLMutatorHub/*s*/ = require/*GraphQLMutationAction/*t*/*/("defaultRQLMutationCallback"),
        GraphQLStore/*l*/ = require/*GraphQLMutationAction/*t*/*/("invariant"),
        defaultRQLMutationCallback/*u*/ = require/*GraphQLMutationAction/*t*/*/("rql"),
        invariant/*c*/ = {
            mutatePendingPost: function(global/*e*/) {
                var require/*GraphQLMutationAction/*t*/*/ = global/*e*/.groupID,
                    requireDynamic/*rql/*n*/*/ = global/*e*/.storyID,
                    requireLazy/*r*/ = global/*e*/.approved,
                    module/*i*/ = global/*e*/.onSuccess,
                    invariant/*c*/ = global/*e*/.onFailure;
                require/*GraphQLMutationAction/*t*/*/ && requireDynamic/*rql/*n*/*/ && null != requireLazy/*r*/ || GraphQLStore/*l*/(0, "Invalid parameters for editPendingPost"), invariant/*c*/ || GraphQLStore/*l*/(0, "mutatePendingPost requres onFailure callback."), exports/*a*/.isValidNodeID(requireDynamic/*rql/*n*/*/) || GraphQLStore/*l*/(0, "Action taken on unknown story " + requireDynamic/*rql/*n*/*/);
                var p;
                p = requireLazy/*r*/ ? function() {
                    var global/*e*/ = defaultRQLMutationCallback/*u*/.__GraphQL;
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
                    var global/*e*/ = defaultRQLMutationCallback/*u*/.__GraphQL;
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
                    group_id: require/*GraphQLMutationAction/*t*/*/,
                    story_id: requireDynamic/*rql/*n*/*/
                }, function(global/*e*/, require/*GraphQLMutationAction/*t*/*/) {
                    global/*e*/ ? invariant/*c*/(global/*e*/) : module/*i*/ && module/*i*/(), GraphQLMutatorHub/*s*/(global/*e*/, require/*GraphQLMutationAction/*t*/*/, p)
                })
            }
        };
    module/*i*/.exports = invariant/*c*/
});