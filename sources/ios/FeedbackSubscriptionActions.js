__d("FeedbackSubscriptionActions",["GraphQLMutationAction","GraphQLMutatorHub","GraphQLMutationQueryCreator","GraphQLStore","invariant","rql"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        var n = {},
            r = "feedback_subscribe" === e;
        return n[e] = {
            feedback: {
                can_viewer_subscribe: !r,
                id: t,
                is_viewer_subscribed: r
            }
        }, n
    }

    function a(e, t) {
        GraphQLStore/*u*/.isValidNodeID(t) || invariant/*c*/(0, "cannot update subscription for unknown feedback node");
        var n = new GraphQLMutationAction/*s*/;
        n.runOptimisticAction(o(e, t));
        var r, i = l.createQuery(e, {
            feedback: t
        });
        r = "feedback_subscribe" === e ? function(e) {
            var t = rql/*p*/.__GraphQL;
            return new t.Mutation("FeedbackSubscriptionActions_m0", "FeedbackSubscribeResponsePayload", new t.Callv("feedback_subscribe", [new t.CallVariable("input")]), [new t.Field("client_mutation_id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], [rql/*p*/.__frag(e)])
        }(i) : function(e) {
            var t = rql/*p*/.__GraphQL;
            return new t.Mutation("FeedbackSubscriptionActions_m1", "FeedbackUnsubscribeResponsePayload", new t.Callv("feedback_unsubscribe", [new t.CallVariable("input")]), [new t.Field("client_mutation_id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], [rql/*p*/.__frag(e)])
        }(i), n.runServerAction(r, {
            feedback_id: t
        })
    }
    var GraphQLMutationAction/*s*/ = t("GraphQLMutationAction"),
        l = (t("GraphQLMutatorHub"), t("GraphQLMutationQueryCreator")),
        GraphQLStore/*u*/ = t("GraphQLStore"),
        invariant/*c*/ = t("invariant"),
        rql/*p*/ = t("rql"),
        d = {
            handleFeedbackSubscribe: function(e) {
                a("feedback_subscribe", e)
            },
            handleFeedbackUnsubscribe: function(e) {
                a("feedback_unsubscribe", e)
            }
        };
    i.exports = d
});