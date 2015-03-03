__d("FBSeenByPopover",["FBAbstractEntityListPopover","React","ReactGraphQL","fbt","keyOf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("FBAbstractEntityListPopover"),
        a = require/*t*/("React"),
        s = require/*t*/("ReactGraphQL"),
        l = require/*t*/("fbt"),
        u = require/*t*/("keyOf"),
        c = 10,
        p = u({
            popRef: null
        }),
        d = a.createClass({
            displayName: "FBSeenByPopover",
            propTypes: {
                circularProfilePictures: a.PropTypes.bool,
                closeOnRowPress: a.PropTypes.bool,
                closeTextColor: a.PropTypes.string
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
            mixins: [s.Mixin],
            statics: {
                queryParams: {
                    count: 0,
                    showSeenBy: "false"
                },
                queries: {
                    feedback: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/) {
                            var module/*i*/ = require/*t*/.__GraphQL;
                            return new module/*i*/.QueryFragment("FBSeenByPopover_feedback", "Feedback", [new module/*i*/.Field("seen_by", [new module/*i*/.Field("count")], null, null, "seen_by_with_count", null, {
                                connection: !0,
                                nonFindable: !0
                            }), new module/*i*/.Field("seen_by", [new module/*i*/.Field("edges", [new module/*i*/.Field("cursor", null, null, null, null, null, {
                                requisite: !0
                            }), new module/*i*/.Field("node", [new module/*i*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [require/*t*/.__frag(requireLazy/*r*/)], null, null, null, {
                                rootCall: "node",
                                pk: "id",
                                requisite: !0
                            })], null, null, null, null, {
                                plural: !0,
                                edgesID: "FBSeenByPopover_feedback_1"
                            }), new module/*i*/.Field("page_info", [new module/*i*/.Field("has_next_page", null, null, null, null, null, {
                                requisite: !0
                            }), new module/*i*/.Field("has_previous_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                requisite: !0
                            })], null, [new module/*i*/.Callv("if", [require/*t*/.__var(global/*e*/)]), new module/*i*/.Callv("first", [require/*t*/.__var(requireDynamic/*n*/)])], "seen_by_popover", null, {
                                connection: !0,
                                nonFindable: !0
                            }), new module/*i*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, {
                                scope: "FBSeenByPopover_feedback"
                            })
                        }(requireDynamic/*n*/.showSeenBy, requireDynamic/*n*/.count, o.getQuery("actor"))
                    }
                }
            },
            hasMoreToLoad: function() {
                var global/*e*/ = this.props.feedback.seen_by_popover,
                    require/*t*/ = this.props.feedback.seen_by_with_count.count;
                return global/*e*/.edges.length < require/*t*/ ? !0 : !1
            },
            isLoadingMore: function() {
                var global/*e*/ = this.props.feedback.seen_by_popover;
                return !!(this.hasMoreToLoad() && this.queryParams.count > global/*e*/.edges.length)
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
            onRowPressWithCompletion: function(global/*e*/) {
                this.props.closeOnRowPress ? (this.setState({
                    onDidCloseCallback: global/*e*/
                }), this.close()) : global/*e*/()
            },
            getSeenByConnection: function() {
                return this.props.feedback.seen_by_popover
            },
            getSeenByCount: function() {
                return this.props.feedback.seen_by_with_count.count
            },
            getPopoverTitle: function() {
                return l({
                    type: "text",
                    texts: ["People Who Saw This"],
                    desc: "Header of seen by list"
                })
            },
            render: function() {
                return a.createElement(o, {
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
    module/*i*/.exports = d
});