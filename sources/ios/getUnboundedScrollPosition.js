__d("getUnboundedScrollPosition",[],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        return e === window ? {
            x: window.pageXOffset || document.documentElement.scrollLeft,
            y: window.pageYOffset || document.documentElement.scrollTop
        } : {
            x: e.scrollLeft,
            y: e.scrollTop
        }
    }
    i.exports = o
});