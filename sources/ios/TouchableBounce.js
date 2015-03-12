__d("TouchableBounce",["NativeMethodsMixin","React","POPAnimation","Touchable","View","merge","copyProperties","onlyChild"],function (e, t, n, r, i) {
    "use strict";
    var NativeMethodsMixin/*o*/ = t("NativeMethodsMixin"),
        React/*a*/ = t("React"),
        POPAnimation/*s*/ = t("POPAnimation"),
        Touchable/*l*/ = t("Touchable"),
        u = (t("View"), t("merge")),
        copyProperties/*c*/ = t("copyProperties"),
        onlyChild/*p*/ = t("onlyChild"),
        d = {
            top: 20,
            left: 20,
            right: 20,
            bottom: 30
        },
        h = React/*a*/.createClass({
            displayName: "TouchableBounce",
            mixins: [Touchable/*l*/.Mixin, NativeMethodsMixin/*o*/],
            propTypes: {
                onPress: React/*a*/.PropTypes.func,
                onPressWithCompletion: React/*a*/.PropTypes.func,
                onPressAnimationComplete: React/*a*/.PropTypes.func
            },
            getInitialState: function() {
                return u(this.touchableGetInitialState(), {
                    animationID: null
                })
            },
            bounceTo: function(e, t, n, r, i) {
                this.state.animationID && this.removeAnimation(this.state.animationID);
                var NativeMethodsMixin/*o*/ = {
                    property: POPAnimation/*s*/.Properties.scaleXY,
                    dynamicsTension: 0,
                    toValue: [e, e],
                    velocity: [t, t],
                    springBounciness: n
                };
                r && (NativeMethodsMixin/*o*/.fromValue = [r, r]), this.state.animationID = POPAnimation/*s*/.createSpringAnimation(NativeMethodsMixin/*o*/), this.addAnimation(this.state.animationID, i)
            },
            touchableHandleActivePressIn: function() {
                this.bounceTo(.93, .1, 0)
            },
            touchableHandleActivePressOut: function() {
                this.bounceTo(1, .4, 0)
            },
            touchableHandlePress: function() {
                return this.props.onPressWithCompletion ? void this.props.onPressWithCompletion(this.bounceTo.bind(this, 1, 10, 10, .93, this.props.onPressAnimationComplete)) : (this.bounceTo(1, 10, 10, void 0, this.props.onPressAnimationComplete), void(this.props.onPress && this.props.onPress()))
            },
            touchableGetPressRectOffset: function() {
                return d
            },
            touchableGetHighlightDelayMS: function() {
                return 0
            },
            render: function() {
                var e = onlyChild/*p*/(this.props.children);
                return copyProperties/*c*/(e.props, {
                    accessible: !0,
                    testID: this.props.testID,
                    onStartShouldSetResponder: this.touchableHandleStartShouldSetResponder,
                    onResponderTerminationRequest: this.touchableHandleResponderTerminationRequest,
                    onResponderGrant: this.touchableHandleResponderGrant,
                    onResponderMove: this.touchableHandleResponderMove,
                    onResponderRelease: this.touchableHandleResponderRelease,
                    onResponderTerminate: this.touchableHandleResponderTerminate
                }), e
            }
        });
    i.exports = h
});