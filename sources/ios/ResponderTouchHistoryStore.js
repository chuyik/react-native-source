__d("ResponderTouchHistoryStore",["EventPluginUtils","invariant"],function (e, t, n, r, i) {
    "use strict";
    var EventPluginUtils/*o*/ = t("EventPluginUtils"),
        invariant/*a*/ = t("invariant"),
        s = EventPluginUtils/*o*/.isMoveish,
        l = EventPluginUtils/*o*/.isStartish,
        u = EventPluginUtils/*o*/.isEndish,
        c = 20,
        p = {
            touchBank: [],
            numberActiveTouches: 0,
            indexOfSingleActiveTouch: -1,
            mostRecentTimeStamp: 0
        },
        d = function(e) {
            return {
                touchActive: !0,
                startTimeStamp: e.timeStamp,
                startPageX: e.pageX,
                startPageY: e.pageY,
                currentPageX: e.pageX,
                currentPageY: e.pageY,
                currentTimeStamp: e.timeStamp,
                previousPageX: e.pageX,
                previousPageY: e.pageY,
                previousTimeStamp: e.timeStamp
            }
        },
        h = function(e, t) {
            e.touchActive = !0, e.startTimeStamp = t.timeStamp, e.startPageX = t.pageX, e.startPageY = t.pageY, e.currentPageX = t.pageX, e.currentPageY = t.pageY, e.currentTimeStamp = t.timeStamp, e.previousPageX = t.pageX, e.previousPageY = t.pageY, e.previousTimeStamp = t.timeStamp
        },
        f = function(e) {
            var t = e.identifier;
            null == t && invariant/*a*/(0, "Touch object is missing identifier"), t > c && console.warn("Touch identifier " + t + " is greater than maximum supported " + c + " which causes performance issues backfilling array locations for all of the indices.")
        },
        m = function(e) {
            var t = p.touchBank,
                n = e.identifier,
                r = t[n];
            __DEV__ && f(e), r ? h(r, e) : t[e.identifier] = d(e), p.mostRecentTimeStamp = e.timeStamp
        },
        g = function(e) {
            var t = p.touchBank,
                n = t[e.identifier];
            __DEV__ && (f(e), n || invariant/*a*/(0, "Touch data should have been recorded on start")), n.touchActive = !0, n.previousPageX = n.currentPageX, n.previousPageY = n.currentPageY, n.previousTimeStamp = n.currentTimeStamp, n.currentPageX = e.pageX, n.currentPageY = e.pageY, n.currentTimeStamp = e.timeStamp, p.mostRecentTimeStamp = e.timeStamp
        },
        _ = function(e) {
            var t = p.touchBank,
                n = t[e.identifier];
            __DEV__ && (f(e), n || invariant/*a*/(0, "Touch data should have been recorded on start")), n.previousPageX = n.currentPageX, n.previousPageY = n.currentPageY, n.previousTimeStamp = n.currentTimeStamp, n.currentPageX = e.pageX, n.currentPageY = e.pageY, n.currentTimeStamp = e.timeStamp, n.touchActive = !1, p.mostRecentTimeStamp = e.timeStamp
        },
        y = {
            recordTouchTrack: function(e, t) {
                var n = p.touchBank;
                if (s(e)) t.changedTouches.forEach(g);
                else if (l(e)) t.changedTouches.forEach(m), p.numberActiveTouches = t.touches.length, 1 === p.numberActiveTouches && (p.indexOfSingleActiveTouch = t.touches[0].identifier);
                else if (u(e) && (t.changedTouches.forEach(_), p.numberActiveTouches = t.touches.length, 1 === p.numberActiveTouches)) {
                    for (var r = 0; r < n.length; r++) {
                        var i = n[r];
                        if (null != i && i.touchActive) {
                            p.indexOfSingleActiveTouch = r;
                            break
                        }
                    }
                    if (__DEV__) {
                        var EventPluginUtils/*o*/ = n[p.indexOfSingleActiveTouch],
                            c = null != EventPluginUtils/*o*/ && !!EventPluginUtils/*o*/.touchActive;
                        c || invariant/*a*/(0, "Cannot find single active touch")
                    }
                }
            },
            touchHistory: p
        };
    i.exports = y
});