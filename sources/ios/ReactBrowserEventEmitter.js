__d("ReactBrowserEventEmitter",["EventConstants","EventPluginHub","EventPluginRegistry","ReactEventEmitterMixin","ViewportMetrics","isEventSupported"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        return Object.prototype.hasOwnProperty.call(global/*e*/, g) || (global/*e*/[g] = f++, d[global/*e*/[g]] = {}), d[global/*e*/[g]]
    }
    var a = require/*t*/("EventConstants"),
        s = require/*t*/("EventPluginHub"),
        l = require/*t*/("EventPluginRegistry"),
        u = require/*t*/("ReactEventEmitterMixin"),
        c = require/*t*/("ViewportMetrics"),
        p = require/*t*/("isEventSupported"),
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
        _ = Object.assign({}, u, {
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
                for (var requireDynamic/*n*/ = require/*t*/, requireLazy/*r*/ = o(requireDynamic/*n*/), module/*i*/ = l.registrationNameDependencies[global/*e*/], s = a.topLevelTypes, u = 0, c = module/*i*/.length; c > u; u++) {
                    var d = module/*i*/[u];
                    requireLazy/*r*/.hasOwnProperty(d) && requireLazy/*r*/[d] || (d === s.topWheel ? p("wheel") ? _.ReactEventListener.trapBubbledEvent(s.topWheel, "wheel", requireDynamic/*n*/) : p("mousewheel") ? _.ReactEventListener.trapBubbledEvent(s.topWheel, "mousewheel", requireDynamic/*n*/) : _.ReactEventListener.trapBubbledEvent(s.topWheel, "DOMMouseScroll", requireDynamic/*n*/) : d === s.topScroll ? p("scroll", !0) ? _.ReactEventListener.trapCapturedEvent(s.topScroll, "scroll", requireDynamic/*n*/) : _.ReactEventListener.trapBubbledEvent(s.topScroll, "scroll", _.ReactEventListener.WINDOW_HANDLE) : d === s.topFocus || d === s.topBlur ? (p("focus", !0) ? (_.ReactEventListener.trapCapturedEvent(s.topFocus, "focus", requireDynamic/*n*/), _.ReactEventListener.trapCapturedEvent(s.topBlur, "blur", requireDynamic/*n*/)) : p("focusin") && (_.ReactEventListener.trapBubbledEvent(s.topFocus, "focusin", requireDynamic/*n*/), _.ReactEventListener.trapBubbledEvent(s.topBlur, "focusout", requireDynamic/*n*/)), requireLazy/*r*/[s.topBlur] = !0, requireLazy/*r*/[s.topFocus] = !0) : m.hasOwnProperty(d) && _.ReactEventListener.trapBubbledEvent(d, m[d], requireDynamic/*n*/), requireLazy/*r*/[d] = !0)
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
                    var global/*e*/ = c.refreshScrollValues;
                    _.ReactEventListener.monitorScrollValue(global/*e*/), h = !0
                }
            },
            eventNameDispatchConfigs: s.eventNameDispatchConfigs,
            registrationNameModules: s.registrationNameModules,
            putListener: s.putListener,
            getListener: s.getListener,
            deleteListener: s.deleteListener,
            deleteAllListeners: s.deleteAllListeners
        });
    module/*i*/.exports = _
});