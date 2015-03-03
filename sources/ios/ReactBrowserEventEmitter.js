__d("ReactBrowserEventEmitter",["EventConstants","EventPluginHub","EventPluginRegistry","ReactEventEmitterMixin","ViewportMetrics","isEventSupported"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        return Object.prototype.hasOwnProperty.call(global/*e*/, exports/*g*/) || (global/*e*/[exports/*g*/] = f++, EventConstants/*EventPluginHub/*d*/*/[global/*e*/[exports/*g*/]] = {}), EventConstants/*EventPluginHub/*d*/*/[global/*e*/[exports/*g*/]]
    }
    var a = require/*t*/("EventConstants"),
        EventPluginRegistry/*s*/ = require/*t*/("EventPluginHub"),
        ReactEventEmitterMixin/*l*/ = require/*t*/("EventPluginRegistry"),
        ViewportMetrics/*u*/ = require/*t*/("ReactEventEmitterMixin"),
        isEventSupported/*c*/ = require/*t*/("ViewportMetrics"),
        p = require/*t*/("isEventSupported"),
        EventConstants/*EventPluginHub/*d*/*/ = {},
        h = !1,
        f = 0,
        m = {
            topBlur: "blur",
            topChange: "change",
            topClick: "click",
            topCompositionEnd: "compositionend",
            topCompositionStart: "compositionstart",
            topCompositionUpdate: "compositionupdate",
            topContextMenu: "contextmenu",
            topCopy: "copy",
            topCut: "cut",
            topDoubleClick: "dblclick",
            topDrag: "drag",
            topDragEnd: "dragend",
            topDragEnter: "dragenter",
            topDragExit: "dragexit",
            topDragLeave: "dragleave",
            topDragOver: "dragover",
            topDragStart: "dragstart",
            topDrop: "drop",
            topFocus: "focus",
            topInput: "input",
            topKeyDown: "keydown",
            topKeyPress: "keypress",
            topKeyUp: "keyup",
            topMouseDown: "mousedown",
            topMouseMove: "mousemove",
            topMouseOut: "mouseout",
            topMouseOver: "mouseover",
            topMouseUp: "mouseup",
            topPaste: "paste",
            topScroll: "scroll",
            topSelectionChange: "selectionchange",
            topTextInput: "textInput",
            topTouchCancel: "touchcancel",
            topTouchEnd: "touchend",
            topTouchMove: "touchmove",
            topTouchStart: "touchstart",
            topWheel: "wheel"
        },
        exports/*g*/ = "_reactListenersID" + String(Math.random()).slice(2),
        _ = Object.assign({}, ViewportMetrics/*u*/, {
            ReactEventListener: null,
            injection: {
                injectReactEventListener: function(global/*e*/) {
                    global/*e*/.setHandleTopLevel(_.handleTopLevel), _.ReactEventListener = global/*e*/
                }
            },
            setEnabled: function(global/*e*/) {
                _.ReactEventListener && _.ReactEventListener.setEnabled(global/*e*/)
            },
            isEnabled: function() {
                return !(!_.ReactEventListener || !_.ReactEventListener.isEnabled())
            },
            listenTo: function(global/*e*/, require/*t*/) {
                for (var requireDynamic/*n*/ = require/*t*/, requireLazy/*r*/ = o(requireDynamic/*n*/), module/*i*/ = ReactEventEmitterMixin/*l*/.registrationNameDependencies[global/*e*/], EventPluginRegistry/*s*/ = a.topLevelTypes, ViewportMetrics/*u*/ = 0, isEventSupported/*c*/ = module/*i*/.length; isEventSupported/*c*/ > ViewportMetrics/*u*/; ViewportMetrics/*u*/++) {
                    var EventConstants/*EventPluginHub/*d*/*/ = module/*i*/[ViewportMetrics/*u*/];
                    requireLazy/*r*/.hasOwnProperty(EventConstants/*EventPluginHub/*d*/*/) && requireLazy/*r*/[EventConstants/*EventPluginHub/*d*/*/] || (EventConstants/*EventPluginHub/*d*/*/ === EventPluginRegistry/*s*/.topWheel ? p("wheel") ? _.ReactEventListener.trapBubbledEvent(EventPluginRegistry/*s*/.topWheel, "wheel", requireDynamic/*n*/) : p("mousewheel") ? _.ReactEventListener.trapBubbledEvent(EventPluginRegistry/*s*/.topWheel, "mousewheel", requireDynamic/*n*/) : _.ReactEventListener.trapBubbledEvent(EventPluginRegistry/*s*/.topWheel, "DOMMouseScroll", requireDynamic/*n*/) : EventConstants/*EventPluginHub/*d*/*/ === EventPluginRegistry/*s*/.topScroll ? p("scroll", !0) ? _.ReactEventListener.trapCapturedEvent(EventPluginRegistry/*s*/.topScroll, "scroll", requireDynamic/*n*/) : _.ReactEventListener.trapBubbledEvent(EventPluginRegistry/*s*/.topScroll, "scroll", _.ReactEventListener.WINDOW_HANDLE) : EventConstants/*EventPluginHub/*d*/*/ === EventPluginRegistry/*s*/.topFocus || EventConstants/*EventPluginHub/*d*/*/ === EventPluginRegistry/*s*/.topBlur ? (p("focus", !0) ? (_.ReactEventListener.trapCapturedEvent(EventPluginRegistry/*s*/.topFocus, "focus", requireDynamic/*n*/), _.ReactEventListener.trapCapturedEvent(EventPluginRegistry/*s*/.topBlur, "blur", requireDynamic/*n*/)) : p("focusin") && (_.ReactEventListener.trapBubbledEvent(EventPluginRegistry/*s*/.topFocus, "focusin", requireDynamic/*n*/), _.ReactEventListener.trapBubbledEvent(EventPluginRegistry/*s*/.topBlur, "focusout", requireDynamic/*n*/)), requireLazy/*r*/[EventPluginRegistry/*s*/.topBlur] = !0, requireLazy/*r*/[EventPluginRegistry/*s*/.topFocus] = !0) : m.hasOwnProperty(EventConstants/*EventPluginHub/*d*/*/) && _.ReactEventListener.trapBubbledEvent(EventConstants/*EventPluginHub/*d*/*/, m[EventConstants/*EventPluginHub/*d*/*/], requireDynamic/*n*/), requireLazy/*r*/[EventConstants/*EventPluginHub/*d*/*/] = !0)
                }
            },
            trapBubbledEvent: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                return _.ReactEventListener.trapBubbledEvent(global/*e*/, require/*t*/, requireDynamic/*n*/)
            },
            trapCapturedEvent: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                return _.ReactEventListener.trapCapturedEvent(global/*e*/, require/*t*/, requireDynamic/*n*/)
            },
            ensureScrollValueMonitoring: function() {
                if (!h) {
                    var global/*e*/ = isEventSupported/*c*/.refreshScrollValues;
                    _.ReactEventListener.monitorScrollValue(global/*e*/), h = !0
                }
            },
            eventNameDispatchConfigs: EventPluginRegistry/*s*/.eventNameDispatchConfigs,
            registrationNameModules: EventPluginRegistry/*s*/.registrationNameModules,
            putListener: EventPluginRegistry/*s*/.putListener,
            getListener: EventPluginRegistry/*s*/.getListener,
            deleteListener: EventPluginRegistry/*s*/.deleteListener,
            deleteAllListeners: EventPluginRegistry/*s*/.deleteAllListeners
        });
    module/*i*/.exports = _
});