__d("TouchableOpacity",["POPAnimationMixin","NativeMethodsMixin","React","Touchable","cloneWithProps","ensureComponentIsNative","keyOf","onlyChild"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("POPAnimationMixin"),
        exports/*a*/ = require/*t*/("NativeMethodsMixin"),
        POPAnimationMixin/*s*/ = require/*t*/("React"),
        NativeMethodsMixin/*l*/ = require/*t*/("Touchable"),
        React/*u*/ = require/*t*/("cloneWithProps"),
        Touchable/*c*/ = require/*t*/("ensureComponentIsNative"),
        cloneWithProps/*p*/ = require/*t*/("keyOf"),
        ensureComponentIsNative/*d*/ = require/*t*/("onlyChild"),
        keyOf/*h*/ = POPAnimationMixin/*s*/.createClass({
            displayName: "TouchableOpacity",
            onlyChild/*mixins*/: [NativeMethodsMixin/*l*/.Mixin, exports/*a*/, o],
            propTypes: {
                onPress: POPAnimationMixin/*s*/.PropTypes.func,
                activeOpacity: POPAnimationMixin/*s*/.PropTypes.number
            },
            getDefaultProps: function() {
                return {
                    activeOpacity: .5
                }
            },
            getInitialState: function() {
                return this.touchableGetInitialState()
            },
            componentDidMount: function() {
                Touchable/*c*/(this.refs[m])
            },
            componentDidUpdate: function() {
                Touchable/*c*/(this.refs[m])
            },
            animateOpacityTo: function(global/*e*/) {
                this.stopAllAnimations();
                var require/*t*/ = {
                    type: this.AnimationTypes.linear,
                    property: this.AnimationProperties.opacity,
                    toValue: global/*e*/
                };
                this.startAnimation(m, require/*t*/)
            },
            touchableHandleActivePressIn: function() {
                this.refs[m].setNativeProps({
                    opacity: this.props.activeOpacity
                })
            },
            touchableHandleActivePressOut: function() {
                this.animateOpacityTo(1)
            },
            touchableHandlePress: function() {
                this.animateOpacityTo(1), this.props.onPress && this.props.onPress()
            },
            touchableGetPressRectOffset: function() {
                return f
            },
            touchableGetHighlightDelayMS: function() {
                return 0
            },
            render: function() {
                return React/*u*/(ensureComponentIsNative/*d*/(this.props.children), {
                    ref: m,
                    accessible: !0,
                    testID: this.props.testID,
                    onStartShouldSetResponder: this.touchableHandleStartShouldSetResponder,
                    onResponderTerminationRequest: this.touchableHandleResponderTerminationRequest,
                    onResponderGrant: this.touchableHandleResponderGrant,
                    onResponderMove: this.touchableHandleResponderMove,
                    onResponderRelease: this.touchableHandleResponderRelease,
                    onResponderTerminate: this.touchableHandleResponderTerminate
                })
            }
        }),
        f = {
            top: 20,
            left: 20,
            right: 20,
            bottom: 30
        },
        m = cloneWithProps/*p*/({
            childRef: null
        });
    module/*i*/.exports = keyOf/*h*/
});