__d("JSTimers",["NativeModules","JSTimersExecution"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("NativeModules").RKTiming,
        a = require/*t*/("JSTimersExecution"),
        s = {
            Types: a.Types,
            _getFreeIndex: function() {
                var global/*e*/ = a.timerIDs.indexOf(null);
                return -1 === global/*e*/ && (global/*e*/ = a.timerIDs.length), global/*e*/
            },
            setTimeout: function(global/*e*/, require/*t*/) {
                for (var requireDynamic/*n*/ = [], requireLazy/*r*/ = 2, module/*i*/ = arguments.length; module/*i*/ > requireLazy/*r*/; requireLazy/*r*/++) requireDynamic/*n*/.push(arguments[requireLazy/*r*/]);
                var l = a.GUID++,
                    u = s._getFreeIndex();
                return a.timerIDs[u] = l, a.callbacks[u] = global/*e*/, a.callbacks[u] = function() {
                    return global/*e*/.apply(void 0, requireDynamic/*n*/)
                }, a.types[u] = a.Type.setTimeout, o.createTimer(l, require/*t*/, Date.now(), !1), l
            },
            setInterval: function(global/*e*/, require/*t*/) {
                for (var requireDynamic/*n*/ = [], requireLazy/*r*/ = 2, module/*i*/ = arguments.length; module/*i*/ > requireLazy/*r*/; requireLazy/*r*/++) requireDynamic/*n*/.push(arguments[requireLazy/*r*/]);
                var l = a.GUID++,
                    u = s._getFreeIndex();
                return a.timerIDs[u] = l, a.callbacks[u] = global/*e*/, a.callbacks[u] = function() {
                    return global/*e*/.apply(void 0, requireDynamic/*n*/)
                }, a.types[u] = a.Type.setInterval, o.createTimer(l, require/*t*/, Date.now(), !0), l
            },
            setImmediate: function(global/*e*/) {
                for (var require/*t*/ = [], requireDynamic/*n*/ = 1, requireLazy/*r*/ = arguments.length; requireLazy/*r*/ > requireDynamic/*n*/; requireDynamic/*n*/++) require/*t*/.push(arguments[requireDynamic/*n*/]);
                var module/*i*/ = a.GUID++,
                    o = s._getFreeIndex();
                return a.timerIDs[o] = module/*i*/, a.callbacks[o] = global/*e*/, a.callbacks[o] = function() {
                    return global/*e*/.apply(void 0, require/*t*/)
                }, a.types[o] = a.Type.setImmediate, a.immediates.push(module/*i*/), module/*i*/
            },
            requestAnimationFrame: function(global/*e*/) {
                var require/*t*/ = a.GUID++,
                    requireDynamic/*n*/ = s._getFreeIndex();
                return a.timerIDs[requireDynamic/*n*/] = require/*t*/, a.callbacks[requireDynamic/*n*/] = global/*e*/, a.types[requireDynamic/*n*/] = a.Type.requestAnimationFrame, o.createTimer(require/*t*/, 0, Date.now(), !1), require/*t*/
            },
            clearTimeout: function(global/*e*/) {
                s._clearTimerID(global/*e*/)
            },
            clearInterval: function(global/*e*/) {
                s._clearTimerID(global/*e*/)
            },
            clearImmediate: function(global/*e*/) {
                s._clearTimerID(global/*e*/), a.immediates.splice(a.immediates.indexOf(global/*e*/), 1)
            },
            cancelAnimationFrame: function(global/*e*/) {
                s._clearTimerID(global/*e*/)
            },
            _clearTimerID: function(global/*e*/) {
                if (null != global/*e*/) {
                    var require/*t*/ = a.timerIDs.indexOf(global/*e*/); - 1 !== require/*t*/ && (a._clearIndex(require/*t*/), a.types[require/*t*/] !== a.Type.setImmediate && o.deleteTimer(global/*e*/))
                }
            }
        };
    module/*i*/.exports = s
});