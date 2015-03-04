__d("Text",["NativeMethodsMixin","React","ReactIOSViewAttributes","StyleSheetPropType","TextStylePropTypes","Touchable","createReactIOSNativeComponentClass","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var NativeMethodsMixin/*o*/ = require/*t*/("NativeMethodsMixin"),
        React/*a*/ = require/*t*/("React"),
        ReactIOSViewAttributes/*s*/ = require/*t*/("ReactIOSViewAttributes"),
        StyleSheetPropType/*l*/ = require/*t*/("StyleSheetPropType"),
        TextStylePropTypes/*u*/ = require/*t*/("TextStylePropTypes"),
        Touchable/*c*/ = require/*t*/("Touchable"),
        createReactIOSNativeComponentClass/*p*/ = require/*t*/("createReactIOSNativeComponentClass"),
        merge/*d*/ = require/*t*/("merge"),
        h = StyleSheetPropType/*l*/(TextStylePropTypes/*u*/),
        f = {
            validAttributes: merge/*d*/(ReactIOSViewAttributes/*s*/.UIView, {
                isHighlighted: !0,
                numberOfLines: !0
            }),
            uiViewClassName: "RCTText"
        },
        m = React/*a*/.createClass({
            displayName: "Text",
            mixins: [Touchable/*c*/.Mixin, NativeMethodsMixin/*o*/],
            statics: {
                stylePropType: h
            },
            propTypes: {
                numberOfLines: React/*a*/.PropTypes.number,
                onPress: React/*a*/.PropTypes.func,
                suppressHighlighting: React/*a*/.PropTypes.bool,
                style: h
            },
            viewConfig: f,
            getInitialState: function() {
                return merge/*d*/(this.touchableGetInitialState(), {
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
                return global/*e*/.ref = this.getNodeHandle(), global/*e*/.accessible !== !1 && (global/*e*/.accessible = !0), global/*e*/.isHighlighted = this.state.isHighlighted, global/*e*/.onStartShouldSetResponder = this.onStartShouldSetResponder, global/*e*/.onResponderTerminationRequest = this.handleResponderTerminationRequest, global/*e*/.onResponderGrant = this.handleResponderGrant, global/*e*/.onResponderMove = this.handleResponderMove, global/*e*/.onResponderRelease = this.handleResponderRelease, global/*e*/.onResponderTerminate = this.handleResponderTerminate, React/*a*/.createElement(_, Object.assign({}, global/*e*/))
            }
        }),
        g = {
            top: 20,
            left: 20,
            right: 20,
            bottom: 30
        },
        _ = createReactIOSNativeComponentClass/*p*/(f);
    module/*i*/.exports = m
});