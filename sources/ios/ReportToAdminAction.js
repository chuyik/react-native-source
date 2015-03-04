__d("ReportToAdminAction",["GraphQLMutationAction","GraphQLMutatorHub","GraphQLStore","defaultRQLMutationCallback","invariant","rql"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var GraphQLMutationAction/*o*/ = require/*t*/("GraphQLMutationAction"),
        a = (require/*t*/("GraphQLMutatorHub"), require/*t*/("GraphQLStore")),
        defaultRQLMutationCallback/*s*/ = require/*t*/("defaultRQLMutationCallback"),
        invariant/*l*/ = require/*t*/("invariant"),
        rql/*u*/ = require/*t*/("rql"),
        c = {
            reportStoryToAdmin: function(global/*e*/) {
                var require/*t*/ = global/*e*/.groupID,
                    requireDynamic/*n*/ = global/*e*/.storyID,
                    requireLazy/*r*/ = global/*e*/.onSuccess,
                    module/*i*/ = global/*e*/.onFailure;
                require/*t*/ && requireDynamic/*n*/ || invariant/*l*/(0, "Invalid parameters for reportStoryToAdmin"), a.isValidNodeID(requireDynamic/*n*/) || invariant/*l*/(0, "Action taken on unknown story " + requireDynamic/*n*/);
                var c = function() {
                        var global/*e*/ = rql/*u*/.__GraphQL;
                        return new global/*e*/.Mutation("UnknownFile_m0", "GroupReportStoryToAdminResponsePayload", new global/*e*/.Callv("group_report_story_to_admin", [new global/*e*/.CallVariable("input")]), [new global/*e*/.Field("story", [new global/*e*/.Field("id", null, null, null, null, null, {
                            requisite: !0
                        })], null, null, null, null, {
                            rootCall: "node",
                            pk: "id"
                        }), new global/*e*/.Field("client_mutation_id", null, null, null, null, null, {
                            generated: !0,
                            requisite: !0
                        })])
                    }(),
                    p = new GraphQLMutationAction/*o*/;
                p.runServerAction(c, {
                    group_id: require/*t*/,
                    story_id: requireDynamic/*n*/,
                    source: "unknown"
                }, function(global/*e*/, require/*t*/) {
                    global/*e*/ ? module/*i*/ && module/*i*/(global/*e*/) : requireLazy/*r*/ && requireLazy/*r*/(), defaultRQLMutationCallback/*s*/(global/*e*/, require/*t*/, c)
                })
            }
        };
    module/*i*/.exports = c
});