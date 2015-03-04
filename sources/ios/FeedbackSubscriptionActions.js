__d("FeedbackSubscriptionActions",["GraphQLMutationAction","GraphQLMutatorHub","GraphQLMutationQueryCreator","GraphQLStore","invariant","rql"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = {},
            requireLazy/*r*/ = "feedback_subscribe" === global/*e*/;
        return requireDynamic/*n*/[global/*e*/] = {
            feedback: {
                can_viewer_subscribe: !requireLazy/*r*/,
                id: require/*t*/,
                is_viewer_subscribed: requireLazy/*r*/
            }
        }, requireDynamic/*n*/
    }

    function a(global/*e*/, require/*t*/) {
        GraphQLStore/*u*/.isValidNodeID(require/*t*/) || invariant/*c*/(0, "cannot update subscription for unknown feedback node");
        var requireDynamic/*n*/ = new GraphQLMutationAction/*s*/;
        requireDynamic/*n*/.runOptimisticAction(o(global/*e*/, require/*t*/));
        var requireLazy/*r*/, module/*i*/ = l.createQuery(global/*e*/, {
            feedback: require/*t*/
        });
        requireLazy/*r*/ = "feedback_subscribe" === global/*e*/ ? function(global/*e*/) {
            var require/*t*/ = rql/*p*/.__GraphQL;
            return new require/*t*/.Mutation("FeedbackSubscriptionActions_m0", "FeedbackSubscribeResponsePayload", new require/*t*/.Callv("feedback_subscribe", [new require/*t*/.CallVariable("input")]), [new require/*t*/.Field("client_mutation_id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], [rql/*p*/.__frag(global/*e*/)])
        }(module/*i*/) : function(global/*e*/) {
            var require/*t*/ = rql/*p*/.__GraphQL;
            return new require/*t*/.Mutation("FeedbackSubscriptionActions_m1", "FeedbackUnsubscribeResponsePayload", new require/*t*/.Callv("feedback_unsubscribe", [new require/*t*/.CallVariable("input")]), [new require/*t*/.Field("client_mutation_id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], [rql/*p*/.__frag(global/*e*/)])
        }(module/*i*/), requireDynamic/*n*/.runServerAction(requireLazy/*r*/, {
            feedback_id: require/*t*/
        })
    }
    var GraphQLMutationAction/*s*/ = require/*t*/("GraphQLMutationAction"),
        l = (require/*t*/("GraphQLMutatorHub"), require/*t*/("GraphQLMutationQueryCreator")),
        GraphQLStore/*u*/ = require/*t*/("GraphQLStore"),
        invariant/*c*/ = require/*t*/("invariant"),
        rql/*p*/ = require/*t*/("rql"),
        d = {
            handleFeedbackSubscribe: function(global/*e*/) {
                a("feedback_subscribe", global/*e*/)
            },
            handleFeedbackUnsubscribe: function(global/*e*/) {
                a("feedback_unsubscribe", global/*e*/)
            }
        };
    module/*i*/.exports = d
});