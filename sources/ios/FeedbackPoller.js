__d("FeedbackPoller",["ErrorUtils","GraphQL_EXPERIMENTAL","GraphQLConstants","GraphQLMutatorConstants","GraphQLStore","RQLRequest","isEmpty","fetchBatchedRQL","rql"],function (global/*GraphQLMutatorConstants/*e*/*/, require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/, requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/, requireLazy/*fetchBatchedRQL/*r*/*/, module/*isEmpty/*i*/*/) {
    "use strict";

    function rql/*o*/() {
        if (g(R) || !C) return s(), exports/*void*/(w = null);
        var global/*GraphQLMutatorConstants/*e*/*/ = function(global/*GraphQLMutatorConstants/*e*/*/, require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/, requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/) {
                require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/ ? console.error("Error from feedback poller: ", require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/) : f.handleUpdate(requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/, global/*GraphQLMutatorConstants/*e*/*/, GraphQLStore/*h.POLLER_UPDATE*/)
            },
            require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/ = [];
        for (var requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/ in R) {
            var requireLazy/*fetchBatchedRQL/*r*/*/ = u(requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/),
                module/*isEmpty/*i*/*/ = l(requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/, requireLazy/*fetchBatchedRQL/*r*/*/),
                rql/*o*/ = new p.QueryWithValues(module/*isEmpty/*i*/*/, {});
            require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/.push(new m(requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/, rql/*o*/, c.guard(global/*GraphQLMutatorConstants/*e*/*/.bind(null, rql/*o*/), "FeedbackPoller:handleResponse")))
        }
        require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/.length > 0 && _(require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/), a()
    }

    function a() {
        C && (w = setTimeout(c.guard(rql/*o*/, "FeedbackPoller:schedule"), b))
    }

    function s() {
        w = null, R = {}, clearTimeout(w)
    }

    function l(global/*GraphQLMutatorConstants/*e*/*/, require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/) {
        var requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/ = R[global/*GraphQLMutatorConstants/*e*/*/],
            requireLazy/*fetchBatchedRQL/*r*/*/ = null;
        return require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/ && require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/ !== S && (requireLazy/*fetchBatchedRQL/*r*/*/ = function(global/*GraphQLMutatorConstants/*e*/*/, require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/, requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/) {
                var requireLazy/*fetchBatchedRQL/*r*/*/ = y.__GraphQL;
                return new requireLazy/*fetchBatchedRQL/*r*/*/.QueryFragment("FeedbackPoller_f0", "Node", [new requireLazy/*fetchBatchedRQL/*r*/*/.Field("top_level_comments", null, [y.__frag(requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/)], [new requireLazy/*fetchBatchedRQL/*r*/*/.Callv("before", [y.__var(global/*GraphQLMutatorConstants/*e*/*/)]), new requireLazy/*fetchBatchedRQL/*r*/*/.Callv("first", [y.__var(require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/)])], null, null, {
                    connection: !0
                }), new requireLazy/*fetchBatchedRQL/*r*/*/.Field("id", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })])
            }(require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/, v, requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/)),
            function(global/*GraphQLMutatorConstants/*e*/*/, require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/) {
                var requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/ = y.__GraphQL;
                return new requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/.Query("node", [y.__var(global/*GraphQLMutatorConstants/*e*/*/)], [new requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/.Field("likers", [new requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/.Field("count")], null, null, null, null, {
                    connection: !0,
                    nonFindable: !0
                }), new requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/.Field("does_viewer_like"), new requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/.Field("id", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], [y.__frag(require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/)], null, "FeedbackPoller_q0")
            }(global/*GraphQLMutatorConstants/*e*/*/, requireLazy/*fetchBatchedRQL/*r*/*/)
    }

    function u(global/*GraphQLMutatorConstants/*e*/*/) {
        var require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/ = function(global/*GraphQLMutatorConstants/*e*/*/) {
                var require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/ = y.__GraphQL;
                return new require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/.Query("node", [y.__var(global/*GraphQLMutatorConstants/*e*/*/)], [new require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/.Field("top_level_comments", [new require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/.Field("edges", [new require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/.Field("cursor", null, null, null, null, null, {
                    requisite: !0
                }), new require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/.Field("node", [new require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/.Field("id", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], null, null, null, null, {
                    rootCall: "node",
                    pk: "id",
                    generated: !0,
                    requisite: !0
                })], null, null, null, null, {
                    plural: !0
                }), new require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/.Field("page_info", [new require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/.Field("has_next_page", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                }), new require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/.Field("has_previous_page", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], null, [new require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/.Callv("first", ["1"])], null, null, {
                    connection: !0
                }), new require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/.Field("id", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], null, null, "FeedbackPoller_q0")
            }(global/*GraphQLMutatorConstants/*e*/*/),
            requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/ = f.resolveQueryFromStore(new p.QueryWithValues(require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/, {}));
        return requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/ && requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/[global/*GraphQLMutatorConstants/*e*/*/] && requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/[global/*GraphQLMutatorConstants/*e*/*/].top_level_comments && requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/[global/*GraphQLMutatorConstants/*e*/*/].top_level_comments.edges[0] && requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/[global/*GraphQLMutatorConstants/*e*/*/].top_level_comments.edges[0].cursor
    }
    var c = require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/("ErrorUtils"),
        p = require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/("GraphQL_EXPERIMENTAL"),
        d = require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/("GraphQLConstants"),
        h = require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/("GraphQLMutatorConstants"),
        f = require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/("GraphQLStore"),
        m = require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/("RQLRequest"),
        g = require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/("isEmpty"),
        _ = require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/("fetchBatchedRQL"),
        y = require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/("rql"),
        v = 10,
        S = d.DUMMY_CURSOR_ID,
        b = 15e3,
        R = {},
        w = null,
        C = !1,
        E = {
            enablePoller: function(global/*GraphQLMutatorConstants/*e*/*/) {
                C !== global/*GraphQLMutatorConstants/*e*/*/ && (C = global/*GraphQLMutatorConstants/*e*/*/, C || s())
            },
            register: function(global/*GraphQLMutatorConstants/*e*/*/) {
                if (C && global/*GraphQLMutatorConstants/*e*/*/) {
                    if (!R[global/*GraphQLMutatorConstants/*e*/*/]) {
                        var require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/ = f.getTrackedQueryByID(global/*GraphQLMutatorConstants/*e*/*/),
                            requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/ = require/*ErrorUtils/*GraphQLConstants/*RQLRequest/*t*/*/*/*/.getUnaliasedFields("top_level_comments");
                        requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/ = requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/.filter(function(global/*GraphQLMutatorConstants/*e*/*/) {
                            return "top_level_comment_counts" !== global/*GraphQLMutatorConstants/*e*/*/.getAlias()
                        }, requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/);
                        var requireLazy/*fetchBatchedRQL/*r*/*/ = requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/.map(function(global/*GraphQLMutatorConstants/*e*/*/) {
                            return new p.QueryFragment("FeedbackPollerFragment", "CommentsConnection", global/*GraphQLMutatorConstants/*e*/*/.getOwnFields(), global/*GraphQLMutatorConstants/*e*/*/.getFragments())
                        });
                        R[global/*GraphQLMutatorConstants/*e*/*/] = new p.QueryFragment("FeedbackPoller", "CommentsConnection", null, requireLazy/*fetchBatchedRQL/*r*/*/)
                    }
                    w || a()
                }
            },
            unregister: function(global/*GraphQLMutatorConstants/*e*/*/) {
                global/*GraphQLMutatorConstants/*e*/*/ && delete R[global/*GraphQLMutatorConstants/*e*/*/]
            }
        };
    module/*isEmpty/*i*/*/.exports = E
});