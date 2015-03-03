__d("FeedbackSubscriptionActions",["GraphQLMutationAction","GraphQLMutatorHub","GraphQLMutationQueryCreator","GraphQLStore","invariant","rql"],function (global/*e*/, require/*exports/*invariant/*rql/*t*/*/*/*/, requireDynamic/*GraphQLStore/*n*/*/, requireLazy/*GraphQLMutationAction/*r*/*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*invariant/*rql/*t*/*/*/*/) {
        var requireDynamic/*GraphQLStore/*n*/*/ = {},
            requireLazy/*GraphQLMutationAction/*r*/*/ = "feedback_subscribe" === global/*e*/;
        return requireDynamic/*GraphQLStore/*n*/*/[global/*e*/] = {
            feedback: {
                can_viewer_subscribe: !requireLazy/*GraphQLMutationAction/*r*/*/,
                GraphQLMutatorHub/*id*/: require/*exports/*invariant/*rql/*t*/*/*/*/,
                GraphQLMutationQueryCreator/*is_viewer_subscribed*/: requireLazy/*GraphQLMutationAction/*r*/*/
            }
        }, requireDynamic/*GraphQLStore/*n*/*/
    }

    function a(global/*e*/, require/*exports/*invariant/*rql/*t*/*/*/*/) {
        u.isValidNodeID(require/*exports/*invariant/*rql/*t*/*/*/*/) || c(0, "cannot update subscription for unknown feedback node");
        var requireDynamic/*GraphQLStore/*n*/*/ = new s;
        requireDynamic/*GraphQLStore/*n*/*/.runOptimisticAction(o(global/*e*/, require/*exports/*invariant/*rql/*t*/*/*/*/));
        var requireLazy/*GraphQLMutationAction/*r*/*/, module/*i*/ = l.createQuery(global/*e*/, {
            feedback: require/*exports/*invariant/*rql/*t*/*/*/*/
        });
        requireLazy/*GraphQLMutationAction/*r*/*/ = "feedback_subscribe" === global/*e*/ ? function(global/*e*/) {
            var require/*exports/*invariant/*rql/*t*/*/*/*/ = p.__GraphQL;
            return new require/*exports/*invariant/*rql/*t*/*/*/*/.Mutation("FeedbackSubscriptionActions_m0", "FeedbackSubscribeResponsePayload", new require/*exports/*invariant/*rql/*t*/*/*/*/.Callv("feedback_subscribe", [new require/*exports/*invariant/*rql/*t*/*/*/*/.CallVariable("input")]), [new require/*exports/*invariant/*rql/*t*/*/*/*/.Field("client_mutation_id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], [p.__frag(global/*e*/)])
        }(module/*i*/) : function(global/*e*/) {
            var require/*exports/*invariant/*rql/*t*/*/*/*/ = p.__GraphQL;
            return new require/*exports/*invariant/*rql/*t*/*/*/*/.Mutation("FeedbackSubscriptionActions_m1", "FeedbackUnsubscribeResponsePayload", new require/*exports/*invariant/*rql/*t*/*/*/*/.Callv("feedback_unsubscribe", [new require/*exports/*invariant/*rql/*t*/*/*/*/.CallVariable("input")]), [new require/*exports/*invariant/*rql/*t*/*/*/*/.Field("client_mutation_id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], [p.__frag(global/*e*/)])
        }(module/*i*/), requireDynamic/*GraphQLStore/*n*/*/.runServerAction(requireLazy/*GraphQLMutationAction/*r*/*/, {
            feedback_id: require/*exports/*invariant/*rql/*t*/*/*/*/
        })
    }
    var s = require/*exports/*invariant/*rql/*t*/*/*/*/("GraphQLMutationAction"),
        l = (require/*exports/*invariant/*rql/*t*/*/*/*/("GraphQLMutatorHub"), require/*exports/*invariant/*rql/*t*/*/*/*/("GraphQLMutationQueryCreator")),
        u = require/*exports/*invariant/*rql/*t*/*/*/*/("GraphQLStore"),
        c = require/*exports/*invariant/*rql/*t*/*/*/*/("invariant"),
        p = require/*exports/*invariant/*rql/*t*/*/*/*/("rql"),
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