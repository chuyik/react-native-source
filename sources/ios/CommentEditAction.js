__d("CommentEditAction",["GraphQL_EXPERIMENTAL","GraphQLMutationAction","GraphQLMutationQueryCreator","GraphQLMutatorHub","GraphQLQueryRunner","GraphQLStore","defaultRQLMutationCallback","invariant","rql"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var GraphQL_EXPERIMENTAL/*o*/ = require/*t*/("GraphQL_EXPERIMENTAL"),
        GraphQLMutationAction/*a*/ = require/*t*/("GraphQLMutationAction"),
        GraphQLMutationQueryCreator/*s*/ = require/*t*/("GraphQLMutationQueryCreator"),
        l = (require/*t*/("GraphQLMutatorHub"), require/*t*/("GraphQLQueryRunner")),
        GraphQLStore/*u*/ = require/*t*/("GraphQLStore"),
        defaultRQLMutationCallback/*c*/ = require/*t*/("defaultRQLMutationCallback"),
        invariant/*p*/ = require/*t*/("invariant"),
        rql/*d*/ = require/*t*/("rql"),
        h = {
            handleCommentEdit: function(global/*e*/, require/*t*/) {
                GraphQLStore/*u*/.isValidNodeID(global/*e*/) || invariant/*p*/(0, "comment edit performed on unknown comment"), void 0 === require/*t*/.text && invariant/*p*/(0, "comment message must have GraphQLMutationAction/*a*/ text field, even if empty.");
                var requireDynamic/*n*/ = new GraphQL_EXPERIMENTAL/*o*/.QueryWithValues(function(global/*e*/) {
                    var require/*t*/ = rql/*d*/.__GraphQL;
                    return new require/*t*/.Query("node", [rql/*d*/.__var(global/*e*/)], [new require/*t*/.Field("edit_history", [new require/*t*/.Field("count")], null, null, null, null, {
                        connection: !0,
                        nonFindable: !0
                    }), new require/*t*/.Field("id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })], null, null, "CommentEditAction_q0")
                }(global/*e*/));
                l.run({
                    connectionQuery: requireDynamic/*n*/
                }, {
                    onSuccess: function() {
                        var requireLazy/*r*/ = GraphQLStore/*u*/.resolveQueryFromStore(requireDynamic/*n*/),
                            module/*i*/ = requireLazy/*r*/[global/*e*/].edit_history.count,
                            GraphQL_EXPERIMENTAL/*o*/ = {
                                comment_edit: {
                                    comment: {
                                        id: global/*e*/,
                                        body: require/*t*/.text,
                                        edit_history: {
                                            count: module/*i*/ + 1
                                        }
                                    }
                                }
                            },
                            l = new GraphQLMutationAction/*a*/;
                        l.runOptimisticAction(GraphQL_EXPERIMENTAL/*o*/);
                        var invariant/*p*/ = GraphQLMutationQueryCreator/*s*/.createQuery("comment_edit", {
                                comment: global/*e*/
                            }),
                            h = function(global/*e*/) {
                                var require/*t*/ = rql/*d*/.__GraphQL;
                                return new require/*t*/.Mutation("CommentEditAction_m0", "CommentEditResponsePayload", new require/*t*/.Callv("comment_edit", [new require/*t*/.CallVariable("input")]), [new require/*t*/.Field("client_mutation_id", null, null, null, null, null, {
                                    generated: !0,
                                    requisite: !0
                                })], [rql/*d*/.__frag(global/*e*/)])
                            }(invariant/*p*/);
                        l.runServerAction(h, {
                            comment_id: global/*e*/,
                            message: require/*t*/.text
                        }, function(global/*e*/, require/*t*/) {
                            defaultRQLMutationCallback/*c*/(global/*e*/, require/*t*/, h)
                        })
                    }
                })
            }
        };
    module/*i*/.exports = h
});