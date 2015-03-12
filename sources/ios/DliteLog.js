__d("DliteLog",["DliteLogLevel","ex","keyMirror","mixInEventEmitter"],function (e, t, n, r, i) {
    "use strict";
    var DliteLogLevel/*o*/ = t("DliteLogLevel"),
        ex/*a*/ = t("ex"),
        keyMirror/*s*/ = t("keyMirror"),
        mixInEventEmitter/*l*/ = t("mixInEventEmitter"),
        u = {
            Events: keyMirror/*s*/({
                loggedError: null
            }),
            warn: function() {
                for (var e = [], t = 0, n = arguments.length; n > t; t++) e.push(arguments[t]);
                var r = new Error(ex/*a*/.apply(null, e));
                r.framesToPop = 1, r.type = DliteLogLevel/*o*/.WARNING, __DEV__ && console.warn.apply(console, e), this.emitAndHold(u.Events.loggedError, r)
            }
        };
    mixInEventEmitter/*l*/(u, u.Events), i.exports = u
});