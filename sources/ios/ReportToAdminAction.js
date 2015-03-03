__d("ReportToAdminAction",["GraphQLMutationAction","GraphQLMutatorHub","GraphQLStore","defaultRQLMutationCallback","invariant","rql"],function (global/*e*/, require/*GraphQLMutationAction/*t*/*/, requireDynamic/*rql/*n*/*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*GraphQLMutationAction/*t*/*/("GraphQLMutationAction"),
        exports/*a*/ = (require/*GraphQLMutationAction/*t*/*/("GraphQLMutatorHub"), require/*GraphQLMutationAction/*t*/*/("GraphQLStore")),
        GraphQLMutatorHub/*s*/ = require/*GraphQLMutationAction/*t*/*/("defaultRQLMutationCallback"),
        GraphQLStore/*l*/ = require/*GraphQLMutationAction/*t*/*/("invariant"),
        defaultRQLMutationCallback/*u*/ = require/*GraphQLMutationAction/*t*/*/("rql"),
        invariant/*c*/ = {
            reportStoryToAdmin: function(global/*e*/) {
                var require/*GraphQLMutationAction/*t*/*/ = global/*e*/.groupID,
                    requireDynamic/*rql/*n*/*/ = global/*e*/.storyID,
                    requireLazy/*r*/ = global/*e*/.onSuccess,
                    module/*i*/ = global/*e*/.onFailure;
                require/*GraphQLMutationAction/*t*/*/ && requireDynamic/*rql/*n*/*/ || GraphQLStore/*l*/(0, "Invalid parameters for reportStoryToAdmin"), exports/*a*/.isValidNodeID(requireDynamic/*rql/*n*/*/) || GraphQLStore/*l*/(0, "Action taken on unknown story " + requireDynamic/*rql/*n*/*/);
                var invariant/*c*/ = function() {
                        var global/*e*/ = defaultRQLMutationCallback/*u*/.__GraphQL;
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
                    p = new o;
                p.runServerAction(invariant/*c*/, {
                    group_id: require/*GraphQLMutationAction/*t*/*/,
                    story_id: requireDynamic/*rql/*n*/*/,
                    source: "unknown"
                }, function(global/*e*/, require/*GraphQLMutationAction/*t*/*/) {
                    global/*e*/ ? module/*i*/ && module/*i*/(global/*e*/) : requireLazy/*r*/ && requireLazy/*r*/(), GraphQLMutatorHub/*s*/(global/*e*/, require/*GraphQLMutationAction/*t*/*/, invariant/*c*/)
                })
            }
        };
    module/*i*/.exports = invariant/*c*/
});