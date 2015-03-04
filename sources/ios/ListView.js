__d("ListView",["ListViewDataSource","React","NativeModules","ScrollView","ScrollResponder","StaticRenderer","TimerMixin","logError","merge","isEmpty"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var ListViewDataSource/*o*/ = require/*t*/("ListViewDataSource"),
        React/*a*/ = require/*t*/("React"),
        NativeModules/*s*/ = require/*t*/("NativeModules").RKUIManager,
        ScrollView/*l*/ = require/*t*/("ScrollView"),
        ScrollResponder/*u*/ = require/*t*/("ScrollResponder"),
        StaticRenderer/*c*/ = require/*t*/("StaticRenderer"),
        TimerMixin/*p*/ = require/*t*/("TimerMixin"),
        logError/*d*/ = require/*t*/("logError"),
        merge/*h*/ = require/*t*/("merge"),
        isEmpty/*f*/ = require/*t*/("isEmpty"),
        m = React/*a*/.PropTypes,
        g = 1,
        _ = 10,
        y = 1e3,
        v = 1e3,
        S = 50,
        b = 20,
        R = "listviewscroll",
        w = React/*a*/.createClass({
            displayName: "ListView",
            mixins: [ScrollResponder/*u*/.Mixin, TimerMixin/*p*/],
            propTypes: merge/*h*/(ScrollView/*l*/.PropTypes, {
                dataSource: m.instanceOf(ListViewDataSource/*o*/).isRequired,
                renderRow: m.func.isRequired,
                initialListSize: m.number,
                onEndReached: m.func,
                onEndReachedThreshold: m.number,
                pageSize: m.number,
                renderFooter: m.func,
                renderHeader: m.func,
                renderSectionHeader: m.func,
                scrollRenderAheadDistance: React/*a*/.PropTypes.number,
                onChangeVisibleRows: React/*a*/.PropTypes.func,
                removeClippedSubviews: React/*a*/.PropTypes.bool
            }),
            getMetrics: function() {
                return {
                    contentHeight: this.scrollProperties.contentHeight,
                    totalRows: this.props.dataSource.getRowCount(),
                    renderedRows: this.state.curRenderedRowsCount,
                    visibleRows: Object.keys(this._visibleRows).length
                }
            },
            getScrollResponder: function() {
                return this.refs[R]
            },
            setNativeProps: function(global/*e*/) {
                this.refs[R].setNativeProps(global/*e*/)
            },
            getDefaultProps: function() {
                return {
                    initialListSize: _,
                    pageSize: g,
                    scrollRenderAheadDistance: y,
                    onEndReachedThreshold: v
                }
            },
            getInitialState: function() {
                return {
                    curRenderedRowsCount: this.props.initialListSize,
                    prevRenderedRowsCount: 0
                }
            },
            componentWillMount: function() {
                this.scrollProperties = {
                    visibleHeight: null,
                    contentHeight: null,
                    offsetY: 0
                }, this._childFrames = [], this._visibleRows = {}
            },
            componentDidMount: function() {
                this.requestAnimationFrame(function() {
                    this._measureAndUpdateScrollProps(), this.setInterval(this._renderMoreRowsIfNeeded, b)
                }.bind(this))
            },
            componentWillReceiveProps: function(global/*e*/) {
                this.props.dataSource !== global/*e*/.dataSource && this.setState({
                    prevRenderedRowsCount: 0
                })
            },
            render: function() {
                for (var global/*e*/ = [], require/*t*/ = this.props.dataSource, requireDynamic/*n*/ = require/*t*/.rowIdentities, requireLazy/*r*/ = 0, module/*i*/ = [], ListViewDataSource/*o*/ = this.props.renderHeader && this.props.renderHeader(), NativeModules/*s*/ = this.props.renderFooter && this.props.renderFooter(), ScrollResponder/*u*/ = ListViewDataSource/*o*/ ? 1 : 0, TimerMixin/*p*/ = 0; TimerMixin/*p*/ < requireDynamic/*n*/.length; TimerMixin/*p*/++) {
                    var logError/*d*/ = require/*t*/.sectionIdentities[TimerMixin/*p*/],
                        isEmpty/*f*/ = requireDynamic/*n*/[TimerMixin/*p*/];
                    if (0 !== isEmpty/*f*/.length) {
                        if (this.props.renderSectionHeader) {
                            var m = requireLazy/*r*/ >= this.state.prevRenderedRowsCount && require/*t*/.sectionHeaderShouldUpdate(TimerMixin/*p*/);
                            global/*e*/.push(React/*a*/.createElement(StaticRenderer/*c*/, {
                                key: "s_" + logError/*d*/,
                                shouldUpdate: !!m,
                                render: this.props.renderSectionHeader.bind(null, require/*t*/.getSectionHeaderData(TimerMixin/*p*/), logError/*d*/)
                            })), module/*i*/.push(ScrollResponder/*u*/++)
                        }
                        for (var g = 0; g < isEmpty/*f*/.length; g++) {
                            var _ = isEmpty/*f*/[g],
                                y = logError/*d*/ + _,
                                v = requireLazy/*r*/ >= this.state.prevRenderedRowsCount && require/*t*/.rowShouldUpdate(TimerMixin/*p*/, g),
                                b = React/*a*/.createElement(StaticRenderer/*c*/, {
                                    key: "r_" + y,
                                    shouldUpdate: !!v,
                                    render: this.props.renderRow.bind(null, require/*t*/.getRowData(TimerMixin/*p*/, g), logError/*d*/, _)
                                });
                            if (global/*e*/.push(b), ScrollResponder/*u*/++, ++requireLazy/*r*/ === this.state.curRenderedRowsCount) break
                        }
                        if (requireLazy/*r*/ >= this.state.curRenderedRowsCount) break
                    }
                }
                var w = merge/*h*/(this.props, {
                    onScroll: this._onScroll,
                    stickyHeaderIndices: module/*i*/
                });
                return w.throttleScrollCallbackMS || (w.throttleScrollCallbackMS = S), React/*a*/.createElement(ScrollView/*l*/, Object.assign({}, w, {
                    ref: R
                }), ListViewDataSource/*o*/, global/*e*/, NativeModules/*s*/)
            },
            _measureAndUpdateScrollProps: function() {
                NativeModules/*s*/.measureLayout(this.refs[R].getInnerViewNode(), this.refs[R].getNodeHandle(), logError/*d*/, this._setScrollContentHeight), NativeModules/*s*/.measureLayoutRelativeToParent(this.refs[R].getNodeHandle(), logError/*d*/, this._setScrollVisibleHeight)
            },
            _setScrollContentHeight: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                this.scrollProperties.contentHeight = requireLazy/*r*/
            },
            _setScrollVisibleHeight: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                this.scrollProperties.visibleHeight = requireLazy/*r*/, this._updateVisibleRows()
            },
            _renderMoreRowsIfNeeded: function() {
                if (null !== this.scrollProperties.contentHeight && null !== this.scrollProperties.visibleHeight && this.state.curRenderedRowsCount !== this.props.dataSource.getRowCount()) {
                    var global/*e*/ = this._getDistanceFromEnd(this.scrollProperties);
                    global/*e*/ < this.props.scrollRenderAheadDistance && this._pageInNewRows()
                }
            },
            _pageInNewRows: function() {
                var global/*e*/ = Math.min(this.state.curRenderedRowsCount + this.props.pageSize, this.props.dataSource.getRowCount());
                this.setState({
                    prevRenderedRowsCount: this.state.curRenderedRowsCount,
                    curRenderedRowsCount: global/*e*/
                }, function() {
                    this._measureAndUpdateScrollProps(), this.setState({
                        prevRenderedRowsCount: this.state.curRenderedRowsCount
                    })
                }.bind(this))
            },
            _getDistanceFromEnd: function(global/*e*/) {
                return global/*e*/.contentHeight - global/*e*/.visibleHeight - global/*e*/.offsetY
            },
            _updateVisibleRows: function(global/*e*/) {
                if (this.props.onChangeVisibleRows) {
                    var require/*t*/ = global/*e*/ && global/*e*/.nativeEvent.updatedChildFrames;
                    require/*t*/ && require/*t*/.forEach(function(global/*e*/) {
                        this._childFrames[global/*e*/.index] = merge/*h*/(global/*e*/)
                    }.bind(this));
                    for (var requireDynamic/*n*/ = this.props.dataSource, requireLazy/*r*/ = this.scrollProperties.offsetY, module/*i*/ = requireLazy/*r*/ + this.scrollProperties.visibleHeight, ListViewDataSource/*o*/ = requireDynamic/*n*/.rowIdentities, React/*a*/ = this.props.renderHeader && this.props.renderHeader(), NativeModules/*s*/ = React/*a*/ ? 1 : 0, ScrollView/*l*/ = !1, ScrollResponder/*u*/ = {}, StaticRenderer/*c*/ = 0; StaticRenderer/*c*/ < ListViewDataSource/*o*/.length; StaticRenderer/*c*/++) {
                        var TimerMixin/*p*/ = ListViewDataSource/*o*/[StaticRenderer/*c*/];
                        if (0 !== TimerMixin/*p*/.length) {
                            var logError/*d*/ = requireDynamic/*n*/.sectionIdentities[StaticRenderer/*c*/];
                            this.props.renderSectionHeader && NativeModules/*s*/++;
                            var m = this._visibleRows[logError/*d*/];
                            m || (m = {});
                            for (var g = 0; g < TimerMixin/*p*/.length; g++) {
                                var _ = TimerMixin/*p*/[g],
                                    y = this._childFrames[NativeModules/*s*/];
                                if (NativeModules/*s*/++, !y) break;
                                var v = m[_],
                                    S = y.y,
                                    b = S + y.height;
                                S > module/*i*/ || requireLazy/*r*/ > b ? v && (ScrollView/*l*/ = !0, delete m[_], ScrollResponder/*u*/[logError/*d*/] || (ScrollResponder/*u*/[logError/*d*/] = {}), ScrollResponder/*u*/[logError/*d*/][_] = !1) : v || (ScrollView/*l*/ = !0, m[_] = !0, ScrollResponder/*u*/[logError/*d*/] || (ScrollResponder/*u*/[logError/*d*/] = {}), ScrollResponder/*u*/[logError/*d*/][_] = !0)
                            }
                            isEmpty/*f*/(m) ? this._visibleRows[logError/*d*/] && delete this._visibleRows[logError/*d*/] : this._visibleRows[logError/*d*/] = m
                        }
                    }
                    ScrollView/*l*/ && this.props.onChangeVisibleRows(this._visibleRows, ScrollResponder/*u*/)
                }
            },
            _onScroll: function(global/*e*/) {
                this.scrollProperties.visibleHeight = global/*e*/.nativeEvent.layoutMeasurement.height, this.scrollProperties.contentHeight = global/*e*/.nativeEvent.contentSize.height, this.scrollProperties.offsetY = global/*e*/.nativeEvent.contentOffset.y, this._updateVisibleRows(global/*e*/);
                var require/*t*/ = this._getDistanceFromEnd(this.scrollProperties) < this.props.onEndReachedThreshold;
                require/*t*/ && this.props.onEndReached && this.scrollProperties.contentHeight !== this._sentEndForContentHeight && this.state.curRenderedRowsCount === this.props.dataSource.getRowCount() ? (this._sentEndForContentHeight = this.scrollProperties.contentHeight, this.props.onEndReached(global/*e*/)) : this._renderMoreRowsIfNeeded(), this.props.onScroll && this.props.onScroll(global/*e*/)
            }
        });
    module/*i*/.exports = w
});