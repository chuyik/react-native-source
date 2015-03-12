__d("TouchableHighlight",["NativeMethodsMixin","React","ReactIOSViewAttributes","StyleSheet","TimerMixin","Touchable","View","cloneWithProps","ensureComponentIsNative","keyOf","merge","onlyChild"],function (e, t, n, r, i) {
    "use strict";
    var NativeMethodsMixin/*o*/ = t("NativeMethodsMixin"),
        React/*a*/ = t("React"),
        ReactIOSViewAttributes/*s*/ = t("ReactIOSViewAttributes"),
        StyleSheet/*l*/ = t("StyleSheet"),
        TimerMixin/*u*/ = t("TimerMixin"),
        Touchable/*c*/ = t("Touchable"),
        View/*p*/ = t("View"),
        cloneWithProps/*d*/ = t("cloneWithProps"),
        ensureComponentIsNative/*h*/ = t("ensureComponentIsNative"),
        keyOf/*f*/ = t("keyOf"),
        merge/*m*/ = t("merge"),
        onlyChild/*g*/ = t("onlyChild"),
        _ = {
            activeOpacity: .8,
            underlayColor: "black"
        },
        y = React/*a*/.createClass({
            displayName: "TouchableHighlight",
            propTypes: {
                onPress: React/*a*/.PropTypes.func.isRequired,
                activeOpacity: React/*a*/.PropTypes.number,
                underlayColor: React/*a*/.PropTypes.string,
                style: View/*p*/.stylePropType
            },
            mixins: [NativeMethodsMixin/*o*/, TimerMixin/*u*/, Touchable/*c*/.Mixin],
            getDefaultProps: function() {
                return _
            },
            computeSyntheticState: function(e) {
                return {
                    activeProps: {
                        style: {
                            opacity: e.activeOpacity
                        }
                    },
                    activeUnderlayProps: {
                        style: {
                            backgroundColor: e.underlayColor
                        }
                    },
                    underlayStyle: [w.style, e.style]
                }
            },
            getInitialState: function() {
                return merge/*m*/(this.touchableGetInitialState(), this.computeSyntheticState(this.props))
            },
            componentDidMount: function() {
                ensureComponentIsNative/*h*/(this.refs[S])
            },
            componentDidUpdate: function() {
                ensureComponentIsNative/*h*/(this.refs[S])
            },
            componentWillReceiveProps: function(e) {
                (e.activeOpacity !== this.props.activeOpacity || e.underlayColor !== this.props.underlayColor || e.style !== this.props.style) && this.setState(this.computeSyntheticState(e))
            },
            viewConfig: {
                uiViewClassName: "RCTView",
                validAttributes: ReactIOSViewAttributes/*s*/.RKView
            },
            touchableHandleActivePressIn: function() {
                this.clearTimeout(this._hideTimeout), this._hideTimeout = null, this._showUnderlay()
            },
            touchableHandleActivePressOut: function() {
                this._hideTimeout || this._hideUnderlay()
            },
            touchableHandlePress: function() {
                this.clearTimeout(this._hideTimeout), this._showUnderlay(), this._hideTimeout = this.setTimeout(this._hideUnderlay, 100), this.props.onPress && this.props.onPress()
            },
            touchableGetPressRectOffset: function() {
                return v
            },
            _showUnderlay: function() {
                this.refs[b].setNativeProps(this.state.activeUnderlayProps), this.refs[S].setNativeProps(this.state.activeProps)
            },
            _hideUnderlay: function() {
                this.clearTimeout(this._hideTimeout), this._hideTimeout = null, this.refs[b] && (this.refs[S].setNativeProps(R), this.refs[b].setNativeProps(w))
            },
            render: function() {
                return React/*a*/.createElement(View/*p*/, {
                    ref: b,
                    style: this.state.underlayStyle,
                    onStartShouldSetResponder: this.touchableHandleStartShouldSetResponder,
                    onResponderTerminationRequest: this.touchableHandleResponderTerminationRequest,
                    onResponderGrant: this.touchableHandleResponderGrant,
                    onResponderMove: this.touchableHandleResponderMove,
                    onResponderRelease: this.touchableHandleResponderRelease,
                    onResponderTerminate: this.touchableHandleResponderTerminate
                }, cloneWithProps/*d*/(onlyChild/*g*/(this.props.children), {
                    ref: S,
                    accessible: !0,
                    testID: this.props.testID
                }))
            }
        }),
        v = {
            top: 20,
            left: 20,
            right: 20,
            bottom: 30
        },
        S = keyOf/*f*/({
            childRef: null
        }),
        b = keyOf/*f*/({
            underlayRef: null
        }),
        R = {
            style: StyleSheet/*l*/.create({
                x: {
                    opacity: 1
                }
            }).x
        },
        w = {
            style: StyleSheet/*l*/.create({
                x: {
                    backgroundColor: "transparent"
                }
            }).x
        };
    i.exports = y
});