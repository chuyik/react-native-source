__d("TouchableBounce",["NativeMethodsMixin","React","POPAnimation","Touchable","View","merge","copyProperties","onlyChild"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("NativeMethodsMixin"),
        a = require/*t*/("React"),
        s = require/*t*/("POPAnimation"),
        l = require/*t*/("Touchable"),
        u = (require/*t*/("View"), require/*t*/("merge")),
        c = require/*t*/("copyProperties"),
        p = require/*t*/("onlyChild"),
        d = {
            top: 20,
            left: 20,
            right: 20,
            bottom: 30
        },
        h = a.createClass({
            displayName: "TouchableBounce",
            mixins: [l.Mixin, o],
            propTypes: {
                onPress: a.PropTypes.func,
                onPressWithCompletion: a.PropTypes.func,
                onPressAnimationComplete: a.PropTypes.func
            },
            getInitialState: function() {
                return u(this.touchableGetInitialState(), {
                    animationID: null
                })
            },
            bounceTo: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                this.state.animationID && this.removeAnimation(this.state.animationID);
                var o = {
                    property: s.Properties.scaleXY,
                    dynamicsTension: 0,
                    toValue: [global/*e*/, global/*e*/],
                    velocity: [require/*t*/, require/*t*/],
                    springBounciness: requireDynamic/*n*/
                };
                requireLazy/*r*/ && (o.fromValue = [requireLazy/*r*/, requireLazy/*r*/]), this.state.animationID = s.createSpringAnimation(o), this.addAnimation(this.state.animationID, module/*i*/)
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
                var global/*e*/ = p(this.props.children);
                return c(global/*e*/.props, {
                    accessible: !0,
                    testID: this.props.testID,
                    onStartShouldSetResponder: this.touchableHandleStartShouldSetResponder,
                    onResponderTerminationRequest: this.touchableHandleResponderTerminationRequest,
                    onResponderGrant: this.touchableHandleResponderGrant,
                    onResponderMove: this.touchableHandleResponderMove,
                    onResponderRelease: this.touchableHandleResponderRelease,
                    onResponderTerminate: this.touchableHandleResponderTerminate
                }), global/*e*/
            }
        });
    module/*i*/.exports = h
});