__d("ResponderTouchHistoryStore",["EventPluginUtils","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("EventPluginUtils"),
        a = require/*t*/("invariant"),
        s = o.isMoveish,
        l = o.isStartish,
        u = o.isEndish,
        c = 20,
        p = {
            touchBank: [],
            numberActiveTouches: 0,
            indexOfSingleActiveTouch: -1,
            mostRecentTimeStamp: 0
        },
        d = function(global/*e*/) {
            return {
                touchActive: !0,
                startTimeStamp: global/*e*/.timeStamp,
                startPageX: global/*e*/.pageX,
                startPageY: global/*e*/.pageY,
                currentPageX: global/*e*/.pageX,
                currentPageY: global/*e*/.pageY,
                currentTimeStamp: global/*e*/.timeStamp,
                previousPageX: global/*e*/.pageX,
                previousPageY: global/*e*/.pageY,
                previousTimeStamp: global/*e*/.timeStamp
            }
        },
        h = function(global/*e*/, require/*t*/) {
            global/*e*/.touchActive = !0, global/*e*/.startTimeStamp = require/*t*/.timeStamp, global/*e*/.startPageX = require/*t*/.pageX, global/*e*/.startPageY = require/*t*/.pageY, global/*e*/.currentPageX = require/*t*/.pageX, global/*e*/.currentPageY = require/*t*/.pageY, global/*e*/.currentTimeStamp = require/*t*/.timeStamp, global/*e*/.previousPageX = require/*t*/.pageX, global/*e*/.previousPageY = require/*t*/.pageY, global/*e*/.previousTimeStamp = require/*t*/.timeStamp
        },
        f = function(global/*e*/) {
            var require/*t*/ = global/*e*/.identifier;
            null == require/*t*/ && a(0, "Touch object is missing identifier"), require/*t*/ > c && console.warn("Touch identifier " + require/*t*/ + " is greater than maximum supported " + c + " which causes performance issues backfilling array locations for all of the indices.")
        },
        m = function(global/*e*/) {
            var require/*t*/ = p.touchBank,
                requireDynamic/*n*/ = global/*e*/.identifier,
                requireLazy/*r*/ = require/*t*/[requireDynamic/*n*/];
            __DEV__ && f(global/*e*/), requireLazy/*r*/ ? h(requireLazy/*r*/, global/*e*/) : require/*t*/[global/*e*/.identifier] = d(global/*e*/), p.mostRecentTimeStamp = global/*e*/.timeStamp
        },
        g = function(global/*e*/) {
            var require/*t*/ = p.touchBank,
                requireDynamic/*n*/ = require/*t*/[global/*e*/.identifier];
            __DEV__ && (f(global/*e*/), requireDynamic/*n*/ || a(0, "Touch data should have been recorded on start")), requireDynamic/*n*/.touchActive = !0, requireDynamic/*n*/.previousPageX = requireDynamic/*n*/.currentPageX, requireDynamic/*n*/.previousPageY = requireDynamic/*n*/.currentPageY, requireDynamic/*n*/.previousTimeStamp = requireDynamic/*n*/.currentTimeStamp, requireDynamic/*n*/.currentPageX = global/*e*/.pageX, requireDynamic/*n*/.currentPageY = global/*e*/.pageY, requireDynamic/*n*/.currentTimeStamp = global/*e*/.timeStamp, p.mostRecentTimeStamp = global/*e*/.timeStamp
        },
        _ = function(global/*e*/) {
            var require/*t*/ = p.touchBank,
                requireDynamic/*n*/ = require/*t*/[global/*e*/.identifier];
            __DEV__ && (f(global/*e*/), requireDynamic/*n*/ || a(0, "Touch data should have been recorded on start")), requireDynamic/*n*/.previousPageX = requireDynamic/*n*/.currentPageX, requireDynamic/*n*/.previousPageY = requireDynamic/*n*/.currentPageY, requireDynamic/*n*/.previousTimeStamp = requireDynamic/*n*/.currentTimeStamp, requireDynamic/*n*/.currentPageX = global/*e*/.pageX, requireDynamic/*n*/.currentPageY = global/*e*/.pageY, requireDynamic/*n*/.currentTimeStamp = global/*e*/.timeStamp, requireDynamic/*n*/.touchActive = !1, p.mostRecentTimeStamp = global/*e*/.timeStamp
        },
        y = {
            recordTouchTrack: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = p.touchBank;
                if (s(global/*e*/)) require/*t*/.changedTouches.forEach(g);
                else if (l(global/*e*/)) require/*t*/.changedTouches.forEach(m), p.numberActiveTouches = require/*t*/.touches.length, 1 === p.numberActiveTouches && (p.indexOfSingleActiveTouch = require/*t*/.touches[0].identifier);
                else if (u(global/*e*/) && (require/*t*/.changedTouches.forEach(_), p.numberActiveTouches = require/*t*/.touches.length, 1 === p.numberActiveTouches)) {
                    for (var requireLazy/*r*/ = 0; requireLazy/*r*/ < requireDynamic/*n*/.length; requireLazy/*r*/++) {
                        var module/*i*/ = requireDynamic/*n*/[requireLazy/*r*/];
                        if (null != module/*i*/ && module/*i*/.touchActive) {
                            p.indexOfSingleActiveTouch = requireLazy/*r*/;
                            break
                        }
                    }
                    if (__DEV__) {
                        var o = requireDynamic/*n*/[p.indexOfSingleActiveTouch],
                            c = null != o && !!o.touchActive;
                        c || a(0, "Cannot find single active touch")
                    }
                }
            },
            touchHistory: p
        };
    module/*i*/.exports = y
});