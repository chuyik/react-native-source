__d("DliteLog",["DliteLogLevel","ex","keyMirror","mixInEventEmitter"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("DliteLogLevel"),
        exports/*a*/ = require/*t*/("ex"),
        DliteLogLevel/*s*/ = require/*t*/("keyMirror"),
        ex/*l*/ = require/*t*/("mixInEventEmitter"),
        keyMirror/*u*/ = {
            Events: DliteLogLevel/*s*/({
                loggedError: null
            }),
            mixInEventEmitter/*warn*/: function() {
                for (var global/*e*/ = [], require/*t*/ = 0, requireDynamic/*n*/ = arguments.length; requireDynamic/*n*/ > require/*t*/; require/*t*/++) global/*e*/.push(arguments[require/*t*/]);
                var requireLazy/*r*/ = new Error(exports/*a*/.apply(null, global/*e*/));
                requireLazy/*r*/.framesToPop = 1, requireLazy/*r*/.type = o.WARNING, __DEV__ && console.mixInEventEmitter/*warn*/.apply(console, global/*e*/), this.emitAndHold(keyMirror/*u*/.Events.loggedError, requireLazy/*r*/)
            }
        };
    ex/*l*/(keyMirror/*u*/, keyMirror/*u*/.Events), module/*i*/.exports = keyMirror/*u*/
});