__d("DliteLog",["DliteLogLevel","ex","keyMirror","mixInEventEmitter"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("DliteLogLevel"),
        a = require/*t*/("ex"),
        s = require/*t*/("keyMirror"),
        l = require/*t*/("mixInEventEmitter"),
        u = {
            Events: s({
                loggedError: null
            }),
            warn: function() {
                for (var global/*e*/ = [], require/*t*/ = 0, requireDynamic/*n*/ = arguments.length; requireDynamic/*n*/ > require/*t*/; require/*t*/++) global/*e*/.push(arguments[require/*t*/]);
                var requireLazy/*r*/ = new Error(a.apply(null, global/*e*/));
                requireLazy/*r*/.framesToPop = 1, requireLazy/*r*/.type = o.WARNING, __DEV__ && console.warn.apply(console, global/*e*/), this.emitAndHold(u.Events.loggedError, requireLazy/*r*/)
            }
        };
    l(u, u.Events), module/*i*/.exports = u
});