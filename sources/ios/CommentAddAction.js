__d("CommentAddAction",["GraphPhotoUpload","GraphQL_EXPERIMENTAL","GraphQLMutationAction","GraphQLMutationQueryCreator","GraphQLMutatorConstants","GraphQLMutatorHub","GraphQLQueryRunner","GraphQLStore","defaultRQLMutationCallback","invariant","rql"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var GraphPhotoUpload/*o*/ = require/*t*/("GraphPhotoUpload"),
        a = (require/*t*/("GraphQL_EXPERIMENTAL"), require/*t*/("GraphQLMutationAction")),
        GraphQLMutationQueryCreator/*s*/ = require/*t*/("GraphQLMutationQueryCreator"),
        l = (require/*t*/("GraphQLMutatorConstants"), require/*t*/("GraphQLMutatorHub")),
        u = (require/*t*/("GraphQLQueryRunner"), require/*t*/("GraphQLStore")),
        defaultRQLMutationCallback/*c*/ = require/*t*/("defaultRQLMutationCallback"),
        invariant/*p*/ = require/*t*/("invariant"),
        rql/*d*/ = require/*t*/("rql"),
        h = "me/photos?published=false";
    l.registerForRangeAddMutationType("comment_create", {
        connectionName: "top_level_comments",
        edgeName: "feedback_comment_edge"
    });
    var f = {
            handleAddComment: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                m(require/*t*/, requireDynamic/*n*/);
                var module/*i*/ = g(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/),
                    GraphPhotoUpload/*o*/ = new a;
                GraphPhotoUpload/*o*/.runOptimisticAction(module/*i*/);
                var GraphQLMutationQueryCreator/*s*/ = _(require/*t*/),
                    l = requireLazy/*r*/ && requireLazy/*r*/.media && requireLazy/*r*/.media.id,
                    u = y(require/*t*/, requireDynamic/*n*/, l);
                GraphPhotoUpload/*o*/.runServerAction(GraphQLMutationQueryCreator/*s*/, u, function(global/*e*/, require/*t*/) {
                    defaultRQLMutationCallback/*c*/(global/*e*/, require/*t*/, GraphQLMutationQueryCreator/*s*/)
                })
            },
            handleAddPhotoComment: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                m(require/*t*/, requireDynamic/*n*/), requireLazy/*r*/.media.image.uri || console.warn("Expected attachment uri is empty, need one that points to photo on device");
                var module/*i*/ = g(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/),
                    GraphQLMutationQueryCreator/*s*/ = new a;
                GraphQLMutationQueryCreator/*s*/.runOptimisticAction(module/*i*/), GraphPhotoUpload/*o*/.upload(requireLazy/*r*/.media.image.uri, h, {
                    onFailure: function(global/*e*/) {
                        console.error("Upload failed " + global/*e*/)
                    },
                    onSuccess: function(global/*e*/) {
                        global/*e*/ || invariant/*p*/(0, "Response object should not be null or undefined");
                        var requireLazy/*r*/ = _(require/*t*/),
                            module/*i*/ = y(require/*t*/, requireDynamic/*n*/, global/*e*/.id);
                        GraphQLMutationQueryCreator/*s*/.runServerAction(requireLazy/*r*/, module/*i*/, function(global/*e*/, require/*t*/) {
                            defaultRQLMutationCallback/*c*/(global/*e*/, require/*t*/, requireLazy/*r*/)
                        })
                    }
                })
            }
        },
        m = function(global/*e*/, require/*t*/) {
            u.isValidNodeID(global/*e*/) || invariant/*p*/(0, "Comment added on unknown feedback target"), void 0 === require/*t*/.text && invariant/*p*/(0, "comment message must have a text field, even if empty.")
        },
        g = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
            var module/*i*/ = {
                comment_create: {
                    feedback_comment_edge: {
                        node: {
                            author: {
                                id: global/*e*/
                            },
                            created_time: Math.floor(Date.now() / 1e3),
                            body: requireDynamic/*n*/,
                            feedback: {
                                can_viewer_like: !1,
                                does_viewer_like: !1,
                                likers: {
                                    count: 0
                                }
                            },
                            edit_history: {
                                count: 0
                            }
                        },
                        source: {
                            id: require/*t*/
                        }
                    }
                }
            };
            return requireLazy/*r*/ && (module/*i*/.comment_create.feedback_comment_edge.node.attachments = [requireLazy/*r*/]), module/*i*/
        },
        _ = function(global/*e*/) {
            var require/*t*/ = GraphQLMutationQueryCreator/*s*/.createRangeAddQuery("comment_create", "top_level_comments", "feedback_comment_edge", global/*e*/, "feedback"),
                requireDynamic/*n*/ = function(global/*e*/) {
                    var require/*t*/ = rql/*d*/.__GraphQL;
                    return new require/*t*/.Mutation("CommentAddAction_m0", "CommentCreateResponsePayload", new require/*t*/.Callv("comment_create", [new require/*t*/.CallVariable("input")]), [new require/*t*/.Field("client_mutation_id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })], [rql/*d*/.__frag(global/*e*/)])
                }(require/*t*/);
            return requireDynamic/*n*/
        },
        y = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
            var requireLazy/*r*/ = {
                feedback_id: global/*e*/,
                message: require/*t*/
            };
            return requireDynamic/*n*/ && (requireLazy/*r*/.attachments = [{
                media: {
                    id: requireDynamic/*n*/
                }
            }]), requireLazy/*r*/
        };
    module/*i*/.exports = f
});