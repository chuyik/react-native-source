__d("ReactIOSDefaultInjection",["InitializeJavaScriptAppEngine","EventPluginHub","EventPluginUtils","IOSDefaultEventPluginOrder","IOSNativeBridgeEventPlugin","NodeHandle","ReactComponent","ReactCompositeComponent","ReactDefaultBatchingStrategy","ReactElement","ReactInstanceHandles","ReactIOSComponentEnvironment","ReactIOSComponentMixin","ReactIOSGlobalInteractionHandler","ReactIOSGlobalResponderHandler","ReactIOSMount","ReactTextComponent","ReactUpdates","ResponderEventPlugin","RKRawText","UniversalWorkerNodeHandle","RCTEventEmitter","RCTLog","RCTJSTimers"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        a.injection.injectEventPluginOrder(ReactTextComponent/*l*/), exports/*a.injection.injectInstanceHandle*/(RCTJSTimers/*m*/), InitializeJavaScriptAppEngine/*w.injection.injectGlobalResponderHandler*/(v), EventPluginHub/*w.injection.injectGlobalInteractionHandler*/(y), EventPluginUtils/*a.injection.injectEventPluginsByName*/({
            ResponderEventPlugin: w,
            IOSDefaultEventPluginOrder/*IOSNativeBridgeEventPlugin*/: ReactUpdates/*u*/
        }), IOSNativeBridgeEventPlugin/*R.injection.injectReconcileTransaction*/(g.ReactReconcileTransaction), NodeHandle/*R.injection.injectBatchingStrategy*/(RCTEventEmitter/*h*/), ReactComponent/*RKRawText/*p*/.injection.injectEnvironment*/(g), ReactCompositeComponent/*ReactIOSMount/*s*/.injection.injectMount*/(S), ReactDefaultBatchingStrategy/*UniversalWorkerNodeHandle/*d*/.injection.injectMixin*/(_), ReactElement/*b.inject*/(function(global/*e*/) {
            return new RCTLog/*f*/(C.type, ReactInstanceHandles/*ReactIOSComponentEnvironment/*ReactIOSComponentMixin/*ReactIOSGlobalInteractionHandler/*null*/*/*/*/, ReactInstanceHandles/*ReactIOSComponentEnvironment/*ReactIOSComponentMixin/*ReactIOSGlobalInteractionHandler/*null*/*/*/*/, ReactInstanceHandles/*ReactIOSComponentEnvironment/*ReactIOSComponentMixin/*ReactIOSGlobalInteractionHandler/*null*/*/*/*/, ReactInstanceHandles/*ReactIOSComponentEnvironment/*ReactIOSComponentMixin/*ReactIOSGlobalInteractionHandler/*null*/*/*/*/, {
                text: global/*e*/
            })
        }), ReactIOSGlobalResponderHandler/*ResponderEventPlugin/*c*/.injection.injectImplementation*/(E)
    }
    require/*t*/("InitializeJavaScriptAppEngine");
    var a = require/*t*/("EventPluginHub"),
        ReactIOSMount/*s*/ = require/*t*/("EventPluginUtils"),
        ReactTextComponent/*l*/ = require/*t*/("IOSDefaultEventPluginOrder"),
        ReactUpdates/*u*/ = require/*t*/("IOSDefaultEventPluginOrder/*IOSNativeBridgeEventPlugin*/"),
        ResponderEventPlugin/*c*/ = require/*t*/("NodeHandle"),
        RKRawText/*p*/ = require/*t*/("ReactComponent"),
        UniversalWorkerNodeHandle/*d*/ = require/*t*/("ReactCompositeComponent"),
        RCTEventEmitter/*h*/ = require/*t*/("ReactDefaultBatchingStrategy"),
        RCTLog/*f*/ = require/*t*/("ReactElement"),
        RCTJSTimers/*m*/ = require/*t*/("ReactInstanceHandles"),
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