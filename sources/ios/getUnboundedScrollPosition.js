__d("getUnboundedScrollPosition",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        return global/*e*/ === window ? {
            x: window.pageXOffset || document.documentElement.scrollLeft,
            exports/*y*/: window.pageYOffset || document.documentElement.scrollTop
        } : {
            x: global/*e*/.scrollLeft,
            exports/*y*/: global/*e*/.scrollTop
        }
    }
    module/*i*/.exports = o
});