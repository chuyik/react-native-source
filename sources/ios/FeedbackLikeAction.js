__d("FeedbackLikeAction",["GraphQL_EXPERIMENTAL","GraphQLMutationAction","GraphQLMutationQueryCreator","GraphQLMutatorHub","GraphQLStore","GraphQLStoreDataHandler","defaultRQLMutationCallback","invariant","rql"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("GraphQL_EXPERIMENTAL"),
        a = require/*t*/("GraphQLMutationAction"),
        s = require/*t*/("GraphQLMutationQueryCreator"),
        l = (require/*t*/("GraphQLMutatorHub"), require/*t*/("GraphQLStore")),
        u = (require/*t*/("GraphQLStoreDataHandler"), require/*t*/("defaultRQLMutationCallback")),
        c = require/*t*/("invariant"),
        p = require/*t*/("rql"),
        d = {
            handleLikeChange: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = l.resolveQueryFromStore(new o.QueryWithValues(function(global/*e*/) {
                    var require/*t*/ = p.__GraphQL;
                    return new require/*t*/.Query("node", [p.__var(global/*e*/)], [new require/*t*/.Field("does_viewer_like"), new require/*t*/.Field("likers", [new require/*t*/.Field("count")], null, null, null, null, {
                        connection: !0,
                        nonFindable: !0
                    }), new require/*t*/.Field("id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })], null, null, "FeedbackLikeAction_q0")
                }(global/*e*/), {}))[global/*e*/];
                if (requireDynamic/*n*/ || c(0, "Like/unlike action taken on unknown feedback target"), requireDynamic/*n*/.does_viewer_like !== require/*t*/) {
                    var requireLazy/*r*/ = {
                        id: global/*e*/,
                        does_viewer_like: require/*t*/
                    };
                    if (requireDynamic/*n*/.likers && void 0 !== requireDynamic/*n*/.likers.count) {
                        var module/*i*/ = require/*t*/ ? 1 : -1;
                        requireLazy/*r*/.likers = {
                            count: requireDynamic/*n*/.likers.count + module/*i*/
                        }
                    }
                    var d = {},
                        h = require/*t*/ ? "feedback_like" : "feedback_unlike";
                    d[h] = {
                        feedback: requireLazy/*r*/
                    };
                    var f, m;
                    require/*t*/ ? (f = s.createQuery("feedback_like", {
                        feedback: global/*e*/
                    }), m = function(global/*e*/) {
                        var require/*t*/ = p.__GraphQL;
                        return new require/*t*/.Mutation("FeedbackLikeAction_m0", "FeedbackLikeResponsePayload", new require/*t*/.Callv("feedback_like", [new require/*t*/.CallVariable("input")]), [new require/*t*/.Field("client_mutation_id", null, null, null, null, null, {
                            generated: !0,
                            requisite: !0
                        })], [p.__frag(global/*e*/)])
                    }(f)) : (f = s.createQuery("feedback_unlike", {
                        feedback: global/*e*/
                    }), m = function(global/*e*/) {
                        var require/*t*/ = p.__GraphQL;
                        return new require/*t*/.Mutation("FeedbackLikeAction_m1", "FeedbackUnlikeResponsePayload", new require/*t*/.Callv("feedback_unlike", [new require/*t*/.CallVariable("input")]), [new require/*t*/.Field("client_mutation_id", null, null, null, null, null, {
                            generated: !0,
                            requisite: !0
                        })], [p.__frag(global/*e*/)])
                    }(f));
                    var g = new a;
                    g.runOptimisticAction(d), g.runServerAction(m, {
                        feedback_id: global/*e*/
                    }, function(global/*e*/, requireDynamic/*n*/) {
                        if (global/*e*/) throw global/*e*/;
                        if (requireDynamic/*n*/) {
                            var requireLazy/*r*/ = require/*t*/ ? requireDynamic/*n*/.feedback_like : requireDynamic/*n*/.feedback_unlike;
                            require/*t*/ !== requireLazy/*r*/.feedback.does_viewer_like && u(null, requireDynamic/*n*/, m)
                        }
                    })
                }
            }
        };
    module/*i*/.exports = d
});