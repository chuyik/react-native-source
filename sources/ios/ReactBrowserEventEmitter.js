__d("ReactBrowserEventEmitter",["EventConstants","EventPluginHub","EventPluginRegistry","ReactEventEmitterMixin","ViewportMetrics","isEventSupported"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        return Object.prototype.hasOwnProperty.call(e, g) || (e[g] = f++, d[e[g]] = {}), d[e[g]]
    }
    var EventConstants/*a*/ = t("EventConstants"),
        EventPluginHub/*s*/ = t("EventPluginHub"),
        EventPluginRegistry/*l*/ = t("EventPluginRegistry"),
        ReactEventEmitterMixin/*u*/ = t("ReactEventEmitterMixin"),
        ViewportMetrics/*c*/ = t("ViewportMetrics"),
        isEventSupported/*p*/ = t("isEventSupported"),
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
                injectReactEventListener: function(e) {
                    e.setHandleTopLevel(_.handleTopLevel), _.ReactEventListener = e
                }
            },
            setEnabled: function(e) {
                _.ReactEventListener && _.ReactEventListener.setEnabled(e)
            },
            isEnabled: function() {
                return !(!_.ReactEventListener || !_.ReactEventListener.isEnabled())
            },
            listenTo: function(e, t) {
                for (var n = t, r = o(n), i = EventPluginRegistry/*l*/.registrationNameDependencies[e], EventPluginHub/*s*/ = EventConstants/*a*/.topLevelTypes, ReactEventEmitterMixin/*u*/ = 0, ViewportMetrics/*c*/ = i.length; ViewportMetrics/*c*/ > ReactEventEmitterMixin/*u*/; ReactEventEmitterMixin/*u*/++) {
                    var d = i[ReactEventEmitterMixin/*u*/];
                    r.hasOwnProperty(d) && r[d] || (d === EventPluginHub/*s*/.topWheel ? isEventSupported/*p*/("wheel") ? _.ReactEventListener.trapBubbledEvent(EventPluginHub/*s*/.topWheel, "wheel", n) : isEventSupported/*p*/("mousewheel") ? _.ReactEventListener.trapBubbledEvent(EventPluginHub/*s*/.topWheel, "mousewheel", n) : _.ReactEventListener.trapBubbledEvent(EventPluginHub/*s*/.topWheel, "DOMMouseScroll", n) : d === EventPluginHub/*s*/.topScroll ? isEventSupported/*p*/("scroll", !0) ? _.ReactEventListener.trapCapturedEvent(EventPluginHub/*s*/.topScroll, "scroll", n) : _.ReactEventListener.trapBubbledEvent(EventPluginHub/*s*/.topScroll, "scroll", _.ReactEventListener.WINDOW_HANDLE) : d === EventPluginHub/*s*/.topFocus || d === EventPluginHub/*s*/.topBlur ? (isEventSupported/*p*/("focus", !0) ? (_.ReactEventListener.trapCapturedEvent(EventPluginHub/*s*/.topFocus, "focus", n), _.ReactEventListener.trapCapturedEvent(EventPluginHub/*s*/.topBlur, "blur", n)) : isEventSupported/*p*/("focusin") && (_.ReactEventListener.trapBubbledEvent(EventPluginHub/*s*/.topFocus, "focusin", n), _.ReactEventListener.trapBubbledEvent(EventPluginHub/*s*/.topBlur, "focusout", n)), r[EventPluginHub/*s*/.topBlur] = !0, r[EventPluginHub/*s*/.topFocus] = !0) : m.hasOwnProperty(d) && _.ReactEventListener.trapBubbledEvent(d, m[d], n), r[d] = !0)
                }
            },
            trapBubbledEvent: function(e, t, n) {
                return _.ReactEventListener.trapBubbledEvent(e, t, n)
            },
            trapCapturedEvent: function(e, t, n) {
                return _.ReactEventListener.trapCapturedEvent(e, t, n)
            },
            ensureScrollValueMonitoring: function() {
                if (!h) {
                    var e = ViewportMetrics/*c*/.refreshScrollValues;
                    _.ReactEventListener.monitorScrollValue(e), h = !0
                }
            },
            eventNameDispatchConfigs: EventPluginHub/*s*/.eventNameDispatchConfigs,
            registrationNameModules: EventPluginHub/*s*/.registrationNameModules,
            putListener: EventPluginHub/*s*/.putListener,
            getListener: EventPluginHub/*s*/.getListener,
            deleteListener: EventPluginHub/*s*/.deleteListener,
            deleteAllListeners: EventPluginHub/*s*/.deleteAllListeners
        });
    i.exports = _
});