__d("FeedbackPoller",["ErrorUtils","GraphQL_EXPERIMENTAL","GraphQLConstants","GraphQLMutatorConstants","GraphQLStore","RQLRequest","isEmpty","fetchBatchedRQL","rql"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        if (g(R) || !C) return s(), void(w = null);
        var global/*e*/ = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                require/*t*/ ? console.error("Error from feedback poller: ", require/*t*/) : f.handleUpdate(requireDynamic/*n*/, global/*e*/, h.POLLER_UPDATE)
            },
            require/*t*/ = [];
        for (var requireDynamic/*n*/ in R) {
            var requireLazy/*r*/ = u(requireDynamic/*n*/),
                module/*i*/ = l(requireDynamic/*n*/, requireLazy/*r*/),
                o = new p.QueryWithValues(module/*i*/, {});
            require/*t*/.push(new m(requireDynamic/*n*/, o, c.guard(global/*e*/.bind(null, o), "FeedbackPoller:handleResponse")))
        }
        require/*t*/.length > 0 && _(require/*t*/), a()
    }

    function a() {
        C && (w = setTimeout(c.guard(o, "FeedbackPoller:schedule"), b))
    }

    function s() {
        w = null, R = {}, clearTimeout(w)
    }

    function l(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = R[global/*e*/],
            requireLazy/*r*/ = null;
        return require/*t*/ && require/*t*/ !== S && (requireLazy/*r*/ = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = y.__GraphQL;
                return new requireLazy/*r*/.QueryFragment("FeedbackPoller_f0", "Node", [new requireLazy/*r*/.Field("top_level_comments", null, [y.__frag(requireDynamic/*n*/)], [new requireLazy/*r*/.Callv("before", [y.__var(global/*e*/)]), new requireLazy/*r*/.Callv("first", [y.__var(require/*t*/)])], null, null, {
                    connection: !0
                }), new requireLazy/*r*/.Field("id", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })])
            }(require/*t*/, v, requireDynamic/*n*/)),
            function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = y.__GraphQL;
                return new requireDynamic/*n*/.Query("node", [y.__var(global/*e*/)], [new requireDynamic/*n*/.Field("likers", [new requireDynamic/*n*/.Field("count")], null, null, null, null, {
                    connection: !0,
                    nonFindable: !0
                }), new requireDynamic/*n*/.Field("does_viewer_like"), new requireDynamic/*n*/.Field("id", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], [y.__frag(require/*t*/)], null, "FeedbackPoller_q0")
            }(global/*e*/, requireLazy/*r*/)
    }

    function u(global/*e*/) {
        var require/*t*/ = function(global/*e*/) {
                var require/*t*/ = y.__GraphQL;
                return new require/*t*/.Query("node", [y.__var(global/*e*/)], [new require/*t*/.Field("top_level_comments", [new require/*t*/.Field("edges", [new require/*t*/.Field("cursor", null, null, null, null, null, {
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
            requireDynamic/*n*/ = f.resolveQueryFromStore(new p.QueryWithValues(require/*t*/, {}));
        return requireDynamic/*n*/ && requireDynamic/*n*/[global/*e*/] && requireDynamic/*n*/[global/*e*/].top_level_comments && requireDynamic/*n*/[global/*e*/].top_level_comments.edges[0] && requireDynamic/*n*/[global/*e*/].top_level_comments.edges[0].cursor
    }
    var c = require/*t*/("ErrorUtils"),
        p = require/*t*/("GraphQL_EXPERIMENTAL"),
        d = require/*t*/("GraphQLConstants"),
        h = require/*t*/("GraphQLMutatorConstants"),
        f = require/*t*/("GraphQLStore"),
        m = require/*t*/("RQLRequest"),
        g = require/*t*/("isEmpty"),
        _ = require/*t*/("fetchBatchedRQL"),
        y = require/*t*/("rql"),
        v = 10,
        S = d.DUMMY_CURSOR_ID,
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
                        var require/*t*/ = f.getTrackedQueryByID(global/*e*/),
                            requireDynamic/*n*/ = require/*t*/.getUnaliasedFields("top_level_comments");
                        requireDynamic/*n*/ = requireDynamic/*n*/.filter(function(global/*e*/) {
                            return "top_level_comment_counts" !== global/*e*/.getAlias()
                        }, requireDynamic/*n*/);
                        var requireLazy/*r*/ = requireDynamic/*n*/.map(function(global/*e*/) {
                            return new p.QueryFragment("FeedbackPollerFragment", "CommentsConnection", global/*e*/.getOwnFields(), global/*e*/.getFragments())
                        });
                        R[global/*e*/] = new p.QueryFragment("FeedbackPoller", "CommentsConnection", null, requireLazy/*r*/)
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