__d("FeedbackPoller",["ErrorUtils","GraphQL_EXPERIMENTAL","GraphQLConstants","GraphQLMutatorConstants","GraphQLStore","RQLRequest","isEmpty","fetchBatchedRQL","rql"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        if (isEmpty/*g*/(R) || !C) return s(), void(w = null);
        var global/*e*/ = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                require/*t*/ ? console.error("Error from feedback poller: ", require/*t*/) : GraphQLStore/*f*/.handleUpdate(requireDynamic/*n*/, global/*e*/, GraphQLMutatorConstants/*h*/.POLLER_UPDATE)
            },
            require/*t*/ = [];
        for (var requireDynamic/*n*/ in R) {
            var requireLazy/*r*/ = u(requireDynamic/*n*/),
                module/*i*/ = l(requireDynamic/*n*/, requireLazy/*r*/),
                o = new GraphQL_EXPERIMENTAL/*p*/.QueryWithValues(module/*i*/, {});
            require/*t*/.push(new RQLRequest/*m*/(requireDynamic/*n*/, o, ErrorUtils/*c*/.guard(global/*e*/.bind(null, o), "FeedbackPoller:handleResponse")))
        }
        require/*t*/.length > 0 && fetchBatchedRQL/*_*/(require/*t*/), a()
    }

    function a() {
        C && (w = setTimeout(ErrorUtils/*c*/.guard(o, "FeedbackPoller:schedule"), b))
    }

    function s() {
        w = null, R = {}, clearTimeout(w)
    }

    function l(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = R[global/*e*/],
            requireLazy/*r*/ = null;
        return require/*t*/ && require/*t*/ !== S && (requireLazy/*r*/ = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = rql/*y*/.__GraphQL;
                return new requireLazy/*r*/.QueryFragment("FeedbackPoller_f0", "Node", [new requireLazy/*r*/.Field("top_level_comments", null, [rql/*y*/.__frag(requireDynamic/*n*/)], [new requireLazy/*r*/.Callv("before", [rql/*y*/.__var(global/*e*/)]), new requireLazy/*r*/.Callv("first", [rql/*y*/.__var(require/*t*/)])], null, null, {
                    connection: !0
                }), new requireLazy/*r*/.Field("id", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })])
            }(require/*t*/, v, requireDynamic/*n*/)),
            function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = rql/*y*/.__GraphQL;
                return new requireDynamic/*n*/.Query("node", [rql/*y*/.__var(global/*e*/)], [new requireDynamic/*n*/.Field("likers", [new requireDynamic/*n*/.Field("count")], null, null, null, null, {
                    connection: !0,
                    nonFindable: !0
                }), new requireDynamic/*n*/.Field("does_viewer_like"), new requireDynamic/*n*/.Field("id", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], [rql/*y*/.__frag(require/*t*/)], null, "FeedbackPoller_q0")
            }(global/*e*/, requireLazy/*r*/)
    }

    function u(global/*e*/) {
        var require/*t*/ = function(global/*e*/) {
                var require/*t*/ = rql/*y*/.__GraphQL;
                return new require/*t*/.Query("node", [rql/*y*/.__var(global/*e*/)], [new require/*t*/.Field("top_level_comments", [new require/*t*/.Field("edges", [new require/*t*/.Field("cursor", null, null, null, null, null, {
                    requisite: !0
                }), new require/*t*/.Field("node", [new require/*t*/.Field("id", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], null, null, null, null, {
                    rootCall: "node",
                    pk: "id",
                    generated: !0,
                    requisite: !0
                })], null, null, null, null, {
                    plural: !0
                }), new require/*t*/.Field("page_info", [new require/*t*/.Field("has_next_page", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                }), new require/*t*/.Field("has_previous_page", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], null, [new require/*t*/.Callv("first", ["1"])], null, null, {
                    connection: !0
                }), new require/*t*/.Field("id", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], null, null, "FeedbackPoller_q0")
            }(global/*e*/),
            requireDynamic/*n*/ = GraphQLStore/*f*/.resolveQueryFromStore(new GraphQL_EXPERIMENTAL/*p*/.QueryWithValues(require/*t*/, {}));
        return requireDynamic/*n*/ && requireDynamic/*n*/[global/*e*/] && requireDynamic/*n*/[global/*e*/].top_level_comments && requireDynamic/*n*/[global/*e*/].top_level_comments.edges[0] && requireDynamic/*n*/[global/*e*/].top_level_comments.edges[0].cursor
    }
    var ErrorUtils/*c*/ = require/*t*/("ErrorUtils"),
        GraphQL_EXPERIMENTAL/*p*/ = require/*t*/("GraphQL_EXPERIMENTAL"),
        GraphQLConstants/*d*/ = require/*t*/("GraphQLConstants"),
        GraphQLMutatorConstants/*h*/ = require/*t*/("GraphQLMutatorConstants"),
        GraphQLStore/*f*/ = require/*t*/("GraphQLStore"),
        RQLRequest/*m*/ = require/*t*/("RQLRequest"),
        isEmpty/*g*/ = require/*t*/("isEmpty"),
        fetchBatchedRQL/*_*/ = require/*t*/("fetchBatchedRQL"),
        rql/*y*/ = require/*t*/("rql"),
        v = 10,
        S = GraphQLConstants/*d*/.DUMMY_CURSOR_ID,
        b = 15e3,
        R = {},
        w = null,
        C = !1,
        E = {
            enablePoller: function(global/*e*/) {
                C !== global/*e*/ && (C = global/*e*/, C || s())
            },
            register: function(global/*e*/) {
                if (C && global/*e*/) {
                    if (!R[global/*e*/]) {
                        var require/*t*/ = GraphQLStore/*f*/.getTrackedQueryByID(global/*e*/),
                            requireDynamic/*n*/ = require/*t*/.getUnaliasedFields("top_level_comments");
                        requireDynamic/*n*/ = requireDynamic/*n*/.filter(function(global/*e*/) {
                            return "top_level_comment_counts" !== global/*e*/.getAlias()
                        }, requireDynamic/*n*/);
                        var requireLazy/*r*/ = requireDynamic/*n*/.map(function(global/*e*/) {
                            return new GraphQL_EXPERIMENTAL/*p*/.QueryFragment("FeedbackPollerFragment", "CommentsConnection", global/*e*/.getOwnFields(), global/*e*/.getFragments())
                        });
                        R[global/*e*/] = new GraphQL_EXPERIMENTAL/*p*/.QueryFragment("FeedbackPoller", "CommentsConnection", null, requireLazy/*r*/)
                    }
                    w || a()
                }
            },
            unregister: function(global/*e*/) {
                global/*e*/ && delete R[global/*e*/]
            }
        };
    module/*i*/.exports = E
});