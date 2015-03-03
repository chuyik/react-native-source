__d("GroupReportedPostAction",["GraphQLMutationAction","GraphQLMutatorHub","GraphQLStore","defaultRQLMutationCallback","invariant","keyMirror","rql"],function (global/*e*/, require/*GraphQLMutationAction/*t*/*/, requireDynamic/*rql/*n*/*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*GraphQLMutationAction/*t*/*/("GraphQLMutationAction"),
        exports/*a*/ = (require/*GraphQLMutationAction/*t*/*/("GraphQLMutatorHub"), require/*GraphQLMutationAction/*t*/*/("GraphQLStore")),
        GraphQLMutatorHub/*s*/ = require/*GraphQLMutationAction/*t*/*/("defaultRQLMutationCallback"),
        GraphQLStore/*l*/ = require/*GraphQLMutationAction/*t*/*/("invariant"),
        defaultRQLMutationCallback/*u*/ = require/*GraphQLMutationAction/*t*/*/("keyMirror"),
        invariant/*c*/ = require/*GraphQLMutationAction/*t*/*/("rql"),
        keyMirror/*p*/ = {
            mutateReportedPost: function(global/*e*/) {
                var require/*GraphQLMutationAction/*t*/*/ = global/*e*/.groupID,
                    requireDynamic/*rql/*n*/*/ = global/*e*/.storyID,
                    requireLazy/*r*/ = global/*e*/.action,
                    module/*i*/ = global/*e*/.onSuccess,
                    defaultRQLMutationCallback/*u*/ = global/*e*/.onFailure;
                require/*GraphQLMutationAction/*t*/*/ && requireDynamic/*rql/*n*/*/ && null != requireLazy/*r*/ || GraphQLStore/*l*/(0, "Invalid parameters for mutateReportedPost"), defaultRQLMutationCallback/*u*/ || GraphQLStore/*l*/(0, "mutateReportedPost requres onFailure callback."), exports/*a*/.isValidNodeID(requireDynamic/*rql/*n*/*/) || GraphQLStore/*l*/(0, "Action taken on unknown story " + requireDynamic/*rql/*n*/*/);
                var keyMirror/*p*/, h;
                requireLazy/*r*/ === this.Actions.Ignore ? (keyMirror/*p*/ = function() {
                    var global/*e*/ = invariant/*c*/.__GraphQL;
                    return new global/*e*/.Mutation("UnknownFile_m0", "GroupIgnoreReportedStoryResponsePayload", new global/*e*/.Callv("group_ignore_reported_story", [new global/*e*/.CallVariable("input")]), [new global/*e*/.Field("story", [new global/*e*/.Field("id", null, null, null, null, null, {
                        requisite: !0
                    })], null, null, null, null, {
                        rootCall: "node",
                        pk: "id"
                    }), new global/*e*/.Field("client_mutation_id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })])
                }(), h = {
                    group_id: require/*GraphQLMutationAction/*t*/*/,
                    story_id: requireDynamic/*rql/*n*/*/
                }) : (keyMirror/*p*/ = function() {
                    var global/*e*/ = invariant/*c*/.__GraphQL;
                    return new global/*e*/.Mutation("UnknownFile_m1", "GroupDeleteReportedStoryResponsePayload", new global/*e*/.Callv("group_delete_reported_story", [new global/*e*/.CallVariable("input")]), [new global/*e*/.Field("story", [new global/*e*/.Field("id", null, null, null, null, null, {
                        requisite: !0
                    })], null, null, null, null, {
                        rootCall: "node",
                        pk: "id"
                    }), new global/*e*/.Field("client_mutation_id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })])
                }(), h = {
                    group_id: require/*GraphQLMutationAction/*t*/*/,
                    story_id: requireDynamic/*rql/*n*/*/,
                    author_consequence: d[requireLazy/*r*/]
                });
                var requireLazy/*r*/ = new o;
                requireLazy/*r*/.runServerAction(keyMirror/*p*/, h, function(global/*e*/, require/*GraphQLMutationAction/*t*/*/) {
                    global/*e*/ ? defaultRQLMutationCallback/*u*/(global/*e*/) : module/*i*/ && module/*i*/(), GraphQLMutatorHub/*s*/(global/*e*/, require/*GraphQLMutationAction/*t*/*/, keyMirror/*p*/)
                })
            }
        };
    keyMirror/*p*/.Actions = defaultRQLMutationCallback/*u*/({
        Undecided: null,
        Remove: null,
        RemoveAndBan: null,
        Ignore: null
    });
    var d = {};
    d[keyMirror/*p*/.Actions.Remove] = "none", d[keyMirror/*p*/.Actions.RemoveAndBan] = "ban_author", module/*i*/.exports = keyMirror/*p*/
});