__d("CommentAddAction",["GraphPhotoUpload","GraphQL_EXPERIMENTAL","GraphQLMutationAction","GraphQLMutationQueryCreator","GraphQLMutatorConstants","GraphQLMutatorHub","GraphQLQueryRunner","GraphQLStore","defaultRQLMutationCallback","invariant","rql"],function (global/*e*/, require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/("GraphPhotoUpload"),
        exports/*a*/ = (require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/("GraphQL_EXPERIMENTAL"), require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/("GraphQLMutationAction")),
        GraphQL_EXPERIMENTAL/*s*/ = require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/("GraphQLMutationQueryCreator"),
        GraphQLMutationAction/*l*/ = (require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/("GraphQLMutatorConstants"), require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/("GraphQLMutatorHub")),
        GraphQLMutatorConstants/*u*/ = (require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/("GraphQLQueryRunner"), require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/("GraphQLStore")),
        GraphQLQueryRunner/*c*/ = require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/("defaultRQLMutationCallback"),
        GraphQLStore/*p*/ = require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/("invariant"),
        defaultRQLMutationCallback/*d*/ = require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/("rql"),
        invariant/*h*/ = "me/photos?published=false";
    GraphQLMutationAction/*l*/.registerForRangeAddMutationType("comment_create", {
        connectionName: "top_level_comments",
        rql/*edgeName*/: "feedback_comment_edge"
    });
    var f = {
            handleAddComment: function(global/*e*/, require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/, requireDynamic/*n*/, requireLazy/*r*/) {
                m(require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/, requireDynamic/*n*/);
                var module/*i*/ = g(global/*e*/, require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/, requireDynamic/*n*/, requireLazy/*r*/),
                    o = new exports/*a*/;
                o.runOptimisticAction(module/*i*/);
                var GraphQL_EXPERIMENTAL/*s*/ = _(require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/),
                    GraphQLMutationAction/*l*/ = requireLazy/*r*/ && requireLazy/*r*/.media && requireLazy/*r*/.media.id,
                    GraphQLMutatorConstants/*u*/ = y(require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/, requireDynamic/*n*/, GraphQLMutationAction/*l*/);
                o.runServerAction(GraphQL_EXPERIMENTAL/*s*/, GraphQLMutatorConstants/*u*/, function(global/*e*/, require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/) {
                    GraphQLQueryRunner/*c*/(global/*e*/, require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/, GraphQL_EXPERIMENTAL/*s*/)
                })
            },
            handleAddPhotoComment: function(global/*e*/, require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/, requireDynamic/*n*/, requireLazy/*r*/) {
                m(require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/, requireDynamic/*n*/), requireLazy/*r*/.media.image.uri || console.warn("Expected attachment uri is empty, need one that points to photo on device");
                var module/*i*/ = g(global/*e*/, require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/, requireDynamic/*n*/, requireLazy/*r*/),
                    GraphQL_EXPERIMENTAL/*s*/ = new exports/*a*/;
                GraphQL_EXPERIMENTAL/*s*/.runOptimisticAction(module/*i*/), o.upload(requireLazy/*r*/.media.image.uri, invariant/*h*/, {
                    onFailure: function(global/*e*/) {
                        console.error("Upload failed " + global/*e*/)
                    },
                    onSuccess: function(global/*e*/) {
                        global/*e*/ || GraphQLStore/*p*/(0, "Response object should not be null or undefined");
                        var requireLazy/*r*/ = _(require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/),
                            module/*i*/ = y(require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/, requireDynamic/*n*/, global/*e*/.id);
                        GraphQL_EXPERIMENTAL/*s*/.runServerAction(requireLazy/*r*/, module/*i*/, function(global/*e*/, require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/) {
                            GraphQLQueryRunner/*c*/(global/*e*/, require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/, requireLazy/*r*/)
                        })
                    }
                })
            }
        },
        m = function(global/*e*/, require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/) {
            GraphQLMutatorConstants/*u*/.isValidNodeID(global/*e*/) || GraphQLStore/*p*/(0, "Comment added on unknown feedback target"), void 0 === require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/.text && GraphQLStore/*p*/(0, "comment message must have exports/*a*/ text field, even if empty.")
        },
        g = function(global/*e*/, require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/, requireDynamic/*n*/, requireLazy/*r*/) {
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
                            id: require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/
                        }
                    }
                }
            };
            return requireLazy/*r*/ && (module/*i*/.comment_create.feedback_comment_edge.node.attachments = [requireLazy/*r*/]), module/*i*/
        },
        _ = function(global/*e*/) {
            var require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/ = GraphQL_EXPERIMENTAL/*s*/.createRangeAddQuery("comment_create", "top_level_comments", "feedback_comment_edge", global/*e*/, "feedback"),
                requireDynamic/*n*/ = function(global/*e*/) {
                    var require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/ = defaultRQLMutationCallback/*d*/.__GraphQL;
                    return new require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/.Mutation("CommentAddAction_m0", "CommentCreateResponsePayload", new require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/.Callv("comment_create", [new require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/.CallVariable("input")]), [new require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/.Field("client_mutation_id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })], [defaultRQLMutationCallback/*d*/.__frag(global/*e*/)])
                }(require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/);
            return requireDynamic/*n*/
        },
        y = function(global/*e*/, require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/, requireDynamic/*n*/) {
            var requireLazy/*r*/ = {
                feedback_id: global/*e*/,
                message: require/*GraphPhotoUpload/*GraphQLMutationQueryCreator/*GraphQLMutatorHub/*t*/*/*/*/
            };
            return requireDynamic/*n*/ && (requireLazy/*r*/.attachments = [{
                media: {
                    id: requireDynamic/*n*/
                }
            }]), requireLazy/*r*/
        };
    module/*i*/.exports = f
});