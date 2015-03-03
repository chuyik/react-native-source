__d("ListView",["ListViewDataSource","React","NativeModules","ScrollView","ScrollResponder","StaticRenderer","TimerMixin","logError","merge","isEmpty"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ListViewDataSource"),
        a = require/*t*/("React"),
        s = require/*t*/("NativeModules").RKUIManager,
        l = require/*t*/("ScrollView"),
        u = require/*t*/("ScrollResponder"),
        c = require/*t*/("StaticRenderer"),
        p = require/*t*/("TimerMixin"),
        d = require/*t*/("logError"),
        h = require/*t*/("merge"),
        f = require/*t*/("isEmpty"),
        m = a.PropTypes,
        g = 1,
        _ = 10,
        y = 1e3,
        v = 1e3,
        S = 50,
        b = 20,
        R = "listviewscroll",
        w = a.createClass({
            displayName: "ListView",
            mixins: [u.Mixin, p],
            propTypes: h(l.PropTypes, {
                dataSource: m.instanceOf(o).isRequired,
                renderRow: m.func.isRequired,
                initialListSize: m.number,
                onEndReached: m.func,
                onEndReachedThreshold: m.number,
                pageSize: m.number,
                renderFooter: m.func,
                renderHeader: m.func,
                renderSectionHeader: m.func,
                scrollRenderAheadDistance: a.PropTypes.number,
                onChangeVisibleRows: a.PropTypes.func,
                removeClippedSubviews: a.PropTypes.bool
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
                for (var global/*e*/ = [], require/*t*/ = this.props.dataSource, requireDynamic/*n*/ = require/*t*/.rowIdentities, requireLazy/*r*/ = 0, module/*i*/ = [], o = this.props.renderHeader && this.props.renderHeader(), s = this.props.renderFooter && this.props.renderFooter(), u = o ? 1 : 0, p = 0; p < requireDynamic/*n*/.length; p++) {
                    var d = require/*t*/.sectionIdentities[p],
                        f = requireDynamic/*n*/[p];
                    if (0 !== f.length) {
                        if (this.props.renderSectionHeader) {
                            var m = requireLazy/*r*/ >= this.state.prevRenderedRowsCount && require/*t*/.sectionHeaderShouldUpdate(p);
                            global/*e*/.push(a.createElement(c, {
                                key: "s_" + d,
                                shouldUpdate: !!m,
                                render: this.props.renderSectionHeader.bind(null, require/*t*/.getSectionHeaderData(p), d)
                            })), module/*i*/.push(u++)
                        }
                        for (var g = 0; g < f.length; g++) {
                            var _ = f[g],
                                y = d + _,
                                v = requireLazy/*r*/ >= this.state.prevRenderedRowsCount && require/*t*/.rowShouldUpdate(p, g),
                                b = a.createElement(c, {
                                    key: "r_" + y,
                                    shouldUpdate: !!v,
                                    render: this.props.renderRow.bind(null, require/*t*/.getRowData(p, g), d, _)
                                });
                            if (global/*e*/.push(b), u++, ++requireLazy/*r*/ === this.state.curRenderedRowsCount) break
                        }
                        if (requireLazy/*r*/ >= this.state.curRenderedRowsCount) break
                    }
                }
                var w = h(this.props, {
                    onScroll: this._onScroll,
                    stickyHeaderIndices: module/*i*/
                });
                return w.throttleScrollCallbackMS || (w.throttleScrollCallbackMS = S), a.createElement(l, Object.assign({}, w, {
                    ref: R
                }), o, global/*e*/, s)
            },
            _measureAndUpdateScrollProps: function() {
                s.measureLayout(this.refs[R].getInnerViewNode(), this.refs[R].getNodeHandle(), d, this._setScrollContentHeight), s.measureLayoutRelativeToParent(this.refs[R].getNodeHandle(), d, this._setScrollVisibleHeight)
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
                        this._childFrames[global/*e*/.index] = h(global/*e*/)
                    }.bind(this));
                    for (var requireDynamic/*n*/ = this.props.dataSource, requireLazy/*r*/ = this.scrollProperties.offsetY, module/*i*/ = requireLazy/*r*/ + this.scrollProperties.visibleHeight, o = requireDynamic/*n*/.rowIdentities, a = this.props.renderHeader && this.props.renderHeader(), s = a ? 1 : 0, l = !1, u = {}, c = 0; c < o.length; c++) {
                        var p = o[c];
                        if (0 !== p.length) {
                            var d = requireDynamic/*n*/.sectionIdentities[c];
                            this.props.renderSectionHeader && s++;
                            var m = this._visibleRows[d];
                            m || (m = {});
                            for (var g = 0; g < p.length; g++) {
                                var _ = p[g],
                                    y = this._childFrames[s];
                                if (s++, !y) break;
                                var v = m[_],
                                    S = y.y,
                                    b = S + y.height;
                                S > module/*i*/ || requireLazy/*r*/ > b ? v && (l = !0, delete m[_], u[d] || (u[d] = {}), u[d][_] = !1) : v || (l = !0, m[_] = !0, u[d] || (u[d] = {}), u[d][_] = !0)
                            }
                            f(m) ? this._visibleRows[d] && delete this._visibleRows[d] : this._visibleRows[d] = m
                        }
                    }
                    l && this.props.onChangeVisibleRows(this._visibleRows, u)
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