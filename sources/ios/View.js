__d("View",["NativeMethodsMixin","NativeModules","ReactPropTypes","React","ReactIOSViewAttributes","StyleSheetPropType","ViewStylePropTypes","createReactIOSNativeComponentClass"],function (e, t, n, r, i) {
    "use strict";
    var NativeMethodsMixin/*o*/ = t("NativeMethodsMixin"),
        NativeModules/*a*/ = t("NativeModules"),
        ReactPropTypes/*s*/ = t("ReactPropTypes"),
        React/*l*/ = t("React"),
        ReactIOSViewAttributes/*u*/ = t("ReactIOSViewAttributes"),
        StyleSheetPropType/*c*/ = t("StyleSheetPropType"),
        ViewStylePropTypes/*p*/ = t("ViewStylePropTypes"),
        d = NativeModules/*a*/.RKUIManager.StyleConstants,
        createReactIOSNativeComponentClass/*h*/ = t("createReactIOSNativeComponentClass"),
        f = StyleSheetPropType/*c*/(ViewStylePropTypes/*p*/),
        m = React/*l*/.createClass({
            displayName: "View",
            statics: {
                pointerEvents: d.PointerEventsValues,
                stylePropType: f
            },
            mixins: [NativeMethodsMixin/*o*/],
            viewConfig: {
                uiViewClassName: "RCTView",
                validAttributes: ReactIOSViewAttributes/*u*/.RKView
            },
            propTypes: {
                accessible: ReactPropTypes/*s*/.bool,
                testID: ReactPropTypes/*s*/.string,
                onResponderGrant: ReactPropTypes/*s*/.func,
                onResponderReject: ReactPropTypes/*s*/.func,
                onResponderMove: ReactPropTypes/*s*/.func,
                onResponderRelease: ReactPropTypes/*s*/.func,
                onResponderTerminate: ReactPropTypes/*s*/.func,
                onResponderTerminationRequest: ReactPropTypes/*s*/.func,
                onMoveShouldSetResponder: ReactPropTypes/*s*/.func,
                onStartShouldSetResponder: ReactPropTypes/*s*/.func,
                onStartShouldSetResponderCapture: ReactPropTypes/*s*/.func,
                pointerEvents: ReactPropTypes/*s*/.oneOf([d.PointerEventsValues.boxNone, d.PointerEventsValues.none, d.PointerEventsValues.boxOnly, d.PointerEventsValues.unspecified]),
                style: f,
                removeClippedSubviews: ReactPropTypes/*s*/.bool
            },
            render: function() {
                return React/*l*/.createElement(g, Object.assign({}, this.props))
            }
        }),
        g = createReactIOSNativeComponentClass/*h*/({
            validAttributes: ReactIOSViewAttributes/*u*/.RKView,
            uiViewClassName: "RCTView"
        }),
        _ = g;
    __DEV__ && (_ = m), _.pointerEvents = m.pointerEvents, _.stylePropType = f, i.exports = _
});