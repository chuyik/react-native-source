__d("CommentEditAction",["GraphQL_EXPERIMENTAL","GraphQLMutationAction","GraphQLMutationQueryCreator","GraphQLMutatorHub","GraphQLQueryRunner","GraphQLStore","defaultRQLMutationCallback","invariant","rql"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("GraphQL_EXPERIMENTAL"),
        a = require/*t*/("GraphQLMutationAction"),
        s = require/*t*/("GraphQLMutationQueryCreator"),
        l = (require/*t*/("GraphQLMutatorHub"), require/*t*/("GraphQLQueryRunner")),
        u = require/*t*/("GraphQLStore"),
        c = require/*t*/("defaultRQLMutationCallback"),
        p = require/*t*/("invariant"),
        d = require/*t*/("rql"),
        h = {
            handleCommentEdit: function(global/*e*/, require/*t*/) {
                u.isValidNodeID(global/*e*/) || p(0, "comment edit performed on unknown comment"), void 0 === require/*t*/.text && p(0, "comment message must have a text field, even if empty.");
                var requireDynamic/*n*/ = new o.QueryWithValues(function(global/*e*/) {
                    var require/*t*/ = d.__GraphQL;
                    return new require/*t*/.Query("node", [d.__var(global/*e*/)], [new require/*t*/.Field("edit_history", [new require/*t*/.Field("count")], null, null, null, null, {
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
                        var requireLazy/*r*/ = u.resolveQueryFromStore(requireDynamic/*n*/),
                            module/*i*/ = requireLazy/*r*/[global/*e*/].edit_history.count,
                            o = {
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
                            l = new a;
                        l.runOptimisticAction(o);
                        var p = s.createQuery("comment_edit", {
                                comment: global/*e*/
                            }),
                            h = function(global/*e*/) {
                                var require/*t*/ = d.__GraphQL;
                                return new require/*t*/.Mutation("CommentEditAction_m0", "CommentEditResponsePayload", new require/*t*/.Callv("comment_edit", [new require/*t*/.CallVariable("input")]), [new require/*t*/.Field("client_mutation_id", null, null, null, null, null, {
                                    generated: !0,
                                    requisite: !0
                                })], [d.__frag(global/*e*/)])
                            }(p);
                        l.runServerAction(h, {
                            comment_id: global/*e*/,
                            message: require/*t*/.text
                        }, function(global/*e*/, require/*t*/) {
                            c(global/*e*/, require/*t*/, h)
                        })
                    }
                })
            }
        };
    module/*i*/.exports = h
});