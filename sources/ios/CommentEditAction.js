__d("CommentEditAction",["GraphQL_EXPERIMENTAL","GraphQLMutationAction","GraphQLMutationQueryCreator","GraphQLMutatorHub","GraphQLQueryRunner","GraphQLStore","defaultRQLMutationCallback","invariant","rql"],function (global/*e*/, require/*GraphQLMutationQueryCreator/*rql/*t*/*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*GraphQLMutationQueryCreator/*rql/*t*/*/*/("GraphQL_EXPERIMENTAL"),
        exports/*a*/ = require/*GraphQLMutationQueryCreator/*rql/*t*/*/*/("GraphQLMutationAction"),
        GraphQL_EXPERIMENTAL/*s*/ = require/*GraphQLMutationQueryCreator/*rql/*t*/*/*/("GraphQLMutationQueryCreator"),
        GraphQLMutationAction/*l*/ = (require/*GraphQLMutationQueryCreator/*rql/*t*/*/*/("GraphQLMutatorHub"), require/*GraphQLMutationQueryCreator/*rql/*t*/*/*/("GraphQLQueryRunner")),
        GraphQLMutatorHub/*u*/ = require/*GraphQLMutationQueryCreator/*rql/*t*/*/*/("GraphQLStore"),
        GraphQLQueryRunner/*c*/ = require/*GraphQLMutationQueryCreator/*rql/*t*/*/*/("defaultRQLMutationCallback"),
        GraphQLStore/*p*/ = require/*GraphQLMutationQueryCreator/*rql/*t*/*/*/("invariant"),
        defaultRQLMutationCallback/*d*/ = require/*GraphQLMutationQueryCreator/*rql/*t*/*/*/("rql"),
        invariant/*h*/ = {
            handleCommentEdit: function(global/*e*/, require/*GraphQLMutationQueryCreator/*rql/*t*/*/*/) {
                GraphQLMutatorHub/*u*/.isValidNodeID(global/*e*/) || GraphQLStore/*p*/(0, "comment edit performed on unknown comment"), void 0 === require/*GraphQLMutationQueryCreator/*rql/*t*/*/*/.text && GraphQLStore/*p*/(0, "comment message must have exports/*a*/ text field, even if empty.");
                var requireDynamic/*n*/ = new o.QueryWithValues(function(global/*e*/) {
                    var require/*GraphQLMutationQueryCreator/*rql/*t*/*/*/ = defaultRQLMutationCallback/*d*/.__GraphQL;
                    return new require/*GraphQLMutationQueryCreator/*rql/*t*/*/*/.Query("node", [defaultRQLMutationCallback/*d*/.__var(global/*e*/)], [new require/*GraphQLMutationQueryCreator/*rql/*t*/*/*/.Field("edit_history", [new require/*GraphQLMutationQueryCreator/*rql/*t*/*/*/.Field("count")], null, null, null, null, {
                        connection: !0,
                        nonFindable: !0
                    }), new require/*GraphQLMutationQueryCreator/*rql/*t*/*/*/.Field("id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })], null, null, "CommentEditAction_q0")
                }(global/*e*/));
                GraphQLMutationAction/*l*/.run({
                    connectionQuery: requireDynamic/*n*/
                }, {
                    onSuccess: function() {
                        var requireLazy/*r*/ = GraphQLMutatorHub/*u*/.resolveQueryFromStore(requireDynamic/*n*/),
                            module/*i*/ = requireLazy/*r*/[global/*e*/].edit_history.count,
                            o = {
                                comment_edit: {
                                    comment: {
                                        id: global/*e*/,
                                        body: require/*GraphQLMutationQueryCreator/*rql/*t*/*/*/.text,
                                        edit_history: {
                                            count: module/*i*/ + 1
                                        }
                                    }
                                }
                            },
                            GraphQLMutationAction/*l*/ = new exports/*a*/;
                        GraphQLMutationAction/*l*/.runOptimisticAction(o);
                        var GraphQLStore/*p*/ = GraphQL_EXPERIMENTAL/*s*/.createQuery("comment_edit", {
                                comment: global/*e*/
                            }),
                            invariant/*h*/ = function(global/*e*/) {
                                var require/*GraphQLMutationQueryCreator/*rql/*t*/*/*/ = defaultRQLMutationCallback/*d*/.__GraphQL;
                                return new require/*GraphQLMutationQueryCreator/*rql/*t*/*/*/.Mutation("CommentEditAction_m0", "CommentEditResponsePayload", new require/*GraphQLMutationQueryCreator/*rql/*t*/*/*/.Callv("comment_edit", [new require/*GraphQLMutationQueryCreator/*rql/*t*/*/*/.CallVariable("input")]), [new require/*GraphQLMutationQueryCreator/*rql/*t*/*/*/.Field("client_mutation_id", null, null, null, null, null, {
                                    generated: !0,
                                    requisite: !0
                                })], [defaultRQLMutationCallback/*d*/.__frag(global/*e*/)])
                            }(GraphQLStore/*p*/);
                        GraphQLMutationAction/*l*/.runServerAction(invariant/*h*/, {
                            comment_id: global/*e*/,
                            message: require/*GraphQLMutationQueryCreator/*rql/*t*/*/*/.text
                        }, function(global/*e*/, require/*GraphQLMutationQueryCreator/*rql/*t*/*/*/) {
                            GraphQLQueryRunner/*c*/(global/*e*/, require/*GraphQLMutationQueryCreator/*rql/*t*/*/*/, invariant/*h*/)
                        })
                    }
                })
            }
        };
    module/*i*/.exports = invariant/*h*/
});