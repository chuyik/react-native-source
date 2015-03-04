__d("GraphQLConnectionView",["EdgeInsetsPropType","FBSpinner","Image","React","ReactGraphQL","StyleSheet","ListViewDataSource","ListView","TimerMixin","View","ix","uniqueKey"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        if (null != global/*e*/) {
            for (var require/*t*/ = 0; require/*t*/ < global/*e*/.length; require/*t*/++) global/*e*/[require/*t*/].node.local_id || (global/*e*/[require/*t*/].node.local_id = uniqueKey/*y*/(global/*e*/[require/*t*/].node.id));
            return global/*e*/
        }
    }

    function a(global/*e*/) {
        for (var require/*t*/ = global/*e*/.length - 1, requireDynamic/*n*/ = {}, requireLazy/*r*/ = 0; require/*t*/ >= requireLazy/*r*/; requireLazy/*r*/++) requireDynamic/*n*/[global/*e*/[requireLazy/*r*/].node.local_id] = global/*e*/[requireLazy/*r*/].node;
        return requireDynamic/*n*/
    }
    var EdgeInsetsPropType/*s*/ = require/*t*/("EdgeInsetsPropType"),
        FBSpinner/*l*/ = require/*t*/("FBSpinner"),
        Image/*u*/ = require/*t*/("Image"),
        React/*c*/ = require/*t*/("React"),
        ReactGraphQL/*p*/ = require/*t*/("ReactGraphQL"),
        StyleSheet/*d*/ = require/*t*/("StyleSheet"),
        ListViewDataSource/*h*/ = require/*t*/("ListViewDataSource"),
        ListView/*f*/ = require/*t*/("ListView"),
        TimerMixin/*m*/ = require/*t*/("TimerMixin"),
        View/*g*/ = require/*t*/("View"),
        ix/*_*/ = require/*t*/("ix"),
        uniqueKey/*y*/ = require/*t*/("uniqueKey"),
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
                    connection: function(global/*e*/, require/*t*/) {
                        return function() {
                            var global/*e*/ = require/*t*/.__GraphQL;
                            return new global/*e*/.QueryFragment("GraphQLConnectionView_connection", "NewsFeedConnection", [new global/*e*/.Field("edges", [new global/*e*/.Field("cursor", null, null, null, null, null, {
                                requisite: !0
                            }), new global/*e*/.Field("node", [new global/*e*/.Field("id")], null, null, null, null, {
                                requisite: !0
                            })], null, null, null, null, {
                                plural: !0,
                                edgesID: "GraphQLConnectionView_connection_1"
                            }), new global/*e*/.Field("page_info", [new global/*e*/.Field("has_next_page", null, null, null, null, null, {
                                requisite: !0
                            }), new global/*e*/.Field("has_previous_page", null, null, null, null, null, {
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
                var global/*e*/ = new ListViewDataSource/*h*/({
                    getRowData: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                        return global/*e*/[requireDynamic/*n*/]
                    },
                    getSectionHeaderData: function() {
                        return null
                    },
                    rowHasChanged: function(global/*e*/, require/*t*/) {
                        return global/*e*/ !== require/*t*/
                    },
                    sectionHeaderHasChanged: function() {
                        return !1
                    }
                });
                return {
                    dataSource: global/*e*/,
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
                var global/*e*/ = 0 === this.state.dataSource.getRowCount() ? w.fullScreenLoadingIndicator : w.tailLoadingIndicator;
                return React/*c*/.createElement(FBSpinner/*l*/, {
                    style: global/*e*/
                })
            },
            renderRow: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                return this.props.nodeViewFactory(global/*e*/, this.props.navigator, requireDynamic/*n*/)
            },
            loadMoreIfNeeded: function() {
                if (this.state.hasNextPage && this.state.dataSource.getRowCount() === this.state.queryCount) {
                    var global/*e*/ = this.state.queryCount + this.props.pageSize;
                    this.props.onUpdateQueryCount(global/*e*/), this.setState({
                        queryCount: global/*e*/
                    })
                }
            },
            componentWillReceiveProps: function(global/*e*/) {
                this._initializeDataSource(global/*e*/)
            },
            _initializeDataSource: function(global/*e*/) {
                if (global/*e*/.connection) {
                    var require/*t*/ = o(global/*e*/.connection.edges),
                        requireDynamic/*n*/ = global/*e*/.connection && global/*e*/.connection.page_info && global/*e*/.connection.page_info.has_next_page || !1;
                    if (this.setState({
                            hasNextPage: requireDynamic/*n*/
                        }), this._haveStoriesChanged(global/*e*/)) {
                        var requireLazy/*r*/ = a(require/*t*/),
                            module/*i*/ = ["section"],
                            EdgeInsetsPropType/*s*/ = [];
                        EdgeInsetsPropType/*s*/.push(Object.keys(requireLazy/*r*/));
                        var FBSpinner/*l*/ = this.state.dataSource.cloneWithRowsAndSections(requireLazy/*r*/, module/*i*/, EdgeInsetsPropType/*s*/);
                        this.setState({
                            dataSource: FBSpinner/*l*/
                        }), null === this.state.queryCount && this.setState({
                            queryCount: FBSpinner/*l*/.getRowCount()
                        })
                    }
                }
            },
            _haveStoriesChanged: function(global/*e*/) {
                if (!global/*e*/.connection.edges) return !1;
                if (!this.props.connection || !this.props.connection.edges) return !0;
                var require/*t*/ = global/*e*/.connection.edges,
                    requireDynamic/*n*/ = this.props.connection.edges;
                if (require/*t*/.length !== requireDynamic/*n*/.length) return !0;
                for (var requireLazy/*r*/ = 0; requireLazy/*r*/ < require/*t*/.length; requireLazy/*r*/++)
                    if (require/*t*/[requireLazy/*r*/].node.local_id !== requireDynamic/*n*/[requireLazy/*r*/].node.local_id) return !0;
                var module/*i*/ = this.state.dataSource.getRowCount(),
                    o = global/*e*/.connection.edges.length;
                return module/*i*/ !== o ? !0 : !1
            },
            onScroll: function(global/*e*/) {
                this.refs.newStoriesPill && this.refs.newStoriesPill.onScroll(global/*e*/)
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
    module/*i*/.exports = R
});