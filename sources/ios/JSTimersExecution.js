__d("JSTimersExecution",["invariant","keyMirror","performanceNow","warning","JSTimers","JSTimers"],function (e, t, n, r, i) {
    "use strict";
    var invariant/*o*/ = t("invariant"),
        keyMirror/*a*/ = t("keyMirror"),
        performanceNow/*s*/ = t("performanceNow"),
        warning/*l*/ = t("warning"),
        u = {
            GUID: 1,
            Type: keyMirror/*a*/({
                setTimeout: null,
                setInterval: null,
                requestAnimationFrame: null,
                setImmediate: null
            }),
            callbacks: [],
            types: [],
            timerIDs: [],
            immediates: [],
            callTimer: function(e) {
                warning/*l*/(e <= u.GUID, "Tried to call timer with ID " + e + " but no such timer exists");
                var t = u.timerIDs.indexOf(e);
                if (-1 !== t) {
                    var n = u.types[t],
                        r = u.callbacks[t];
                    (n === u.Type.setTimeout || n === u.Type.setImmediate || n === u.Type.requestAnimationFrame) && u._clearIndex(t);
                    try {
                        if (n === u.Type.setTimeout || n === u.Type.setInterval || n === u.Type.setImmediate) r();
                        else {
                            if (n !== u.Type.requestAnimationFrame) return void console.error("Tried to call keyMirror/*a*/ callback with invalid type: " + n);
                            var i = performanceNow/*s*/();
                            r(i)
                        }
                    } catch (invariant/*o*/) {
                        u.errors = u.errors || [], u.errors.push(invariant/*o*/)
                    }
                }
            },
            callTimers: function(e) {
                0 === e.length && invariant/*o*/(0, 'Probably shouldn\'t call "callTimers" with no timerIDs'), u.errors = null, e.forEach(u.callTimer);
                var n = u.errors;
                if (n) {
                    var r = n.length;
                    if (r > 1)
                        for (var i = 1; r > i; i++) t("JSTimers").setTimeout(function(e) {
                            throw e
                        }.bind(null, n[i]), 0);
                    throw n[0]
                }
            },
            callImmediates: function() {
                for (u.errors = null; 0 !== u.immediates.length;) u.callTimer(u.immediates.shift());
                u.errors && u.errors.forEach(function(e) {
                    return t("JSTimers").setTimeout(function() {
                        throw e
                    }, 0)
                })
            },
            _clearIndex: function(e) {
                u.timerIDs[e] = null, u.callbacks[e] = null, u.types[e] = null
            }
        };
    i.exports = u
});