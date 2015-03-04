__d("FBEditHistoryPopover",["FIGColors","Popover","React","ReactGraphQL","ScrollView","SpinnerIOS","StyleSheet","Text","TimeStamp","TouchableBounce","View","clamp","fbt","keyOf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var FIGColors/*o*/ = require/*t*/("FIGColors"),
        Popover/*a*/ = require/*t*/("Popover"),
        React/*s*/ = require/*t*/("React"),
        ReactGraphQL/*l*/ = require/*t*/("ReactGraphQL"),
        ScrollView/*u*/ = require/*t*/("ScrollView"),
        SpinnerIOS/*c*/ = require/*t*/("SpinnerIOS"),
        StyleSheet/*p*/ = require/*t*/("StyleSheet"),
        Text/*d*/ = require/*t*/("Text"),
        TimeStamp/*h*/ = require/*t*/("TimeStamp"),
        TouchableBounce/*f*/ = require/*t*/("TouchableBounce"),
        View/*m*/ = require/*t*/("View"),
        clamp/*g*/ = require/*t*/("clamp"),
        fbt/*_*/ = require/*t*/("fbt"),
        keyOf/*y*/ = require/*t*/("keyOf"),
        v = 6,
        S = keyOf/*y*/({
            popRef: null
        }),
        b = React/*s*/.createClass({
            displayName: "FBEditHistoryPopover",
            mixins: [ReactGraphQL/*l*/.Mixin],
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
                this.refs[S].open(), this.showMore()
            },
            close: function() {
                this.refs[S].close()
            },
            handleDidClose: function() {
                this.setQueryParams({
                    count: 0,
                    doQuery: "false"
                })
            },
            showMore: function() {
                this.setQueryParams({
                    count: this.queryParams.count + v,
                    doQuery: "true"
                }), this.forceUpdate()
            },
            renderPaginator: function() {
                var global/*e*/ = this.props.comment.edit_history_popover,
                    require/*t*/ = this.props.comment.edit_history.count;
                if (!global/*e*/.page_info || !global/*e*/.page_info.has_previous_page) return null;
                if (this.queryParams.count > global/*e*/.edges.length) return React/*s*/.createElement(View/*m*/, {
                    style: R.seeMore
                }, React/*s*/.createElement(SpinnerIOS/*c*/, null));
                var requireDynamic/*n*/ = require/*t*/ - global/*e*/.edges.length;
                return React/*s*/.createElement(TouchableBounce/*f*/, {
                    key: "more",
                    onPress: this.showMore
                }, React/*s*/.createElement(View/*m*/, {
                    key: "more",
                    style: R.seeMore
                }, React/*s*/.createElement(Text/*d*/, {
                    style: R.seeMoreText
                }, fbt/*_*/({
                    type: "text",
                    texts: ["See {more_count} more"],
                    desc: "Button to see more edits"
                }, [fbt/*_*/.param("more_count", requireDynamic/*n*/)]))))
            },
            renderList: function() {
                var global/*e*/ = this.props.comment.edit_history_popover,
                    require/*t*/ = this.props.comment.edit_history.count,
                    requireDynamic/*n*/ = clamp/*g*/(150, 70 * require/*t*/, 400);
                if (!global/*e*/ || !global/*e*/.edges) return React/*s*/.createElement(SpinnerIOS/*c*/, {
                    style: {
                        height: requireDynamic/*n*/
                    }
                });
                var requireLazy/*r*/ = [this.renderPaginator()];
                global/*e*/ = global/*e*/.edges;
                for (var module/*i*/ = 0; module/*i*/ < global/*e*/.length; ++module/*i*/) requireLazy/*r*/.push(React/*s*/.createElement(View/*m*/, {
                    key: "SpinnerIOS/*c*/" + module/*i*/,
                    style: R.cell
                }, React/*s*/.createElement(TimeStamp/*h*/, {
                    style: R.timestamp,
                    time: global/*e*/[module/*i*/].node.time
                }), React/*s*/.createElement(Text/*d*/, {
                    style: R.bodyText
                }, global/*e*/[module/*i*/].node.message && global/*e*/[module/*i*/].node.message.text || " "))), requireLazy/*r*/.push(React/*s*/.createElement(View/*m*/, {
                    style: R.rowSeparator,
                    key: "React/*s*/" + module/*i*/
                }));
                return React/*s*/.createElement(ScrollView/*u*/, {
                    style: {
                        height: requireDynamic/*n*/
                    },
                    contentContainerStyle: R.contentContainer
                }, requireLazy/*r*/)
            },
            renderContent: function() {
                return [React/*s*/.createElement(View/*m*/, {
                    key: "header",
                    style: R.header
                }, React/*s*/.createElement(Text/*d*/, {
                    style: R.headerText
                }, fbt/*_*/({
                    type: "text",
                    texts: ["{edit_count} Edits"],
                    desc: "Header of edit history view."
                }, [fbt/*_*/.param("edit_count", this.props.comment.edit_history.count)])), React/*s*/.createElement(TouchableBounce/*f*/, {
                    onPress: this.close
                }, React/*s*/.createElement(View/*m*/, null, React/*s*/.createElement(Text/*d*/, {
                    style: R.headerText
                }, fbt/*_*/({
                    type: "text",
                    texts: ["Close"],
                    desc: "Close button"
                }))))), React/*s*/.createElement(View/*m*/, {
                    key: "sep",
                    style: R.rowSeparator
                }), this.renderList()]
            },
            render: function() {
                return React/*s*/.createElement(Popover/*a*/, {
                    ref: S,
                    onDidClose: this.handleDidClose,
                    contentFactory: this.renderContent
                })
            }
        }),
        R = StyleSheet/*p*/.create({
            contentContainer: {
                margin: 10
            },
            rowSeparator: {
                height: 1,
                marginHorizontal: 30,
                backgroundColor: FIGColors/*o*/.separator
            },
            headerText: {
                margin: 10,
                fontSize: 16
            },
            cell: {
                margin: 5
            },
            timestamp: {
                color: FIGColors/*o*/.mediumText,
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