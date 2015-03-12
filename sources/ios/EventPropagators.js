__d("EventPropagators",["EventConstants","EventPluginHub","accumulateInto","forEachAccumulated"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t, n) {
        var r = t.dispatchConfig.phasedRegistrationNames[n];
        return S(e, r)
    }

    function a(e, t, n) {
        if (__DEV__ && !e) throw new Error("Dispatching id must not be null");
        var r = t ? v.bubbled : v.captured,
            i = o(e, n, r);
        i && (n._dispatchListeners = accumulateInto/*_*/(n._dispatchListeners, i), n._dispatchIDs = accumulateInto/*_*/(n._dispatchIDs, e))
    }

    function s(e) {
        e && e.dispatchConfig.phasedRegistrationNames && EventPluginHub/*g*/.injection.getInstanceHandle().traverseTwoPhase(e.dispatchMarker, a, e)
    }

    function l(e) {
        e && e.dispatchConfig.phasedRegistrationNames && EventPluginHub/*g*/.injection.getInstanceHandle().traverseTwoPhaseSkipTarget(e.dispatchMarker, a, e)
    }

    function u(e, t, n) {
        if (n && n.dispatchConfig.registrationName) {
            var r = n.dispatchConfig.registrationName,
                i = S(e, r);
            i && (n._dispatchListeners = accumulateInto/*_*/(n._dispatchListeners, i), n._dispatchIDs = accumulateInto/*_*/(n._dispatchIDs, e))
        }
    }

    function c(e) {
        e && e.dispatchConfig.registrationName && u(e.dispatchMarker, null, e)
    }

    function p(e) {
        forEachAccumulated/*y*/(e, s)
    }

    function d(e) {
        forEachAccumulated/*y*/(e, l)
    }

    function h(e, t, n, r) {
        EventPluginHub/*g*/.injection.getInstanceHandle().traverseEnterLeave(n, r, u, e, t)
    }

    function f(e) {
        forEachAccumulated/*y*/(e, c)
    }
    var EventConstants/*m*/ = t("EventConstants"),
        EventPluginHub/*g*/ = t("EventPluginHub"),
        accumulateInto/*_*/ = t("accumulateInto"),
        forEachAccumulated/*y*/ = t("forEachAccumulated"),
        v = EventConstants/*m*/.PropagationPhases,
        S = EventPluginHub/*g*/.getListener,
        b = {
            accumulateTwoPhaseDispatches: p,
            accumulateTwoPhaseDispatchesSkipTarget: d,
            accumulateDirectDispatches: f,
            accumulateEnterLeaveDispatches: h
        };
    i.exports = b
});