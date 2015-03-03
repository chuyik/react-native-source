__d("FeedbackLikeAction",["GraphQL_EXPERIMENTAL","GraphQLMutationAction","GraphQLMutationQueryCreator","GraphQLMutatorHub","GraphQLStore","GraphQLStoreDataHandler","defaultRQLMutationCallback","invariant","rql"],function (global/*e*/, require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/("GraphQL_EXPERIMENTAL"),
        exports/*a*/ = require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/("GraphQLMutationAction"),
        GraphQL_EXPERIMENTAL/*s*/ = require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/("GraphQLMutationQueryCreator"),
        GraphQLMutationAction/*l*/ = (require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/("GraphQLMutatorHub"), require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/("GraphQLStore")),
        GraphQLMutatorHub/*u*/ = (require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/("GraphQLStoreDataHandler"), require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/("defaultRQLMutationCallback")),
        GraphQLStoreDataHandler/*c*/ = require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/("invariant"),
        defaultRQLMutationCallback/*p*/ = require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/("rql"),
        invariant/*d*/ = {
            handleLikeChange: function(global/*e*/, require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/) {
                var requireDynamic/*n*/ = GraphQLMutationAction/*l*/.resolveQueryFromStore(new o.QueryWithValues(function(global/*e*/) {
                    var require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/ = defaultRQLMutationCallback/*p*/.__GraphQL;
                    return new require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/.Query("node", [defaultRQLMutationCallback/*p*/.__var(global/*e*/)], [new require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/.Field("does_viewer_like"), new require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/.Field("likers", [new require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/.Field("count")], null, null, null, null, {
                        connection: !0,
                        nonFindable: !0
                    }), new require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/.Field("id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })], null, null, "FeedbackLikeAction_q0")
                }(global/*e*/), {}))[global/*e*/];
                if (requireDynamic/*n*/ || GraphQLStoreDataHandler/*c*/(0, "Like/unlike action taken on unknown feedback target"), requireDynamic/*n*/.does_viewer_like !== require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/) {
                    var requireLazy/*r*/ = {
                        id: global/*e*/,
                        does_viewer_like: require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/
                    };
                    if (requireDynamic/*n*/.likers && void 0 !== requireDynamic/*n*/.likers.count) {
                        var module/*i*/ = require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/ ? 1 : -1;
                        requireLazy/*r*/.likers = {
                            count: requireDynamic/*n*/.likers.count + module/*i*/
                        }
                    }
                    var invariant/*d*/ = {},
                        h = require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/ ? "feedback_like" : "feedback_unlike";
                    invariant/*d*/[h] = {
                        feedback: requireLazy/*r*/
                    };
                    var f, m;
                    require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/ ? (f = GraphQL_EXPERIMENTAL/*s*/.createQuery("feedback_like", {
                        feedback: global/*e*/
                    }), m = function(global/*e*/) {
                        var require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/ = defaultRQLMutationCallback/*p*/.__GraphQL;
                        return new require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/.Mutation("FeedbackLikeAction_m0", "FeedbackLikeResponsePayload", new require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/.Callv("feedback_like", [new require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/.CallVariable("input")]), [new require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/.Field("client_mutation_id", null, null, null, null, null, {
                            generated: !0,
                            requisite: !0
                        })], [defaultRQLMutationCallback/*p*/.__frag(global/*e*/)])
                    }(f)) : (f = GraphQL_EXPERIMENTAL/*s*/.createQuery("feedback_unlike", {
                        feedback: global/*e*/
                    }), m = function(global/*e*/) {
                        var require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/ = defaultRQLMutationCallback/*p*/.__GraphQL;
                        return new require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/.Mutation("FeedbackLikeAction_m1", "FeedbackUnlikeResponsePayload", new require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/.Callv("feedback_unlike", [new require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/.CallVariable("input")]), [new require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/.Field("client_mutation_id", null, null, null, null, null, {
                            generated: !0,
                            requisite: !0
                        })], [defaultRQLMutationCallback/*p*/.__frag(global/*e*/)])
                    }(f));
                    var g = new exports/*a*/;
                    g.runOptimisticAction(invariant/*d*/), g.runServerAction(m, {
                        feedback_id: global/*e*/
                    }, function(global/*e*/, requireDynamic/*n*/) {
                        if (global/*e*/) throw global/*e*/;
                        if (requireDynamic/*n*/) {
                            var requireLazy/*r*/ = require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/ ? requireDynamic/*n*/.feedback_like : requireDynamic/*n*/.feedback_unlike;
                            require/*GraphQLMutationQueryCreator/*GraphQLStore/*rql/*t*/*/*/*/ !== requireLazy/*r*/.feedback.does_viewer_like && GraphQLMutatorHub/*u*/(null, requireDynamic/*n*/, m)
                        }
                    })
                }
            }
        };
    module/*i*/.exports = invariant/*d*/
});