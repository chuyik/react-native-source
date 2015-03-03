__d("EventPluginHub",["EventPluginRegistry","EventPluginUtils","accumulateInto","forEachAccumulated","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        var global/*e*/ = !f || !f.traverseTwoPhase || !f.traverseEnterLeave;
        if (global/*e*/) throw new Error("InstanceHandle not injected before use!")
    }
    var a = require/*t*/("EventPluginRegistry"),
        exports/*s*/ = require/*t*/("EventPluginUtils"),
        EventPluginRegistry/*l*/ = require/*t*/("accumulateInto"),
        EventPluginUtils/*u*/ = require/*t*/("forEachAccumulated"),
        accumulateInto/*c*/ = require/*t*/("invariant"),
        forEachAccumulated/*p*/ = {},
        invariant/*d*/ = null,
        h = function(global/*e*/) {
            if (global/*e*/) {
                var require/*t*/ = exports/*s*/.executeDispatch,
                    requireDynamic/*n*/ = a.getPluginModuleForEvent(global/*e*/);
                requireDynamic/*n*/ && requireDynamic/*n*/.executeDispatch && (require/*t*/ = requireDynamic/*n*/.executeDispatch), exports/*s*/.executeDispatchesInOrder(global/*e*/, require/*t*/), global/*e*/.isPersistent() || global/*e*/.constructor.release(global/*e*/)
            }
        },
        f = null,
        m = {
            injection: {
                injectMount: exports/*s*/.injection.injectMount,
                injectInstanceHandle: function(global/*e*/) {
                    f = global/*e*/, __DEV__ && o()
                },
                getInstanceHandle: function() {
                    return __DEV__ && o(), f
                },
                injectEventPluginOrder: a.injectEventPluginOrder,
                injectEventPluginsByName: a.injectEventPluginsByName
            },
            eventNameDispatchConfigs: a.eventNameDispatchConfigs,
            registrationNameModules: a.registrationNameModules,
            putListener: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                requireDynamic/*n*/ && "function" != typeof requireDynamic/*n*/ && accumulateInto/*c*/(0, "Expected %exports/*s*/ listener to be a function, instead got type %exports/*s*/", require/*t*/, typeof requireDynamic/*n*/);
                var requireLazy/*r*/ = forEachAccumulated/*p*/[require/*t*/] || (forEachAccumulated/*p*/[require/*t*/] = {});
                requireLazy/*r*/[global/*e*/] = requireDynamic/*n*/
            },
            getListener: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = forEachAccumulated/*p*/[require/*t*/];
                return requireDynamic/*n*/ && requireDynamic/*n*/[global/*e*/]
            },
            deleteListener: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = forEachAccumulated/*p*/[require/*t*/];
                requireDynamic/*n*/ && delete requireDynamic/*n*/[global/*e*/]
            },
            deleteAllListeners: function(global/*e*/) {
                for (var require/*t*/ in forEachAccumulated/*p*/) delete forEachAccumulated/*p*/[require/*t*/][global/*e*/]
            },
            extractEvents: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                for (var module/*i*/, o = a.plugins, exports/*s*/ = 0, EventPluginUtils/*u*/ = o.length; EventPluginUtils/*u*/ > exports/*s*/; exports/*s*/++) {
                    var accumulateInto/*c*/ = o[exports/*s*/];
                    if (accumulateInto/*c*/) {
                        var forEachAccumulated/*p*/ = accumulateInto/*c*/.extractEvents(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/);
                        forEachAccumulated/*p*/ && (module/*i*/ = EventPluginRegistry/*l*/(module/*i*/, forEachAccumulated/*p*/))
                    }
                }
                return module/*i*/
            },
            enqueueEvents: function(global/*e*/) {
                global/*e*/ && (invariant/*d*/ = EventPluginRegistry/*l*/(invariant/*d*/, global/*e*/))
            },
            processEventQueue: function() {
                var global/*e*/ = invariant/*d*/;
                invariant/*d*/ = null, EventPluginUtils/*u*/(global/*e*/, h), invariant/*d*/ && accumulateInto/*c*/(0, "processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.")
            },
            __purge: function() {
                forEachAccumulated/*p*/ = {}
            },
            __getListenerBank: function() {
                return forEachAccumulated/*p*/
            }
        };
    module/*i*/.exports = m
});