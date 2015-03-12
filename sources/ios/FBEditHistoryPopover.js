__d("FBEditHistoryPopover",["FIGColors","Popover","React","ReactGraphQL","ScrollView","SpinnerIOS","StyleSheet","Text","TimeStamp","TouchableBounce","View","clamp","fbt","keyOf"],function (e, t, n, r, i) {
    "use strict";
    var FIGColors/*o*/ = t("FIGColors"),
        Popover/*a*/ = t("Popover"),
        React/*s*/ = t("React"),
        ReactGraphQL/*l*/ = t("ReactGraphQL"),
        ScrollView/*u*/ = t("ScrollView"),
        SpinnerIOS/*c*/ = t("SpinnerIOS"),
        StyleSheet/*p*/ = t("StyleSheet"),
        Text/*d*/ = t("Text"),
        TimeStamp/*h*/ = t("TimeStamp"),
        TouchableBounce/*f*/ = t("TouchableBounce"),
        View/*m*/ = t("View"),
        clamp/*g*/ = t("clamp"),
        fbt/*_*/ = t("fbt"),
        keyOf/*y*/ = t("keyOf"),
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
                    comment: function(e, t, n) {
                        return function(e, n) {
                            var r = t.__GraphQL;
                            return new r.QueryFragment("FBEditHistoryPopover_comment", "Comment", [new r.Field("edit_history", [new r.Field("count")], null, null, null, null, {
                                connection: !0,
                                nonFindable: !0
                            }), new r.Field("edit_history", [new r.Field("edges", [new r.Field("cursor", null, null, null, null, null, {
                                requisite: !0
                            }), new r.Field("node", [new r.Field("message", [new r.Field("text")]), new r.Field("time"), new r.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id",
                                requisite: !0
                            })], null, null, null, null, {
                                plural: !0,
                                edgesID: "FBEditHistoryPopover_comment_1"
                            }), new r.Field("page_info", [new r.Field("has_previous_page", null, null, null, null, null, {
                                requisite: !0
                            }), new r.Field("has_next_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                requisite: !0
                            })], null, [new r.Callv("if", [t.__var(e)]), new r.Callv("last", [t.__var(n)])], "edit_history_popover", null, {
                                connection: !0,
                                nonFindable: !0
                            }), new r.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, {
                                scope: "FBEditHistoryPopover_comment"
                            })
                        }(n.doQuery, n.count)
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
                var e = this.props.comment.edit_history_popover,
                    t = this.props.comment.edit_history.count;
                if (!e.page_info || !e.page_info.has_previous_page) return null;
                if (this.queryParams.count > e.edges.length) return React/*s*/.createElement(View/*m*/, {
                    style: R.seeMore
                }, React/*s*/.createElement(SpinnerIOS/*c*/, null));
                var n = t - e.edges.length;
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
                }, [fbt/*_*/.param("more_count", n)]))))
            },
            renderList: function() {
                var e = this.props.comment.edit_history_popover,
                    t = this.props.comment.edit_history.count,
                    n = clamp/*g*/(150, 70 * t, 400);
                if (!e || !e.edges) return React/*s*/.createElement(SpinnerIOS/*c*/, {
                    style: {
                        height: n
                    }
                });
                var r = [this.renderPaginator()];
                e = e.edges;
                for (var i = 0; i < e.length; ++i) r.push(React/*s*/.createElement(View/*m*/, {
                    key: "SpinnerIOS/*c*/" + i,
                    style: R.cell
                }, React/*s*/.createElement(TimeStamp/*h*/, {
                    style: R.timestamp,
                    time: e[i].node.time
                }), React/*s*/.createElement(Text/*d*/, {
                    style: R.bodyText
                }, e[i].node.message && e[i].node.message.text || " "))), r.push(React/*s*/.createElement(View/*m*/, {
                    style: R.rowSeparator,
                    key: "React/*s*/" + i
                }));
                return React/*s*/.createElement(ScrollView/*u*/, {
                    style: {
                        height: n
                    },
                    contentContainerStyle: R.contentContainer
                }, r)
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
    i.exports = b
});