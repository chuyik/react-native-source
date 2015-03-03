__d("View",["NativeMethodsMixin","NativeModules","ReactPropTypes","React","ReactIOSViewAttributes","StyleSheetPropType","ViewStylePropTypes","createReactIOSNativeComponentClass"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("NativeMethodsMixin"),
        exports/*a*/ = require/*t*/("NativeModules"),
        NativeMethodsMixin/*s*/ = require/*t*/("ReactPropTypes"),
        NativeModules/*l*/ = require/*t*/("React"),
        ReactPropTypes/*u*/ = require/*t*/("ReactIOSViewAttributes"),
        React/*c*/ = require/*t*/("StyleSheetPropType"),
        ReactIOSViewAttributes/*p*/ = require/*t*/("ViewStylePropTypes"),
        StyleSheetPropType/*d*/ = exports/*a*/.RKUIManager.StyleConstants,
        ViewStylePropTypes/*h*/ = require/*t*/("createReactIOSNativeComponentClass"),
        createReactIOSNativeComponentClass/*f*/ = React/*c*/(ReactIOSViewAttributes/*p*/),
        m = NativeModules/*l*/.createClass({
            displayName: "View",
            statics: {
                pointerEvents: StyleSheetPropType/*d*/.PointerEventsValues,
                stylePropType: createReactIOSNativeComponentClass/*f*/
            },
            mixins: [o],
            viewConfig: {
                uiViewClassName: "RCTView",
                validAttributes: ReactPropTypes/*u*/.RKView
            },
            propTypes: {
                accessible: NativeMethodsMixin/*s*/.bool,
                testID: NativeMethodsMixin/*s*/.string,
                onResponderGrant: NativeMethodsMixin/*s*/.func,
                onResponderReject: NativeMethodsMixin/*s*/.func,
                onResponderMove: NativeMethodsMixin/*s*/.func,
                onResponderRelease: NativeMethodsMixin/*s*/.func,
                onResponderTerminate: NativeMethodsMixin/*s*/.func,
                onResponderTerminationRequest: NativeMethodsMixin/*s*/.func,
                onMoveShouldSetResponder: NativeMethodsMixin/*s*/.func,
                onStartShouldSetResponder: NativeMethodsMixin/*s*/.func,
                onStartShouldSetResponderCapture: NativeMethodsMixin/*s*/.func,
                pointerEvents: NativeMethodsMixin/*s*/.oneOf([StyleSheetPropType/*d*/.PointerEventsValues.boxNone, StyleSheetPropType/*d*/.PointerEventsValues.none, StyleSheetPropType/*d*/.PointerEventsValues.boxOnly, StyleSheetPropType/*d*/.PointerEventsValues.unspecified]),
                style: createReactIOSNativeComponentClass/*f*/,
                removeClippedSubviews: NativeMethodsMixin/*s*/.bool
            },
            render: function() {
                return NativeModules/*l*/.createElement(g, Object.assign({}, this.props))
            }
        }),
        g = ViewStylePropTypes/*h*/({
            validAttributes: ReactPropTypes/*u*/.RKView,
            uiViewClassName: "RCTView"
        }),
        _ = g;
    __DEV__ && (_ = m), _.pointerEvents = m.pointerEvents, _.stylePropType = createReactIOSNativeComponentClass/*f*/, module/*i*/.exports = _
});