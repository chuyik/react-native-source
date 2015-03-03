__d("ListView",["ListViewDataSource","React","NativeModules","ScrollView","ScrollResponder","StaticRenderer","TimerMixin","logError","merge","isEmpty"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ListViewDataSource"),
        exports/*a*/ = require/*t*/("React"),
        ListViewDataSource/*s*/ = require/*t*/("NativeModules").RKUIManager,
        React/*l*/ = require/*t*/("ScrollView"),
        NativeModules/*u*/ = require/*t*/("ScrollResponder"),
        ScrollView/*c*/ = require/*t*/("StaticRenderer"),
        ScrollResponder/*p*/ = require/*t*/("TimerMixin"),
        StaticRenderer/*d*/ = require/*t*/("logError"),
        TimerMixin/*h*/ = require/*t*/("merge"),
        logError/*f*/ = require/*t*/("isEmpty"),
        merge/*m*/ = exports/*a*/.PropTypes,
        isEmpty/*g*/ = 1,
        _ = 10,
        y = 1e3,
        v = 1e3,
        S = 50,
        b = 20,
        R = "listviewscroll",
        w = exports/*a*/.createClass({
            displayName: "ListView",
            mixins: [NativeModules/*u*/.Mixin, ScrollResponder/*p*/],
            propTypes: TimerMixin/*h*/(React/*l*/.PropTypes, {
                dataSource: merge/*m*/.instanceOf(o).isRequired,
                renderRow: merge/*m*/.func.isRequired,
                initialListSize: merge/*m*/.number,
                onEndReached: merge/*m*/.func,
                onEndReachedThreshold: merge/*m*/.number,
                pageSize: merge/*m*/.number,
                renderFooter: merge/*m*/.func,
                renderHeader: merge/*m*/.func,
                renderSectionHeader: merge/*m*/.func,
                scrollRenderAheadDistance: exports/*a*/.PropTypes.number,
                onChangeVisibleRows: exports/*a*/.PropTypes.func,
                removeClippedSubviews: exports/*a*/.PropTypes.bool
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
                    pageSize: isEmpty/*g*/,
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
                for (var global/*e*/ = [], require/*t*/ = this.props.dataSource, requireDynamic/*n*/ = require/*t*/.rowIdentities, requireLazy/*r*/ = 0, module/*i*/ = [], o = this.props.renderHeader && this.props.renderHeader(), ListViewDataSource/*s*/ = this.props.renderFooter && this.props.renderFooter(), NativeModules/*u*/ = o ? 1 : 0, ScrollResponder/*p*/ = 0; ScrollResponder/*p*/ < requireDynamic/*n*/.length; ScrollResponder/*p*/++) {
                    var StaticRenderer/*d*/ = require/*t*/.sectionIdentities[ScrollResponder/*p*/],
                        logError/*f*/ = requireDynamic/*n*/[ScrollResponder/*p*/];
                    if (0 !== logError/*f*/.length) {
                        if (this.props.renderSectionHeader) {
                            var merge/*m*/ = requireLazy/*r*/ >= this.state.prevRenderedRowsCount && require/*t*/.sectionHeaderShouldUpdate(ScrollResponder/*p*/);
                            global/*e*/.push(exports/*a*/.createElement(ScrollView/*c*/, {
                                key: "s_" + StaticRenderer/*d*/,
                                shouldUpdate: !!merge/*m*/,
                                render: this.props.renderSectionHeader.bind(null, require/*t*/.getSectionHeaderData(ScrollResponder/*p*/), StaticRenderer/*d*/)
                            })), module/*i*/.push(NativeModules/*u*/++)
                        }
                        for (var isEmpty/*g*/ = 0; isEmpty/*g*/ < logError/*f*/.length; isEmpty/*g*/++) {
                            var _ = logError/*f*/[isEmpty/*g*/],
                                y = StaticRenderer/*d*/ + _,
                                v = requireLazy/*r*/ >= this.state.prevRenderedRowsCount && require/*t*/.rowShouldUpdate(ScrollResponder/*p*/, isEmpty/*g*/),
                                b = exports/*a*/.createElement(ScrollView/*c*/, {
                                    key: "r_" + y,
                                    shouldUpdate: !!v,
                                    render: this.props.renderRow.bind(null, require/*t*/.getRowData(ScrollResponder/*p*/, isEmpty/*g*/), StaticRenderer/*d*/, _)
                                });
                            if (global/*e*/.push(b), NativeModules/*u*/++, ++requireLazy/*r*/ === this.state.curRenderedRowsCount) break
                        }
                        if (requireLazy/*r*/ >= this.state.curRenderedRowsCount) break
                    }
                }
                var w = TimerMixin/*h*/(this.props, {
                    onScroll: this._onScroll,
                    stickyHeaderIndices: module/*i*/
                });
                return w.throttleScrollCallbackMS || (w.throttleScrollCallbackMS = S), exports/*a*/.createElement(React/*l*/, Object.assign({}, w, {
                    ref: R
                }), o, global/*e*/, ListViewDataSource/*s*/)
            },
            _measureAndUpdateScrollProps: function() {
                ListViewDataSource/*s*/.measureLayout(this.refs[R].getInnerViewNode(), this.refs[R].getNodeHandle(), StaticRenderer/*d*/, this._setScrollContentHeight), ListViewDataSource/*s*/.measureLayoutRelativeToParent(this.refs[R].getNodeHandle(), StaticRenderer/*d*/, this._setScrollVisibleHeight)
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
                        this._childFrames[global/*e*/.index] = TimerMixin/*h*/(global/*e*/)
                    }.bind(this));
                    for (var requireDynamic/*n*/ = this.props.dataSource, requireLazy/*r*/ = this.scrollProperties.offsetY, module/*i*/ = requireLazy/*r*/ + this.scrollProperties.visibleHeight, o = requireDynamic/*n*/.rowIdentities, exports/*a*/ = this.props.renderHeader && this.props.renderHeader(), ListViewDataSource/*s*/ = exports/*a*/ ? 1 : 0, React/*l*/ = !1, NativeModules/*u*/ = {}, ScrollView/*c*/ = 0; ScrollView/*c*/ < o.length; ScrollView/*c*/++) {
                        var ScrollResponder/*p*/ = o[ScrollView/*c*/];
                        if (0 !== ScrollResponder/*p*/.length) {
                            var StaticRenderer/*d*/ = requireDynamic/*n*/.sectionIdentities[ScrollView/*c*/];
                            this.props.renderSectionHeader && ListViewDataSource/*s*/++;
                            var merge/*m*/ = this._visibleRows[StaticRenderer/*d*/];
                            merge/*m*/ || (merge/*m*/ = {});
                            for (var isEmpty/*g*/ = 0; isEmpty/*g*/ < ScrollResponder/*p*/.length; isEmpty/*g*/++) {
                                var _ = ScrollResponder/*p*/[isEmpty/*g*/],
                                    y = this._childFrames[ListViewDataSource/*s*/];
                                if (ListViewDataSource/*s*/++, !y) break;
                                var v = merge/*m*/[_],
                                    S = y.y,
                                    b = S + y.height;
                                S > module/*i*/ || requireLazy/*r*/ > b ? v && (React/*l*/ = !0, delete merge/*m*/[_], NativeModules/*u*/[StaticRenderer/*d*/] || (NativeModules/*u*/[StaticRenderer/*d*/] = {}), NativeModules/*u*/[StaticRenderer/*d*/][_] = !1) : v || (React/*l*/ = !0, merge/*m*/[_] = !0, NativeModules/*u*/[StaticRenderer/*d*/] || (NativeModules/*u*/[StaticRenderer/*d*/] = {}), NativeModules/*u*/[StaticRenderer/*d*/][_] = !0)
                            }
                            logError/*f*/(merge/*m*/) ? this._visibleRows[StaticRenderer/*d*/] && delete this._visibleRows[StaticRenderer/*d*/] : this._visibleRows[StaticRenderer/*d*/] = merge/*m*/
                        }
                    }
                    React/*l*/ && this.props.onChangeVisibleRows(this._visibleRows, NativeModules/*u*/)
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