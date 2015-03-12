__d("ResponderEventPlugin",["EventConstants","EventPluginUtils","EventPropagators","NodeHandle","ReactInstanceHandles","ResponderSyntheticEvent","ResponderTouchHistoryStore","accumulate","invariant","keyOf"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t, n) {
        var r = y(e) ? x.startShouldSetResponder : v(e) ? x.moveShouldSetResponder : e === EventConstants/*l*/.topLevelTypes.topSelectionChange ? x.selectionChangeShouldSetResponder : x.scrollShouldSetResponder,
            i = C ? ReactInstanceHandles/*d*/._getFirstCommonAncestorID(C, t) : t,
            o = i === C,
            a = ResponderSyntheticEvent/*h*/.getPooled(r, i, n);
        a.touchHistory = ResponderTouchHistoryStore/*f*/.touchHistory, o ? EventPropagators/*c*/.accumulateTwoPhaseDispatchesSkipTarget(a) : EventPropagators/*c*/.accumulateTwoPhaseDispatches(a);
        var s = w(a);
        if (a.isPersistent() || a.constructor.release(a), !s || s === C) return null;
        var EventPluginUtils/*u*/, NodeHandle/*p*/ = ResponderSyntheticEvent/*h*/.getPooled(x.responderGrant, s, n);
        if (NodeHandle/*p*/.touchHistory = ResponderTouchHistoryStore/*f*/.touchHistory, EventPropagators/*c*/.accumulateDirectDispatches(NodeHandle/*p*/), C) {
            var invariant/*g*/ = ResponderSyntheticEvent/*h*/.getPooled(x.responderTerminationRequest, C, n);
            invariant/*g*/.touchHistory = ResponderTouchHistoryStore/*f*/.touchHistory, EventPropagators/*c*/.accumulateDirectDispatches(invariant/*g*/);
            var keyOf/*_*/ = !R(invariant/*g*/) || b(invariant/*g*/);
            if (invariant/*g*/.isPersistent() || invariant/*g*/.constructor.release(invariant/*g*/), keyOf/*_*/) {
                var S = x.responderTerminate,
                    E = ResponderSyntheticEvent/*h*/.getPooled(S, C, n);
                E.touchHistory = ResponderTouchHistoryStore/*f*/.touchHistory, EventPropagators/*c*/.accumulateDirectDispatches(E), EventPluginUtils/*u*/ = accumulate/*m*/(EventPluginUtils/*u*/, [NodeHandle/*p*/, E]), T(s)
            } else {
                var D = ResponderSyntheticEvent/*h*/.getPooled(x.responderReject, s, n);
                D.touchHistory = ResponderTouchHistoryStore/*f*/.touchHistory, EventPropagators/*c*/.accumulateDirectDispatches(D), EventPluginUtils/*u*/ = accumulate/*m*/(EventPluginUtils/*u*/, D)
            }
        } else EventPluginUtils/*u*/ = accumulate/*m*/(EventPluginUtils/*u*/, NodeHandle/*p*/), T(s);
        return EventPluginUtils/*u*/
    }

    function a(e, t) {
        return t && (e === EventConstants/*l*/.topLevelTypes.topScroll || E > 0 && e === EventConstants/*l*/.topLevelTypes.topSelectionChange || y(e) || v(e))
    }

    function s(e) {
        var t = e.touches;
        if (!t || 0 === t.length) return !0;
        for (var n = 0; n < t.length; n++) {
            var r = t[n],
                i = r.target;
            if (null !== i && void 0 !== i && 0 !== i) {
                var o = ReactInstanceHandles/*d*/._getFirstCommonAncestorID(C, NodeHandle/*p*/.getRootNodeID(i));
                if (o === C) return !1
            }
        }
        return !0
    }
    var EventConstants/*l*/ = t("EventConstants"),
        EventPluginUtils/*u*/ = t("EventPluginUtils"),
        EventPropagators/*c*/ = t("EventPropagators"),
        NodeHandle/*p*/ = t("NodeHandle"),
        ReactInstanceHandles/*d*/ = t("ReactInstanceHandles"),
        ResponderSyntheticEvent/*h*/ = t("ResponderSyntheticEvent"),
        ResponderTouchHistoryStore/*f*/ = t("ResponderTouchHistoryStore"),
        accumulate/*m*/ = t("accumulate"),
        invariant/*g*/ = t("invariant"),
        keyOf/*_*/ = t("keyOf"),
        y = EventPluginUtils/*u*/.isStartish,
        v = EventPluginUtils/*u*/.isMoveish,
        S = EventPluginUtils/*u*/.isEndish,
        b = EventPluginUtils/*u*/.executeDirectDispatch,
        R = EventPluginUtils/*u*/.hasDispatches,
        w = EventPluginUtils/*u*/.executeDispatchesInOrderStopAtTrue,
        C = null,
        E = 0,
        D = 0,
        T = function(e) {
            var t = C;
            C = e, null !== P.GlobalResponderHandler && P.GlobalResponderHandler.onChange(t, e)
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
            extractEvents: function(e, t, n, r) {
                y(e) ? E += 1 : S(e) && (E -= 1, E >= 0 || invariant/*g*/(0, "Ended a touch event which was not counted in trackedTouchCount.")), ResponderTouchHistoryStore/*f*/.recordTouchTrack(e, r);
                var i = a(e, n) ? o(e, n, r) : null,
                    EventPluginUtils/*u*/ = C && y(e),
                    NodeHandle/*p*/ = C && v(e),
                    ReactInstanceHandles/*d*/ = C && S(e),
                    keyOf/*_*/ = EventPluginUtils/*u*/ ? x.responderStart : NodeHandle/*p*/ ? x.responderMove : ReactInstanceHandles/*d*/ ? x.responderEnd : null;
                if (keyOf/*_*/) {
                    var b = ResponderSyntheticEvent/*h*/.getPooled(keyOf/*_*/, C, r);
                    b.touchHistory = ResponderTouchHistoryStore/*f*/.touchHistory, EventPropagators/*c*/.accumulateDirectDispatches(b), i = accumulate/*m*/(i, b)
                }
                var R = C && e === EventConstants/*l*/.topLevelTypes.topTouchCancel,
                    w = C && !R && S(e) && s(r),
                    I = R ? x.responderTerminate : w ? x.responderRelease : null;
                if (I) {
                    var F = ResponderSyntheticEvent/*h*/.getPooled(I, C, r);
                    F.touchHistory = ResponderTouchHistoryStore/*f*/.touchHistory, EventPropagators/*c*/.accumulateDirectDispatches(F), i = accumulate/*m*/(i, F), T(null)
                }
                var L = ResponderTouchHistoryStore/*f*/.touchHistory.numberActiveTouches;
                return P.GlobalInteractionHandler && L !== D && P.GlobalInteractionHandler.onChange(L), D = L, i
            },
            GlobalResponderHandler: null,
            GlobalInteractionHandler: null,
            injection: {
                injectGlobalResponderHandler: function(e) {
                    P.GlobalResponderHandler = e
                },
                injectGlobalInteractionHandler: function(e) {
                    P.GlobalInteractionHandler = e
                }
            }
        };
    i.exports = P
});