__d("TouchableOpacity",["POPAnimationMixin","NativeMethodsMixin","React","Touchable","cloneWithProps","ensureComponentIsNative","keyOf","onlyChild"],function (e, t, n, r, i) {
    "use strict";
    var POPAnimationMixin/*o*/ = t("POPAnimationMixin"),
        NativeMethodsMixin/*a*/ = t("NativeMethodsMixin"),
        React/*s*/ = t("React"),
        Touchable/*l*/ = t("Touchable"),
        cloneWithProps/*u*/ = t("cloneWithProps"),
        ensureComponentIsNative/*c*/ = t("ensureComponentIsNative"),
        keyOf/*p*/ = t("keyOf"),
        onlyChild/*d*/ = t("onlyChild"),
        h = React/*s*/.createClass({
            displayName: "TouchableOpacity",
            mixins: [Touchable/*l*/.Mixin, NativeMethodsMixin/*a*/, POPAnimationMixin/*o*/],
            propTypes: {
                onPress: React/*s*/.PropTypes.func,
                activeOpacity: React/*s*/.PropTypes.number
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
                ensureComponentIsNative/*c*/(this.refs[m])
            },
            componentDidUpdate: function() {
                ensureComponentIsNative/*c*/(this.refs[m])
            },
            animateOpacityTo: function(e) {
                this.stopAllAnimations();
                var t = {
                    type: this.AnimationTypes.linear,
                    property: this.AnimationProperties.opacity,
                    toValue: e
                };
                this.startAnimation(m, t)
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
                return cloneWithProps/*u*/(onlyChild/*d*/(this.props.children), {
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
        m = keyOf/*p*/({
            childRef: null
        });
    i.exports = h
});