__d("ResponderEventPlugin",["EventConstants","EventPluginUtils","EventPropagators","NodeHandle","ReactInstanceHandles","ResponderSyntheticEvent","ResponderTouchHistoryStore","accumulate","invariant","keyOf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = y(global/*e*/) ? x.startShouldSetResponder : v(global/*e*/) ? x.moveShouldSetResponder : global/*e*/ === l.topLevelTypes.topSelectionChange ? x.selectionChangeShouldSetResponder : x.scrollShouldSetResponder,
            module/*i*/ = C ? d._getFirstCommonAncestorID(C, require/*t*/) : require/*t*/,
            o = module/*i*/ === C,
            a = h.getPooled(requireLazy/*r*/, module/*i*/, requireDynamic/*n*/);
        a.touchHistory = f.touchHistory, o ? c.accumulateTwoPhaseDispatchesSkipTarget(a) : c.accumulateTwoPhaseDispatches(a);
        var s = w(a);
        if (a.isPersistent() || a.constructor.release(a), !s || s === C) return null;
        var u, p = h.getPooled(x.responderGrant, s, requireDynamic/*n*/);
        if (p.touchHistory = f.touchHistory, c.accumulateDirectDispatches(p), C) {
            var g = h.getPooled(x.responderTerminationRequest, C, requireDynamic/*n*/);
            g.touchHistory = f.touchHistory, c.accumulateDirectDispatches(g);
            var _ = !R(g) || b(g);
            if (g.isPersistent() || g.constructor.release(g), _) {
                var S = x.responderTerminate,
                    E = h.getPooled(S, C, requireDynamic/*n*/);
                E.touchHistory = f.touchHistory, c.accumulateDirectDispatches(E), u = m(u, [p, E]), T(s)
            } else {
                var D = h.getPooled(x.responderReject, s, requireDynamic/*n*/);
                D.touchHistory = f.touchHistory, c.accumulateDirectDispatches(D), u = m(u, D)
            }
        } else u = m(u, p), T(s);
        return u
    }

    function a(global/*e*/, require/*t*/) {
        return require/*t*/ && (global/*e*/ === l.topLevelTypes.topScroll || E > 0 && global/*e*/ === l.topLevelTypes.topSelectionChange || y(global/*e*/) || v(global/*e*/))
    }

    function s(global/*e*/) {
        var require/*t*/ = global/*e*/.touches;
        if (!require/*t*/ || 0 === require/*t*/.length) return !0;
        for (var requireDynamic/*n*/ = 0; requireDynamic/*n*/ < require/*t*/.length; requireDynamic/*n*/++) {
            var requireLazy/*r*/ = require/*t*/[requireDynamic/*n*/],
                module/*i*/ = requireLazy/*r*/.target;
            if (null !== module/*i*/ && void 0 !== module/*i*/ && 0 !== module/*i*/) {
                var o = d._getFirstCommonAncestorID(C, p.getRootNodeID(module/*i*/));
                if (o === C) return !1
            }
        }
        return !0
    }
    var l = require/*t*/("EventConstants"),
        u = require/*t*/("EventPluginUtils"),
        c = require/*t*/("EventPropagators"),
        p = require/*t*/("NodeHandle"),
        d = require/*t*/("ReactInstanceHandles"),
        h = require/*t*/("ResponderSyntheticEvent"),
        f = require/*t*/("ResponderTouchHistoryStore"),
        m = require/*t*/("accumulate"),
        g = require/*t*/("invariant"),
        _ = require/*t*/("keyOf"),
        y = u.isStartish,
        v = u.isMoveish,
        S = u.isEndish,
        b = u.executeDirectDispatch,
        R = u.hasDispatches,
        w = u.executeDispatchesInOrderStopAtTrue,
        C = null,
        E = 0,
        D = 0,
        T = function(global/*e*/) {
            var require/*t*/ = C;
            C = global/*e*/, null !== P.GlobalResponderHandler && P.GlobalResponderHandler.onChange(require/*t*/, global/*e*/)
        },
        x = {
            startShouldSetResponder: {
                phasedRegistrationNames: {
                    bubbled: _({
                        onStartShouldSetResponder: null
                    }),
                    captured: _({
                        onStartShouldSetResponderCapture: null
                    })
                }
            },
            scrollShouldSetResponder: {
                phasedRegistrationNames: {
                    bubbled: _({
                        onScrollShouldSetResponder: null
                    }),
                    captured: _({
                        onScrollShouldSetResponderCapture: null
                    })
                }
            },
            selectionChangeShouldSetResponder: {
                phasedRegistrationNames: {
                    bubbled: _({
                        onSelectionChangeShouldSetResponder: null
                    }),
                    captured: _({
                        onSelectionChangeShouldSetResponderCapture: null
                    })
                }
            },
            moveShouldSetResponder: {
                phasedRegistrationNames: {
                    bubbled: _({
                        onMoveShouldSetResponder: null
                    }),
                    captured: _({
                        onMoveShouldSetResponderCapture: null
                    })
                }
            },
            responderStart: {
                registrationName: _({
                    onResponderStart: null
                })
            },
            responderMove: {
                registrationName: _({
                    onResponderMove: null
                })
            },
            responderEnd: {
                registrationName: _({
                    onResponderEnd: null
                })
            },
            responderRelease: {
                registrationName: _({
                    onResponderRelease: null
                })
            },
            responderTerminationRequest: {
                registrationName: _({
                    onResponderTerminationRequest: null
                })
            },
            responderGrant: {
                registrationName: _({
                    onResponderGrant: null
                })
            },
            responderReject: {
                registrationName: _({
                    onResponderReject: null
                })
            },
            responderTerminate: {
                registrationName: _({
                    onResponderTerminate: null
                })
            }
        },
        P = {
            getResponderID: function() {
                return C
            },
            eventTypes: x,
            extractEvents: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                y(global/*e*/) ? E += 1 : S(global/*e*/) && (E -= 1, E >= 0 || g(0, "Ended a touch event which was not counted in trackedTouchCount.")), f.recordTouchTrack(global/*e*/, requireLazy/*r*/);
                var module/*i*/ = a(global/*e*/, requireDynamic/*n*/) ? o(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/) : null,
                    u = C && y(global/*e*/),
                    p = C && v(global/*e*/),
                    d = C && S(global/*e*/),
                    _ = u ? x.responderStart : p ? x.responderMove : d ? x.responderEnd : null;
                if (_) {
                    var b = h.getPooled(_, C, requireLazy/*r*/);
                    b.touchHistory = f.touchHistory, c.accumulateDirectDispatches(b), module/*i*/ = m(module/*i*/, b)
                }
                var R = C && global/*e*/ === l.topLevelTypes.topTouchCancel,
                    w = C && !R && S(global/*e*/) && s(requireLazy/*r*/),
                    I = R ? x.responderTerminate : w ? x.responderRelease : null;
                if (I) {
                    var F = h.getPooled(I, C, requireLazy/*r*/);
                    F.touchHistory = f.touchHistory, c.accumulateDirectDispatches(F), module/*i*/ = m(module/*i*/, F), T(null)
                }
                var L = f.touchHistory.numberActiveTouches;
                return P.GlobalInteractionHandler && L !== D && P.GlobalInteractionHandler.onChange(L), D = L, module/*i*/
            },
            GlobalResponderHandler: null,
            GlobalInteractionHandler: null,
            injection: {
                injectGlobalResponderHandler: function(global/*e*/) {
                    P.GlobalResponderHandler = global/*e*/
                },
                injectGlobalInteractionHandler: function(global/*e*/) {
                    P.GlobalInteractionHandler = global/*e*/
                }
            }
        };
    module/*i*/.exports = P
});