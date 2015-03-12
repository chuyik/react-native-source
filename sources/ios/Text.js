__d("Text",["NativeMethodsMixin","React","ReactIOSViewAttributes","StyleSheetPropType","TextStylePropTypes","Touchable","createReactIOSNativeComponentClass","merge"],function (e, t, n, r, i) {
    "use strict";
    var NativeMethodsMixin/*o*/ = t("NativeMethodsMixin"),
        React/*a*/ = t("React"),
        ReactIOSViewAttributes/*s*/ = t("ReactIOSViewAttributes"),
        StyleSheetPropType/*l*/ = t("StyleSheetPropType"),
        TextStylePropTypes/*u*/ = t("TextStylePropTypes"),
        Touchable/*c*/ = t("Touchable"),
        createReactIOSNativeComponentClass/*p*/ = t("createReactIOSNativeComponentClass"),
        merge/*d*/ = t("merge"),
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
                var e = this.props.onStartShouldSetResponder && this.props.onStartShouldSetResponder();
                return e || !!this.props.onPress
            },
            handleResponderTerminationRequest: function() {
                var e = this.touchableHandleResponderTerminationRequest();
                return e && this.props.onResponderTerminationRequest && (e = this.props.onResponderTerminationRequest()), e
            },
            handleResponderGrant: function(e, t) {
                this.touchableHandleResponderGrant(e, t), this.props.onResponderGrant && this.props.onResponderGrant.apply(this, arguments)
            },
            handleResponderMove: function(e) {
                this.touchableHandleResponderMove(e), this.props.onResponderMove && this.props.onResponderMove.apply(this, arguments)
            },
            handleResponderRelease: function(e) {
                this.touchableHandleResponderRelease(e), this.props.onResponderRelease && this.props.onResponderRelease.apply(this, arguments)
            },
            handleResponderTerminate: function(e) {
                this.touchableHandleResponderTerminate(e), this.props.onResponderTerminate && this.props.onResponderTerminate.apply(this, arguments)
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
                var e = {};
                for (var t in this.props) e[t] = this.props[t];
                return e.ref = this.getNodeHandle(), e.accessible !== !1 && (e.accessible = !0), e.isHighlighted = this.state.isHighlighted, e.onStartShouldSetResponder = this.onStartShouldSetResponder, e.onResponderTerminationRequest = this.handleResponderTerminationRequest, e.onResponderGrant = this.handleResponderGrant, e.onResponderMove = this.handleResponderMove, e.onResponderRelease = this.handleResponderRelease, e.onResponderTerminate = this.handleResponderTerminate, React/*a*/.createElement(_, Object.assign({}, e))
            }
        }),
        g = {
            top: 20,
            left: 20,
            right: 20,
            bottom: 30
        },
        _ = createReactIOSNativeComponentClass/*p*/(f);
    i.exports = m
});