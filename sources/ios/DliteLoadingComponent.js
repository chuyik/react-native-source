__d("DliteLoadingComponent",["Dlite","FBSpinner","React","StyleSheet","StyleSheetPropType","TimerMixin","View","emptyFunction","keyMirror","merge","performanceNow"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("Dlite"),
        exports/*a*/ = require/*t*/("FBSpinner"),
        Dlite/*s*/ = require/*t*/("React"),
        FBSpinner/*l*/ = require/*t*/("StyleSheet"),
        React/*u*/ = require/*t*/("StyleSheetPropType"),
        StyleSheet/*c*/ = require/*t*/("TimerMixin"),
        StyleSheetPropType/*p*/ = require/*t*/("View"),
        TimerMixin/*d*/ = require/*t*/("emptyFunction"),
        View/*merge/*h*/*/ = require/*t*/("keyMirror"),
        emptyFunction/*f*/ = require/*t*/("merge"),
        keyMirror/*m*/ = (require/*t*/("performanceNow"), View/*merge/*h*/*/({
            LOADING: null,
            performanceNow/*READY*/: null,
            ERROR: null
        })),
        g = FBSpinner/*l*/.create({
            spinner: {
                alignItems: "center",
                paddingTop: 200
            }
        }),
        _ = Dlite/*s*/.createClass({
            displayName: "DliteLoadingComponent",
            mixins: [StyleSheet/*c*/],
            propTypes: {
                loadingView: Dlite/*s*/.PropTypes.component,
                failedView: Dlite/*s*/.PropTypes.component,
                refetchRoute: Dlite/*s*/.PropTypes.bool,
                onComponentRef: Dlite/*s*/.PropTypes.func,
                onFailure: Dlite/*s*/.PropTypes.func,
                onResolvable: Dlite/*s*/.PropTypes.func,
                onBlockingRequest: Dlite/*s*/.PropTypes.func,
                onSuccess: Dlite/*s*/.PropTypes.func,
                passProps: Dlite/*s*/.PropTypes.object,
                style: React/*u*/,
                navigator: Dlite/*s*/.PropTypes.object,
                navigationOperations: Dlite/*s*/.PropTypes.object
            },
            getComponent: function() {
                return this._component
            },
            reload: function() {
                this.setState({
                    loadingState: keyMirror/*m*/.LOADING
                }), this._runQueries(this.props)
            },
            getInitialState: function() {
                return {
                    loadingState: keyMirror/*m*/.LOADING
                }
            },
            getDefaultProps: function() {
                return {
                    loadingView: Dlite/*s*/.createElement(StyleSheetPropType/*p*/, {
                        style: g.spinner
                    }, Dlite/*s*/.createElement(exports/*a*/, null)),
                    refetchRoute: !1,
                    onComponentRef: TimerMixin/*d*/,
                    onFailure: TimerMixin/*d*/,
                    onResolvable: TimerMixin/*d*/,
                    onBlockingRequest: TimerMixin/*d*/,
                    onSuccess: TimerMixin/*d*/
                }
            },
            shouldComponentUpdate: function(global/*e*/, require/*t*/) {
                return require/*t*/.loadingState !== this.state.loadingState || global/*e*/.style !== this.props.style || global/*e*/.passProps !== this.props.passProps
            },
            componentWillReceiveProps: function(global/*e*/) {
                this.props.route !== global/*e*/.route && (this.setState({
                    loadingState: keyMirror/*m*/.LOADING
                }), this._runQueries(global/*e*/))
            },
            componentWillMount: function() {
                this._runQueries(this.props)
            },
            componentWillUnmount: function() {
                this.pendingQuery && (this.pendingQuery.abort(), this.pendingQuery = null)
            },
            _runQueries: function(global/*e*/) {
                var require/*t*/ = global/*e*/.component,
                    requireDynamic/*n*/ = {
                        refetch: global/*e*/.refetchRoute
                    };
                this.pendingQuery && this.pendingQuery.abort(), this.pendingQuery = o.createAndExecuteQueries(require/*t*/, global/*e*/.route, requireDynamic/*n*/, {
                    onResolvable: this._onResolvable.bind(this, global/*e*/),
                    onSuccess: this._onSuccess.bind(this, global/*e*/),
                    onFailure: this._onFailure.bind(this, global/*e*/),
                    onBlockingRequest: this._onBlockingRequest.bind(this, global/*e*/)
                })
            },
            _onBlockingRequest: function(global/*e*/) {
                var require/*t*/ = global/*e*/.route;
                this.isMounted() && require/*t*/ === this.props.route && this.props.onBlockingRequest()
            },
            _onResolvable: function(global/*e*/) {
                var require/*t*/ = global/*e*/.route;
                this.isMounted() && require/*t*/ === this.props.route && (this.props.onResolvable(), this.setState({
                    loadingState: keyMirror/*m*/.performanceNow/*READY*/
                }))
            },
            _onSuccess: function(global/*e*/) {
                this.pendingQuery = null;
                var require/*t*/ = global/*e*/.route;
                this.isMounted() && require/*t*/ === this.props.route && (this.props.onSuccess(), this.setState({
                    loadingState: keyMirror/*m*/.performanceNow/*READY*/
                }))
            },
            _onFailure: function(global/*e*/, require/*t*/) {
                this.pendingQuery = null;
                var requireDynamic/*n*/ = global/*e*/.route;
                this.isMounted() && requireDynamic/*n*/ === this.props.route && (this.props.onFailure(require/*t*/), this.setState({
                    loadingState: keyMirror/*m*/.ERROR
                }))
            },
            _reloadDataForChild: function(global/*e*/) {
                this.pendingQuery && this.pendingQuery.abort(), this.pendingQuery = o.createAndExecuteQueries(this.props.component, this.props.route, {
                    refetch: !0
                }, global/*e*/ || {})
            },
            _onComponentRef: function(global/*e*/) {
                this._component = global/*e*/, this.props.onComponentRef(this._component)
            },
            render: function() {
                var global/*e*/, require/*t*/ = this.props.component,
                    requireDynamic/*n*/ = emptyFunction/*f*/({
                        navigator: this.props.navigationOperations || this.props.navigator,
                        forceUpdate: this._reloadDataForChild
                    }, this.props.passProps),
                    requireLazy/*r*/ = this._onComponentRef;
                return global/*e*/ = this.state.loadingState === keyMirror/*m*/.LOADING ? this.props.loadingView : this.state.loadingState === keyMirror/*m*/.ERROR ? this.props.failedView : o.createComponent(require/*t*/, this.props.route, requireDynamic/*n*/, requireLazy/*r*/), Dlite/*s*/.createElement(StyleSheetPropType/*p*/, {
                    style: this.props.style
                }, global/*e*/)
            }
        });
    module/*i*/.exports = _
});