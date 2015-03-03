__d("TouchableHighlight",["NativeMethodsMixin","React","ReactIOSViewAttributes","StyleSheet","TimerMixin","Touchable","View","cloneWithProps","ensureComponentIsNative","keyOf","merge","onlyChild"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("NativeMethodsMixin"),
        exports/*a*/ = require/*t*/("React"),
        NativeMethodsMixin/*s*/ = require/*t*/("ReactIOSViewAttributes"),
        React/*l*/ = require/*t*/("StyleSheet"),
        ReactIOSViewAttributes/*u*/ = require/*t*/("TimerMixin"),
        StyleSheet/*c*/ = require/*t*/("Touchable"),
        TimerMixin/*p*/ = require/*t*/("View"),
        Touchable/*d*/ = require/*t*/("cloneWithProps"),
        View/*h*/ = require/*t*/("ensureComponentIsNative"),
        cloneWithProps/*f*/ = require/*t*/("keyOf"),
        ensureComponentIsNative/*m*/ = require/*t*/("merge"),
        keyOf/*g*/ = require/*t*/("onlyChild"),
        merge/*_*/ = {
            activeOpacity: .8,
            onlyChild/*underlayColor*/: "black"
        },
        y = exports/*a*/.createClass({
            displayName: "TouchableHighlight",
            propTypes: {
                onPress: exports/*a*/.PropTypes.func.isRequired,
                activeOpacity: exports/*a*/.PropTypes.number,
                onlyChild/*underlayColor*/: exports/*a*/.PropTypes.string,
                style: TimerMixin/*p*/.stylePropType
            },
            mixins: [o, ReactIOSViewAttributes/*u*/, StyleSheet/*c*/.Mixin],
            getDefaultProps: function() {
                return merge/*_*/
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
                            backgroundColor: global/*e*/.onlyChild/*underlayColor*/
                        }
                    },
                    underlayStyle: [w.style, global/*e*/.style]
                }
            },
            getInitialState: function() {
                return ensureComponentIsNative/*m*/(this.touchableGetInitialState(), this.computeSyntheticState(this.props))
            },
            componentDidMount: function() {
                View/*h*/(this.refs[S])
            },
            componentDidUpdate: function() {
                View/*h*/(this.refs[S])
            },
            componentWillReceiveProps: function(global/*e*/) {
                (global/*e*/.activeOpacity !== this.props.activeOpacity || global/*e*/.onlyChild/*underlayColor*/ !== this.props.onlyChild/*underlayColor*/ || global/*e*/.style !== this.props.style) && this.setState(this.computeSyntheticState(global/*e*/))
            },
            viewConfig: {
                uiViewClassName: "RCTView",
                validAttributes: NativeMethodsMixin/*s*/.RKView
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
                return exports/*a*/.createElement(TimerMixin/*p*/, {
                    ref: b,
                    style: this.state.underlayStyle,
                    onStartShouldSetResponder: this.touchableHandleStartShouldSetResponder,
                    onResponderTerminationRequest: this.touchableHandleResponderTerminationRequest,
                    onResponderGrant: this.touchableHandleResponderGrant,
                    onResponderMove: this.touchableHandleResponderMove,
                    onResponderRelease: this.touchableHandleResponderRelease,
                    onResponderTerminate: this.touchableHandleResponderTerminate
                }, Touchable/*d*/(keyOf/*g*/(this.props.children), {
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
        S = cloneWithProps/*f*/({
            childRef: null
        }),
        b = cloneWithProps/*f*/({
            underlayRef: null
        }),
        R = {
            style: React/*l*/.create({
                x: {
                    opacity: 1
                }
            }).x
        },
        w = {
            style: React/*l*/.create({
                x: {
                    backgroundColor: "transparent"
                }
            }).x
        };
    module/*i*/.exports = y
});