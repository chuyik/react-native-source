__d("insetsDiffer",[],function (e, t, n, r, i) {
    "use strict";
    var o = {
            top: void 0,
            left: void 0,
            right: void 0,
            bottom: void 0
        },
        a = function(e, t) {
            return e = e || o, t = t || o, e !== t && (e.top !== t.top || e.left !== t.left || e.right !== t.right || e.bottom !== t.bottom)
        };
    i.exports = a
});