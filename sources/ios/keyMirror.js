__d("keyMirror",["invariant"],function (e, t, n, r, i) {
    "use strict";
    var invariant/*o*/ = t("invariant"),
        a = function(e) {
            var t, n = {};
            e instanceof Object && !Array.isArray(e) || invariant/*o*/(0, "keyMirror(...): Argument must be an object.");
            for (t in e) e.hasOwnProperty(t) && (n[t] = t);
            return n
        };
    i.exports = a
});