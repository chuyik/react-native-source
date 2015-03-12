__d("instantiateReactComponent",["warning","ReactElement","ReactLegacyElement","ReactNativeComponent","ReactEmptyComponent"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        var n;
        if (__DEV__ && (warning/*a*/(e && ("function" == typeof e.type || "string" == typeof e.type), "Only functions or strings can be mounted as React components."), e.type._mockedReactClassConstructor)) {
            ReactLegacyElement/*l*/._isLegacyCallWarningEnabled = !1;
            try {
                n = new e.type._mockedReactClassConstructor(e.props)
            } finally {
                ReactLegacyElement/*l*/._isLegacyCallWarningEnabled = !0
            }
            ReactElement/*s*/.isValidElement(n) && (n = new n.type(n.props));
            var r = n.render;
            if (r) return r._isMockFunction && !r._getMockImplementation() && r.mockImplementation(ReactEmptyComponent/*c*/.getEmptyComponent), n.construct(e), n;
            e = ReactEmptyComponent/*c*/.getEmptyComponent()
        }
        return 
            n = "string" == typeof e.type ? 
                ReactNativeComponent/*u*/.createInstanceForTag(e.type, e.props, t) :
                new e.type(e.props),

            __DEV__ && warning/*a*/("function" == typeof n.construct && "function" == typeof n.mountComponent && "function" == typeof n.receiveComponent, "Only React Components can be mounted."),
             n.construct(e),
             n
    }
    var warning/*a*/ = t("warning"),
        ReactElement/*s*/ = t("ReactElement"),
        ReactLegacyElement/*l*/ = t("ReactLegacyElement"),
        ReactNativeComponent/*u*/ = t("ReactNativeComponent"),
        ReactEmptyComponent/*c*/ = t("ReactEmptyComponent");
    i.exports = o
});
