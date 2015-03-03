__d("TouchableOpacity",["POPAnimationMixin","NativeMethodsMixin","React","Touchable","cloneWithProps","ensureComponentIsNative","keyOf","onlyChild"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("POPAnimationMixin"),
        a = require/*t*/("NativeMethodsMixin"),
        s = require/*t*/("React"),
        l = require/*t*/("Touchable"),
        u = require/*t*/("cloneWithProps"),
        c = require/*t*/("ensureComponentIsNative"),
        p = require/*t*/("keyOf"),
        d = require/*t*/("onlyChild"),
        h = s.createClass({
            displayName: "TouchableOpacity",
            mixins: [l.Mixin, a, o],
            propTypes: {
                onPress: s.PropTypes.func,
                activeOpacity: s.PropTypes.number
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
                c(this.refs[m])
            },
            componentDidUpdate: function() {
                c(this.refs[m])
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
                return u(d(this.props.children), {
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
        m = p({
            childRef: null
        });
    module/*i*/.exports = h
});