__d("EventPluginHub",["EventPluginRegistry","EventPluginUtils","accumulateInto","forEachAccumulated","invariant"],function (e, t, n, r, i) {
    "use strict";

    function o() {
        var e = !f || !f.traverseTwoPhase || !f.traverseEnterLeave;
        if (e) throw new Error("InstanceHandle not injected before use!")
    }
    var EventPluginRegistry/*a*/ = t("EventPluginRegistry"),
        EventPluginUtils/*s*/ = t("EventPluginUtils"),
        accumulateInto/*l*/ = t("accumulateInto"),
        forEachAccumulated/*u*/ = t("forEachAccumulated"),
        invariant/*c*/ = t("invariant"),
        p = {},
        d = null,
        h = function(e) {
            if (e) {
                var t = EventPluginUtils/*s*/.executeDispatch,
                    n = EventPluginRegistry/*a*/.getPluginModuleForEvent(e);
                n && n.executeDispatch && (t = n.executeDispatch), EventPluginUtils/*s*/.executeDispatchesInOrder(e, t), e.isPersistent() || e.constructor.release(e)
            }
        },
        f = null,
        m = {
            injection: {
                injectMount: EventPluginUtils/*s*/.injection.injectMount,
                injectInstanceHandle: function(e) {
                    f = e, __DEV__ && o()
                },
                getInstanceHandle: function() {
                    return __DEV__ && o(), f
                },
                injectEventPluginOrder: EventPluginRegistry/*a*/.injectEventPluginOrder,
                injectEventPluginsByName: EventPluginRegistry/*a*/.injectEventPluginsByName
            },
            eventNameDispatchConfigs: EventPluginRegistry/*a*/.eventNameDispatchConfigs,
            registrationNameModules: EventPluginRegistry/*a*/.registrationNameModules,
            putListener: function(e, t, n) {
                n && "function" != typeof n && invariant/*c*/(0, "Expected %EventPluginUtils/*s*/ listener to be EventPluginRegistry/*a*/ function, instead got type %EventPluginUtils/*s*/", t, typeof n);
                var r = p[t] || (p[t] = {});
                r[e] = n
            },
            getListener: function(e, t) {
                var n = p[t];
                return n && n[e]
            },
            deleteListener: function(e, t) {
                var n = p[t];
                n && delete n[e]
            },
            deleteAllListeners: function(e) {
                for (var t in p) delete p[t][e]
            },
            extractEvents: function(e, t, n, r) {
                for (var i, o = EventPluginRegistry/*a*/.plugins, EventPluginUtils/*s*/ = 0, forEachAccumulated/*u*/ = o.length; forEachAccumulated/*u*/ > EventPluginUtils/*s*/; EventPluginUtils/*s*/++) {
                    var invariant/*c*/ = o[EventPluginUtils/*s*/];
                    if (invariant/*c*/) {
                        var p = invariant/*c*/.extractEvents(e, t, n, r);
                        p && (i = accumulateInto/*l*/(i, p))
                    }
                }
                return i
            },
            enqueueEvents: function(e) {
                e && (d = accumulateInto/*l*/(d, e))
            },
            processEventQueue: function() {
                var e = d;
                d = null, forEachAccumulated/*u*/(e, h), d && invariant/*c*/(0, "processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.")
            },
            __purge: function() {
                p = {}
            },
            __getListenerBank: function() {
                return p
            }
        };
    i.exports = m
});