__d("InteractionManager",["ErrorUtils","EventEmitter","Set","invariant","keyMirror","setImmediate"],function (e, t, n, r, i) {
    "use strict";

    function o() {
        _ || (_ = setImmediate/*d*/(a))
    }

    function a() {
        var e = f.size;
        m.forEach(function(e) {
            return f.add(e)
        }), g.forEach(function(e) {
            return f.delete(e)
        });
        var t = f.size;
        0 !== e && 0 === t ? h.emit(S.Events.interactionComplete) : 0 === e && 0 !== t && h.emit(S.Events.interactionStart), 0 === t && (y.forEach(function(e) {
            ErrorUtils/*s*/.applyWithGuard(e)
        }), y = []), _ = null, m.clear(), g.clear()
    }
    var ErrorUtils/*s*/ = t("ErrorUtils"),
        EventEmitter/*l*/ = t("EventEmitter"),
        Set/*u*/ = t("Set"),
        invariant/*c*/ = t("invariant"),
        keyMirror/*p*/ = t("keyMirror"),
        setImmediate/*d*/ = t("setImmediate"),
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
                var e = ++v;
                return m.add(e), e
            },
            clearInteractionHandle: function(e) {
                e || invariant/*c*/(0, "Must provide a handle to clear."), o(), m.delete(e), g.add(e)
            },
            runAfterInteractions: function(e) {
                "function" != typeof e && invariant/*c*/(0, "Must specify a function to schedule."), o(), y.push(e)
            },
            addListener: h.addListener.bind(h)
        };
    i.exports = S
});