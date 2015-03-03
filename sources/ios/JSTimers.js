__d("JSTimers",["NativeModules","JSTimersExecution"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("NativeModules").RKTiming,
        exports/*a*/ = require/*t*/("JSTimersExecution"),
        NativeModules/*s*/ = {
            Types: exports/*a*/.Types,
            JSTimersExecution/*_getFreeIndex*/: function() {
                var global/*e*/ = exports/*a*/.timerIDs.indexOf(null);
                return -1 === global/*e*/ && (global/*e*/ = exports/*a*/.timerIDs.length), global/*e*/
            },
            setTimeout: function(global/*e*/, require/*t*/) {
                for (var requireDynamic/*n*/ = [], requireLazy/*r*/ = 2, module/*i*/ = arguments.length; module/*i*/ > requireLazy/*r*/; requireLazy/*r*/++) requireDynamic/*n*/.push(arguments[requireLazy/*r*/]);
                var l = exports/*a*/.GUID++,
                    u = NativeModules/*s*/.JSTimersExecution/*_getFreeIndex*/();
                return exports/*a*/.timerIDs[u] = l, exports/*a*/.callbacks[u] = global/*e*/, exports/*a*/.callbacks[u] = function() {
                    return global/*e*/.apply(void 0, requireDynamic/*n*/)
                }, exports/*a*/.types[u] = exports/*a*/.Type.setTimeout, o.createTimer(l, require/*t*/, Date.now(), !1), l
            },
            setInterval: function(global/*e*/, require/*t*/) {
                for (var requireDynamic/*n*/ = [], requireLazy/*r*/ = 2, module/*i*/ = arguments.length; module/*i*/ > requireLazy/*r*/; requireLazy/*r*/++) requireDynamic/*n*/.push(arguments[requireLazy/*r*/]);
                var l = exports/*a*/.GUID++,
                    u = NativeModules/*s*/.JSTimersExecution/*_getFreeIndex*/();
                return exports/*a*/.timerIDs[u] = l, exports/*a*/.callbacks[u] = global/*e*/, exports/*a*/.callbacks[u] = function() {
                    return global/*e*/.apply(void 0, requireDynamic/*n*/)
                }, exports/*a*/.types[u] = exports/*a*/.Type.setInterval, o.createTimer(l, require/*t*/, Date.now(), !0), l
            },
            setImmediate: function(global/*e*/) {
                for (var require/*t*/ = [], requireDynamic/*n*/ = 1, requireLazy/*r*/ = arguments.length; requireLazy/*r*/ > requireDynamic/*n*/; requireDynamic/*n*/++) require/*t*/.push(arguments[requireDynamic/*n*/]);
                var module/*i*/ = exports/*a*/.GUID++,
                    o = NativeModules/*s*/.JSTimersExecution/*_getFreeIndex*/();
                return exports/*a*/.timerIDs[o] = module/*i*/, exports/*a*/.callbacks[o] = global/*e*/, exports/*a*/.callbacks[o] = function() {
                    return global/*e*/.apply(void 0, require/*t*/)
                }, exports/*a*/.types[o] = exports/*a*/.Type.setImmediate, exports/*a*/.immediates.push(module/*i*/), module/*i*/
            },
            requestAnimationFrame: function(global/*e*/) {
                var require/*t*/ = exports/*a*/.GUID++,
                    requireDynamic/*n*/ = NativeModules/*s*/.JSTimersExecution/*_getFreeIndex*/();
                return exports/*a*/.timerIDs[requireDynamic/*n*/] = require/*t*/, exports/*a*/.callbacks[requireDynamic/*n*/] = global/*e*/, exports/*a*/.types[requireDynamic/*n*/] = exports/*a*/.Type.requestAnimationFrame, o.createTimer(require/*t*/, 0, Date.now(), !1), require/*t*/
            },
            clearTimeout: function(global/*e*/) {
                NativeModules/*s*/._clearTimerID(global/*e*/)
            },
            clearInterval: function(global/*e*/) {
                NativeModules/*s*/._clearTimerID(global/*e*/)
            },
            clearImmediate: function(global/*e*/) {
                NativeModules/*s*/._clearTimerID(global/*e*/), exports/*a*/.immediates.splice(exports/*a*/.immediates.indexOf(global/*e*/), 1)
            },
            cancelAnimationFrame: function(global/*e*/) {
                NativeModules/*s*/._clearTimerID(global/*e*/)
            },
            _clearTimerID: function(global/*e*/) {
                if (null != global/*e*/) {
                    var require/*t*/ = exports/*a*/.timerIDs.indexOf(global/*e*/); - 1 !== require/*t*/ && (exports/*a*/._clearIndex(require/*t*/), exports/*a*/.types[require/*t*/] !== exports/*a*/.Type.setImmediate && o.deleteTimer(global/*e*/))
                }
            }
        };
    module/*i*/.exports = NativeModules/*s*/
});