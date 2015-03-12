__d("CommentAddAction",["GraphPhotoUpload","GraphQL_EXPERIMENTAL","GraphQLMutationAction","GraphQLMutationQueryCreator","GraphQLMutatorConstants","GraphQLMutatorHub","GraphQLQueryRunner","GraphQLStore","defaultRQLMutationCallback","invariant","rql"],function (e, t, n, r, i) {
    "use strict";
    var GraphPhotoUpload/*o*/ = t("GraphPhotoUpload"),
        a = (t("GraphQL_EXPERIMENTAL"), t("GraphQLMutationAction")),
        GraphQLMutationQueryCreator/*s*/ = t("GraphQLMutationQueryCreator"),
        l = (t("GraphQLMutatorConstants"), t("GraphQLMutatorHub")),
        u = (t("GraphQLQueryRunner"), t("GraphQLStore")),
        defaultRQLMutationCallback/*c*/ = t("defaultRQLMutationCallback"),
        invariant/*p*/ = t("invariant"),
        rql/*d*/ = t("rql"),
        h = "me/photos?published=false";
    l.registerForRangeAddMutationType("comment_create", {
        connectionName: "top_level_comments",
        edgeName: "feedback_comment_edge"
    });
    var f = {
            handleAddComment: function(e, t, n, r) {
                m(t, n);
                var i = g(e, t, n, r),
                    GraphPhotoUpload/*o*/ = new a;
                GraphPhotoUpload/*o*/.runOptimisticAction(i);
                var GraphQLMutationQueryCreator/*s*/ = _(t),
                    l = r && r.media && r.media.id,
                    u = y(t, n, l);
                GraphPhotoUpload/*o*/.runServerAction(GraphQLMutationQueryCreator/*s*/, u, function(e, t) {
                    defaultRQLMutationCallback/*c*/(e, t, GraphQLMutationQueryCreator/*s*/)
                })
            },
            handleAddPhotoComment: function(e, t, n, r) {
                m(t, n), r.media.image.uri || console.warn("Expected attachment uri is empty, need one that points to photo on device");
                var i = g(e, t, n, r),
                    GraphQLMutationQueryCreator/*s*/ = new a;
                GraphQLMutationQueryCreator/*s*/.runOptimisticAction(i), GraphPhotoUpload/*o*/.upload(r.media.image.uri, h, {
                    onFailure: function(e) {
                        console.error("Upload failed " + e)
                    },
                    onSuccess: function(e) {
                        e || invariant/*p*/(0, "Response object should not be null or undefined");
                        var r = _(t),
                            i = y(t, n, e.id);
                        GraphQLMutationQueryCreator/*s*/.runServerAction(r, i, function(e, t) {
                            defaultRQLMutationCallback/*c*/(e, t, r)
                        })
                    }
                })
            }
        },
        m = function(e, t) {
            u.isValidNodeID(e) || invariant/*p*/(0, "Comment added on unknown feedback target"), void 0 === t.text && invariant/*p*/(0, "comment message must have a text field, even if empty.")
        },
        g = function(e, t, n, r) {
            var i = {
                comment_create: {
                    feedback_comment_edge: {
                        node: {
                            author: {
                                id: e
                            },
                            created_time: Math.floor(Date.now() / 1e3),
                            body: n,
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
                            id: t
                        }
                    }
                }
            };
            return r && (i.comment_create.feedback_comment_edge.node.attachments = [r]), i
        },
        _ = function(e) {
            var t = GraphQLMutationQueryCreator/*s*/.createRangeAddQuery("comment_create", "top_level_comments", "feedback_comment_edge", e, "feedback"),
                n = function(e) {
                    var t = rql/*d*/.__GraphQL;
                    return new t.Mutation("CommentAddAction_m0", "CommentCreateResponsePayload", new t.Callv("comment_create", [new t.CallVariable("input")]), [new t.Field("client_mutation_id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })], [rql/*d*/.__frag(e)])
                }(t);
            return n
        },
        y = function(e, t, n) {
            var r = {
                feedback_id: e,
                message: t
            };
            return n && (r.attachments = [{
                media: {
                    id: n
                }
            }]), r
        };
    i.exports = f
});