__d("TouchableHighlight",["NativeMethodsMixin","React","ReactIOSViewAttributes","StyleSheet","TimerMixin","Touchable","View","cloneWithProps","ensureComponentIsNative","keyOf","merge","onlyChild"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var NativeMethodsMixin/*o*/ = require/*t*/("NativeMethodsMixin"),
        React/*a*/ = require/*t*/("React"),
        ReactIOSViewAttributes/*s*/ = require/*t*/("ReactIOSViewAttributes"),
        StyleSheet/*l*/ = require/*t*/("StyleSheet"),
        TimerMixin/*u*/ = require/*t*/("TimerMixin"),
        Touchable/*c*/ = require/*t*/("Touchable"),
        View/*p*/ = require/*t*/("View"),
        cloneWithProps/*d*/ = require/*t*/("cloneWithProps"),
        ensureComponentIsNative/*h*/ = require/*t*/("ensureComponentIsNative"),
        keyOf/*f*/ = require/*t*/("keyOf"),
        merge/*m*/ = require/*t*/("merge"),
        onlyChild/*g*/ = require/*t*/("onlyChild"),
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
                return merge/*m*/(this.touchableGetInitialState(), this.computeSyntheticState(this.props))
            },
            componentDidMount: function() {
                ensureComponentIsNative/*h*/(this.refs[S])
            },
            componentDidUpdate: function() {
                ensureComponentIsNative/*h*/(this.refs[S])
            },
            componentWillReceiveProps: function(global/*e*/) {
                (global/*e*/.activeOpacity !== this.props.activeOpacity || global/*e*/.underlayColor !== this.props.underlayColor || global/*e*/.style !== this.props.style) && this.setState(this.computeSyntheticState(global/*e*/))
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
    module/*i*/.exports = y
});