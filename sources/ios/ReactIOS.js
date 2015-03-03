__d("ReactIOS",["ReactComponent","ReactCompositeComponent","ReactContext","ReactCurrentOwner","ReactElement","ReactElementValidator","ReactInstanceHandles","ReactIOSDefaultInjection","ReactIOSMount","ReactLegacyElement","ReactPropTypes","deprecated","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ReactComponent"),
        exports/*a*/ = require/*t*/("ReactCompositeComponent"),
        ReactComponent/*s*/ = require/*t*/("ReactContext"),
        ReactCompositeComponent/*l*/ = require/*t*/("ReactCurrentOwner"),
        ReactContext/*u*/ = require/*t*/("ReactElement"),
        ReactCurrentOwner/*c*/ = require/*t*/("ReactElementValidator"),
        ReactElement/*p*/ = require/*t*/("ReactInstanceHandles"),
        ReactElementValidator/*d*/ = require/*t*/("ReactIOSDefaultInjection"),
        ReactInstanceHandles/*h*/ = require/*t*/("ReactIOSMount"),
        ReactIOSDefaultInjection/*f*/ = require/*t*/("ReactLegacyElement"),
        ReactIOSMount/*m*/ = require/*t*/("ReactPropTypes"),
        ReactLegacyElement/*g*/ = require/*t*/("deprecated"),
        ReactPropTypes/*_*/ = require/*t*/("invariant");
    ReactElementValidator/*d*/.inject();
    var y = ReactContext/*u*/.createElement,
        deprecated/*invariant/*v*/*/ = ReactContext/*u*/.createFactory;
    __DEV__ && (y = ReactCurrentOwner/*c*/.createElement, deprecated/*invariant/*v*/*/ = ReactCurrentOwner/*c*/.createFactory), y = ReactIOSDefaultInjection/*f*/.wrapCreateElement(y), deprecated/*invariant/*v*/*/ = ReactIOSDefaultInjection/*f*/.wrapCreateFactory(deprecated/*invariant/*v*/*/);
    var S = function(global/*e*/) {
            var require/*t*/ = global/*e*/.type.defaultProps,
                requireDynamic/*n*/ = global/*e*/.props;
            for (var requireLazy/*r*/ in require/*t*/) void 0 === requireDynamic/*n*/[requireLazy/*r*/] && (requireDynamic/*n*/[requireLazy/*r*/] = require/*t*/[requireLazy/*r*/])
        },
        b = function(global/*e*/) {
            return __DEV__ && ReactPropTypes/*_*/(0, "This optimized path should never be used in DEV mode because it does not provide validation. Check your JSX transform."), global/*e*/._owner = ReactCompositeComponent/*l*/.current, global/*e*/._context = ReactComponent/*s*/.current, global/*e*/.type.defaultProps && S(global/*e*/), global/*e*/
        },
        R = function(global/*e*/, require/*t*/) {
            ReactInstanceHandles/*h*/.renderComponent(global/*e*/, require/*t*/)
        },
        w = {
            hasReactIOSInitialized: !1,
            PropTypes: ReactIOSMount/*m*/,
            createClass: exports/*a*/.createClass,
            createElement: y,
            createFactory: deprecated/*invariant/*v*/*/,
            _augmentElement: b,
            render: R,
            unmountComponentAtNode: ReactInstanceHandles/*h*/.unmountComponentAtNode,
            __internals: {
                Component: o,
                CurrentOwner: ReactCompositeComponent/*l*/,
                InstanceHandles: ReactElement/*p*/,
                Mount: ReactInstanceHandles/*h*/
            },
            __spread: Object.assign,
            unmountComponentAtNodeAndRemoveContainer: ReactInstanceHandles/*h*/.unmountComponentAtNodeAndRemoveContainer,
            isValidClass: ReactContext/*u*/.isValidFactory,
            isValidElement: ReactContext/*u*/.isValidElement,
            renderComponent: ReactLegacyElement/*g*/("React", "renderComponent", "render", this, R),
            isValidComponent: ReactLegacyElement/*g*/("React", "isValidComponent", "isValidElement", this, ReactContext/*u*/.isValidElement)
        };
    module/*i*/.exports = w
});