__d("CommentEditAction",["GraphQL_EXPERIMENTAL","GraphQLMutationAction","GraphQLMutationQueryCreator","GraphQLMutatorHub","GraphQLQueryRunner","GraphQLStore","defaultRQLMutationCallback","invariant","rql"],function (e, t, n, r, i) {
    "use strict";
    var GraphQL_EXPERIMENTAL/*o*/ = t("GraphQL_EXPERIMENTAL"),
        GraphQLMutationAction/*a*/ = t("GraphQLMutationAction"),
        GraphQLMutationQueryCreator/*s*/ = t("GraphQLMutationQueryCreator"),
        l = (t("GraphQLMutatorHub"), t("GraphQLQueryRunner")),
        GraphQLStore/*u*/ = t("GraphQLStore"),
        defaultRQLMutationCallback/*c*/ = t("defaultRQLMutationCallback"),
        invariant/*p*/ = t("invariant"),
        rql/*d*/ = t("rql"),
        h = {
            handleCommentEdit: function(e, t) {
                GraphQLStore/*u*/.isValidNodeID(e) || invariant/*p*/(0, "comment edit performed on unknown comment"), void 0 === t.text && invariant/*p*/(0, "comment message must have GraphQLMutationAction/*a*/ text field, even if empty.");
                var n = new GraphQL_EXPERIMENTAL/*o*/.QueryWithValues(function(e) {
                    var t = rql/*d*/.__GraphQL;
                    return new t.Query("node", [rql/*d*/.__var(e)], [new t.Field("edit_history", [new t.Field("count")], null, null, null, null, {
                        connection: !0,
                        nonFindable: !0
                    }), new t.Field("id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })], null, null, "CommentEditAction_q0")
                }(e));
                l.run({
                    connectionQuery: n
                }, {
                    onSuccess: function() {
                        var r = GraphQLStore/*u*/.resolveQueryFromStore(n),
                            i = r[e].edit_history.count,
                            GraphQL_EXPERIMENTAL/*o*/ = {
                                comment_edit: {
                                    comment: {
                                        id: e,
                                        body: t.text,
                                        edit_history: {
                                            count: i + 1
                                        }
                                    }
                                }
                            },
                            l = new GraphQLMutationAction/*a*/;
                        l.runOptimisticAction(GraphQL_EXPERIMENTAL/*o*/);
                        var invariant/*p*/ = GraphQLMutationQueryCreator/*s*/.createQuery("comment_edit", {
                                comment: e
                            }),
                            h = function(e) {
                                var t = rql/*d*/.__GraphQL;
                                return new t.Mutation("CommentEditAction_m0", "CommentEditResponsePayload", new t.Callv("comment_edit", [new t.CallVariable("input")]), [new t.Field("client_mutation_id", null, null, null, null, null, {
                                    generated: !0,
                                    requisite: !0
                                })], [rql/*d*/.__frag(e)])
                            }(invariant/*p*/);
                        l.runServerAction(h, {
                            comment_id: e,
                            message: t.text
                        }, function(e, t) {
                            defaultRQLMutationCallback/*c*/(e, t, h)
                        })
                    }
                })
            }
        };
    i.exports = h
});