__d("DliteLoadingComponent",["Dlite","FBSpinner","React","StyleSheet","StyleSheetPropType","TimerMixin","View","emptyFunction","keyMirror","merge","performanceNow"],function (e, t, n, r, i) {
    "use strict";
    var Dlite/*o*/ = t("Dlite"),
        FBSpinner/*a*/ = t("FBSpinner"),
        React/*s*/ = t("React"),
        StyleSheet/*l*/ = t("StyleSheet"),
        StyleSheetPropType/*u*/ = t("StyleSheetPropType"),
        TimerMixin/*c*/ = t("TimerMixin"),
        View/*p*/ = t("View"),
        emptyFunction/*d*/ = t("emptyFunction"),
        keyMirror/*h*/ = t("keyMirror"),
        merge/*f*/ = t("merge"),
        m = (t("performanceNow"), keyMirror/*h*/({
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
            shouldComponentUpdate: function(e, t) {
                return t.loadingState !== this.state.loadingState || e.style !== this.props.style || e.passProps !== this.props.passProps
            },
            componentWillReceiveProps: function(e) {
                this.props.route !== e.route && (this.setState({
                    loadingState: m.LOADING
                }), this._runQueries(e))
            },
            componentWillMount: function() {
                this._runQueries(this.props)
            },
            componentWillUnmount: function() {
                this.pendingQuery && (this.pendingQuery.abort(), this.pendingQuery = null)
            },
            _runQueries: function(e) {
                var t = e.component,
                    n = {
                        refetch: e.refetchRoute
                    };
                this.pendingQuery && this.pendingQuery.abort(), this.pendingQuery = Dlite/*o*/.createAndExecuteQueries(t, e.route, n, {
                    onResolvable: this._onResolvable.bind(this, e),
                    onSuccess: this._onSuccess.bind(this, e),
                    onFailure: this._onFailure.bind(this, e),
                    onBlockingRequest: this._onBlockingRequest.bind(this, e)
                })
            },
            _onBlockingRequest: function(e) {
                var t = e.route;
                this.isMounted() && t === this.props.route && this.props.onBlockingRequest()
            },
            _onResolvable: function(e) {
                var t = e.route;
                this.isMounted() && t === this.props.route && (this.props.onResolvable(), this.setState({
                    loadingState: m.READY
                }))
            },
            _onSuccess: function(e) {
                this.pendingQuery = null;
                var t = e.route;
                this.isMounted() && t === this.props.route && (this.props.onSuccess(), this.setState({
                    loadingState: m.READY
                }))
            },
            _onFailure: function(e, t) {
                this.pendingQuery = null;
                var n = e.route;
                this.isMounted() && n === this.props.route && (this.props.onFailure(t), this.setState({
                    loadingState: m.ERROR
                }))
            },
            _reloadDataForChild: function(e) {
                this.pendingQuery && this.pendingQuery.abort(), this.pendingQuery = Dlite/*o*/.createAndExecuteQueries(this.props.component, this.props.route, {
                    refetch: !0
                }, e || {})
            },
            _onComponentRef: function(e) {
                this._component = e, this.props.onComponentRef(this._component)
            },
            render: function() {
                var e, t = this.props.component,
                    n = merge/*f*/({
                        navigator: this.props.navigationOperations || this.props.navigator,
                        forceUpdate: this._reloadDataForChild
                    }, this.props.passProps),
                    r = this._onComponentRef;
                return e = this.state.loadingState === m.LOADING ? this.props.loadingView : this.state.loadingState === m.ERROR ? this.props.failedView : Dlite/*o*/.createComponent(t, this.props.route, n, r), React/*s*/.createElement(View/*p*/, {
                    style: this.props.style
                }, e)
            }
        });
    i.exports = _
});