__d("ResponderEventPlugin",["EventConstants","EventPluginUtils","EventPropagators","NodeHandle","ReactInstanceHandles","ResponderSyntheticEvent","ResponderTouchHistoryStore","accumulate","invariant","keyOf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = y(global/*e*/) ? x.startShouldSetResponder : v(global/*e*/) ? x.moveShouldSetResponder : global/*e*/ === EventConstants/*l*/.topLevelTypes.topSelectionChange ? x.selectionChangeShouldSetResponder : x.scrollShouldSetResponder,
            module/*i*/ = C ? ReactInstanceHandles/*d*/._getFirstCommonAncestorID(C, require/*t*/) : require/*t*/,
            o = module/*i*/ === C,
            a = ResponderSyntheticEvent/*h*/.getPooled(requireLazy/*r*/, module/*i*/, requireDynamic/*n*/);
        a.touchHistory = ResponderTouchHistoryStore/*f*/.touchHistory, o ? EventPropagators/*c*/.accumulateTwoPhaseDispatchesSkipTarget(a) : EventPropagators/*c*/.accumulateTwoPhaseDispatches(a);
        var s = w(a);
        if (a.isPersistent() || a.constructor.release(a), !s || s === C) return null;
        var EventPluginUtils/*u*/, NodeHandle/*p*/ = ResponderSyntheticEvent/*h*/.getPooled(x.responderGrant, s, requireDynamic/*n*/);
        if (NodeHandle/*p*/.touchHistory = ResponderTouchHistoryStore/*f*/.touchHistory, EventPropagators/*c*/.accumulateDirectDispatches(NodeHandle/*p*/), C) {
            var invariant/*g*/ = ResponderSyntheticEvent/*h*/.getPooled(x.responderTerminationRequest, C, requireDynamic/*n*/);
            invariant/*g*/.touchHistory = ResponderTouchHistoryStore/*f*/.touchHistory, EventPropagators/*c*/.accumulateDirectDispatches(invariant/*g*/);
            var keyOf/*_*/ = !R(invariant/*g*/) || b(invariant/*g*/);
            if (invariant/*g*/.isPersistent() || invariant/*g*/.constructor.release(invariant/*g*/), keyOf/*_*/) {
                var S = x.responderTerminate,
                    E = ResponderSyntheticEvent/*h*/.getPooled(S, C, requireDynamic/*n*/);
                E.touchHistory = ResponderTouchHistoryStore/*f*/.touchHistory, EventPropagators/*c*/.accumulateDirectDispatches(E), EventPluginUtils/*u*/ = accumulate/*m*/(EventPluginUtils/*u*/, [NodeHandle/*p*/, E]), T(s)
            } else {
                var D = ResponderSyntheticEvent/*h*/.getPooled(x.responderReject, s, requireDynamic/*n*/);
                D.touchHistory = ResponderTouchHistoryStore/*f*/.touchHistory, EventPropagators/*c*/.accumulateDirectDispatches(D), EventPluginUtils/*u*/ = accumulate/*m*/(EventPluginUtils/*u*/, D)
            }
        } else EventPluginUtils/*u*/ = accumulate/*m*/(EventPluginUtils/*u*/, NodeHandle/*p*/), T(s);
        return EventPluginUtils/*u*/
    }

    function a(global/*e*/, require/*t*/) {
        return require/*t*/ && (global/*e*/ === EventConstants/*l*/.topLevelTypes.topScroll || E > 0 && global/*e*/ === EventConstants/*l*/.topLevelTypes.topSelectionChange || y(global/*e*/) || v(global/*e*/))
    }

    function s(global/*e*/) {
        var require/*t*/ = global/*e*/.touches;
        if (!require/*t*/ || 0 === require/*t*/.length) return !0;
        for (var requireDynamic/*n*/ = 0; requireDynamic/*n*/ < require/*t*/.length; requireDynamic/*n*/++) {
            var requireLazy/*r*/ = require/*t*/[requireDynamic/*n*/],
                module/*i*/ = requireLazy/*r*/.target;
            if (null !== module/*i*/ && void 0 !== module/*i*/ && 0 !== module/*i*/) {
                var o = ReactInstanceHandles/*d*/._getFirstCommonAncestorID(C, NodeHandle/*p*/.getRootNodeID(module/*i*/));
                if (o === C) return !1
            }
        }
        return !0
    }
    var EventConstants/*l*/ = require/*t*/("EventConstants"),
        EventPluginUtils/*u*/ = require/*t*/("EventPluginUtils"),
        EventPropagators/*c*/ = require/*t*/("EventPropagators"),
        NodeHandle/*p*/ = require/*t*/("NodeHandle"),
        ReactInstanceHandles/*d*/ = require/*t*/("ReactInstanceHandles"),
        ResponderSyntheticEvent/*h*/ = require/*t*/("ResponderSyntheticEvent"),
        ResponderTouchHistoryStore/*f*/ = require/*t*/("ResponderTouchHistoryStore"),
        accumulate/*m*/ = require/*t*/("accumulate"),
        invariant/*g*/ = require/*t*/("invariant"),
        keyOf/*_*/ = require/*t*/("keyOf"),
        y = EventPluginUtils/*u*/.isStartish,
        v = EventPluginUtils/*u*/.isMoveish,
        S = EventPluginUtils/*u*/.isEndish,
        b = EventPluginUtils/*u*/.executeDirectDispatch,
        R = EventPluginUtils/*u*/.hasDispatches,
        w = EventPluginUtils/*u*/.executeDispatchesInOrderStopAtTrue,
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
                    bubbled: keyOf/*_*/({
                        onStartShouldSetResponder: null
                    }),
                    captured: keyOf/*_*/({
                        onStartShouldSetResponderCapture: null
                    })
                }
            },
            scrollShouldSetResponder: {
                phasedRegistrationNames: {
                    bubbled: keyOf/*_*/({
                        onScrollShouldSetResponder: null
                    }),
                    captured: keyOf/*_*/({
                        onScrollShouldSetResponderCapture: null
                    })
                }
            },
            selectionChangeShouldSetResponder: {
                phasedRegistrationNames: {
                    bubbled: keyOf/*_*/({
                        onSelectionChangeShouldSetResponder: null
                    }),
                    captured: keyOf/*_*/({
                        onSelectionChangeShouldSetResponderCapture: null
                    })
                }
            },
            moveShouldSetResponder: {
                phasedRegistrationNames: {
                    bubbled: keyOf/*_*/({
                        onMoveShouldSetResponder: null
                    }),
                    captured: keyOf/*_*/({
                        onMoveShouldSetResponderCapture: null
                    })
                }
            },
            responderStart: {
                registrationName: keyOf/*_*/({
                    onResponderStart: null
                })
            },
            responderMove: {
                registrationName: keyOf/*_*/({
                    onResponderMove: null
                })
            },
            responderEnd: {
                registrationName: keyOf/*_*/({
                    onResponderEnd: null
                })
            },
            responderRelease: {
                registrationName: keyOf/*_*/({
                    onResponderRelease: null
                })
            },
            responderTerminationRequest: {
                registrationName: keyOf/*_*/({
                    onResponderTerminationRequest: null
                })
            },
            responderGrant: {
                registrationName: keyOf/*_*/({
                    onResponderGrant: null
                })
            },
            responderReject: {
                registrationName: keyOf/*_*/({
                    onResponderReject: null
                })
            },
            responderTerminate: {
                registrationName: keyOf/*_*/({
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
                y(global/*e*/) ? E += 1 : S(global/*e*/) && (E -= 1, E >= 0 || invariant/*g*/(0, "Ended a touch event which was not counted in trackedTouchCount.")), ResponderTouchHistoryStore/*f*/.recordTouchTrack(global/*e*/, requireLazy/*r*/);
                var module/*i*/ = a(global/*e*/, requireDynamic/*n*/) ? o(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/) : null,
                    EventPluginUtils/*u*/ = C && y(global/*e*/),
                    NodeHandle/*p*/ = C && v(global/*e*/),
                    ReactInstanceHandles/*d*/ = C && S(global/*e*/),
                    keyOf/*_*/ = EventPluginUtils/*u*/ ? x.responderStart : NodeHandle/*p*/ ? x.responderMove : ReactInstanceHandles/*d*/ ? x.responderEnd : null;
                if (keyOf/*_*/) {
                    var b = ResponderSyntheticEvent/*h*/.getPooled(keyOf/*_*/, C, requireLazy/*r*/);
                    b.touchHistory = ResponderTouchHistoryStore/*f*/.touchHistory, EventPropagators/*c*/.accumulateDirectDispatches(b), module/*i*/ = accumulate/*m*/(module/*i*/, b)
                }
                var R = C && global/*e*/ === EventConstants/*l*/.topLevelTypes.topTouchCancel,
                    w = C && !R && S(global/*e*/) && s(requireLazy/*r*/),
                    I = R ? x.responderTerminate : w ? x.responderRelease : null;
                if (I) {
                    var F = ResponderSyntheticEvent/*h*/.getPooled(I, C, requireLazy/*r*/);
                    F.touchHistory = ResponderTouchHistoryStore/*f*/.touchHistory, EventPropagators/*c*/.accumulateDirectDispatches(F), module/*i*/ = accumulate/*m*/(module/*i*/, F), T(null)
                }
                var L = ResponderTouchHistoryStore/*f*/.touchHistory.numberActiveTouches;
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