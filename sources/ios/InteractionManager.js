__d("InteractionManager",["ErrorUtils","EventEmitter","Set","invariant","keyMirror","setImmediate"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        _ || (_ = d(a))
    }

    function a() {
        var global/*e*/ = f.size;
        m.forEach(function(global/*e*/) {
            return f.add(global/*e*/)
        }), g.forEach(function(global/*e*/) {
            return f.delete(global/*e*/)
        });
        var require/*t*/ = f.size;
        0 !== global/*e*/ && 0 === require/*t*/ ? h.emit(S.Events.interactionComplete) : 0 === global/*e*/ && 0 !== require/*t*/ && h.emit(S.Events.interactionStart), 0 === require/*t*/ && (y.forEach(function(global/*e*/) {
            s.applyWithGuard(global/*e*/)
        }), y = []), _ = null, m.clear(), g.clear()
    }
    var s = require/*t*/("ErrorUtils"),
        l = require/*t*/("EventEmitter"),
        u = require/*t*/("Set"),
        c = require/*t*/("invariant"),
        p = require/*t*/("keyMirror"),
        d = require/*t*/("setImmediate"),
        h = new l,
        f = new u,
        m = new u,
        g = new u,
        _ = null,
        y = [],
        v = 0,
        S = {
            Events: p({
                interactionStart: !0,
                interactionComplete: !0
            }),
            createInteractionHandle: function() {
                o();
                var global/*e*/ = ++v;
                return m.add(global/*e*/), global/*e*/
            },
            clearInteractionHandle: function(global/*e*/) {
                global/*e*/ || c(0, "Must provide a handle to clear."), o(), m.delete(global/*e*/), g.add(global/*e*/)
            },
            runAfterInteractions: function(global/*e*/) {
                "function" != typeof global/*e*/ && c(0, "Must specify a function to schedule."), o(), y.push(global/*e*/)
            },
            addListener: h.addListener.bind(h)
        };
    module/*i*/.exports = S
});