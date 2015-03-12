__d("TouchableWithoutFeedback",["React","Touchable","View","copyProperties","onlyChild"],function (e, t, n, r, i) {
    "use strict";
    var React/*o*/ = t("React"),
        Touchable/*a*/ = t("Touchable"),
        s = (t("View"), t("copyProperties")),
        onlyChild/*l*/ = t("onlyChild"),
        u = {
            top: 20,
            left: 20,
            right: 20,
            bottom: 30
        },
        c = React/*o*/.createClass({
            displayName: "TouchableWithoutFeedback",
            mixins: [Touchable/*a*/.Mixin],
            propTypes: {
                onPress: React/*o*/.PropTypes.func,
                onPressIn: React/*o*/.PropTypes.func,
                onPressOut: React/*o*/.PropTypes.func,
                onLongPress: React/*o*/.PropTypes.func
            },
            getInitialState: function() {
                return this.touchableGetInitialState()
            },
            touchableHandlePress: function(e) {
                this.props.onPress && this.props.onPress(e)
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
                var e = onlyChild/*l*/(this.props.children);
                return s(e.props, {
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
    i.exports = c
});