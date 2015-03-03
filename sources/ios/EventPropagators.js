__d("EventPropagators",["EventConstants","EventPluginHub","accumulateInto","forEachAccumulated"],function (global/*e*/, require/*exports/*accumulateInto/*t*/*/*/, requireDynamic/*EventConstants/*forEachAccumulated/*n*/*/*/, requireLazy/*EventPluginHub/*r*/*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*accumulateInto/*t*/*/*/, requireDynamic/*EventConstants/*forEachAccumulated/*n*/*/*/) {
        var requireLazy/*EventPluginHub/*r*/*/ = require/*exports/*accumulateInto/*t*/*/*/.dispatchConfig.phasedRegistrationNames[requireDynamic/*EventConstants/*forEachAccumulated/*n*/*/*/];
        return S(global/*e*/, requireLazy/*EventPluginHub/*r*/*/)
    }

    function a(global/*e*/, require/*exports/*accumulateInto/*t*/*/*/, requireDynamic/*EventConstants/*forEachAccumulated/*n*/*/*/) {
        if (__DEV__ && !global/*e*/) throw new Error("Dispatching id must not be null");
        var requireLazy/*EventPluginHub/*r*/*/ = require/*exports/*accumulateInto/*t*/*/*/ ? v.bubbled : v.captured,
            module/*i*/ = o(global/*e*/, requireDynamic/*EventConstants/*forEachAccumulated/*n*/*/*/, requireLazy/*EventPluginHub/*r*/*/);
        module/*i*/ && (requireDynamic/*EventConstants/*forEachAccumulated/*n*/*/*/._dispatchListeners = _(requireDynamic/*EventConstants/*forEachAccumulated/*n*/*/*/._dispatchListeners, module/*i*/), requireDynamic/*EventConstants/*forEachAccumulated/*n*/*/*/._dispatchIDs = _(requireDynamic/*EventConstants/*forEachAccumulated/*n*/*/*/._dispatchIDs, global/*e*/))
    }

    function s(global/*e*/) {
        global/*e*/ && global/*e*/.dispatchConfig.phasedRegistrationNames && g.injection.getInstanceHandle().traverseTwoPhase(global/*e*/.dispatchMarker, a, global/*e*/)
    }

    function l(global/*e*/) {
        global/*e*/ && global/*e*/.dispatchConfig.phasedRegistrationNames && g.injection.getInstanceHandle().traverseTwoPhaseSkipTarget(global/*e*/.dispatchMarker, a, global/*e*/)
    }

    function u(global/*e*/, require/*exports/*accumulateInto/*t*/*/*/, requireDynamic/*EventConstants/*forEachAccumulated/*n*/*/*/) {
        if (requireDynamic/*EventConstants/*forEachAccumulated/*n*/*/*/ && requireDynamic/*EventConstants/*forEachAccumulated/*n*/*/*/.dispatchConfig.registrationName) {
            var requireLazy/*EventPluginHub/*r*/*/ = requireDynamic/*EventConstants/*forEachAccumulated/*n*/*/*/.dispatchConfig.registrationName,
                module/*i*/ = S(global/*e*/, requireLazy/*EventPluginHub/*r*/*/);
            module/*i*/ && (requireDynamic/*EventConstants/*forEachAccumulated/*n*/*/*/._dispatchListeners = _(requireDynamic/*EventConstants/*forEachAccumulated/*n*/*/*/._dispatchListeners, module/*i*/), requireDynamic/*EventConstants/*forEachAccumulated/*n*/*/*/._dispatchIDs = _(requireDynamic/*EventConstants/*forEachAccumulated/*n*/*/*/._dispatchIDs, global/*e*/))
        }
    }

    function c(global/*e*/) {
        global/*e*/ && global/*e*/.dispatchConfig.registrationName && u(global/*e*/.dispatchMarker, null, global/*e*/)
    }

    function p(global/*e*/) {
        y(global/*e*/, s)
    }

    function d(global/*e*/) {
        y(global/*e*/, l)
    }

    function h(global/*e*/, require/*exports/*accumulateInto/*t*/*/*/, requireDynamic/*EventConstants/*forEachAccumulated/*n*/*/*/, requireLazy/*EventPluginHub/*r*/*/) {
        g.injection.getInstanceHandle().traverseEnterLeave(requireDynamic/*EventConstants/*forEachAccumulated/*n*/*/*/, requireLazy/*EventPluginHub/*r*/*/, u, global/*e*/, require/*exports/*accumulateInto/*t*/*/*/)
    }

    function f(global/*e*/) {
        y(global/*e*/, c)
    }
    var m = require/*exports/*accumulateInto/*t*/*/*/("EventConstants"),
        g = require/*exports/*accumulateInto/*t*/*/*/("EventPluginHub"),
        _ = require/*exports/*accumulateInto/*t*/*/*/("accumulateInto"),
        y = require/*exports/*accumulateInto/*t*/*/*/("forEachAccumulated"),
        v = m.PropagationPhases,
        S = g.getListener,
        b = {
            accumulateTwoPhaseDispatches: p,
            accumulateTwoPhaseDispatchesSkipTarget: d,
            accumulateDirectDispatches: f,
            accumulateEnterLeaveDispatches: h
        };
    module/*i*/.exports = b
});