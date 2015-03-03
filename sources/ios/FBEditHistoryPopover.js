__d("FBEditHistoryPopover",["FIGColors","Popover","React","ReactGraphQL","ScrollView","SpinnerIOS","StyleSheet","Text","TimeStamp","TouchableBounce","View","clamp","fbt","keyOf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("FIGColors"),
        exports/*a*/ = require/*t*/("Popover"),
        FIGColors/*s*/ = require/*t*/("React"),
        Popover/*l*/ = require/*t*/("ReactGraphQL"),
        React/*u*/ = require/*t*/("ScrollView"),
        ReactGraphQL/*c*/ = require/*t*/("SpinnerIOS"),
        ScrollView/*p*/ = require/*t*/("StyleSheet"),
        SpinnerIOS/*d*/ = require/*t*/("Text"),
        StyleSheet/*h*/ = require/*t*/("TimeStamp"),
        Text/*f*/ = require/*t*/("TouchableBounce"),
        TimeStamp/*m*/ = require/*t*/("View"),
        TouchableBounce/*g*/ = require/*t*/("clamp"),
        View/*_*/ = require/*t*/("fbt"),
        clamp/*y*/ = require/*t*/("keyOf"),
        fbt/*v*/ = 6,
        keyOf/*S*/ = clamp/*y*/({
            popRef: null
        }),
        b = FIGColors/*s*/.createClass({
            displayName: "FBEditHistoryPopover",
            mixins: [Popover/*l*/.Mixin],
            statics: {
                queryParams: {
                    count: 0,
                    doQuery: "false"
                },
                queries: {
                    comment: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                        return function(global/*e*/, requireDynamic/*n*/) {
                            var requireLazy/*r*/ = require/*t*/.__GraphQL;
                            return new requireLazy/*r*/.QueryFragment("FBEditHistoryPopover_comment", "Comment", [new requireLazy/*r*/.Field("edit_history", [new requireLazy/*r*/.Field("count")], null, null, null, null, {
                                connection: !0,
                                nonFindable: !0
                            }), new requireLazy/*r*/.Field("edit_history", [new requireLazy/*r*/.Field("edges", [new requireLazy/*r*/.Field("cursor", null, null, null, null, null, {
                                requisite: !0
                            }), new requireLazy/*r*/.Field("node", [new requireLazy/*r*/.Field("message", [new requireLazy/*r*/.Field("text")]), new requireLazy/*r*/.Field("time"), new requireLazy/*r*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id",
                                requisite: !0
                            })], null, null, null, null, {
                                plural: !0,
                                edgesID: "FBEditHistoryPopover_comment_1"
                            }), new requireLazy/*r*/.Field("page_info", [new requireLazy/*r*/.Field("has_previous_page", null, null, null, null, null, {
                                requisite: !0
                            }), new requireLazy/*r*/.Field("has_next_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                requisite: !0
                            })], null, [new requireLazy/*r*/.Callv("if", [require/*t*/.__var(global/*e*/)]), new requireLazy/*r*/.Callv("last", [require/*t*/.__var(requireDynamic/*n*/)])], "edit_history_popover", null, {
                                connection: !0,
                                nonFindable: !0
                            }), new requireLazy/*r*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, {
                                scope: "FBEditHistoryPopover_comment"
                            })
                        }(requireDynamic/*n*/.doQuery, requireDynamic/*n*/.count)
                    }
                }
            },
            open: function() {
                this.refs[keyOf/*S*/].open(), this.showMore()
            },
            close: function() {
                this.refs[keyOf/*S*/].close()
            },
            handleDidClose: function() {
                this.setQueryParams({
                    count: 0,
                    doQuery: "false"
                })
            },
            showMore: function() {
                this.setQueryParams({
                    count: this.queryParams.count + fbt/*v*/,
                    doQuery: "true"
                }), this.forceUpdate()
            },
            renderPaginator: function() {
                var global/*e*/ = this.props.comment.edit_history_popover,
                    require/*t*/ = this.props.comment.edit_history.count;
                if (!global/*e*/.page_info || !global/*e*/.page_info.has_previous_page) return null;
                if (this.queryParams.count > global/*e*/.edges.length) return FIGColors/*s*/.createElement(TimeStamp/*m*/, {
                    style: R.seeMore
                }, FIGColors/*s*/.createElement(ReactGraphQL/*c*/, null));
                var requireDynamic/*n*/ = require/*t*/ - global/*e*/.edges.length;
                return FIGColors/*s*/.createElement(Text/*f*/, {
                    key: "more",
                    onPress: this.showMore
                }, FIGColors/*s*/.createElement(TimeStamp/*m*/, {
                    key: "more",
                    style: R.seeMore
                }, FIGColors/*s*/.createElement(SpinnerIOS/*d*/, {
                    style: R.seeMoreText
                }, View/*_*/({
                    type: "text",
                    texts: ["See {more_count} more"],
                    desc: "Button to see more edits"
                }, [View/*_*/.param("more_count", requireDynamic/*n*/)]))))
            },
            renderList: function() {
                var global/*e*/ = this.props.comment.edit_history_popover,
                    require/*t*/ = this.props.comment.edit_history.count,
                    requireDynamic/*n*/ = TouchableBounce/*g*/(150, 70 * require/*t*/, 400);
                if (!global/*e*/ || !global/*e*/.edges) return FIGColors/*s*/.createElement(ReactGraphQL/*c*/, {
                    style: {
                        height: requireDynamic/*n*/
                    }
                });
                var requireLazy/*r*/ = [this.renderPaginator()];
                global/*e*/ = global/*e*/.edges;
                for (var module/*i*/ = 0; module/*i*/ < global/*e*/.length; ++module/*i*/) requireLazy/*r*/.push(FIGColors/*s*/.createElement(TimeStamp/*m*/, {
                    key: "ReactGraphQL/*c*/" + module/*i*/,
                    style: R.cell
                }, FIGColors/*s*/.createElement(StyleSheet/*h*/, {
                    style: R.timestamp,
                    time: global/*e*/[module/*i*/].node.time
                }), FIGColors/*s*/.createElement(SpinnerIOS/*d*/, {
                    style: R.bodyText
                }, global/*e*/[module/*i*/].node.message && global/*e*/[module/*i*/].node.message.text || " "))), requireLazy/*r*/.push(FIGColors/*s*/.createElement(TimeStamp/*m*/, {
                    style: R.rowSeparator,
                    key: "FIGColors/*s*/" + module/*i*/
                }));
                return FIGColors/*s*/.createElement(React/*u*/, {
                    style: {
                        height: requireDynamic/*n*/
                    },
                    contentContainerStyle: R.contentContainer
                }, requireLazy/*r*/)
            },
            renderContent: function() {
                return [FIGColors/*s*/.createElement(TimeStamp/*m*/, {
                    key: "header",
                    style: R.header
                }, FIGColors/*s*/.createElement(SpinnerIOS/*d*/, {
                    style: R.headerText
                }, View/*_*/({
                    type: "text",
                    texts: ["{edit_count} Edits"],
                    desc: "Header of edit history view."
                }, [View/*_*/.param("edit_count", this.props.comment.edit_history.count)])), FIGColors/*s*/.createElement(Text/*f*/, {
                    onPress: this.close
                }, FIGColors/*s*/.createElement(TimeStamp/*m*/, null, FIGColors/*s*/.createElement(SpinnerIOS/*d*/, {
                    style: R.headerText
                }, View/*_*/({
                    type: "text",
                    texts: ["Close"],
                    desc: "Close button"
                }))))), FIGColors/*s*/.createElement(TimeStamp/*m*/, {
                    key: "sep",
                    style: R.rowSeparator
                }), this.renderList()]
            },
            render: function() {
                return FIGColors/*s*/.createElement(exports/*a*/, {
                    ref: keyOf/*S*/,
                    onDidClose: this.handleDidClose,
                    contentFactory: this.renderContent
                })
            }
        }),
        R = ScrollView/*p*/.create({
            contentContainer: {
                margin: 10
            },
            rowSeparator: {
                height: 1,
                marginHorizontal: 30,
                backgroundColor: o.separator
            },
            headerText: {
                margin: 10,
                fontSize: 16
            },
            cell: {
                margin: 5
            },
            timestamp: {
                color: o.mediumText,
                fontSize: 13
            },
            bodyText: {
                fontSize: 14
            },
            seeMore: {
                height: 40,
                justifyContent: "center",
                alignItems: "center"
            },
            header: {
                justifyContent: "space-between",
                flexDirection: "row"
            }
        });
    module/*i*/.exports = b
});