__d("DliteLoadingComponent",["Dlite","FBSpinner","React","StyleSheet","StyleSheetPropType","TimerMixin","View","emptyFunction","keyMirror","merge","performanceNow"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("Dlite"),
        a = require/*t*/("FBSpinner"),
        s = require/*t*/("React"),
        l = require/*t*/("StyleSheet"),
        u = require/*t*/("StyleSheetPropType"),
        c = require/*t*/("TimerMixin"),
        p = require/*t*/("View"),
        d = require/*t*/("emptyFunction"),
        h = require/*t*/("keyMirror"),
        f = require/*t*/("merge"),
        m = (require/*t*/("performanceNow"), h({
            LOADING: null,
            READY: null,
            ERROR: null
        })),
        g = l.create({
            spinner: {
                alignItems: "center",
                paddingTop: 200
            }
        }),
        _ = s.createClass({
            displayName: "DliteLoadingComponent",
            mixins: [c],
            propTypes: {
                loadingView: s.PropTypes.component,
                failedView: s.PropTypes.component,
                refetchRoute: s.PropTypes.bool,
                onComponentRef: s.PropTypes.func,
                onFailure: s.PropTypes.func,
                onResolvable: s.PropTypes.func,
                onBlockingRequest: s.PropTypes.func,
                onSuccess: s.PropTypes.func,
                passProps: s.PropTypes.object,
                style: u,
                navigator: s.PropTypes.object,
                navigationOperations: s.PropTypes.object
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
                    loadingView: s.createElement(p, {
                        style: g.spinner
                    }, s.createElement(a, null)),
                    refetchRoute: !1,
                    onComponentRef: d,
                    onFailure: d,
                    onResolvable: d,
                    onBlockingRequest: d,
                    onSuccess: d
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
                this.pendingQuery && this.pendingQuery.abort(), this.pendingQuery = o.createAndExecuteQueries(this.props.component, this.props.route, {
                    refetch: !0
                }, global/*e*/ || {})
            },
            _onComponentRef: function(global/*e*/) {
                this._component = global/*e*/, this.props.onComponentRef(this._component)
            },
            render: function() {
                var global/*e*/, require/*t*/ = this.props.component,
                    requireDynamic/*n*/ = f({
                        navigator: this.props.navigationOperations || this.props.navigator,
                        forceUpdate: this._reloadDataForChild
                    }, this.props.passProps),
                    requireLazy/*r*/ = this._onComponentRef;
                return global/*e*/ = this.state.loadingState === m.LOADING ? this.props.loadingView : this.state.loadingState === m.ERROR ? this.props.failedView : o.createComponent(require/*t*/, this.props.route, requireDynamic/*n*/, requireLazy/*r*/), s.createElement(p, {
                    style: this.props.style
                }, global/*e*/)
            }
        });
    module/*i*/.exports = _
});