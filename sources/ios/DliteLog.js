__d("DliteLog",["DliteLogLevel","ex","keyMirror","mixInEventEmitter"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var DliteLogLevel/*o*/ = require/*t*/("DliteLogLevel"),
        ex/*a*/ = require/*t*/("ex"),
        keyMirror/*s*/ = require/*t*/("keyMirror"),
        mixInEventEmitter/*l*/ = require/*t*/("mixInEventEmitter"),
        u = {
            Events: keyMirror/*s*/({
                loggedError: null
            }),
            warn: function() {
                for (var global/*e*/ = [], require/*t*/ = 0, requireDynamic/*n*/ = arguments.length; requireDynamic/*n*/ > require/*t*/; require/*t*/++) global/*e*/.push(arguments[require/*t*/]);
                var requireLazy/*r*/ = new Error(ex/*a*/.apply(null, global/*e*/));
                requireLazy/*r*/.framesToPop = 1, requireLazy/*r*/.type = DliteLogLevel/*o*/.WARNING, __DEV__ && console.warn.apply(console, global/*e*/), this.emitAndHold(u.Events.loggedError, requireLazy/*r*/)
            }
        };
    mixInEventEmitter/*l*/(u, u.Events), module/*i*/.exports = u
});