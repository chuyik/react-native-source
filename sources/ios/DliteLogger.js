__d("DliteLogger",["invariant","keyMirror","mixInEventEmitter"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t, n, r, i) {
        var o = m[t] = m[t] || 0,
            s = {
                type: e,
                name: o ? t + " " + o : t,
                depth: d,
                startTime: n,
                endTime: r,
                insertOrder: h.length,
                data: i || {}
            };
        return d++, h.push(s), m[t] ++, isNaN(s.endTime) || a(s), s
    }

    function a(e) {
        f.push(e), _.emitAndHold(_.Events.completedEvent, e)
    }

    function s(e, t) {
        if (__DEV__)
            for (var n = 0; n < g.length; n++) {
                var r = g[n];
                if (-1 !== e.indexOf(r)) {
                    var i = (t ? "Starting event " : "Ending event ") + '"' + e + '" matches breakpoint "' + r + '"';
                    return void console.log(i)
                }
            }
    }
    var invariant/*l*/ = t("invariant"),
        keyMirror/*u*/ = t("keyMirror"),
        mixInEventEmitter/*c*/ = t("mixInEventEmitter"),
        p = keyMirror/*u*/({
            CLIENT: null,
            SERVER: null
        }),
        d = 0,
        h = [],
        f = [],
        m = {},
        g = [],
        _ = {
            Events: keyMirror/*u*/({
                completedEvent: null
            }),
            logClientEventRetroactive: function(e, t, n, r) {
                s(e, !0), console.timeStamp && console.timeStamp(e);
                var i = o(p.CLIENT, e, t, n, r);
                return {
                    stop: function() {
                        isNaN(i.endTime) || invariant/*l*/(0, "Cannot end `%s` more than once.", e), -1 !== h.indexOf(i) && d--, i.endTime = Date.now(), a(i), s(e, !1)
                    }
                }
            },
            logClientEvent: function(e, t) {
                return _.logClientEventRetroactive(e, Date.now(), 0 / 0, t)
            },
            breakOnClientEvent: function(e) {
                g.push(e)
            },
            flushCompletedEvents: function() {
                var e = f;
                return d = 0, f = [], e
            },
            flush: function() {
                var e = h.concat(f);
                return d = 0, h = [], f = [], m = {}, e
            }
        };
    mixInEventEmitter/*c*/(_, _.Events), i.exports = _
});