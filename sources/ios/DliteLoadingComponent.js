__d("DliteLoadingComponent",["Dlite","FBSpinner","React","StyleSheet","StyleSheetPropType","TimerMixin","View","emptyFunction","keyMirror","merge","performanceNow"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var Dlite/*o*/ = require/*t*/("Dlite"),
        FBSpinner/*a*/ = require/*t*/("FBSpinner"),
        React/*s*/ = require/*t*/("React"),
        StyleSheet/*l*/ = require/*t*/("StyleSheet"),
        StyleSheetPropType/*u*/ = require/*t*/("StyleSheetPropType"),
        TimerMixin/*c*/ = require/*t*/("TimerMixin"),
        View/*p*/ = require/*t*/("View"),
        emptyFunction/*d*/ = require/*t*/("emptyFunction"),
        keyMirror/*h*/ = require/*t*/("keyMirror"),
        merge/*f*/ = require/*t*/("merge"),
        m = (require/*t*/("performanceNow"), keyMirror/*h*/({
            LOADING: null,
            READY: null,
            ERROR: null
        })),
        g = StyleSheet/*l*/.create({
            spinner: {
                alignItems: "center",
                paddingTop: 200
            }
        }),
        _ = React/*s*/.createClass({
            displayName: "DliteLoadingComponent",
            mixins: [TimerMixin/*c*/],
            propTypes: {
                loadingView: React/*s*/.PropTypes.component,
                failedView: React/*s*/.PropTypes.component,
                refetchRoute: React/*s*/.PropTypes.bool,
                onComponentRef: React/*s*/.PropTypes.func,
                onFailure: React/*s*/.PropTypes.func,
                onResolvable: React/*s*/.PropTypes.func,
                onBlockingRequest: React/*s*/.PropTypes.func,
                onSuccess: React/*s*/.PropTypes.func,
                passProps: React/*s*/.PropTypes.object,
                style: StyleSheetPropType/*u*/,
                navigator: React/*s*/.PropTypes.object,
                navigationOperations: React/*s*/.PropTypes.object
            },
            getComponent: function() {
                return this._component
            },
            reload: function() {
                this.setState({
                    loadingState: m.LOADING
                }), this._runQueries(this.props)
            },
            getInitialState: function() {
                return {
                    loadingState: m.LOADING
                }
            },
            getDefaultProps: function() {
                return {
                    loadingView: React/*s*/.createElement(View/*p*/, {
                        style: g.spinner
                    }, React/*s*/.createElement(FBSpinner/*a*/, null)),
                    refetchRoute: !1,
                    onComponentRef: emptyFunction/*d*/,
                    onFailure: emptyFunction/*d*/,
                    onResolvable: emptyFunction/*d*/,
                    onBlockingRequest: emptyFunction/*d*/,
                    onSuccess: emptyFunction/*d*/
                }
            },
            shouldComponentUpdate: function(global/*e*/, require/*t*/) {
                return require/*t*/.loadingState !== this.state.loadingState || global/*e*/.style !== this.props.style || global/*e*/.passProps !== this.props.passProps
            },
            componentWillReceiveProps: function(global/*e*/) {
                this.props.route !== global/*e*/.route && (this.setState({
                    loadingState: m.LOADING
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
                this.pendingQuery && this.pendingQuery.abort(), this.pendingQuery = Dlite/*o*/.createAndExecuteQueries(require/*t*/, global/*e*/.route, requireDynamic/*n*/, {
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
                    loadingState: m.READY
                }))
            },
            _onSuccess: function(global/*e*/) {
                this.pendingQuery = null;
                var require/*t*/ = global/*e*/.route;
                this.isMounted() && require/*t*/ === this.props.route && (this.props.onSuccess(), this.setState({
                    loadingState: m.READY
                }))
            },
            _onFailure: function(global/*e*/, require/*t*/) {
                this.pendingQuery = null;
                var requireDynamic/*n*/ = global/*e*/.route;
                this.isMounted() && requireDynamic/*n*/ === this.props.route && (this.props.onFailure(require/*t*/), this.setState({
                    loadingState: m.ERROR
                }))
            },
            _reloadDataForChild: function(global/*e*/) {
                this.pendingQuery && this.pendingQuery.abort(), this.pendingQuery = Dlite/*o*/.createAndExecuteQueries(this.props.component, this.props.route, {
                    refetch: !0
                }, global/*e*/ || {})
            },
            _onComponentRef: function(global/*e*/) {
                this._component = global/*e*/, this.props.onComponentRef(this._component)
            },
            render: function() {
                var global/*e*/, require/*t*/ = this.props.component,
                    requireDynamic/*n*/ = merge/*f*/({
                        navigator: this.props.navigationOperations || this.props.navigator,
                        forceUpdate: this._reloadDataForChild
                    }, this.props.passProps),
                    requireLazy/*r*/ = this._onComponentRef;
                return global/*e*/ = this.state.loadingState === m.LOADING ? this.props.loadingView : this.state.loadingState === m.ERROR ? this.props.failedView : Dlite/*o*/.createComponent(require/*t*/, this.props.route, requireDynamic/*n*/, requireLazy/*r*/), React/*s*/.createElement(View/*p*/, {
                    style: this.props.style
                }, global/*e*/)
            }
        });
    module/*i*/.exports = _
});