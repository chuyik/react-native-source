__d("TouchableHighlight",["NativeMethodsMixin","React","ReactIOSViewAttributes","StyleSheet","TimerMixin","Touchable","View","cloneWithProps","ensureComponentIsNative","keyOf","merge","onlyChild"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("NativeMethodsMixin"),
        a = require/*t*/("React"),
        s = require/*t*/("ReactIOSViewAttributes"),
        l = require/*t*/("StyleSheet"),
        u = require/*t*/("TimerMixin"),
        c = require/*t*/("Touchable"),
        p = require/*t*/("View"),
        d = require/*t*/("cloneWithProps"),
        h = require/*t*/("ensureComponentIsNative"),
        f = require/*t*/("keyOf"),
        m = require/*t*/("merge"),
        g = require/*t*/("onlyChild"),
        _ = {
            activeOpacity: .8,
            underlayColor: "black"
        },
        y = a.createClass({
            displayName: "TouchableHighlight",
            propTypes: {
                onPress: a.PropTypes.func.isRequired,
                activeOpacity: a.PropTypes.number,
                underlayColor: a.PropTypes.string,
                style: p.stylePropType
            },
            mixins: [o, u, c.Mixin],
            getDefaultProps: function() {
                return _
            },
            computeSyntheticState: function(global/*e*/) {
                return {
                    activeProps: {
                        style: {
                            opacity: global/*e*/.activeOpacity
                        }
                    },
                    activeUnderlayProps: {
                        style: {
                            backgroundColor: global/*e*/.underlayColor
                        }
                    },
                    underlayStyle: [w.style, global/*e*/.style]
                }
            },
            getInitialState: function() {
                return m(this.touchableGetInitialState(), this.computeSyntheticState(this.props))
            },
            componentDidMount: function() {
                h(this.refs[S])
            },
            componentDidUpdate: function() {
                h(this.refs[S])
            },
            componentWillReceiveProps: function(global/*e*/) {
                (global/*e*/.activeOpacity !== this.props.activeOpacity || global/*e*/.underlayColor !== this.props.underlayColor || global/*e*/.style !== this.props.style) && this.setState(this.computeSyntheticState(global/*e*/))
            },
            viewConfig: {
                uiViewClassName: "RCTView",
                validAttributes: s.RKView
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
                return a.createElement(p, {
                    ref: b,
                    style: this.state.underlayStyle,
                    onStartShouldSetResponder: this.touchableHandleStartShouldSetResponder,
                    onResponderTerminationRequest: this.touchableHandleResponderTerminationRequest,
                    onResponderGrant: this.touchableHandleResponderGrant,
                    onResponderMove: this.touchableHandleResponderMove,
                    onResponderRelease: this.touchableHandleResponderRelease,
                    onResponderTerminate: this.touchableHandleResponderTerminate
                }, d(g(this.props.children), {
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
        S = f({
            childRef: null
        }),
        b = f({
            underlayRef: null
        }),
        R = {
            style: l.create({
                x: {
                    opacity: 1
                }
            }).x
        },
        w = {
            style: l.create({
                x: {
                    backgroundColor: "transparent"
                }
            }).x
        };
    module/*i*/.exports = y
});