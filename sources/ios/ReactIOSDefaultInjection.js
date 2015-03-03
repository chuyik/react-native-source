__d("ReactIOSDefaultInjection",["InitializeJavaScriptAppEngine","EventPluginHub","EventPluginUtils","IOSDefaultEventPluginOrder","IOSNativeBridgeEventPlugin","NodeHandle","ReactComponent","ReactCompositeComponent","ReactDefaultBatchingStrategy","ReactElement","ReactInstanceHandles","ReactIOSComponentEnvironment","ReactIOSComponentMixin","ReactIOSGlobalInteractionHandler","ReactIOSGlobalResponderHandler","ReactIOSMount","ReactTextComponent","ReactUpdates","ResponderEventPlugin","RKRawText","UniversalWorkerNodeHandle","RCTEventEmitter","RCTLog","RCTJSTimers"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        a.injection.injectEventPluginOrder(l), a.injection.injectInstanceHandle(m), w.injection.injectGlobalResponderHandler(v), w.injection.injectGlobalInteractionHandler(y), a.injection.injectEventPluginsByName({
            ResponderEventPlugin: w,
            IOSNativeBridgeEventPlugin: u
        }), R.injection.injectReconcileTransaction(g.ReactReconcileTransaction), R.injection.injectBatchingStrategy(h), p.injection.injectEnvironment(g), s.injection.injectMount(S), d.injection.injectMixin(_), b.inject(function(global/*e*/) {
            return new f(C.type, null, null, null, null, {
                text: global/*e*/
            })
        }), c.injection.injectImplementation(E)
    }
    require/*t*/("InitializeJavaScriptAppEngine");
    var a = require/*t*/("EventPluginHub"),
        s = require/*t*/("EventPluginUtils"),
        l = require/*t*/("IOSDefaultEventPluginOrder"),
        u = require/*t*/("IOSNativeBridgeEventPlugin"),
        c = require/*t*/("NodeHandle"),
        p = require/*t*/("ReactComponent"),
        d = require/*t*/("ReactCompositeComponent"),
        h = require/*t*/("ReactDefaultBatchingStrategy"),
        f = require/*t*/("ReactElement"),
        m = require/*t*/("ReactInstanceHandles"),
        g = require/*t*/("ReactIOSComponentEnvironment"),
        _ = require/*t*/("ReactIOSComponentMixin"),
        y = require/*t*/("ReactIOSGlobalInteractionHandler"),
        v = require/*t*/("ReactIOSGlobalResponderHandler"),
        S = require/*t*/("ReactIOSMount"),
        b = require/*t*/("ReactTextComponent"),
        R = require/*t*/("ReactUpdates"),
        w = require/*t*/("ResponderEventPlugin"),
        C = require/*t*/("RKRawText"),
        E = require/*t*/("UniversalWorkerNodeHandle");
    require/*t*/("RCTEventEmitter"), require/*t*/("RCTLog"), require/*t*/("RCTJSTimers"), module/*i*/.exports = {
        inject: o
    }
});