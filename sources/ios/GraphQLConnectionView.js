__d("GraphQLConnectionView",["EdgeInsetsPropType","FBSpinner","Image","React","ReactGraphQL","StyleSheet","ListViewDataSource","ListView","TimerMixin","View","ix","uniqueKey"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        if (null != e) {
            for (var t = 0; t < e.length; t++) e[t].node.local_id || (e[t].node.local_id = uniqueKey/*y*/(e[t].node.id));
            return e
        }
    }

    function a(e) {
        for (var t = e.length - 1, n = {}, r = 0; t >= r; r++) n[e[r].node.local_id] = e[r].node;
        return n
    }
    var EdgeInsetsPropType/*s*/ = t("EdgeInsetsPropType"),
        FBSpinner/*l*/ = t("FBSpinner"),
        Image/*u*/ = t("Image"),
        React/*c*/ = t("React"),
        ReactGraphQL/*p*/ = t("ReactGraphQL"),
        StyleSheet/*d*/ = t("StyleSheet"),
        ListViewDataSource/*h*/ = t("ListViewDataSource"),
        ListView/*f*/ = t("ListView"),
        TimerMixin/*m*/ = t("TimerMixin"),
        View/*g*/ = t("View"),
        ix/*_*/ = t("ix"),
        uniqueKey/*y*/ = t("uniqueKey"),
        v = {
            top: 0
        },
        S = 5,
        b = 1,
        R = React/*c*/.createClass({
            displayName: "GraphQLConnectionView",
            propTypes: {
                nodeViewFactory: React/*c*/.PropTypes.func.isRequired,
                connection: React/*c*/.PropTypes.object.isRequired,
                navigator: React/*c*/.PropTypes.object.isRequired,
                onUpdateQueryCount: React/*c*/.PropTypes.func.isRequired,
                style: View/*g*/.stylePropType,
                newStoriesPillFactory: React/*c*/.PropTypes.func,
                tableHeaderViewFactory: React/*c*/.PropTypes.func,
                maxExpandBy: React/*c*/.PropTypes.number,
                pageSize: React/*c*/.PropTypes.number,
                contentInset: EdgeInsetsPropType/*s*/,
                suppressEndDot: React/*c*/.PropTypes.bool,
                automaticallyAdjustContentInsets: React/*c*/.PropTypes.bool,
                renderAheadDistance: React/*c*/.PropTypes.number
            },
            getDefaultProps: function() {
                return {
                    pageSize: 10,
                    renderAheadDistance: 1e3,
                    newStoriesPillFactory: function() {
                        return null
                    },
                    tableHeaderViewFactory: function() {
                        return null
                    },
                    contentInset: v,
                    suppressEndDot: !1
                }
            },
            mixins: [ReactGraphQL/*p*/.Mixin, TimerMixin/*m*/],
            statics: {
                queries: {
                    connection: function(e, t) {
                        return function() {
                            var e = t.__GraphQL;
                            return new e.QueryFragment("GraphQLConnectionView_connection", "NewsFeedConnection", [new e.Field("edges", [new e.Field("cursor", null, null, null, null, null, {
                                requisite: !0
                            }), new e.Field("node", [new e.Field("id")], null, null, null, null, {
                                requisite: !0
                            })], null, null, null, null, {
                                plural: !0,
                                edgesID: "GraphQLConnectionView_connection_1"
                            }), new e.Field("page_info", [new e.Field("has_next_page", null, null, null, null, null, {
                                requisite: !0
                            }), new e.Field("has_previous_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })])], null, {
                                scope: "GraphQLConnectionView_connection"
                            })
                        }()
                    }
                }
            },
            getInitialState: function() {
                var e = new ListViewDataSource/*h*/({
                    getRowData: function(e, t, n) {
                        return e[n]
                    },
                    getSectionHeaderData: function() {
                        return null
                    },
                    rowHasChanged: function(e, t) {
                        return e !== t
                    },
                    sectionHeaderHasChanged: function() {
                        return !1
                    }
                });
                return {
                    dataSource: e,
                    queryCount: null,
                    hasNextPage: !0
                }
            },
            componentDidMount: function() {
                this._initializeDataSource(this.props)
            },
            renderHeader: function() {
                return this.props.tableHeaderViewFactory()
            },
            renderFooter: function() {
                if (!this.state.hasNextPage) return this.props.suppressEndDot ? React/*c*/.createElement(View/*g*/, null) : React/*c*/.createElement(View/*g*/, {
                    style: w.endDotContainer
                }, React/*c*/.createElement(Image/*u*/, {
                    style: w.endDot,
                    source: ix/*_*/("newsfeedEnd")
                }));
                var e = 0 === this.state.dataSource.getRowCount() ? w.fullScreenLoadingIndicator : w.tailLoadingIndicator;
                return React/*c*/.createElement(FBSpinner/*l*/, {
                    style: e
                })
            },
            renderRow: function(e, t, n) {
                return this.props.nodeViewFactory(e, this.props.navigator, n)
            },
            loadMoreIfNeeded: function() {
                if (this.state.hasNextPage && this.state.dataSource.getRowCount() === this.state.queryCount) {
                    var e = this.state.queryCount + this.props.pageSize;
                    this.props.onUpdateQueryCount(e), this.setState({
                        queryCount: e
                    })
                }
            },
            componentWillReceiveProps: function(e) {
                this._initializeDataSource(e)
            },
            _initializeDataSource: function(e) {
                if (e.connection) {
                    var t = o(e.connection.edges),
                        n = e.connection && e.connection.page_info && e.connection.page_info.has_next_page || !1;
                    if (this.setState({
                            hasNextPage: n
                        }), this._haveStoriesChanged(e)) {
                        var r = a(t),
                            i = ["section"],
                            EdgeInsetsPropType/*s*/ = [];
                        EdgeInsetsPropType/*s*/.push(Object.keys(r));
                        var FBSpinner/*l*/ = this.state.dataSource.cloneWithRowsAndSections(r, i, EdgeInsetsPropType/*s*/);
                        this.setState({
                            dataSource: FBSpinner/*l*/
                        }), null === this.state.queryCount && this.setState({
                            queryCount: FBSpinner/*l*/.getRowCount()
                        })
                    }
                }
            },
            _haveStoriesChanged: function(e) {
                if (!e.connection.edges) return !1;
                if (!this.props.connection || !this.props.connection.edges) return !0;
                var t = e.connection.edges,
                    n = this.props.connection.edges;
                if (t.length !== n.length) return !0;
                for (var r = 0; r < t.length; r++)
                    if (t[r].node.local_id !== n[r].node.local_id) return !0;
                var i = this.state.dataSource.getRowCount(),
                    o = e.connection.edges.length;
                return i !== o ? !0 : !1
            },
            onScroll: function(e) {
                this.refs.newStoriesPill && this.refs.newStoriesPill.onScroll(e)
            },
            getListViewRef: function() {
                return this.refs.listView
            },
            render: function() {
                return React/*c*/.createElement(ListView/*f*/, {
                    ref: "listView",
                    style: this.props.style,
                    dataSource: this.state.dataSource,
                    renderHeader: this.renderHeader,
                    renderFooter: this.renderFooter,
                    renderRow: this.renderRow,
                    initialListSize: S,
                    pageSize: b,
                    onEndReached: this.loadMoreIfNeeded,
                    onEndReachedThreshold: this.props.renderAheadDistance,
                    onScroll: this.props.onScroll,
                    automaticallyAdjustContentInsets: this.props.automaticallyAdjustContentInsets,
                    contentInset: this.props.contentInset,
                    scrollIndicatorInsets: this.props.contentInset
                })
            }
        }),
        w = StyleSheet/*d*/.create({
            fullScreenLoadingIndicator: {
                height: 210,
                justifyContent: "flex-end",
                alignItems: "center"
            },
            tailLoadingIndicator: {
                height: 44,
                paddingTop: 6,
                justifyContent: "center",
                alignItems: "center"
            },
            endDot: {
                width: 10,
                height: 10,
                marginVertical: 10
            },
            endDotContainer: {
                justifyContent: "center",
                alignItems: "center"
            }
        });
    i.exports = R
});