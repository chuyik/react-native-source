__d("FeedbackPoller",["ErrorUtils","GraphQL_EXPERIMENTAL","GraphQLConstants","GraphQLMutatorConstants","GraphQLStore","RQLRequest","isEmpty","fetchBatchedRQL","rql"],function (e, t, n, r, i) {
    "use strict";

    function o() {
        if (isEmpty/*g*/(R) || !C) return s(), void(w = null);
        var e = function(e, t, n) {
                t ? console.error("Error from feedback poller: ", t) : GraphQLStore/*f*/.handleUpdate(n, e, GraphQLMutatorConstants/*h*/.POLLER_UPDATE)
            },
            t = [];
        for (var n in R) {
            var r = u(n),
                i = l(n, r),
                o = new GraphQL_EXPERIMENTAL/*p*/.QueryWithValues(i, {});
            t.push(new RQLRequest/*m*/(n, o, ErrorUtils/*c*/.guard(e.bind(null, o), "FeedbackPoller:handleResponse")))
        }
        t.length > 0 && fetchBatchedRQL/*_*/(t), a()
    }

    function a() {
        C && (w = setTimeout(ErrorUtils/*c*/.guard(o, "FeedbackPoller:schedule"), b))
    }

    function s() {
        w = null, R = {}, clearTimeout(w)
    }

    function l(e, t) {
        var n = R[e],
            r = null;
        return t && t !== S && (r = function(e, t, n) {
                var r = rql/*y*/.__GraphQL;
                return new r.QueryFragment("FeedbackPoller_f0", "Node", [new r.Field("top_level_comments", null, [rql/*y*/.__frag(n)], [new r.Callv("before", [rql/*y*/.__var(e)]), new r.Callv("first", [rql/*y*/.__var(t)])], null, null, {
                    connection: !0
                }), new r.Field("id", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })])
            }(t, v, n)),
            function(e, t) {
                var n = rql/*y*/.__GraphQL;
                return new n.Query("node", [rql/*y*/.__var(e)], [new n.Field("likers", [new n.Field("count")], null, null, null, null, {
                    connection: !0,
                    nonFindable: !0
                }), new n.Field("does_viewer_like"), new n.Field("id", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], [rql/*y*/.__frag(t)], null, "FeedbackPoller_q0")
            }(e, r)
    }

    function u(e) {
        var t = function(e) {
                var t = rql/*y*/.__GraphQL;
                return new t.Query("node", [rql/*y*/.__var(e)], [new t.Field("top_level_comments", [new t.Field("edges", [new t.Field("cursor", null, null, null, null, null, {
                    requisite: !0
                }), new t.Field("node", [new t.Field("id", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], null, null, null, null, {
                    rootCall: "node",
                    pk: "id",
                    generated: !0,
                    requisite: !0
                })], null, null, null, null, {
                    plural: !0
                }), new t.Field("page_info", [new t.Field("has_next_page", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                }), new t.Field("has_previous_page", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], null, [new t.Callv("first", ["1"])], null, null, {
                    connection: !0
                }), new t.Field("id", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], null, null, "FeedbackPoller_q0")
            }(e),
            n = GraphQLStore/*f*/.resolveQueryFromStore(new GraphQL_EXPERIMENTAL/*p*/.QueryWithValues(t, {}));
        return n && n[e] && n[e].top_level_comments && n[e].top_level_comments.edges[0] && n[e].top_level_comments.edges[0].cursor
    }
    var ErrorUtils/*c*/ = t("ErrorUtils"),
        GraphQL_EXPERIMENTAL/*p*/ = t("GraphQL_EXPERIMENTAL"),
        GraphQLConstants/*d*/ = t("GraphQLConstants"),
        GraphQLMutatorConstants/*h*/ = t("GraphQLMutatorConstants"),
        GraphQLStore/*f*/ = t("GraphQLStore"),
        RQLRequest/*m*/ = t("RQLRequest"),
        isEmpty/*g*/ = t("isEmpty"),
        fetchBatchedRQL/*_*/ = t("fetchBatchedRQL"),
        rql/*y*/ = t("rql"),
        v = 10,
        S = GraphQLConstants/*d*/.DUMMY_CURSOR_ID,
        b = 15e3,
        R = {},
        w = null,
        C = !1,
        E = {
            enablePoller: function(e) {
                C !== e && (C = e, C || s())
            },
            register: function(e) {
                if (C && e) {
                    if (!R[e]) {
                        var t = GraphQLStore/*f*/.getTrackedQueryByID(e),
                            n = t.getUnaliasedFields("top_level_comments");
                        n = n.filter(function(e) {
                            return "top_level_comment_counts" !== e.getAlias()
                        }, n);
                        var r = n.map(function(e) {
                            return new GraphQL_EXPERIMENTAL/*p*/.QueryFragment("FeedbackPollerFragment", "CommentsConnection", e.getOwnFields(), e.getFragments())
                        });
                        R[e] = new GraphQL_EXPERIMENTAL/*p*/.QueryFragment("FeedbackPoller", "CommentsConnection", null, r)
                    }
                    w || a()
                }
            },
            unregister: function(e) {
                e && delete R[e]
            }
        };
    i.exports = E
});