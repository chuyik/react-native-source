__d("ListView",["ListViewDataSource","React","NativeModules","ScrollView","ScrollResponder","StaticRenderer","TimerMixin","logError","merge","isEmpty"],function (e, t, n, r, i) {
    "use strict";
    var ListViewDataSource/*o*/ = t("ListViewDataSource"),
        React/*a*/ = t("React"),
        NativeModules/*s*/ = t("NativeModules").RKUIManager,
        ScrollView/*l*/ = t("ScrollView"),
        ScrollResponder/*u*/ = t("ScrollResponder"),
        StaticRenderer/*c*/ = t("StaticRenderer"),
        TimerMixin/*p*/ = t("TimerMixin"),
        logError/*d*/ = t("logError"),
        merge/*h*/ = t("merge"),
        isEmpty/*f*/ = t("isEmpty"),
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
            setNativeProps: function(e) {
                this.refs[R].setNativeProps(e)
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
            componentWillReceiveProps: function(e) {
                this.props.dataSource !== e.dataSource && this.setState({
                    prevRenderedRowsCount: 0
                })
            },
            render: function() {
                for (var e = [], t = this.props.dataSource, n = t.rowIdentities, r = 0, i = [], ListViewDataSource/*o*/ = this.props.renderHeader && this.props.renderHeader(), NativeModules/*s*/ = this.props.renderFooter && this.props.renderFooter(), ScrollResponder/*u*/ = ListViewDataSource/*o*/ ? 1 : 0, TimerMixin/*p*/ = 0; TimerMixin/*p*/ < n.length; TimerMixin/*p*/++) {
                    var logError/*d*/ = t.sectionIdentities[TimerMixin/*p*/],
                        isEmpty/*f*/ = n[TimerMixin/*p*/];
                    if (0 !== isEmpty/*f*/.length) {
                        if (this.props.renderSectionHeader) {
                            var m = r >= this.state.prevRenderedRowsCount && t.sectionHeaderShouldUpdate(TimerMixin/*p*/);
                            e.push(React/*a*/.createElement(StaticRenderer/*c*/, {
                                key: "s_" + logError/*d*/,
                                shouldUpdate: !!m,
                                render: this.props.renderSectionHeader.bind(null, t.getSectionHeaderData(TimerMixin/*p*/), logError/*d*/)
                            })), i.push(ScrollResponder/*u*/++)
                        }
                        for (var g = 0; g < isEmpty/*f*/.length; g++) {
                            var _ = isEmpty/*f*/[g],
                                y = logError/*d*/ + _,
                                v = r >= this.state.prevRenderedRowsCount && t.rowShouldUpdate(TimerMixin/*p*/, g),
                                b = React/*a*/.createElement(StaticRenderer/*c*/, {
                                    key: "r_" + y,
                                    shouldUpdate: !!v,
                                    render: this.props.renderRow.bind(null, t.getRowData(TimerMixin/*p*/, g), logError/*d*/, _)
                                });
                            if (e.push(b), ScrollResponder/*u*/++, ++r === this.state.curRenderedRowsCount) break
                        }
                        if (r >= this.state.curRenderedRowsCount) break
                    }
                }
                var w = merge/*h*/(this.props, {
                    onScroll: this._onScroll,
                    stickyHeaderIndices: i
                });
                return w.throttleScrollCallbackMS || (w.throttleScrollCallbackMS = S), React/*a*/.createElement(ScrollView/*l*/, Object.assign({}, w, {
                    ref: R
                }), ListViewDataSource/*o*/, e, NativeModules/*s*/)
            },
            _measureAndUpdateScrollProps: function() {
                NativeModules/*s*/.measureLayout(this.refs[R].getInnerViewNode(), this.refs[R].getNodeHandle(), logError/*d*/, this._setScrollContentHeight), NativeModules/*s*/.measureLayoutRelativeToParent(this.refs[R].getNodeHandle(), logError/*d*/, this._setScrollVisibleHeight)
            },
            _setScrollContentHeight: function(e, t, n, r) {
                this.scrollProperties.contentHeight = r
            },
            _setScrollVisibleHeight: function(e, t, n, r) {
                this.scrollProperties.visibleHeight = r, this._updateVisibleRows()
            },
            _renderMoreRowsIfNeeded: function() {
                if (null !== this.scrollProperties.contentHeight && null !== this.scrollProperties.visibleHeight && this.state.curRenderedRowsCount !== this.props.dataSource.getRowCount()) {
                    var e = this._getDistanceFromEnd(this.scrollProperties);
                    e < this.props.scrollRenderAheadDistance && this._pageInNewRows()
                }
            },
            _pageInNewRows: function() {
                var e = Math.min(this.state.curRenderedRowsCount + this.props.pageSize, this.props.dataSource.getRowCount());
                this.setState({
                    prevRenderedRowsCount: this.state.curRenderedRowsCount,
                    curRenderedRowsCount: e
                }, function() {
                    this._measureAndUpdateScrollProps(), this.setState({
                        prevRenderedRowsCount: this.state.curRenderedRowsCount
                    })
                }.bind(this))
            },
            _getDistanceFromEnd: function(e) {
                return e.contentHeight - e.visibleHeight - e.offsetY
            },
            _updateVisibleRows: function(e) {
                if (this.props.onChangeVisibleRows) {
                    var t = e && e.nativeEvent.updatedChildFrames;
                    t && t.forEach(function(e) {
                        this._childFrames[e.index] = merge/*h*/(e)
                    }.bind(this));
                    for (var n = this.props.dataSource, r = this.scrollProperties.offsetY, i = r + this.scrollProperties.visibleHeight, ListViewDataSource/*o*/ = n.rowIdentities, React/*a*/ = this.props.renderHeader && this.props.renderHeader(), NativeModules/*s*/ = React/*a*/ ? 1 : 0, ScrollView/*l*/ = !1, ScrollResponder/*u*/ = {}, StaticRenderer/*c*/ = 0; StaticRenderer/*c*/ < ListViewDataSource/*o*/.length; StaticRenderer/*c*/++) {
                        var TimerMixin/*p*/ = ListViewDataSource/*o*/[StaticRenderer/*c*/];
                        if (0 !== TimerMixin/*p*/.length) {
                            var logError/*d*/ = n.sectionIdentities[StaticRenderer/*c*/];
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
                                S > i || r > b ? v && (ScrollView/*l*/ = !0, delete m[_], ScrollResponder/*u*/[logError/*d*/] || (ScrollResponder/*u*/[logError/*d*/] = {}), ScrollResponder/*u*/[logError/*d*/][_] = !1) : v || (ScrollView/*l*/ = !0, m[_] = !0, ScrollResponder/*u*/[logError/*d*/] || (ScrollResponder/*u*/[logError/*d*/] = {}), ScrollResponder/*u*/[logError/*d*/][_] = !0)
                            }
                            isEmpty/*f*/(m) ? this._visibleRows[logError/*d*/] && delete this._visibleRows[logError/*d*/] : this._visibleRows[logError/*d*/] = m
                        }
                    }
                    ScrollView/*l*/ && this.props.onChangeVisibleRows(this._visibleRows, ScrollResponder/*u*/)
                }
            },
            _onScroll: function(e) {
                this.scrollProperties.visibleHeight = e.nativeEvent.layoutMeasurement.height, this.scrollProperties.contentHeight = e.nativeEvent.contentSize.height, this.scrollProperties.offsetY = e.nativeEvent.contentOffset.y, this._updateVisibleRows(e);
                var t = this._getDistanceFromEnd(this.scrollProperties) < this.props.onEndReachedThreshold;
                t && this.props.onEndReached && this.scrollProperties.contentHeight !== this._sentEndForContentHeight && this.state.curRenderedRowsCount === this.props.dataSource.getRowCount() ? (this._sentEndForContentHeight = this.scrollProperties.contentHeight, this.props.onEndReached(e)) : this._renderMoreRowsIfNeeded(), this.props.onScroll && this.props.onScroll(e)
            }
        });
    i.exports = w
});