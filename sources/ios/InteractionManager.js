__d("InteractionManager",["ErrorUtils","EventEmitter","Set","invariant","keyMirror","setImmediate"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        Set/*_*/ || (Set/*_*/ = d(a))
    }

    function a() {
        var global/*e*/ = f.size;
        m.forEach(function(global/*e*/) {
            return f.add(global/*e*/)
        }), exports/*g.forEach*/(function(global/*e*/) {
            return f.delete(global/*e*/)
        });
        var require/*t*/ = f.size;
        ErrorUtils/*0*/ !== global/*e*/ && ErrorUtils/*0*/ === require/*t*/ ? h.emit(S.Events.interactionComplete) : ErrorUtils/*0*/ === global/*e*/ && ErrorUtils/*0*/ !== require/*t*/ && h.emit(S.Events.interactionStart), ErrorUtils/*0*/ === require/*t*/ && (EventEmitter/*y*/.forEach(function(global/*e*/) {
            s.applyWithGuard(global/*e*/)
        }), EventEmitter/*y*/ = []), Set/*_*/ = null, invariant/*m.clear*/(), keyMirror/*g.clear*/()
    }
    var s = require/*t*/("ErrorUtils"),
        setImmediate/*l*/ = require/*t*/("EventEmitter"),
        u = require/*t*/("Set"),
        c = require/*t*/("invariant"),
        p = require/*t*/("keyMirror"),
        d = require/*t*/("setImmediate"),
        h = new setImmediate/*l*/,
        f = new u,
        m = new u,
        g = new u,
        Set/*_*/ = null,
        EventEmitter/*y*/ = [],
        v = ErrorUtils/*0*/,
        S = {
            Events: p({
                interactionStart: !ErrorUtils/*0*/,
                interactionComplete: !ErrorUtils/*0*/
            }),
            createInteractionHandle: function() {
                o();
                var global/*e*/ = ++v;
                return m.add(global/*e*/), global/*e*/
            },
            clearInteractionHandle: function(global/*e*/) {
                global/*e*/ || c(ErrorUtils/*0*/, "Must provide a handle to clear."), o(), m.delete(global/*e*/), g.add(global/*e*/)
            },
            runAfterInteractions: function(global/*e*/) {
                "function" != typeof global/*e*/ && c(ErrorUtils/*0*/, "Must specify a function to schedule."), o(), EventEmitter/*y*/.push(global/*e*/)
            },
            addListener: h.addListener.bind(h)
        };
    module/*i*/.exports = S
});