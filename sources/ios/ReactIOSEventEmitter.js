__d("ReactIOSEventEmitter",["EventPluginHub","ReactEventEmitterMixin","ReactIOSTagHandles","NodeHandle","EventConstants","merge","warning"],function (e, t, n, r, i) {
    "use strict";
    var EventPluginHub/*o*/ = t("EventPluginHub"),
        ReactEventEmitterMixin/*a*/ = t("ReactEventEmitterMixin"),
        ReactIOSTagHandles/*s*/ = t("ReactIOSTagHandles"),
        NodeHandle/*l*/ = t("NodeHandle"),
        EventConstants/*u*/ = t("EventConstants"),
        merge/*c*/ = t("merge"),
        warning/*p*/ = t("warning"),
        d = EventConstants/*u*/.topLevelTypes,
        h = {},
        f = function(e, t) {
            for (var n = [], r = 0; r < t.length; r++) n.push(e[t[r]]);
            return n
        },
        m = function(e, t) {
            for (var n = [], r = 0; r < t.length; r++) {
                var i = t[r];
                n.push(e[i]), e[i] = null
            }
            for (var EventPluginHub/*o*/ = 0, ReactEventEmitterMixin/*a*/ = 0; ReactEventEmitterMixin/*a*/ < e.length; ReactEventEmitterMixin/*a*/++) {
                var ReactIOSTagHandles/*s*/ = e[ReactEventEmitterMixin/*a*/];
                null !== ReactIOSTagHandles/*s*/ && (e[EventPluginHub/*o*/++] = ReactIOSTagHandles/*s*/)
            }
            return e.length = EventPluginHub/*o*/, n
        },
        g = merge/*c*/(ReactEventEmitterMixin/*a*/, {
            registrationNames: EventPluginHub/*o*/.registrationNameModules,
            putListener: EventPluginHub/*o*/.putListener,
            getListener: EventPluginHub/*o*/.getListener,
            deleteListener: EventPluginHub/*o*/.deleteListener,
            deleteAllListeners: EventPluginHub/*o*/.deleteAllListeners,
            _receiveRootNodeIDEvent: function(e, t, n) {
                var r = n || h;
                g.handleTopLevel(t, e, e, r)
            },
            receiveEvent: function(e, t, n) {
                var r = ReactIOSTagHandles/*s*/.tagToRootNodeID[e];
                g._receiveRootNodeIDEvent(r, t, n)
            },
            receiveTouches: function(e, t, n) {
                for (var r = e === d.topTouchEnd || e === d.topTouchCancel ? m(t, n) : f(t, n), i = 0; i < r.length; i++) {
                    var EventPluginHub/*o*/ = r[i];
                    EventPluginHub/*o*/.changedTouches = r, EventPluginHub/*o*/.touches = t;
                    var ReactEventEmitterMixin/*a*/ = EventPluginHub/*o*/,
                        EventConstants/*u*/ = null,
                        merge/*c*/ = ReactEventEmitterMixin/*a*/.target;
                    if (null !== merge/*c*/ && void 0 !== merge/*c*/) {
                        if (merge/*c*/ < ReactIOSTagHandles/*s*/.tagsStartAt) {
                            __DEV__ && 0 === i && warning/*p*/(!1, "A view is reporting that ReactEventEmitterMixin/*a*/ touch occured on tag zero.");
                            continue
                        }
                        EventConstants/*u*/ = NodeHandle/*l*/.getRootNodeID(merge/*c*/)
                    }
                    g._receiveRootNodeIDEvent(EventConstants/*u*/, e, ReactEventEmitterMixin/*a*/)
                }
            }
        });
    i.exports = g
});