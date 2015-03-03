__d("TouchableWithoutFeedback",["React","Touchable","View","copyProperties","onlyChild"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("React"),
        a = require/*t*/("Touchable"),
        s = (require/*t*/("View"), require/*t*/("copyProperties")),
        l = require/*t*/("onlyChild"),
        u = {
            top: 20,
            left: 20,
            right: 20,
            bottom: 30
        },
        c = o.createClass({
            displayName: "TouchableWithoutFeedback",
            mixins: [a.Mixin],
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
                return u
            },
            touchableGetHighlightDelayMS: function() {
                return 0
            },
            render: function() {
                var global/*e*/ = l(this.props.children);
                return s(global/*e*/.props, {
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