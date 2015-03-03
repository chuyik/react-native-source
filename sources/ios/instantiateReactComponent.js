__d("instantiateReactComponent",["warning","ReactElement","ReactLegacyElement","ReactNativeComponent","ReactEmptyComponent"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/;
        if (__DEV__ && (a(global/*e*/ && ("function" == typeof global/*e*/.type || "string" == typeof global/*e*/.type), "Only functions or strings can be mounted as React components."), global/*e*/.type._mockedReactClassConstructor)) {
            l._isLegacyCallWarningEnabled = !1;
            try {
                requireDynamic/*n*/ = new global/*e*/.type._mockedReactClassConstructor(global/*e*/.props)
            } finally {
                l._isLegacyCallWarningEnabled = !0
            }
            s.isValidElement(requireDynamic/*n*/) && (requireDynamic/*n*/ = new requireDynamic/*n*/.type(requireDynamic/*n*/.props));
            var requireLazy/*r*/ = requireDynamic/*n*/.render;
            if (requireLazy/*r*/) return requireLazy/*r*/._isMockFunction && !requireLazy/*r*/._getMockImplementation() && requireLazy/*r*/.mockImplementation(c.getEmptyComponent), requireDynamic/*n*/.construct(global/*e*/), requireDynamic/*n*/;
            global/*e*/ = c.getEmptyComponent()
        }
        return requireDynamic/*n*/ = "string" == typeof global/*e*/.type ? u.createInstanceForTag(global/*e*/.type, global/*e*/.props, require/*t*/) : new global/*e*/.type(global/*e*/.props), __DEV__ && a("function" == typeof requireDynamic/*n*/.construct && "function" == typeof requireDynamic/*n*/.mountComponent && "function" == typeof requireDynamic/*n*/.receiveComponent, "Only React Components can be mounted."), requireDynamic/*n*/.construct(global/*e*/), requireDynamic/*n*/
    }
    var a = require/*t*/("warning"),
        s = require/*t*/("ReactElement"),
        l = require/*t*/("ReactLegacyElement"),
        u = require/*t*/("ReactNativeComponent"),
        c = require/*t*/("ReactEmptyComponent");
    module/*i*/.exports = o
});