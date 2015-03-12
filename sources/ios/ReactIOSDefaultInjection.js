__d("ReactIOSDefaultInjection",["InitializeJavaScriptAppEngine","EventPluginHub","EventPluginUtils","IOSDefaultEventPluginOrder","IOSNativeBridgeEventPlugin","NodeHandle","ReactComponent","ReactCompositeComponent","ReactDefaultBatchingStrategy","ReactElement","ReactInstanceHandles","ReactIOSComponentEnvironment","ReactIOSComponentMixin","ReactIOSGlobalInteractionHandler","ReactIOSGlobalResponderHandler","ReactIOSMount","ReactTextComponent","ReactUpdates","ResponderEventPlugin","RKRawText","UniversalWorkerNodeHandle","RCTEventEmitter","RCTLog","RCTJSTimers"],function (e, t, n, r, i) {
    "use strict";

    function o() {
        EventPluginHub/*a*/.injection.injectEventPluginOrder(IOSDefaultEventPluginOrder/*l*/), EventPluginHub/*a*/.injection.injectInstanceHandle(ReactInstanceHandles/*m*/), ResponderEventPlugin/*w*/.injection.injectGlobalResponderHandler(ReactIOSGlobalResponderHandler/*v*/), ResponderEventPlugin/*w*/.injection.injectGlobalInteractionHandler(ReactIOSGlobalInteractionHandler/*y*/), EventPluginHub/*a*/.injection.injectEventPluginsByName({
            ResponderEventPlugin: ResponderEventPlugin/*w*/,
            IOSNativeBridgeEventPlugin: IOSNativeBridgeEventPlugin/*u*/
        }), ReactUpdates/*R*/.injection.injectReconcileTransaction(ReactIOSComponentEnvironment/*g*/.ReactReconcileTransaction), ReactUpdates/*R*/.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy/*h*/), ReactComponent/*p*/.injection.injectEnvironment(ReactIOSComponentEnvironment/*g*/), EventPluginUtils/*s*/.injection.injectMount(ReactIOSMount/*S*/), ReactCompositeComponent/*d*/.injection.injectMixin(ReactIOSComponentMixin/*_*/), ReactTextComponent/*b*/.inject(function(e) {
            return new ReactElement/*f*/(RKRawText/*C*/.type, null, null, null, null, {
                text: e
            })
        }), NodeHandle/*c*/.injection.injectImplementation(UniversalWorkerNodeHandle/*E*/)
    }
    t("InitializeJavaScriptAppEngine");
    var EventPluginHub/*a*/ = t("EventPluginHub"),
        EventPluginUtils/*s*/ = t("EventPluginUtils"),
        IOSDefaultEventPluginOrder/*l*/ = t("IOSDefaultEventPluginOrder"),
        IOSNativeBridgeEventPlugin/*u*/ = t("IOSNativeBridgeEventPlugin"),
        NodeHandle/*c*/ = t("NodeHandle"),
        ReactComponent/*p*/ = t("ReactComponent"),
        ReactCompositeComponent/*d*/ = t("ReactCompositeComponent"),
        ReactDefaultBatchingStrategy/*h*/ = t("ReactDefaultBatchingStrategy"),
        ReactElement/*f*/ = t("ReactElement"),
        ReactInstanceHandles/*m*/ = t("ReactInstanceHandles"),
        ReactIOSComponentEnvironment/*g*/ = t("ReactIOSComponentEnvironment"),
        ReactIOSComponentMixin/*_*/ = t("ReactIOSComponentMixin"),
        ReactIOSGlobalInteractionHandler/*y*/ = t("ReactIOSGlobalInteractionHandler"),
        ReactIOSGlobalResponderHandler/*v*/ = t("ReactIOSGlobalResponderHandler"),
        ReactIOSMount/*S*/ = t("ReactIOSMount"),
        ReactTextComponent/*b*/ = t("ReactTextComponent"),
        ReactUpdates/*R*/ = t("ReactUpdates"),
        ResponderEventPlugin/*w*/ = t("ResponderEventPlugin"),
        RKRawText/*C*/ = t("RKRawText"),
        UniversalWorkerNodeHandle/*E*/ = t("UniversalWorkerNodeHandle");
    t("RCTEventEmitter"), t("RCTLog"), t("RCTJSTimers"), i.exports = {
        inject: o
    }
});