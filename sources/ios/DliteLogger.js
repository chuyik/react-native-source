__d("DliteLogger",["invariant","keyMirror","mixInEventEmitter"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
        var o = m[require/*t*/] = m[require/*t*/] || 0,
            s = {
                type: global/*e*/,
                name: o ? require/*t*/ + " " + o : require/*t*/,
                depth: d,
                startTime: requireDynamic/*n*/,
                endTime: requireLazy/*r*/,
                insertOrder: h.length,
                data: module/*i*/ || {}
            };
        return d++, h.push(s), m[require/*t*/] ++, isNaN(s.endTime) || a(s), s
    }

    function a(global/*e*/) {
        f.push(global/*e*/), _.emitAndHold(_.Events.completedEvent, global/*e*/)
    }

    function s(global/*e*/, require/*t*/) {
        if (__DEV__)
            for (var requireDynamic/*n*/ = 0; requireDynamic/*n*/ < g.length; requireDynamic/*n*/++) {
                var requireLazy/*r*/ = g[requireDynamic/*n*/];
                if (-1 !== global/*e*/.indexOf(requireLazy/*r*/)) {
                    var module/*i*/ = (require/*t*/ ? "Starting event " : "Ending event ") + '"' + global/*e*/ + '" matches breakpoint "' + requireLazy/*r*/ + '"';
                    return void console.log(module/*i*/)
                }
            }
    }
    var invariant/*l*/ = require/*t*/("invariant"),
        keyMirror/*u*/ = require/*t*/("keyMirror"),
        mixInEventEmitter/*c*/ = require/*t*/("mixInEventEmitter"),
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
            logClientEventRetroactive: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                s(global/*e*/, !0), console.timeStamp && console.timeStamp(global/*e*/);
                var module/*i*/ = o(p.CLIENT, global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/);
                return {
                    stop: function() {
                        isNaN(module/*i*/.endTime) || invariant/*l*/(0, "Cannot end `%s` more than once.", global/*e*/), -1 !== h.indexOf(module/*i*/) && d--, module/*i*/.endTime = Date.now(), a(module/*i*/), s(global/*e*/, !1)
                    }
                }
            },
            logClientEvent: function(global/*e*/, require/*t*/) {
                return _.logClientEventRetroactive(global/*e*/, Date.now(), 0 / 0, require/*t*/)
            },
            breakOnClientEvent: function(global/*e*/) {
                g.push(global/*e*/)
            },
            flushCompletedEvents: function() {
                var global/*e*/ = f;
                return d = 0, f = [], global/*e*/
            },
            flush: function() {
                var global/*e*/ = h.concat(f);
                return d = 0, h = [], f = [], m = {}, global/*e*/
            }
        };
    mixInEventEmitter/*c*/(_, _.Events), module/*i*/.exports = _
});