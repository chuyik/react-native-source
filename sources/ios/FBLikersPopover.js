__d("FBLikersPopover",["FBAbstractEntityListPopover","React","ReactGraphQL","fbt","keyOf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("FBAbstractEntityListPopover"),
        exports/*a*/ = require/*t*/("React"),
        FBAbstractEntityListPopover/*s*/ = require/*t*/("ReactGraphQL"),
        React/*l*/ = require/*t*/("fbt"),
        ReactGraphQL/*u*/ = require/*t*/("keyOf"),
        fbt/*c*/ = 10,
        keyOf/*p*/ = ReactGraphQL/*u*/({
            popRef: null
        }),
        d = exports/*a*/.createClass({
            displayName: "FBLikersPopover",
            propTypes: {
                circularProfilePictures: exports/*a*/.PropTypes.bool,
                closeOnRowPress: exports/*a*/.PropTypes.bool,
                closeTextColor: exports/*a*/.PropTypes.string
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
            mixins: [FBAbstractEntityListPopover/*s*/.Mixin],
            statics: {
                queryParams: {
                    count: 0,
                    showLikers: "false"
                },
                queries: {
                    feedback: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/) {
                            var module/*i*/ = require/*t*/.__GraphQL;
                            return new module/*i*/.QueryFragment("FBLikersPopover_feedback", "Feedback", [new module/*i*/.Field("likers", [new module/*i*/.Field("count")], null, null, "likers_with_count", null, {
                                connection: !0,
                                nonFindable: !0
                            }), new module/*i*/.Field("likers", [new module/*i*/.Field("edges", [new module/*i*/.Field("cursor", null, null, null, null, null, {
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
                                edgesID: "FBLikersPopover_feedback_1"
                            }), new module/*i*/.Field("page_info", [new module/*i*/.Field("has_next_page", null, null, null, null, null, {
                                requisite: !0
                            }), new module/*i*/.Field("has_previous_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                requisite: !0
                            })], null, [new module/*i*/.Callv("if", [require/*t*/.__var(global/*e*/)]), new module/*i*/.Callv("orderby", ["is_viewer", "importance"], {
                                varargs: 1
                            }), new module/*i*/.Callv("first", [require/*t*/.__var(requireDynamic/*n*/)])], "likers_popover", null, {
                                connection: !0,
                                nonFindable: !0
                            }), new module/*i*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, {
                                scope: "FBLikersPopover_feedback"
                            })
                        }(requireDynamic/*n*/.showLikers, requireDynamic/*n*/.count, o.getQuery("actor"))
                    }
                }
            },
            hasMoreToLoad: function() {
                var global/*e*/ = this.props.feedback.likers_popover,
                    require/*t*/ = this.props.feedback.likers_with_count.count;
                return global/*e*/.edges.length < require/*t*/ ? !0 : !1
            },
            isLoadingMore: function() {
                var global/*e*/ = this.props.feedback.likers_popover;
                return !!(this.hasMoreToLoad() && this.queryParams.count > global/*e*/.edges.length)
            },
            loadMore: function() {
                this.setQueryParams({
                    count: this.queryParams.count + fbt/*c*/,
                    showLikers: "true"
                })
            },
            open: function() {
                this.refs[keyOf/*p*/].open()
            },
            close: function() {
                this.setQueryParams({
                    count: 0,
                    showLikers: "false"
                }), this.refs[keyOf/*p*/].close(), this.state.onDidCloseCallback && (this.state.onDidCloseCallback(), this.setState({
                    onDidCloseCallback: null
                }))
            },
            onRowPressWithCompletion: function(global/*e*/) {
                this.props.closeOnRowPress ? (this.setState({
                    onDidCloseCallback: global/*e*/
                }), this.close()) : global/*e*/()
            },
            getSeenByConnection: function() {
                return this.props.feedback.likers_popover
            },
            getSeenByCount: function() {
                return this.props.feedback.likers_with_count.count
            },
            getPopoverTitle: function() {
                return React/*l*/({
                    type: "text",
                    texts: ["People Who Like This"],
                    desc: "Header of likers list"
                })
            },
            render: function() {
                return exports/*a*/.createElement(o, {
                    ref: keyOf/*p*/,
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