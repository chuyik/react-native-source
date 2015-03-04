__d("ReactIOSDefaultInjection",["InitializeJavaScriptAppEngine","EventPluginHub","EventPluginUtils","IOSDefaultEventPluginOrder","IOSNativeBridgeEventPlugin","NodeHandle","ReactComponent","ReactCompositeComponent","ReactDefaultBatchingStrategy","ReactElement","ReactInstanceHandles","ReactIOSComponentEnvironment","ReactIOSComponentMixin","ReactIOSGlobalInteractionHandler","ReactIOSGlobalResponderHandler","ReactIOSMount","ReactTextComponent","ReactUpdates","ResponderEventPlugin","RKRawText","UniversalWorkerNodeHandle","RCTEventEmitter","RCTLog","RCTJSTimers"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        EventPluginHub/*a*/.injection.injectEventPluginOrder(IOSDefaultEventPluginOrder/*l*/), EventPluginHub/*a*/.injection.injectInstanceHandle(ReactInstanceHandles/*m*/), ResponderEventPlugin/*w*/.injection.injectGlobalResponderHandler(ReactIOSGlobalResponderHandler/*v*/), ResponderEventPlugin/*w*/.injection.injectGlobalInteractionHandler(ReactIOSGlobalInteractionHandler/*y*/), EventPluginHub/*a*/.injection.injectEventPluginsByName({
            ResponderEventPlugin: ResponderEventPlugin/*w*/,
            IOSNativeBridgeEventPlugin: IOSNativeBridgeEventPlugin/*u*/
        }), ReactUpdates/*R*/.injection.injectReconcileTransaction(ReactIOSComponentEnvironment/*g*/.ReactReconcileTransaction), ReactUpdates/*R*/.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy/*h*/), ReactComponent/*p*/.injection.injectEnvironment(ReactIOSComponentEnvironment/*g*/), EventPluginUtils/*s*/.injection.injectMount(ReactIOSMount/*S*/), ReactCompositeComponent/*d*/.injection.injectMixin(ReactIOSComponentMixin/*_*/), ReactTextComponent/*b*/.inject(function(global/*e*/) {
            return new ReactElement/*f*/(RKRawText/*C*/.type, null, null, null, null, {
                text: global/*e*/
            })
        }), NodeHandle/*c*/.injection.injectImplementation(UniversalWorkerNodeHandle/*E*/)
    }
    require/*t*/("InitializeJavaScriptAppEngine");
    var EventPluginHub/*a*/ = require/*t*/("EventPluginHub"),
        EventPluginUtils/*s*/ = require/*t*/("EventPluginUtils"),
        IOSDefaultEventPluginOrder/*l*/ = require/*t*/("IOSDefaultEventPluginOrder"),
        IOSNativeBridgeEventPlugin/*u*/ = require/*t*/("IOSNativeBridgeEventPlugin"),
        NodeHandle/*c*/ = require/*t*/("NodeHandle"),
        ReactComponent/*p*/ = require/*t*/("ReactComponent"),
        ReactCompositeComponent/*d*/ = require/*t*/("ReactCompositeComponent"),
        ReactDefaultBatchingStrategy/*h*/ = require/*t*/("ReactDefaultBatchingStrategy"),
        ReactElement/*f*/ = require/*t*/("ReactElement"),
        ReactInstanceHandles/*m*/ = require/*t*/("ReactInstanceHandles"),
        ReactIOSComponentEnvironment/*g*/ = require/*t*/("ReactIOSComponentEnvironment"),
        ReactIOSComponentMixin/*_*/ = require/*t*/("ReactIOSComponentMixin"),
        ReactIOSGlobalInteractionHandler/*y*/ = require/*t*/("ReactIOSGlobalInteractionHandler"),
        ReactIOSGlobalResponderHandler/*v*/ = require/*t*/("ReactIOSGlobalResponderHandler"),
        ReactIOSMount/*S*/ = require/*t*/("ReactIOSMount"),
        ReactTextComponent/*b*/ = require/*t*/("ReactTextComponent"),
        ReactUpdates/*R*/ = require/*t*/("ReactUpdates"),
        ResponderEventPlugin/*w*/ = require/*t*/("ResponderEventPlugin"),
        RKRawText/*C*/ = require/*t*/("RKRawText"),
        UniversalWorkerNodeHandle/*E*/ = require/*t*/("UniversalWorkerNodeHandle");
    require/*t*/("RCTEventEmitter"), require/*t*/("RCTLog"), require/*t*/("RCTJSTimers"), module/*i*/.exports = {
        inject: o
    }
});