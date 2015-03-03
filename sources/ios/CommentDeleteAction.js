__d("CommentDeleteAction",["ClientIDs","GraphQLMutationAction","GraphQLMutationQueryCreator","GraphQLMutatorHub","GraphQLStore","defaultRQLMutationCallback","rql"],function (global/*e*/, require/*exports/*GraphQLMutatorHub/*defaultRQLMutationCallback/*t*/*/*/*/, requireDynamic/*rql/*n*/*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = (require/*exports/*GraphQLMutatorHub/*defaultRQLMutationCallback/*t*/*/*/*/("ClientIDs"), require/*exports/*GraphQLMutatorHub/*defaultRQLMutationCallback/*t*/*/*/*/("GraphQLMutationAction")),
        ClientIDs/*a*/ = require/*exports/*GraphQLMutatorHub/*defaultRQLMutationCallback/*t*/*/*/*/("GraphQLMutationQueryCreator"),
        GraphQLMutationAction/*s*/ = require/*exports/*GraphQLMutatorHub/*defaultRQLMutationCallback/*t*/*/*/*/("GraphQLMutatorHub"),
        GraphQLMutationQueryCreator/*l*/ = (require/*exports/*GraphQLMutatorHub/*defaultRQLMutationCallback/*t*/*/*/*/("GraphQLStore"), require/*exports/*GraphQLMutatorHub/*defaultRQLMutationCallback/*t*/*/*/*/("defaultRQLMutationCallback")),
        GraphQLStore/*u*/ = require/*exports/*GraphQLMutatorHub/*defaultRQLMutationCallback/*t*/*/*/*/("rql");
    GraphQLMutationAction/*s*/.registerForNodeDeleteMutationType("comment_delete", {
        deletedIDFieldName: "deleted_comment_id"
    });
    var c = {
        deleteComment: function(global/*e*/, require/*exports/*GraphQLMutatorHub/*defaultRQLMutationCallback/*t*/*/*/*/, requireDynamic/*rql/*n*/*/, requireLazy/*r*/) {
            var module/*i*/ = (function(global/*e*/) {
                    var require/*exports/*GraphQLMutatorHub/*defaultRQLMutationCallback/*t*/*/*/*/ = GraphQLStore/*u*/.__GraphQL;
                    return new require/*exports/*GraphQLMutatorHub/*defaultRQLMutationCallback/*t*/*/*/*/.Query("node", [GraphQLStore/*u*/.__var(global/*e*/)], [new require/*exports/*GraphQLMutatorHub/*defaultRQLMutationCallback/*t*/*/*/*/.Field("top_level_comments", [new require/*exports/*GraphQLMutatorHub/*defaultRQLMutationCallback/*t*/*/*/*/.Field("count")], null, null, null, null, {
                        connection: !0
                    }), new require/*exports/*GraphQLMutatorHub/*defaultRQLMutationCallback/*t*/*/*/*/.Field("id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })], null, null, "CommentDeleteAction_q0")
                }(require/*exports/*GraphQLMutatorHub/*defaultRQLMutationCallback/*t*/*/*/*/), ClientIDs/*a*/.createRangeDeleteQuery("comment_delete", require/*exports/*GraphQLMutatorHub/*defaultRQLMutationCallback/*t*/*/*/*/, "feedback", "top_level_comments")),
                GraphQLMutationAction/*s*/ = function(global/*e*/) {
                    var require/*exports/*GraphQLMutatorHub/*defaultRQLMutationCallback/*t*/*/*/*/ = GraphQLStore/*u*/.__GraphQL;
                    return new require/*exports/*GraphQLMutatorHub/*defaultRQLMutationCallback/*t*/*/*/*/.Mutation("CommentDeleteAction_m0", "CommentDeleteResponsePayload", new require/*exports/*GraphQLMutatorHub/*defaultRQLMutationCallback/*t*/*/*/*/.Callv("comment_delete", [new require/*exports/*GraphQLMutatorHub/*defaultRQLMutationCallback/*t*/*/*/*/.CallVariable("input")]), [new require/*exports/*GraphQLMutatorHub/*defaultRQLMutationCallback/*t*/*/*/*/.Field("deleted_comment_id"), new require/*exports/*GraphQLMutatorHub/*defaultRQLMutationCallback/*t*/*/*/*/.Field("client_mutation_id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })], [GraphQLStore/*u*/.__frag(global/*e*/)])
                }(module/*i*/),
                c = new o;
            c.runServerAction(GraphQLMutationAction/*s*/, {
                comment_id: global/*e*/
            }, function(global/*e*/, require/*exports/*GraphQLMutatorHub/*defaultRQLMutationCallback/*t*/*/*/*/) {
                GraphQLMutationQueryCreator/*l*/(global/*e*/, require/*exports/*GraphQLMutatorHub/*defaultRQLMutationCallback/*t*/*/*/*/, GraphQLMutationAction/*s*/), global/*e*/ && requireDynamic/*rql/*n*/*/(global/*e*/), require/*exports/*GraphQLMutatorHub/*defaultRQLMutationCallback/*t*/*/*/*/ && requireLazy/*r*/()
            })
        }
    };
    module/*i*/.exports = c
});