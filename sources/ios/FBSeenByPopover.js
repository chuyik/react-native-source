__d("FBSeenByPopover",["FBAbstractEntityListPopover","React","ReactGraphQL","fbt","keyOf"],function (e, t, n, r, i) {
    "use strict";
    var FBAbstractEntityListPopover/*o*/ = t("FBAbstractEntityListPopover"),
        React/*a*/ = t("React"),
        ReactGraphQL/*s*/ = t("ReactGraphQL"),
        fbt/*l*/ = t("fbt"),
        keyOf/*u*/ = t("keyOf"),
        c = 10,
        p = keyOf/*u*/({
            popRef: null
        }),
        d = React/*a*/.createClass({
            displayName: "FBSeenByPopover",
            propTypes: {
                circularProfilePictures: React/*a*/.PropTypes.bool,
                closeOnRowPress: React/*a*/.PropTypes.bool,
                closeTextColor: React/*a*/.PropTypes.string
            },
            getInitialState: function() {
                return {
                    onDidCloseCallback: null
                }
            },
            getDefaultProps: function() {
                return {
                    circularProfilePictures: !1,
                    closeOnRowPress: !1
                }
            },
            mixins: [ReactGraphQL/*s*/.Mixin],
            statics: {
                queryParams: {
                    count: 0,
                    showSeenBy: "false"
                },
                queries: {
                    feedback: function(e, t, n) {
                        return function(e, n, r) {
                            var i = t.__GraphQL;
                            return new i.QueryFragment("FBSeenByPopover_feedback", "Feedback", [new i.Field("seen_by", [new i.Field("count")], null, null, "seen_by_with_count", null, {
                                connection: !0,
                                nonFindable: !0
                            }), new i.Field("seen_by", [new i.Field("edges", [new i.Field("cursor", null, null, null, null, null, {
                                requisite: !0
                            }), new i.Field("node", [new i.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [t.__frag(r)], null, null, null, {
                                rootCall: "node",
                                pk: "id",
                                requisite: !0
                            })], null, null, null, null, {
                                plural: !0,
                                edgesID: "FBSeenByPopover_feedback_1"
                            }), new i.Field("page_info", [new i.Field("has_next_page", null, null, null, null, null, {
                                requisite: !0
                            }), new i.Field("has_previous_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                requisite: !0
                            })], null, [new i.Callv("if", [t.__var(e)]), new i.Callv("first", [t.__var(n)])], "seen_by_popover", null, {
                                connection: !0,
                                nonFindable: !0
                            }), new i.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, {
                                scope: "FBSeenByPopover_feedback"
                            })
                        }(n.showSeenBy, n.count, FBAbstractEntityListPopover/*o*/.getQuery("actor"))
                    }
                }
            },
            hasMoreToLoad: function() {
                var e = this.props.feedback.seen_by_popover,
                    t = this.props.feedback.seen_by_with_count.count;
                return e.edges.length < t ? !0 : !1
            },
            isLoadingMore: function() {
                var e = this.props.feedback.seen_by_popover;
                return !!(this.hasMoreToLoad() && this.queryParams.count > e.edges.length)
            },
            loadMore: function() {
                this.setQueryParams({
                    count: this.queryParams.count + c,
                    showSeenBy: "true"
                })
            },
            open: function() {
                this.refs[p].open()
            },
            close: function() {
                this.setQueryParams({
                    count: 0,
                    showSeenBy: "false"
                }), this.refs[p].close(), this.state.onDidCloseCallback && (this.state.onDidCloseCallback(), this.setState({
                    onDidCloseCallback: null
                }))
            },
            onRowPressWithCompletion: function(e) {
                this.props.closeOnRowPress ? (this.setState({
                    onDidCloseCallback: e
                }), this.close()) : e()
            },
            getSeenByConnection: function() {
                return this.props.feedback.seen_by_popover
            },
            getSeenByCount: function() {
                return this.props.feedback.seen_by_with_count.count
            },
            getPopoverTitle: function() {
                return fbt/*l*/({
                    type: "text",
                    texts: ["People Who Saw This"],
                    desc: "Header of seen by list"
                })
            },
            render: function() {
                return React/*a*/.createElement(FBAbstractEntityListPopover/*o*/, {
                    ref: p,
                    circularProfilePictures: this.props.circularProfilePictures,
                    closeTextColor: this.props.closeTextColor,
                    getEntityConnection: this.getSeenByConnection,
                    getEntityCount: this.getSeenByCount,
                    getPopoverTitle: this.getPopoverTitle,
                    hasMoreToLoad: this.hasMoreToLoad,
                    isLoadingMore: this.isLoadingMore,
                    loadMore: this.loadMore,
                    onRowPressWithCompletion: this.onRowPressWithCompletion
                })
            }
        });
    i.exports = d
});