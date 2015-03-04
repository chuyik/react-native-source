__d("EventPluginHub",["EventPluginRegistry","EventPluginUtils","accumulateInto","forEachAccumulated","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        var global/*e*/ = !f || !f.traverseTwoPhase || !f.traverseEnterLeave;
        if (global/*e*/) throw new Error("InstanceHandle not injected before use!")
    }
    var EventPluginRegistry/*a*/ = require/*t*/("EventPluginRegistry"),
        EventPluginUtils/*s*/ = require/*t*/("EventPluginUtils"),
        accumulateInto/*l*/ = require/*t*/("accumulateInto"),
        forEachAccumulated/*u*/ = require/*t*/("forEachAccumulated"),
        invariant/*c*/ = require/*t*/("invariant"),
        p = {},
        d = null,
        h = function(global/*e*/) {
            if (global/*e*/) {
                var require/*t*/ = EventPluginUtils/*s*/.executeDispatch,
                    requireDynamic/*n*/ = EventPluginRegistry/*a*/.getPluginModuleForEvent(global/*e*/);
                requireDynamic/*n*/ && requireDynamic/*n*/.executeDispatch && (require/*t*/ = requireDynamic/*n*/.executeDispatch), EventPluginUtils/*s*/.executeDispatchesInOrder(global/*e*/, require/*t*/), global/*e*/.isPersistent() || global/*e*/.constructor.release(global/*e*/)
            }
        },
        f = null,
        m = {
            injection: {
                injectMount: EventPluginUtils/*s*/.injection.injectMount,
                injectInstanceHandle: function(global/*e*/) {
                    f = global/*e*/, __DEV__ && o()
                },
                getInstanceHandle: function() {
                    return __DEV__ && o(), f
                },
                injectEventPluginOrder: EventPluginRegistry/*a*/.injectEventPluginOrder,
                injectEventPluginsByName: EventPluginRegistry/*a*/.injectEventPluginsByName
            },
            eventNameDispatchConfigs: EventPluginRegistry/*a*/.eventNameDispatchConfigs,
            registrationNameModules: EventPluginRegistry/*a*/.registrationNameModules,
            putListener: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                requireDynamic/*n*/ && "function" != typeof requireDynamic/*n*/ && invariant/*c*/(0, "Expected %EventPluginUtils/*s*/ listener to be EventPluginRegistry/*a*/ function, instead got type %EventPluginUtils/*s*/", require/*t*/, typeof requireDynamic/*n*/);
                var requireLazy/*r*/ = p[require/*t*/] || (p[require/*t*/] = {});
                requireLazy/*r*/[global/*e*/] = requireDynamic/*n*/
            },
            getListener: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = p[require/*t*/];
                return requireDynamic/*n*/ && requireDynamic/*n*/[global/*e*/]
            },
            deleteListener: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = p[require/*t*/];
                requireDynamic/*n*/ && delete requireDynamic/*n*/[global/*e*/]
            },
            deleteAllListeners: function(global/*e*/) {
                for (var require/*t*/ in p) delete p[require/*t*/][global/*e*/]
            },
            extractEvents: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                for (var module/*i*/, o = EventPluginRegistry/*a*/.plugins, EventPluginUtils/*s*/ = 0, forEachAccumulated/*u*/ = o.length; forEachAccumulated/*u*/ > EventPluginUtils/*s*/; EventPluginUtils/*s*/++) {
                    var invariant/*c*/ = o[EventPluginUtils/*s*/];
                    if (invariant/*c*/) {
                        var p = invariant/*c*/.extractEvents(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/);
                        p && (module/*i*/ = accumulateInto/*l*/(module/*i*/, p))
                    }
                }
                return module/*i*/
            },
            enqueueEvents: function(global/*e*/) {
                global/*e*/ && (d = accumulateInto/*l*/(d, global/*e*/))
            },
            processEventQueue: function() {
                var global/*e*/ = d;
                d = null, forEachAccumulated/*u*/(global/*e*/, h), d && invariant/*c*/(0, "processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.")
            },
            __purge: function() {
                p = {}
            },
            __getListenerBank: function() {
                return p
            }
        };
    module/*i*/.exports = m
});