__d("TouchableWithoutFeedback",["React","Touchable","View","copyProperties","onlyChild"],function (global/*e*/, require/*Touchable/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*Touchable/*t*/*/("React"),
        exports/*a*/ = require/*Touchable/*t*/*/("Touchable"),
        React/*s*/ = (require/*Touchable/*t*/*/("View"), require/*Touchable/*t*/*/("copyProperties")),
        View/*l*/ = require/*Touchable/*t*/*/("onlyChild"),
        copyProperties/*u*/ = {
            top: 20,
            onlyChild/*left*/: 20,
            right: 20,
            bottom: 30
        },
        c = o.createClass({
            displayName: "TouchableWithoutFeedback",
            mixins: [exports/*a*/.Mixin],
            propTypes: {
                onPress: o.PropTypes.func,
                onPressIn: o.PropTypes.func,
                onPressOut: o.PropTypes.func,
                onLongPress: o.PropTypes.func
            },
            getInitialState: function() {
                return this.touchableGetInitialState()
            },
            touchableHandlePress: function(global/*e*/) {
                this.props.onPress && this.props.onPress(global/*e*/)
            },
            touchableHandleActivePressIn: function() {
                this.props.onPressIn && this.props.onPressIn()
            },
            touchableHandleActivePressOut: function() {
                this.props.onPressOut && this.props.onPressOut()
            },
            touchableHandleLongPress: function() {
                this.props.onLongPress && this.props.onLongPress()
            },
            touchableGetPressRectOffset: function() {
                return copyProperties/*u*/
            },
            touchableGetHighlightDelayMS: function() {
                return 0
            },
            render: function() {
                var global/*e*/ = View/*l*/(this.props.children);
                return React/*s*/(global/*e*/.props, {
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
    module/*i*/.exports = c
});