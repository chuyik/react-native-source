__d("JSTimers",["NativeModules","JSTimersExecution"],function (e, t, n, r, i) {
    "use strict";
    var NativeModules/*o*/ = t("NativeModules").RKTiming,
        JSTimersExecution/*a*/ = t("JSTimersExecution"),
        s = {
            Types: JSTimersExecution/*a*/.Types,
            _getFreeIndex: function() {
                var e = JSTimersExecution/*a*/.timerIDs.indexOf(null);
                return -1 === e && (e = JSTimersExecution/*a*/.timerIDs.length), e
            },
            setTimeout: function(e, t) {
                for (var n = [], r = 2, i = arguments.length; i > r; r++) n.push(arguments[r]);
                var l = JSTimersExecution/*a*/.GUID++,
                    u = s._getFreeIndex();
                return JSTimersExecution/*a*/.timerIDs[u] = l, JSTimersExecution/*a*/.callbacks[u] = e, JSTimersExecution/*a*/.callbacks[u] = function() {
                    return e.apply(void 0, n)
                }, JSTimersExecution/*a*/.types[u] = JSTimersExecution/*a*/.Type.setTimeout, NativeModules/*o*/.createTimer(l, t, Date.now(), !1), l
            },
            setInterval: function(e, t) {
                for (var n = [], r = 2, i = arguments.length; i > r; r++) n.push(arguments[r]);
                var l = JSTimersExecution/*a*/.GUID++,
                    u = s._getFreeIndex();
                return JSTimersExecution/*a*/.timerIDs[u] = l, JSTimersExecution/*a*/.callbacks[u] = e, JSTimersExecution/*a*/.callbacks[u] = function() {
                    return e.apply(void 0, n)
                }, JSTimersExecution/*a*/.types[u] = JSTimersExecution/*a*/.Type.setInterval, NativeModules/*o*/.createTimer(l, t, Date.now(), !0), l
            },
            setImmediate: function(e) {
                for (var t = [], n = 1, r = arguments.length; r > n; n++) t.push(arguments[n]);
                var i = JSTimersExecution/*a*/.GUID++,
                    NativeModules/*o*/ = s._getFreeIndex();
                return JSTimersExecution/*a*/.timerIDs[NativeModules/*o*/] = i, JSTimersExecution/*a*/.callbacks[NativeModules/*o*/] = e, JSTimersExecution/*a*/.callbacks[NativeModules/*o*/] = function() {
                    return e.apply(void 0, t)
                }, JSTimersExecution/*a*/.types[NativeModules/*o*/] = JSTimersExecution/*a*/.Type.setImmediate, JSTimersExecution/*a*/.immediates.push(i), i
            },
            requestAnimationFrame: function(e) {
                var t = JSTimersExecution/*a*/.GUID++,
                    n = s._getFreeIndex();
                return JSTimersExecution/*a*/.timerIDs[n] = t, JSTimersExecution/*a*/.callbacks[n] = e, JSTimersExecution/*a*/.types[n] = JSTimersExecution/*a*/.Type.requestAnimationFrame, NativeModules/*o*/.createTimer(t, 0, Date.now(), !1), t
            },
            clearTimeout: function(e) {
                s._clearTimerID(e)
            },
            clearInterval: function(e) {
                s._clearTimerID(e)
            },
            clearImmediate: function(e) {
                s._clearTimerID(e), JSTimersExecution/*a*/.immediates.splice(JSTimersExecution/*a*/.immediates.indexOf(e), 1)
            },
            cancelAnimationFrame: function(e) {
                s._clearTimerID(e)
            },
            _clearTimerID: function(e) {
                if (null != e) {
                    var t = JSTimersExecution/*a*/.timerIDs.indexOf(e); - 1 !== t && (JSTimersExecution/*a*/._clearIndex(t), JSTimersExecution/*a*/.types[t] !== JSTimersExecution/*a*/.Type.setImmediate && NativeModules/*o*/.deleteTimer(e))
                }
            }
        };
    i.exports = s
});