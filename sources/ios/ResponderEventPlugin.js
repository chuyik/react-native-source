__d("ResponderEventPlugin",["EventConstants","EventPluginUtils","EventPropagators","NodeHandle","ReactInstanceHandles","ResponderSyntheticEvent","ResponderTouchHistoryStore","accumulate","invariant","keyOf"],function (global/*e*/, require/*exports/*EventPropagators/*t*/*/*/, requireDynamic/*EventConstants/*ResponderTouchHistoryStore/*n*/*/*/, requireLazy/*r*/, module/*EventPluginUtils/*ResponderSyntheticEvent/*i*/*/*/) {
    "use strict";

    function NodeHandle/*accumulate/*o*/*/(global/*e*/, require/*exports/*EventPropagators/*t*/*/*/, requireDynamic/*EventConstants/*ResponderTouchHistoryStore/*n*/*/*/) {
        var requireLazy/*r*/ = y(global/*e*/) ? x.startShouldSetResponder : v(global/*e*/) ? x.moveShouldSetResponder : global/*e*/ === l.topLevelTypes.topSelectionChange ? x.selectionChangeShouldSetResponder : x.scrollShouldSetResponder,
            module/*EventPluginUtils/*ResponderSyntheticEvent/*i*/*/*/ = C ? d._getFirstCommonAncestorID(C, require/*exports/*EventPropagators/*t*/*/*/) : require/*exports/*EventPropagators/*t*/*/*/,
            NodeHandle/*accumulate/*o*/*/ = module/*EventPluginUtils/*ResponderSyntheticEvent/*i*/*/*/ === C,
            ReactInstanceHandles/*a*/ = h.getPooled(requireLazy/*r*/, module/*EventPluginUtils/*ResponderSyntheticEvent/*i*/*/*/, requireDynamic/*EventConstants/*ResponderTouchHistoryStore/*n*/*/*/);
        ReactInstanceHandles/*a*/.touchHistory = f.touchHistory, NodeHandle/*accumulate/*o*/*/ ? c.accumulateTwoPhaseDispatchesSkipTarget(ReactInstanceHandles/*a*/) : c.accumulateTwoPhaseDispatches(ReactInstanceHandles/*a*/);
        var keyOf/*s*/ = w(ReactInstanceHandles/*a*/);
        if (ReactInstanceHandles/*a*/.isPersistent() || ReactInstanceHandles/*a*/.constructor.release(ReactInstanceHandles/*a*/), !keyOf/*s*/ || keyOf/*s*/ === C) return null;
        var u, invariant/*p*/ = h.getPooled(x.responderGrant, keyOf/*s*/, requireDynamic/*EventConstants/*ResponderTouchHistoryStore/*n*/*/*/);
        if (invariant/*p*/.touchHistory = f.touchHistory, c.accumulateDirectDispatches(invariant/*p*/), C) {
            var g = h.getPooled(x.responderTerminationRequest, C, requireDynamic/*EventConstants/*ResponderTouchHistoryStore/*n*/*/*/);
            g.touchHistory = f.touchHistory, c.accumulateDirectDispatches(g);
            var _ = !R(g) || b(g);
            if (g.isPersistent() || g.constructor.release(g), _) {
                var S = x.responderTerminate,
                    E = h.getPooled(S, C, requireDynamic/*EventConstants/*ResponderTouchHistoryStore/*n*/*/*/);
                E.touchHistory = f.touchHistory, c.accumulateDirectDispatches(E), u = m(u, [invariant/*p*/, E]), T(keyOf/*s*/)
            } else {
                var D = h.getPooled(x.responderReject, keyOf/*s*/, requireDynamic/*EventConstants/*ResponderTouchHistoryStore/*n*/*/*/);
                D.touchHistory = f.touchHistory, c.accumulateDirectDispatches(D), u = m(u, D)
            }
        } else u = m(u, invariant/*p*/), T(keyOf/*s*/);
        return u
    }

    function ReactInstanceHandles/*a*/(global/*e*/, require/*exports/*EventPropagators/*t*/*/*/) {
        return require/*exports/*EventPropagators/*t*/*/*/ && (global/*e*/ === l.topLevelTypes.topScroll || E > 0 && global/*e*/ === l.topLevelTypes.topSelectionChange || y(global/*e*/) || v(global/*e*/))
    }

    function keyOf/*s*/(global/*e*/) {
        var require/*exports/*EventPropagators/*t*/*/*/ = global/*e*/.touches;
        if (!require/*exports/*EventPropagators/*t*/*/*/ || 0 === require/*exports/*EventPropagators/*t*/*/*/.length) return !0;
        for (var requireDynamic/*EventConstants/*ResponderTouchHistoryStore/*n*/*/*/ = 0; requireDynamic/*EventConstants/*ResponderTouchHistoryStore/*n*/*/*/ < require/*exports/*EventPropagators/*t*/*/*/.length; requireDynamic/*EventConstants/*ResponderTouchHistoryStore/*n*/*/*/++) {
            var requireLazy/*r*/ = require/*exports/*EventPropagators/*t*/*/*/[requireDynamic/*EventConstants/*ResponderTouchHistoryStore/*n*/*/*/],
                module/*EventPluginUtils/*ResponderSyntheticEvent/*i*/*/*/ = requireLazy/*r*/.target;
            if (null !== module/*EventPluginUtils/*ResponderSyntheticEvent/*i*/*/*/ && void 0 !== module/*EventPluginUtils/*ResponderSyntheticEvent/*i*/*/*/ && 0 !== module/*EventPluginUtils/*ResponderSyntheticEvent/*i*/*/*/) {
                var NodeHandle/*accumulate/*o*/*/ = d._getFirstCommonAncestorID(C, invariant/*p*/.getRootNodeID(module/*EventPluginUtils/*ResponderSyntheticEvent/*i*/*/*/));
                if (NodeHandle/*accumulate/*o*/*/ === C) return !1
            }
        }
        return !0
    }
    var l = require/*exports/*EventPropagators/*t*/*/*/("EventConstants"),
        u = require/*exports/*EventPropagators/*t*/*/*/("EventPluginUtils"),
        c = require/*exports/*EventPropagators/*t*/*/*/("EventPropagators"),
        invariant/*p*/ = require/*exports/*EventPropagators/*t*/*/*/("NodeHandle"),
        d = require/*exports/*EventPropagators/*t*/*/*/("ReactInstanceHandles"),
        h = require/*exports/*EventPropagators/*t*/*/*/("ResponderSyntheticEvent"),
        f = require/*exports/*EventPropagators/*t*/*/*/("ResponderTouchHistoryStore"),
        m = require/*exports/*EventPropagators/*t*/*/*/("accumulate"),
        g = require/*exports/*EventPropagators/*t*/*/*/("invariant"),
        _ = require/*exports/*EventPropagators/*t*/*/*/("keyOf"),
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
            var require/*exports/*EventPropagators/*t*/*/*/ = C;
            C = global/*e*/, null !== P.GlobalResponderHandler && P.GlobalResponderHandler.onChange(require/*exports/*EventPropagators/*t*/*/*/, global/*e*/)
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
            extractEvents: function(global/*e*/, require/*exports/*EventPropagators/*t*/*/*/, requireDynamic/*EventConstants/*ResponderTouchHistoryStore/*n*/*/*/, requireLazy/*r*/) {
                y(global/*e*/) ? E += 1 : S(global/*e*/) && (E -= 1, E >= 0 || g(0, "Ended ReactInstanceHandles/*a*/ touch event which was not counted in trackedTouchCount.")), f.recordTouchTrack(global/*e*/, requireLazy/*r*/);
                var module/*EventPluginUtils/*ResponderSyntheticEvent/*i*/*/*/ = ReactInstanceHandles/*a*/(global/*e*/, requireDynamic/*EventConstants/*ResponderTouchHistoryStore/*n*/*/*/) ? NodeHandle/*accumulate/*o*/*/(global/*e*/, requireDynamic/*EventConstants/*ResponderTouchHistoryStore/*n*/*/*/, requireLazy/*r*/) : null,
                    u = C && y(global/*e*/),
                    invariant/*p*/ = C && v(global/*e*/),
                    d = C && S(global/*e*/),
                    _ = u ? x.responderStart : invariant/*p*/ ? x.responderMove : d ? x.responderEnd : null;
                if (_) {
                    var b = h.getPooled(_, C, requireLazy/*r*/);
                    b.touchHistory = f.touchHistory, c.accumulateDirectDispatches(b), module/*EventPluginUtils/*ResponderSyntheticEvent/*i*/*/*/ = m(module/*EventPluginUtils/*ResponderSyntheticEvent/*i*/*/*/, b)
                }
                var R = C && global/*e*/ === l.topLevelTypes.topTouchCancel,
                    w = C && !R && S(global/*e*/) && keyOf/*s*/(requireLazy/*r*/),
                    I = R ? x.responderTerminate : w ? x.responderRelease : null;
                if (I) {
                    var F = h.getPooled(I, C, requireLazy/*r*/);
                    F.touchHistory = f.touchHistory, c.accumulateDirectDispatches(F), module/*EventPluginUtils/*ResponderSyntheticEvent/*i*/*/*/ = m(module/*EventPluginUtils/*ResponderSyntheticEvent/*i*/*/*/, F), T(null)
                }
                var L = f.touchHistory.numberActiveTouches;
                return P.GlobalInteractionHandler && L !== D && P.GlobalInteractionHandler.onChange(L), D = L, module/*EventPluginUtils/*ResponderSyntheticEvent/*i*/*/*/
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
    module/*EventPluginUtils/*ResponderSyntheticEvent/*i*/*/*/.exports = P
});