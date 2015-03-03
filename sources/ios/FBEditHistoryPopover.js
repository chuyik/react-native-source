__d("FBEditHistoryPopover",["FIGColors","Popover","React","ReactGraphQL","ScrollView","SpinnerIOS","StyleSheet","Text","TimeStamp","TouchableBounce","View","clamp","fbt","keyOf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("FIGColors"),
        a = require/*t*/("Popover"),
        s = require/*t*/("React"),
        l = require/*t*/("ReactGraphQL"),
        u = require/*t*/("ScrollView"),
        c = require/*t*/("SpinnerIOS"),
        p = require/*t*/("StyleSheet"),
        d = require/*t*/("Text"),
        h = require/*t*/("TimeStamp"),
        f = require/*t*/("TouchableBounce"),
        m = require/*t*/("View"),
        g = require/*t*/("clamp"),
        _ = require/*t*/("fbt"),
        y = require/*t*/("keyOf"),
        v = 6,
        S = y({
            popRef: null
        }),
        b = s.createClass({
            displayName: "FBEditHistoryPopover",
            mixins: [l.Mixin],
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
                if (this.queryParams.count > global/*e*/.edges.length) return s.createElement(m, {
                    style: R.seeMore
                }, s.createElement(c, null));
                var requireDynamic/*n*/ = require/*t*/ - global/*e*/.edges.length;
                return s.createElement(f, {
                    key: "more",
                    onPress: this.showMore
                }, s.createElement(m, {
                    key: "more",
                    style: R.seeMore
                }, s.createElement(d, {
                    style: R.seeMoreText
                }, _({
                    type: "text",
                    texts: ["See {more_count} more"],
                    desc: "Button to see more edits"
                }, [_.param("more_count", requireDynamic/*n*/)]))))
            },
            renderList: function() {
                var global/*e*/ = this.props.comment.edit_history_popover,
                    require/*t*/ = this.props.comment.edit_history.count,
                    requireDynamic/*n*/ = g(150, 70 * require/*t*/, 400);
                if (!global/*e*/ || !global/*e*/.edges) return s.createElement(c, {
                    style: {
                        height: requireDynamic/*n*/
                    }
                });
                var requireLazy/*r*/ = [this.renderPaginator()];
                global/*e*/ = global/*e*/.edges;
                for (var module/*i*/ = 0; module/*i*/ < global/*e*/.length; ++module/*i*/) requireLazy/*r*/.push(s.createElement(m, {
                    key: "c" + module/*i*/,
                    style: R.cell
                }, s.createElement(h, {
                    style: R.timestamp,
                    time: global/*e*/[module/*i*/].node.time
                }), s.createElement(d, {
                    style: R.bodyText
                }, global/*e*/[module/*i*/].node.message && global/*e*/[module/*i*/].node.message.text || " "))), requireLazy/*r*/.push(s.createElement(m, {
                    style: R.rowSeparator,
                    key: "s" + module/*i*/
                }));
                return s.createElement(u, {
                    style: {
                        height: requireDynamic/*n*/
                    },
                    contentContainerStyle: R.contentContainer
                }, requireLazy/*r*/)
            },
            renderContent: function() {
                return [s.createElement(m, {
                    key: "header",
                    style: R.header
                }, s.createElement(d, {
                    style: R.headerText
                }, _({
                    type: "text",
                    texts: ["{edit_count} Edits"],
                    desc: "Header of edit history view."
                }, [_.param("edit_count", this.props.comment.edit_history.count)])), s.createElement(f, {
                    onPress: this.close
                }, s.createElement(m, null, s.createElement(d, {
                    style: R.headerText
                }, _({
                    type: "text",
                    texts: ["Close"],
                    desc: "Close button"
                }))))), s.createElement(m, {
                    key: "sep",
                    style: R.rowSeparator
                }), this.renderList()]
            },
            render: function() {
                return s.createElement(a, {
                    ref: S,
                    onDidClose: this.handleDidClose,
                    contentFactory: this.renderContent
                })
            }
        }),
        R = p.create({
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