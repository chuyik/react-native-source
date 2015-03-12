__d("FeedbackLikeAction",["GraphQL_EXPERIMENTAL","GraphQLMutationAction","GraphQLMutationQueryCreator","GraphQLMutatorHub","GraphQLStore","GraphQLStoreDataHandler","defaultRQLMutationCallback","invariant","rql"],function (e, t, n, r, i) {
    "use strict";
    var GraphQL_EXPERIMENTAL/*o*/ = t("GraphQL_EXPERIMENTAL"),
        GraphQLMutationAction/*a*/ = t("GraphQLMutationAction"),
        GraphQLMutationQueryCreator/*s*/ = t("GraphQLMutationQueryCreator"),
        l = (t("GraphQLMutatorHub"), t("GraphQLStore")),
        u = (t("GraphQLStoreDataHandler"), t("defaultRQLMutationCallback")),
        invariant/*c*/ = t("invariant"),
        rql/*p*/ = t("rql"),
        d = {
            handleLikeChange: function(e, t) {
                var n = l.resolveQueryFromStore(new GraphQL_EXPERIMENTAL/*o*/.QueryWithValues(function(e) {
                    var t = rql/*p*/.__GraphQL;
                    return new t.Query("node", [rql/*p*/.__var(e)], [new t.Field("does_viewer_like"), new t.Field("likers", [new t.Field("count")], null, null, null, null, {
                        connection: !0,
                        nonFindable: !0
                    }), new t.Field("id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })], null, null, "FeedbackLikeAction_q0")
                }(e), {}))[e];
                if (n || invariant/*c*/(0, "Like/unlike action taken on unknown feedback target"), n.does_viewer_like !== t) {
                    var r = {
                        id: e,
                        does_viewer_like: t
                    };
                    if (n.likers && void 0 !== n.likers.count) {
                        var i = t ? 1 : -1;
                        r.likers = {
                            count: n.likers.count + i
                        }
                    }
                    var d = {},
                        h = t ? "feedback_like" : "feedback_unlike";
                    d[h] = {
                        feedback: r
                    };
                    var f, m;
                    t ? (f = GraphQLMutationQueryCreator/*s*/.createQuery("feedback_like", {
                        feedback: e
                    }), m = function(e) {
                        var t = rql/*p*/.__GraphQL;
                        return new t.Mutation("FeedbackLikeAction_m0", "FeedbackLikeResponsePayload", new t.Callv("feedback_like", [new t.CallVariable("input")]), [new t.Field("client_mutation_id", null, null, null, null, null, {
                            generated: !0,
                            requisite: !0
                        })], [rql/*p*/.__frag(e)])
                    }(f)) : (f = GraphQLMutationQueryCreator/*s*/.createQuery("feedback_unlike", {
                        feedback: e
                    }), m = function(e) {
                        var t = rql/*p*/.__GraphQL;
                        return new t.Mutation("FeedbackLikeAction_m1", "FeedbackUnlikeResponsePayload", new t.Callv("feedback_unlike", [new t.CallVariable("input")]), [new t.Field("client_mutation_id", null, null, null, null, null, {
                            generated: !0,
                            requisite: !0
                        })], [rql/*p*/.__frag(e)])
                    }(f));
                    var g = new GraphQLMutationAction/*a*/;
                    g.runOptimisticAction(d), g.runServerAction(m, {
                        feedback_id: e
                    }, function(e, n) {
                        if (e) throw e;
                        if (n) {
                            var r = t ? n.feedback_like : n.feedback_unlike;
                            t !== r.feedback.does_viewer_like && u(null, n, m)
                        }
                    })
                }
            }
        };
    i.exports = d
});