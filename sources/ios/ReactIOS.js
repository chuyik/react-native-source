__d("ReactIOS",["ReactComponent","ReactCompositeComponent","ReactContext","ReactCurrentOwner","ReactElement","ReactElementValidator","ReactInstanceHandles","ReactIOSDefaultInjection","ReactIOSMount","ReactLegacyElement","ReactPropTypes","deprecated","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ReactComponent"),
        a = require/*t*/("ReactCompositeComponent"),
        s = require/*t*/("ReactContext"),
        l = require/*t*/("ReactCurrentOwner"),
        u = require/*t*/("ReactElement"),
        c = require/*t*/("ReactElementValidator"),
        p = require/*t*/("ReactInstanceHandles"),
        d = require/*t*/("ReactIOSDefaultInjection"),
        h = require/*t*/("ReactIOSMount"),
        f = require/*t*/("ReactLegacyElement"),
        m = require/*t*/("ReactPropTypes"),
        g = require/*t*/("deprecated"),
        _ = require/*t*/("invariant");
    d.inject();
    var y = u.createElement,
        v = u.createFactory;
    __DEV__ && (y = c.createElement, v = c.createFactory), y = f.wrapCreateElement(y), v = f.wrapCreateFactory(v);
    var S = function(global/*e*/) {
            var require/*t*/ = global/*e*/.type.defaultProps,
                requireDynamic/*n*/ = global/*e*/.props;
            for (var requireLazy/*r*/ in require/*t*/) void 0 === requireDynamic/*n*/[requireLazy/*r*/] && (requireDynamic/*n*/[requireLazy/*r*/] = require/*t*/[requireLazy/*r*/])
        },
        b = function(global/*e*/) {
            return __DEV__ && _(0, "This optimized path should never be used in DEV mode because it does not provide validation. Check your JSX transform."), global/*e*/._owner = l.current, global/*e*/._context = s.current, global/*e*/.type.defaultProps && S(global/*e*/), global/*e*/
        },
        R = function(global/*e*/, require/*t*/) {
            h.renderComponent(global/*e*/, require/*t*/)
        },
        w = {
            hasReactIOSInitialized: !1,
            PropTypes: m,
            createClass: a.createClass,
            createElement: y,
            createFactory: v,
            _augmentElement: b,
            render: R,
            unmountComponentAtNode: h.unmountComponentAtNode,
            __internals: {
                Component: o,
                CurrentOwner: l,
                InstanceHandles: p,
                Mount: h
            },
            __spread: Object.assign,
            unmountComponentAtNodeAndRemoveContainer: h.unmountComponentAtNodeAndRemoveContainer,
            isValidClass: u.isValidFactory,
            isValidElement: u.isValidElement,
            renderComponent: g("React", "renderComponent", "render", this, R),
            isValidComponent: g("React", "isValidComponent", "isValidElement", this, u.isValidElement)
        };
    module/*i*/.exports = w
});