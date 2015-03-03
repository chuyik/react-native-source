__d("EventPluginHub",["EventPluginRegistry","EventPluginUtils","accumulateInto","forEachAccumulated","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        var global/*e*/ = !f || !f.traverseTwoPhase || !f.traverseEnterLeave;
        if (global/*e*/) throw new Error("InstanceHandle not injected before use!")
    }
    var a = require/*t*/("EventPluginRegistry"),
        s = require/*t*/("EventPluginUtils"),
        l = require/*t*/("accumulateInto"),
        u = require/*t*/("forEachAccumulated"),
        c = require/*t*/("invariant"),
        p = {},
        d = null,
        h = function(global/*e*/) {
            if (global/*e*/) {
                var require/*t*/ = s.executeDispatch,
                    requireDynamic/*n*/ = a.getPluginModuleForEvent(global/*e*/);
                requireDynamic/*n*/ && requireDynamic/*n*/.executeDispatch && (require/*t*/ = requireDynamic/*n*/.executeDispatch), s.executeDispatchesInOrder(global/*e*/, require/*t*/), global/*e*/.isPersistent() || global/*e*/.constructor.release(global/*e*/)
            }
        },
        f = null,
        m = {
            injection: {
                injectMount: s.injection.injectMount,
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
                requireDynamic/*n*/ && "function" != typeof requireDynamic/*n*/ && c(0, "Expected %s listener to be a function, instead got type %s", require/*t*/, typeof requireDynamic/*n*/);
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
                for (var module/*i*/, o = a.plugins, s = 0, u = o.length; u > s; s++) {
                    var c = o[s];
                    if (c) {
                        var p = c.extractEvents(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/);
                        p && (module/*i*/ = l(module/*i*/, p))
                    }
                }
                return module/*i*/
            },
            enqueueEvents: function(global/*e*/) {
                global/*e*/ && (d = l(d, global/*e*/))
            },
            processEventQueue: function() {
                var global/*e*/ = d;
                d = null, u(global/*e*/, h), d && c(0, "processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.")
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