__d("TouchableBounce",["NativeMethodsMixin","React","POPAnimation","Touchable","View","merge","copyProperties","onlyChild"],function (global/*e*/, require/*Touchable/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*Touchable/*t*/*/("NativeMethodsMixin"),
        exports/*a*/ = require/*Touchable/*t*/*/("React"),
        NativeMethodsMixin/*s*/ = require/*Touchable/*t*/*/("POPAnimation"),
        React/*l*/ = require/*Touchable/*t*/*/("Touchable"),
        POPAnimation/*u*/ = (require/*Touchable/*t*/*/("View"), require/*Touchable/*t*/*/("merge")),
        View/*c*/ = require/*Touchable/*t*/*/("copyProperties"),
        merge/*p*/ = require/*Touchable/*t*/*/("onlyChild"),
        copyProperties/*d*/ = {
            top: 20,
            onlyChild/*left*/: 20,
            right: 20,
            bottom: 30
        },
        h = exports/*a*/.createClass({
            displayName: "TouchableBounce",
            mixins: [React/*l*/.Mixin, o],
            propTypes: {
                onPress: exports/*a*/.PropTypes.func,
                onPressWithCompletion: exports/*a*/.PropTypes.func,
                onPressAnimationComplete: exports/*a*/.PropTypes.func
            },
            getInitialState: function() {
                return POPAnimation/*u*/(this.touchableGetInitialState(), {
                    animationID: null
                })
            },
            bounceTo: function(global/*e*/, require/*Touchable/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                this.state.animationID && this.removeAnimation(this.state.animationID);
                var o = {
                    property: NativeMethodsMixin/*s*/.Properties.scaleXY,
                    dynamicsTension: 0,
                    toValue: [global/*e*/, global/*e*/],
                    velocity: [require/*Touchable/*t*/*/, require/*Touchable/*t*/*/],
                    springBounciness: requireDynamic/*n*/
                };
                requireLazy/*r*/ && (o.fromValue = [requireLazy/*r*/, requireLazy/*r*/]), this.state.animationID = NativeMethodsMixin/*s*/.createSpringAnimation(o), this.addAnimation(this.state.animationID, module/*i*/)
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
                return copyProperties/*d*/
            },
            touchableGetHighlightDelayMS: function() {
                return 0
            },
            render: function() {
                var global/*e*/ = merge/*p*/(this.props.children);
                return View/*c*/(global/*e*/.props, {
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