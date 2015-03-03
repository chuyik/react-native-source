__d("Text",["NativeMethodsMixin","React","ReactIOSViewAttributes","StyleSheetPropType","TextStylePropTypes","Touchable","createReactIOSNativeComponentClass","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("NativeMethodsMixin"),
        a = require/*t*/("React"),
        s = require/*t*/("ReactIOSViewAttributes"),
        l = require/*t*/("StyleSheetPropType"),
        u = require/*t*/("TextStylePropTypes"),
        c = require/*t*/("Touchable"),
        p = require/*t*/("createReactIOSNativeComponentClass"),
        d = require/*t*/("merge"),
        h = l(u),
        f = {
            validAttributes: d(s.UIView, {
                isHighlighted: !0,
                numberOfLines: !0
            }),
            uiViewClassName: "RCTText"
        },
        m = a.createClass({
            displayName: "Text",
            mixins: [c.Mixin, o],
            statics: {
                stylePropType: h
            },
            propTypes: {
                numberOfLines: a.PropTypes.number,
                onPress: a.PropTypes.func,
                suppressHighlighting: a.PropTypes.bool,
                style: h
            },
            viewConfig: f,
            getInitialState: function() {
                return d(this.touchableGetInitialState(), {
                    isHighlighted: !1
                })
            },
            onStartShouldSetResponder: function() {
                var global/*e*/ = this.props.onStartShouldSetResponder && this.props.onStartShouldSetResponder();
                return global/*e*/ || !!this.props.onPress
            },
            handleResponderTerminationRequest: function() {
                var global/*e*/ = this.touchableHandleResponderTerminationRequest();
                return global/*e*/ && this.props.onResponderTerminationRequest && (global/*e*/ = this.props.onResponderTerminationRequest()), global/*e*/
            },
            handleResponderGrant: function(global/*e*/, require/*t*/) {
                this.touchableHandleResponderGrant(global/*e*/, require/*t*/), this.props.onResponderGrant && this.props.onResponderGrant.apply(this, arguments)
            },
            handleResponderMove: function(global/*e*/) {
                this.touchableHandleResponderMove(global/*e*/), this.props.onResponderMove && this.props.onResponderMove.apply(this, arguments)
            },
            handleResponderRelease: function(global/*e*/) {
                this.touchableHandleResponderRelease(global/*e*/), this.props.onResponderRelease && this.props.onResponderRelease.apply(this, arguments)
            },
            handleResponderTerminate: function(global/*e*/) {
                this.touchableHandleResponderTerminate(global/*e*/), this.props.onResponderTerminate && this.props.onResponderTerminate.apply(this, arguments)
            },
            touchableHandleActivePressIn: function() {
                !this.props.suppressHighlighting && this.props.onPress && this.setState({
                    isHighlighted: !0
                })
            },
            touchableHandleActivePressOut: function() {
                !this.props.suppressHighlighting && this.props.onPress && this.setState({
                    isHighlighted: !1
                })
            },
            touchableHandlePress: function() {
                this.props.onPress && this.props.onPress()
            },
            touchableGetPressRectOffset: function() {
                return g
            },
            render: function() {
                var global/*e*/ = {};
                for (var require/*t*/ in this.props) global/*e*/[require/*t*/] = this.props[require/*t*/];
                return global/*e*/.ref = this.getNodeHandle(), global/*e*/.accessible !== !1 && (global/*e*/.accessible = !0), global/*e*/.isHighlighted = this.state.isHighlighted, global/*e*/.onStartShouldSetResponder = this.onStartShouldSetResponder, global/*e*/.onResponderTerminationRequest = this.handleResponderTerminationRequest, global/*e*/.onResponderGrant = this.handleResponderGrant, global/*e*/.onResponderMove = this.handleResponderMove, global/*e*/.onResponderRelease = this.handleResponderRelease, global/*e*/.onResponderTerminate = this.handleResponderTerminate, a.createElement(_, Object.assign({}, global/*e*/))
            }
        }),
        g = {
            top: 20,
            left: 20,
            right: 20,
            bottom: 30
        },
        _ = p(f);
    module/*i*/.exports = m
});