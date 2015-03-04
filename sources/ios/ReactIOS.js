__d("ReactIOS",["ReactComponent","ReactCompositeComponent","ReactContext","ReactCurrentOwner","ReactElement","ReactElementValidator","ReactInstanceHandles","ReactIOSDefaultInjection","ReactIOSMount","ReactLegacyElement","ReactPropTypes","deprecated","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var ReactComponent/*o*/ = require/*t*/("ReactComponent"),
        ReactCompositeComponent/*a*/ = require/*t*/("ReactCompositeComponent"),
        ReactContext/*s*/ = require/*t*/("ReactContext"),
        ReactCurrentOwner/*l*/ = require/*t*/("ReactCurrentOwner"),
        ReactElement/*u*/ = require/*t*/("ReactElement"),
        ReactElementValidator/*c*/ = require/*t*/("ReactElementValidator"),
        ReactInstanceHandles/*p*/ = require/*t*/("ReactInstanceHandles"),
        ReactIOSDefaultInjection/*d*/ = require/*t*/("ReactIOSDefaultInjection"),
        ReactIOSMount/*h*/ = require/*t*/("ReactIOSMount"),
        ReactLegacyElement/*f*/ = require/*t*/("ReactLegacyElement"),
        ReactPropTypes/*m*/ = require/*t*/("ReactPropTypes"),
        deprecated/*g*/ = require/*t*/("deprecated"),
        invariant/*_*/ = require/*t*/("invariant");
    ReactIOSDefaultInjection/*d*/.inject();
    var y = ReactElement/*u*/.createElement,
        v = ReactElement/*u*/.createFactory;
    __DEV__ && (y = ReactElementValidator/*c*/.createElement, v = ReactElementValidator/*c*/.createFactory), y = ReactLegacyElement/*f*/.wrapCreateElement(y), v = ReactLegacyElement/*f*/.wrapCreateFactory(v);
    var S = function(global/*e*/) {
            var require/*t*/ = global/*e*/.type.defaultProps,
                requireDynamic/*n*/ = global/*e*/.props;
            for (var requireLazy/*r*/ in require/*t*/) void 0 === requireDynamic/*n*/[requireLazy/*r*/] && (requireDynamic/*n*/[requireLazy/*r*/] = require/*t*/[requireLazy/*r*/])
        },
        b = function(global/*e*/) {
            return __DEV__ && invariant/*_*/(0, "This optimized path should never be used in DEV mode because it does not provide validation. Check your JSX transform."), global/*e*/._owner = ReactCurrentOwner/*l*/.current, global/*e*/._context = ReactContext/*s*/.current, global/*e*/.type.defaultProps && S(global/*e*/), global/*e*/
        },
        R = function(global/*e*/, require/*t*/) {
            ReactIOSMount/*h*/.renderComponent(global/*e*/, require/*t*/)
        },
        w = {
            hasReactIOSInitialized: !1,
            PropTypes: ReactPropTypes/*m*/,
            createClass: ReactCompositeComponent/*a*/.createClass,
            createElement: y,
            createFactory: v,
            _augmentElement: b,
            render: R,
            unmountComponentAtNode: ReactIOSMount/*h*/.unmountComponentAtNode,
            __internals: {
                Component: ReactComponent/*o*/,
                CurrentOwner: ReactCurrentOwner/*l*/,
                InstanceHandles: ReactInstanceHandles/*p*/,
                Mount: ReactIOSMount/*h*/
            },
            __spread: Object.assign,
            unmountComponentAtNodeAndRemoveContainer: ReactIOSMount/*h*/.unmountComponentAtNodeAndRemoveContainer,
            isValidClass: ReactElement/*u*/.isValidFactory,
            isValidElement: ReactElement/*u*/.isValidElement,
            renderComponent: deprecated/*g*/("React", "renderComponent", "render", this, R),
            isValidComponent: deprecated/*g*/("React", "isValidComponent", "isValidElement", this, ReactElement/*u*/.isValidElement)
        };
    module/*i*/.exports = w
});