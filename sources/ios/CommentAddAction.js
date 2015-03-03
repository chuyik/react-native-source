__d("CommentAddAction",["GraphPhotoUpload","GraphQL_EXPERIMENTAL","GraphQLMutationAction","GraphQLMutationQueryCreator","GraphQLMutatorConstants","GraphQLMutatorHub","GraphQLQueryRunner","GraphQLStore","defaultRQLMutationCallback","invariant","rql"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("GraphPhotoUpload"),
        a = (require/*t*/("GraphQL_EXPERIMENTAL"), require/*t*/("GraphQLMutationAction")),
        s = require/*t*/("GraphQLMutationQueryCreator"),
        l = (require/*t*/("GraphQLMutatorConstants"), require/*t*/("GraphQLMutatorHub")),
        u = (require/*t*/("GraphQLQueryRunner"), require/*t*/("GraphQLStore")),
        c = require/*t*/("defaultRQLMutationCallback"),
        p = require/*t*/("invariant"),
        d = require/*t*/("rql"),
        h = "me/photos?published=false";
    l.registerForRangeAddMutationType("comment_create", {
        connectionName: "top_level_comments",
        edgeName: "feedback_comment_edge"
    });
    var f = {
            handleAddComment: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                m(require/*t*/, requireDynamic/*n*/);
                var module/*i*/ = g(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/),
                    o = new a;
                o.runOptimisticAction(module/*i*/);
                var s = _(require/*t*/),
                    l = requireLazy/*r*/ && requireLazy/*r*/.media && requireLazy/*r*/.media.id,
                    u = y(require/*t*/, requireDynamic/*n*/, l);
                o.runServerAction(s, u, function(global/*e*/, require/*t*/) {
                    c(global/*e*/, require/*t*/, s)
                })
            },
            handleAddPhotoComment: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                m(require/*t*/, requireDynamic/*n*/), requireLazy/*r*/.media.image.uri || console.warn("Expected attachment uri is empty, need one that points to photo on device");
                var module/*i*/ = g(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/),
                    s = new a;
                s.runOptimisticAction(module/*i*/), o.upload(requireLazy/*r*/.media.image.uri, h, {
                    onFailure: function(global/*e*/) {
                        console.error("Upload failed " + global/*e*/)
                    },
                    onSuccess: function(global/*e*/) {
                        global/*e*/ || p(0, "Response object should not be null or undefined");
                        var requireLazy/*r*/ = _(require/*t*/),
                            module/*i*/ = y(require/*t*/, requireDynamic/*n*/, global/*e*/.id);
                        s.runServerAction(requireLazy/*r*/, module/*i*/, function(global/*e*/, require/*t*/) {
                            c(global/*e*/, require/*t*/, requireLazy/*r*/)
                        })
                    }
                })
            }
        },
        m = function(global/*e*/, require/*t*/) {
            u.isValidNodeID(global/*e*/) || p(0, "Comment added on unknown feedback target"), void 0 === require/*t*/.text && p(0, "comment message must have a text field, even if empty.")
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
            var require/*t*/ = s.createRangeAddQuery("comment_create", "top_level_comments", "feedback_comment_edge", global/*e*/, "feedback"),
                requireDynamic/*n*/ = function(global/*e*/) {
                    var require/*t*/ = d.__GraphQL;
                    return new require/*t*/.Mutation("CommentAddAction_m0", "CommentCreateResponsePayload", new require/*t*/.Callv("comment_create", [new require/*t*/.CallVariable("input")]), [new require/*t*/.Field("client_mutation_id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })], [d.__frag(global/*e*/)])
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