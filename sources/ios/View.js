__d("View",["NativeMethodsMixin","NativeModules","ReactPropTypes","React","ReactIOSViewAttributes","StyleSheetPropType","ViewStylePropTypes","createReactIOSNativeComponentClass"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("NativeMethodsMixin"),
        a = require/*t*/("NativeModules"),
        s = require/*t*/("ReactPropTypes"),
        l = require/*t*/("React"),
        u = require/*t*/("ReactIOSViewAttributes"),
        c = require/*t*/("StyleSheetPropType"),
        p = require/*t*/("ViewStylePropTypes"),
        d = a.RKUIManager.StyleConstants,
        h = require/*t*/("createReactIOSNativeComponentClass"),
        f = c(p),
        m = l.createClass({
            displayName: "View",
            statics: {
                pointerEvents: d.PointerEventsValues,
                stylePropType: f
            },
            mixins: [o],
            viewConfig: {
                uiViewClassName: "RCTView",
                validAttributes: u.RKView
            },
            propTypes: {
                accessible: s.bool,
                testID: s.string,
                onResponderGrant: s.func,
                onResponderReject: s.func,
                onResponderMove: s.func,
                onResponderRelease: s.func,
                onResponderTerminate: s.func,
                onResponderTerminationRequest: s.func,
                onMoveShouldSetResponder: s.func,
                onStartShouldSetResponder: s.func,
                onStartShouldSetResponderCapture: s.func,
                pointerEvents: s.oneOf([d.PointerEventsValues.boxNone, d.PointerEventsValues.none, d.PointerEventsValues.boxOnly, d.PointerEventsValues.unspecified]),
                style: f,
                removeClippedSubviews: s.bool
            },
            render: function() {
                return l.createElement(g, Object.assign({}, this.props))
            }
        }),
        g = h({
            validAttributes: u.RKView,
            uiViewClassName: "RCTView"
        }),
        _ = g;
    __DEV__ && (_ = m), _.pointerEvents = m.pointerEvents, _.stylePropType = f, module/*i*/.exports = _
});