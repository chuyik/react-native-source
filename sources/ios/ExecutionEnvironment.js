__d("ExecutionEnvironment",[],function (e, t, n, r, i) {
    "use strict";
    var o = !1,
        a = {
            canUseDOM: o,
            canUseWorkers: "undefined" != typeof Worker,
            canUseEventListeners: o && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: o && !!window.screen,
            isInWorker: !o
        };
    i.exports = a
});