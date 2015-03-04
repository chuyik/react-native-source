__d("InteractionManager",["ErrorUtils","EventEmitter","Set","invariant","keyMirror","setImmediate"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        _ || (_ = setImmediate/*d*/(a))
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
            ErrorUtils/*s*/.applyWithGuard(global/*e*/)
        }), y = []), _ = null, m.clear(), g.clear()
    }
    var ErrorUtils/*s*/ = require/*t*/("ErrorUtils"),
        EventEmitter/*l*/ = require/*t*/("EventEmitter"),
        Set/*u*/ = require/*t*/("Set"),
        invariant/*c*/ = require/*t*/("invariant"),
        keyMirror/*p*/ = require/*t*/("keyMirror"),
        setImmediate/*d*/ = require/*t*/("setImmediate"),
        h = new EventEmitter/*l*/,
        f = new Set/*u*/,
        m = new Set/*u*/,
        g = new Set/*u*/,
        _ = null,
        y = [],
        v = 0,
        S = {
            Events: keyMirror/*p*/({
                interactionStart: !0,
                interactionComplete: !0
            }),
            createInteractionHandle: function() {
                o();
                var global/*e*/ = ++v;
                return m.add(global/*e*/), global/*e*/
            },
            clearInteractionHandle: function(global/*e*/) {
                global/*e*/ || invariant/*c*/(0, "Must provide a handle to clear."), o(), m.delete(global/*e*/), g.add(global/*e*/)
            },
            runAfterInteractions: function(global/*e*/) {
                "function" != typeof global/*e*/ && invariant/*c*/(0, "Must specify a function to schedule."), o(), y.push(global/*e*/)
            },
            addListener: h.addListener.bind(h)
        };
    module/*i*/.exports = S
});