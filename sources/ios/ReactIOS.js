__d("ReactIOS", ["ReactComponent", "ReactCompositeComponent", "ReactContext", "ReactCurrentOwner", "ReactElement", "ReactElementValidator", "ReactInstanceHandles", "ReactIOSDefaultInjection", "ReactIOSMount", "ReactLegacyElement", "ReactPropTypes", "deprecated", "invariant"], function (e, t, n, r, i) {
    "use strict";
    var ReactComponent /*o*/ = t("ReactComponent"),
        ReactCompositeComponent /*a*/ = t("ReactCompositeComponent"),
        ReactContext /*s*/ = t("ReactContext"),
        ReactCurrentOwner /*l*/ = t("ReactCurrentOwner"),
        ReactElement /*u*/ = t("ReactElement"),
        ReactElementValidator /*c*/ = t("ReactElementValidator"),
        ReactInstanceHandles /*p*/ = t("ReactInstanceHandles"),
        ReactIOSDefaultInjection /*d*/ = t("ReactIOSDefaultInjection"),
        ReactIOSMount /*h*/ = t("ReactIOSMount"),
        ReactLegacyElement /*f*/ = t("ReactLegacyElement"),
        ReactPropTypes /*m*/ = t("ReactPropTypes"),
        deprecated /*g*/ = t("deprecated"),
        invariant /*_*/ = t("invariant");
    ReactIOSDefaultInjection /*d*/ .inject();
    var createElement = ReactElement /*u*/ .createElement,
        createFactory = ReactElement /*u*/ .createFactory;
    __DEV__ && (createElement = ReactElementValidator /*c*/ .createElement, createFactory = ReactElementValidator /*c*/ .createFactory),
        createElement = ReactLegacyElement /*f*/ .wrapCreateElement(createElement),
        createFactory = ReactLegacyElement /*f*/ .wrapCreateFactory(createFactory);
    var S = function (e) {
            var t = e.type.defaultProps,
                n = e.props;
            for (var r in t) void 0 === n[r] && (n[r] = t[r])
        },
        b = function (e) {
            return __DEV__ && invariant /*_*/ (0, "This optimized path should never be used in DEV mode because it does not provide validation. Check your JSX transform."), e._owner = ReactCurrentOwner /*l*/ .current, e._context = ReactContext /*s*/ .current, e.type.defaultProps && S(e), e
        },
        render = function (element, container) {
            ReactIOSMount /*h*/ .renderComponent(element, container)
        },
        w = {
            hasReactIOSInitialized: !1,
            PropTypes: ReactPropTypes /*m*/ ,
            createClass: ReactCompositeComponent /*a*/ .createClass,
            createElement: createElement,
            createFactory: createFactory,
            _augmentElement: b,
            render: render,
            unmountComponentAtNode: ReactIOSMount /*h*/ .unmountComponentAtNode,
            __internals: {
                Component: ReactComponent /*o*/ ,
                CurrentOwner: ReactCurrentOwner /*l*/ ,
                InstanceHandles: ReactInstanceHandles /*p*/ ,
                Mount: ReactIOSMount /*h*/
            },
            __spread: Object.assign,
            unmountComponentAtNodeAndRemoveContainer: ReactIOSMount /*h*/ .unmountComponentAtNodeAndRemoveContainer,
            isValidClass: ReactElement /*u*/ .isValidFactory,
            isValidElement: ReactElement /*u*/ .isValidElement,
            renderComponent: deprecated /*g*/ ("React", "renderComponent", "render", this, render),
            isValidComponent: deprecated /*g*/ ("React", "isValidComponent", "isValidElement", this, ReactElement /*u*/ .isValidElement)
        };
    i.exports = w
});
