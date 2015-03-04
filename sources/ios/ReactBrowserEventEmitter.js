__d("ReactBrowserEventEmitter",["EventConstants","EventPluginHub","EventPluginRegistry","ReactEventEmitterMixin","ViewportMetrics","isEventSupported"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        return Object.prototype.hasOwnProperty.call(global/*e*/, g) || (global/*e*/[g] = f++, d[global/*e*/[g]] = {}), d[global/*e*/[g]]
    }
    var EventConstants/*a*/ = require/*t*/("EventConstants"),
        EventPluginHub/*s*/ = require/*t*/("EventPluginHub"),
        EventPluginRegistry/*l*/ = require/*t*/("EventPluginRegistry"),
        ReactEventEmitterMixin/*u*/ = require/*t*/("ReactEventEmitterMixin"),
        ViewportMetrics/*c*/ = require/*t*/("ViewportMetrics"),
        isEventSupported/*p*/ = require/*t*/("isEventSupported"),
        d = {},
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
        g = "_reactListenersID" + String(Math.random()).slice(2),
        _ = Object.assign({}, ReactEventEmitterMixin/*u*/, {
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
                for (var requireDynamic/*n*/ = require/*t*/, requireLazy/*r*/ = o(requireDynamic/*n*/), module/*i*/ = EventPluginRegistry/*l*/.registrationNameDependencies[global/*e*/], EventPluginHub/*s*/ = EventConstants/*a*/.topLevelTypes, ReactEventEmitterMixin/*u*/ = 0, ViewportMetrics/*c*/ = module/*i*/.length; ViewportMetrics/*c*/ > ReactEventEmitterMixin/*u*/; ReactEventEmitterMixin/*u*/++) {
                    var d = module/*i*/[ReactEventEmitterMixin/*u*/];
                    requireLazy/*r*/.hasOwnProperty(d) && requireLazy/*r*/[d] || (d === EventPluginHub/*s*/.topWheel ? isEventSupported/*p*/("wheel") ? _.ReactEventListener.trapBubbledEvent(EventPluginHub/*s*/.topWheel, "wheel", requireDynamic/*n*/) : isEventSupported/*p*/("mousewheel") ? _.ReactEventListener.trapBubbledEvent(EventPluginHub/*s*/.topWheel, "mousewheel", requireDynamic/*n*/) : _.ReactEventListener.trapBubbledEvent(EventPluginHub/*s*/.topWheel, "DOMMouseScroll", requireDynamic/*n*/) : d === EventPluginHub/*s*/.topScroll ? isEventSupported/*p*/("scroll", !0) ? _.ReactEventListener.trapCapturedEvent(EventPluginHub/*s*/.topScroll, "scroll", requireDynamic/*n*/) : _.ReactEventListener.trapBubbledEvent(EventPluginHub/*s*/.topScroll, "scroll", _.ReactEventListener.WINDOW_HANDLE) : d === EventPluginHub/*s*/.topFocus || d === EventPluginHub/*s*/.topBlur ? (isEventSupported/*p*/("focus", !0) ? (_.ReactEventListener.trapCapturedEvent(EventPluginHub/*s*/.topFocus, "focus", requireDynamic/*n*/), _.ReactEventListener.trapCapturedEvent(EventPluginHub/*s*/.topBlur, "blur", requireDynamic/*n*/)) : isEventSupported/*p*/("focusin") && (_.ReactEventListener.trapBubbledEvent(EventPluginHub/*s*/.topFocus, "focusin", requireDynamic/*n*/), _.ReactEventListener.trapBubbledEvent(EventPluginHub/*s*/.topBlur, "focusout", requireDynamic/*n*/)), requireLazy/*r*/[EventPluginHub/*s*/.topBlur] = !0, requireLazy/*r*/[EventPluginHub/*s*/.topFocus] = !0) : m.hasOwnProperty(d) && _.ReactEventListener.trapBubbledEvent(d, m[d], requireDynamic/*n*/), requireLazy/*r*/[d] = !0)
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
                    var global/*e*/ = ViewportMetrics/*c*/.refreshScrollValues;
                    _.ReactEventListener.monitorScrollValue(global/*e*/), h = !0
                }
            },
            eventNameDispatchConfigs: EventPluginHub/*s*/.eventNameDispatchConfigs,
            registrationNameModules: EventPluginHub/*s*/.registrationNameModules,
            putListener: EventPluginHub/*s*/.putListener,
            getListener: EventPluginHub/*s*/.getListener,
            deleteListener: EventPluginHub/*s*/.deleteListener,
            deleteAllListeners: EventPluginHub/*s*/.deleteAllListeners
        });
    module/*i*/.exports = _
});