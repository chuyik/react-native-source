__d("instantiateReactComponent",["warning","ReactElement","ReactLegacyElement","ReactNativeComponent","ReactEmptyComponent"],function (global/*e*/, require/*exports/*ReactEmptyComponent/*t*/*/*/, requireDynamic/*ReactLegacyElement/*n*/*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*ReactEmptyComponent/*t*/*/*/) {
        var requireDynamic/*ReactLegacyElement/*n*/*/;
        if (__DEV__ && (a(global/*e*/ && ("function" == typeof global/*e*/.type || "string" == typeof global/*e*/.type), "Only functions or strings can be mounted as React components."), global/*e*/.type._mockedReactClassConstructor)) {
            l._isLegacyCallWarningEnabled = !1;
            try {
                requireDynamic/*ReactLegacyElement/*n*/*/ = new global/*e*/.type._mockedReactClassConstructor(global/*e*/.props)
            } finally {
                l._isLegacyCallWarningEnabled = !0
            }
            s.isValidElement(requireDynamic/*ReactLegacyElement/*n*/*/) && (requireDynamic/*ReactLegacyElement/*n*/*/ = new requireDynamic/*ReactLegacyElement/*n*/*/.type(requireDynamic/*ReactLegacyElement/*n*/*/.props));
            var requireLazy/*r*/ = requireDynamic/*ReactLegacyElement/*n*/*/.render;
            if (requireLazy/*r*/) return requireLazy/*r*/._isMockFunction && !requireLazy/*r*/._getMockImplementation() && requireLazy/*r*/.mockImplementation(c.getEmptyComponent), requireDynamic/*ReactLegacyElement/*n*/*/.construct(global/*e*/), requireDynamic/*ReactLegacyElement/*n*/*/;
            global/*e*/ = c.getEmptyComponent()
        }
        return requireDynamic/*ReactLegacyElement/*n*/*/ = "string" == typeof global/*e*/.type ? u.createInstanceForTag(global/*e*/.type, global/*e*/.props, require/*exports/*ReactEmptyComponent/*t*/*/*/) : new global/*e*/.type(global/*e*/.props), __DEV__ && a("function" == typeof requireDynamic/*ReactLegacyElement/*n*/*/.construct && "function" == typeof requireDynamic/*ReactLegacyElement/*n*/*/.mountComponent && "function" == typeof requireDynamic/*ReactLegacyElement/*n*/*/.receiveComponent, "Only React Components can be mounted."), requireDynamic/*ReactLegacyElement/*n*/*/.construct(global/*e*/), requireDynamic/*ReactLegacyElement/*n*/*/
    }
    var a = require/*exports/*ReactEmptyComponent/*t*/*/*/("warning"),
        s = require/*exports/*ReactEmptyComponent/*t*/*/*/("ReactElement"),
        l = require/*exports/*ReactEmptyComponent/*t*/*/*/("ReactLegacyElement"),
        u = require/*exports/*ReactEmptyComponent/*t*/*/*/("ReactNativeComponent"),
        c = require/*exports/*ReactEmptyComponent/*t*/*/*/("ReactEmptyComponent");
    module/*i*/.exports = o
});