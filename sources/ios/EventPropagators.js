__d("EventPropagators",["EventConstants","EventPluginHub","accumulateInto","forEachAccumulated"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = require/*t*/.dispatchConfig.phasedRegistrationNames[requireDynamic/*n*/];
        return S(global/*e*/, requireLazy/*r*/)
    }

    function a(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        if (__DEV__ && !global/*e*/) throw new Error("Dispatching id must not be null");
        var requireLazy/*r*/ = require/*t*/ ? v.bubbled : v.captured,
            module/*i*/ = o(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/);
        module/*i*/ && (requireDynamic/*n*/._dispatchListeners = _(requireDynamic/*n*/._dispatchListeners, module/*i*/), requireDynamic/*n*/._dispatchIDs = _(requireDynamic/*n*/._dispatchIDs, global/*e*/))
    }

    function s(global/*e*/) {
        global/*e*/ && global/*e*/.dispatchConfig.phasedRegistrationNames && g.injection.getInstanceHandle().traverseTwoPhase(global/*e*/.dispatchMarker, a, global/*e*/)
    }

    function l(global/*e*/) {
        global/*e*/ && global/*e*/.dispatchConfig.phasedRegistrationNames && g.injection.getInstanceHandle().traverseTwoPhaseSkipTarget(global/*e*/.dispatchMarker, a, global/*e*/)
    }

    function u(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        if (requireDynamic/*n*/ && requireDynamic/*n*/.dispatchConfig.registrationName) {
            var requireLazy/*r*/ = requireDynamic/*n*/.dispatchConfig.registrationName,
                module/*i*/ = S(global/*e*/, requireLazy/*r*/);
            module/*i*/ && (requireDynamic/*n*/._dispatchListeners = _(requireDynamic/*n*/._dispatchListeners, module/*i*/), requireDynamic/*n*/._dispatchIDs = _(requireDynamic/*n*/._dispatchIDs, global/*e*/))
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

    function h(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
        g.injection.getInstanceHandle().traverseEnterLeave(requireDynamic/*n*/, requireLazy/*r*/, u, global/*e*/, require/*t*/)
    }

    function f(global/*e*/) {
        y(global/*e*/, c)
    }
    var m = require/*t*/("EventConstants"),
        g = require/*t*/("EventPluginHub"),
        _ = require/*t*/("accumulateInto"),
        y = require/*t*/("forEachAccumulated"),
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