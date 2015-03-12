__d("getEventTarget",[],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        var t = e.target || e.srcElement || window;
        return 3 === t.nodeType ? t.parentNode : t
    }
    i.exports = o
});