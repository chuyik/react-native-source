__d("DliteLogger",["invariant","keyMirror","mixInEventEmitter"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*invariant/*n*/*/, requireLazy/*keyMirror/*r*/*/, module/*mixInEventEmitter/*i*/*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*t*/*/, requireDynamic/*invariant/*n*/*/, requireLazy/*keyMirror/*r*/*/, module/*mixInEventEmitter/*i*/*/) {
        var o = m[require/*exports/*t*/*/] = m[require/*exports/*t*/*/] || 0,
            s = {
                type: global/*e*/,
                name: o ? require/*exports/*t*/*/ + " " + o : require/*exports/*t*/*/,
                depth: d,
                startTime: requireDynamic/*invariant/*n*/*/,
                endTime: requireLazy/*keyMirror/*r*/*/,
                insertOrder: h.length,
                data: module/*mixInEventEmitter/*i*/*/ || {}
            };
        return d++, h.push(s), m[require/*exports/*t*/*/] ++, isNaN(s.endTime) || a(s), s
    }

    function a(global/*e*/) {
        f.push(global/*e*/), _.emitAndHold(_.Events.completedEvent, global/*e*/)
    }

    function s(global/*e*/, require/*exports/*t*/*/) {
        if (__DEV__)
            for (var requireDynamic/*invariant/*n*/*/ = 0; requireDynamic/*invariant/*n*/*/ < g.length; requireDynamic/*invariant/*n*/*/++) {
                var requireLazy/*keyMirror/*r*/*/ = g[requireDynamic/*invariant/*n*/*/];
                if (-1 !== global/*e*/.indexOf(requireLazy/*keyMirror/*r*/*/)) {
                    var module/*mixInEventEmitter/*i*/*/ = (require/*exports/*t*/*/ ? "Starting event " : "Ending event ") + '"' + global/*e*/ + '" matches breakpoint "' + requireLazy/*keyMirror/*r*/*/ + '"';
                    return void console.log(module/*mixInEventEmitter/*i*/*/)
                }
            }
    }
    var l = require/*exports/*t*/*/("invariant"),
        u = require/*exports/*t*/*/("keyMirror"),
        c = require/*exports/*t*/*/("mixInEventEmitter"),
        p = u({
            CLIENT: null,
            SERVER: null
        }),
        d = 0,
        h = [],
        f = [],
        m = {},
        g = [],
        _ = {
            Events: u({
                completedEvent: null
            }),
            logClientEventRetroactive: function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*invariant/*n*/*/, requireLazy/*keyMirror/*r*/*/) {
                s(global/*e*/, !0), console.timeStamp && console.timeStamp(global/*e*/);
                var module/*mixInEventEmitter/*i*/*/ = o(p.CLIENT, global/*e*/, require/*exports/*t*/*/, requireDynamic/*invariant/*n*/*/, requireLazy/*keyMirror/*r*/*/);
                return {
                    stop: function() {
                        isNaN(module/*mixInEventEmitter/*i*/*/.endTime) || l(0, "Cannot end `%s` more than once.", global/*e*/), -1 !== h.indexOf(module/*mixInEventEmitter/*i*/*/) && d--, module/*mixInEventEmitter/*i*/*/.endTime = Date.now(), a(module/*mixInEventEmitter/*i*/*/), s(global/*e*/, !1)
                    }
                }
            },
            logClientEvent: function(global/*e*/, require/*exports/*t*/*/) {
                return _.logClientEventRetroactive(global/*e*/, Date.now(), 0 / 0, require/*exports/*t*/*/)
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
    c(_, _.Events), module/*mixInEventEmitter/*i*/*/.exports = _
});