__d("CommentDeleteAction",["ClientIDs","GraphQLMutationAction","GraphQLMutationQueryCreator","GraphQLMutatorHub","GraphQLStore","defaultRQLMutationCallback","rql"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = (require/*t*/("ClientIDs"), require/*t*/("GraphQLMutationAction")),
        a = require/*t*/("GraphQLMutationQueryCreator"),
        s = require/*t*/("GraphQLMutatorHub"),
        l = (require/*t*/("GraphQLStore"), require/*t*/("defaultRQLMutationCallback")),
        u = require/*t*/("rql");
    s.registerForNodeDeleteMutationType("comment_delete", {
        deletedIDFieldName: "deleted_comment_id"
    });
    var c = {
        deleteComment: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
            var module/*i*/ = (function(global/*e*/) {
                    var require/*t*/ = u.__GraphQL;
                    return new require/*t*/.Query("node", [u.__var(global/*e*/)], [new require/*t*/.Field("top_level_comments", [new require/*t*/.Field("count")], null, null, null, null, {
                        connection: !0
                    }), new require/*t*/.Field("id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })], null, null, "CommentDeleteAction_q0")
                }(require/*t*/), a.createRangeDeleteQuery("comment_delete", require/*t*/, "feedback", "top_level_comments")),
                s = function(global/*e*/) {
                    var require/*t*/ = u.__GraphQL;
                    return new require/*t*/.Mutation("CommentDeleteAction_m0", "CommentDeleteResponsePayload", new require/*t*/.Callv("comment_delete", [new require/*t*/.CallVariable("input")]), [new require/*t*/.Field("deleted_comment_id"), new require/*t*/.Field("client_mutation_id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })], [u.__frag(global/*e*/)])
                }(module/*i*/),
                c = new o;
            c.runServerAction(s, {
                comment_id: global/*e*/
            }, function(global/*e*/, require/*t*/) {
                l(global/*e*/, require/*t*/, s), global/*e*/ && requireDynamic/*n*/(global/*e*/), require/*t*/ && requireLazy/*r*/()
            })
        }
    };
    module/*i*/.exports = c
});