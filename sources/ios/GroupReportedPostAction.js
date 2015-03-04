__d("GroupReportedPostAction",["GraphQLMutationAction","GraphQLMutatorHub","GraphQLStore","defaultRQLMutationCallback","invariant","keyMirror","rql"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var GraphQLMutationAction/*o*/ = require/*t*/("GraphQLMutationAction"),
        a = (require/*t*/("GraphQLMutatorHub"), require/*t*/("GraphQLStore")),
        defaultRQLMutationCallback/*s*/ = require/*t*/("defaultRQLMutationCallback"),
        invariant/*l*/ = require/*t*/("invariant"),
        keyMirror/*u*/ = require/*t*/("keyMirror"),
        rql/*c*/ = require/*t*/("rql"),
        p = {
            mutateReportedPost: function(global/*e*/) {
                var require/*t*/ = global/*e*/.groupID,
                    requireDynamic/*n*/ = global/*e*/.storyID,
                    requireLazy/*r*/ = global/*e*/.action,
                    module/*i*/ = global/*e*/.onSuccess,
                    keyMirror/*u*/ = global/*e*/.onFailure;
                require/*t*/ && requireDynamic/*n*/ && null != requireLazy/*r*/ || invariant/*l*/(0, "Invalid parameters for mutateReportedPost"), keyMirror/*u*/ || invariant/*l*/(0, "mutateReportedPost requres onFailure callback."), a.isValidNodeID(requireDynamic/*n*/) || invariant/*l*/(0, "Action taken on unknown story " + requireDynamic/*n*/);
                var p, h;
                requireLazy/*r*/ === this.Actions.Ignore ? (p = function() {
                    var global/*e*/ = rql/*c*/.__GraphQL;
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
                    group_id: require/*t*/,
                    story_id: requireDynamic/*n*/
                }) : (p = function() {
                    var global/*e*/ = rql/*c*/.__GraphQL;
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
                    group_id: require/*t*/,
                    story_id: requireDynamic/*n*/,
                    author_consequence: d[requireLazy/*r*/]
                });
                var requireLazy/*r*/ = new GraphQLMutationAction/*o*/;
                requireLazy/*r*/.runServerAction(p, h, function(global/*e*/, require/*t*/) {
                    global/*e*/ ? keyMirror/*u*/(global/*e*/) : module/*i*/ && module/*i*/(), defaultRQLMutationCallback/*s*/(global/*e*/, require/*t*/, p)
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
    d[p.Actions.Remove] = "none", d[p.Actions.RemoveAndBan] = "ban_author", module/*i*/.exports = p
});