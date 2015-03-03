__d("ExecutionEnvironment",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = !1,
        a = {
            canUseDOM: o,
            canUseWorkers: "undefined" != typeof Worker,
            canUseEventListeners: o && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: o && !!window.screen,
            isInWorker: !o
        };
    module/*i*/.exports = a
});