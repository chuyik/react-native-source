__d("JSTimers",["NativeModules","JSTimersExecution"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var NativeModules/*o*/ = require/*t*/("NativeModules").RKTiming,
        JSTimersExecution/*a*/ = require/*t*/("JSTimersExecution"),
        s = {
            Types: JSTimersExecution/*a*/.Types,
            _getFreeIndex: function() {
                var global/*e*/ = JSTimersExecution/*a*/.timerIDs.indexOf(null);
                return -1 === global/*e*/ && (global/*e*/ = JSTimersExecution/*a*/.timerIDs.length), global/*e*/
            },
            setTimeout: function(global/*e*/, require/*t*/) {
                for (var requireDynamic/*n*/ = [], requireLazy/*r*/ = 2, module/*i*/ = arguments.length; module/*i*/ > requireLazy/*r*/; requireLazy/*r*/++) requireDynamic/*n*/.push(arguments[requireLazy/*r*/]);
                var l = JSTimersExecution/*a*/.GUID++,
                    u = s._getFreeIndex();
                return JSTimersExecution/*a*/.timerIDs[u] = l, JSTimersExecution/*a*/.callbacks[u] = global/*e*/, JSTimersExecution/*a*/.callbacks[u] = function() {
                    return global/*e*/.apply(void 0, requireDynamic/*n*/)
                }, JSTimersExecution/*a*/.types[u] = JSTimersExecution/*a*/.Type.setTimeout, NativeModules/*o*/.createTimer(l, require/*t*/, Date.now(), !1), l
            },
            setInterval: function(global/*e*/, require/*t*/) {
                for (var requireDynamic/*n*/ = [], requireLazy/*r*/ = 2, module/*i*/ = arguments.length; module/*i*/ > requireLazy/*r*/; requireLazy/*r*/++) requireDynamic/*n*/.push(arguments[requireLazy/*r*/]);
                var l = JSTimersExecution/*a*/.GUID++,
                    u = s._getFreeIndex();
                return JSTimersExecution/*a*/.timerIDs[u] = l, JSTimersExecution/*a*/.callbacks[u] = global/*e*/, JSTimersExecution/*a*/.callbacks[u] = function() {
                    return global/*e*/.apply(void 0, requireDynamic/*n*/)
                }, JSTimersExecution/*a*/.types[u] = JSTimersExecution/*a*/.Type.setInterval, NativeModules/*o*/.createTimer(l, require/*t*/, Date.now(), !0), l
            },
            setImmediate: function(global/*e*/) {
                for (var require/*t*/ = [], requireDynamic/*n*/ = 1, requireLazy/*r*/ = arguments.length; requireLazy/*r*/ > requireDynamic/*n*/; requireDynamic/*n*/++) require/*t*/.push(arguments[requireDynamic/*n*/]);
                var module/*i*/ = JSTimersExecution/*a*/.GUID++,
                    NativeModules/*o*/ = s._getFreeIndex();
                return JSTimersExecution/*a*/.timerIDs[NativeModules/*o*/] = module/*i*/, JSTimersExecution/*a*/.callbacks[NativeModules/*o*/] = global/*e*/, JSTimersExecution/*a*/.callbacks[NativeModules/*o*/] = function() {
                    return global/*e*/.apply(void 0, require/*t*/)
                }, JSTimersExecution/*a*/.types[NativeModules/*o*/] = JSTimersExecution/*a*/.Type.setImmediate, JSTimersExecution/*a*/.immediates.push(module/*i*/), module/*i*/
            },
            requestAnimationFrame: function(global/*e*/) {
                var require/*t*/ = JSTimersExecution/*a*/.GUID++,
                    requireDynamic/*n*/ = s._getFreeIndex();
                return JSTimersExecution/*a*/.timerIDs[requireDynamic/*n*/] = require/*t*/, JSTimersExecution/*a*/.callbacks[requireDynamic/*n*/] = global/*e*/, JSTimersExecution/*a*/.types[requireDynamic/*n*/] = JSTimersExecution/*a*/.Type.requestAnimationFrame, NativeModules/*o*/.createTimer(require/*t*/, 0, Date.now(), !1), require/*t*/
            },
            clearTimeout: function(global/*e*/) {
                s._clearTimerID(global/*e*/)
            },
            clearInterval: function(global/*e*/) {
                s._clearTimerID(global/*e*/)
            },
            clearImmediate: function(global/*e*/) {
                s._clearTimerID(global/*e*/), JSTimersExecution/*a*/.immediates.splice(JSTimersExecution/*a*/.immediates.indexOf(global/*e*/), 1)
            },
            cancelAnimationFrame: function(global/*e*/) {
                s._clearTimerID(global/*e*/)
            },
            _clearTimerID: function(global/*e*/) {
                if (null != global/*e*/) {
                    var require/*t*/ = JSTimersExecution/*a*/.timerIDs.indexOf(global/*e*/); - 1 !== require/*t*/ && (JSTimersExecution/*a*/._clearIndex(require/*t*/), JSTimersExecution/*a*/.types[require/*t*/] !== JSTimersExecution/*a*/.Type.setImmediate && NativeModules/*o*/.deleteTimer(global/*e*/))
                }
            }
        };
    module/*i*/.exports = s
});