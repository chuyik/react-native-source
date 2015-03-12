__d("EventPluginUtils",["EventConstants","invariant"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        return e === v.topMouseUp || e === v.topTouchEnd || e === v.topTouchCancel
    }

    function a(e) {
        return e === v.topMouseMove || e === v.topTouchMove
    }

    function s(e) {
        return e === v.topMouseDown || e === v.topTouchStart
    }

    function l(e, t) {
        var n = e._dispatchListeners,
            r = e._dispatchIDs;
        if (__DEV__ && m(e), Array.isArray(n))
            for (var i = 0; i < n.length && !e.isPropagationStopped(); i++) t(e, n[i], r[i]);
        else n && t(e, n, r)
    }

    function u(e, t, n) {
        e.currentTarget = y.Mount.getNode(n);
        var r = t(e, n);
        return e.currentTarget = null, r
    }

    function c(e, t) {
        l(e, t), e._dispatchListeners = null, e._dispatchIDs = null
    }

    function p(e) {
        var t = e._dispatchListeners,
            n = e._dispatchIDs;
        if (__DEV__ && m(e), Array.isArray(t)) {
            for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
                if (t[r](e, n[r])) return n[r]
        } else if (t && t(e, n)) return n;
        return null
    }

    function d(e) {
        var t = p(e);
        return e._dispatchIDs = null, e._dispatchListeners = null, t
    }

    function h(e) {
        __DEV__ && m(e);
        var t = e._dispatchListeners,
            n = e._dispatchIDs;
        Array.isArray(t) && invariant/*_*/(0, "executeDirectDispatch(...): Invalid `event`.");
        var r = t ? t(e, n) : null;
        return e._dispatchListeners = null, e._dispatchIDs = null, r
    }

    function f(e) {
        return !!e._dispatchListeners
    }
    var m, EventConstants/*g*/ = t("EventConstants"),
        invariant/*_*/ = t("invariant"),
        y = {
            Mount: null,
            injectMount: function(e) {
                y.Mount = e, __DEV__ && (e && e.getNode || invariant/*_*/(0, "EventPluginUtils.injection.injectMount(...): Injected Mount module is missing getNode."))
            }
        },
        v = EventConstants/*g*/.topLevelTypes;
    __DEV__ && (m = function(e) {
        var t = e._dispatchListeners,
            n = e._dispatchIDs,
            r = Array.isArray(t),
            i = Array.isArray(n),
            o = i ? n.length : n ? 1 : 0,
            a = r ? t.length : t ? 1 : 0;
        (i !== r || o !== a) && invariant/*_*/(0, "EventPluginUtils: Invalid `event`.")
    });
    var S = {
        isEndish: o,
        isMoveish: a,
        isStartish: s,
        executeDirectDispatch: h,
        executeDispatch: u,
        executeDispatchesInOrder: c,
        executeDispatchesInOrderStopAtTrue: d,
        hasDispatches: f,
        injection: y,
        useTouchEvents: !1
    };
    i.exports = S
});