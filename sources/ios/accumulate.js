__d("accumulate",["invariant"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        if (null == t && invariant/*a*/(0, "accumulate(...): Accumulated items must be not be null or undefined."), null == e) return t;
        var n = Array.isArray(e),
            r = Array.isArray(t);
        return n ? e.concat(t) : r ? [e].concat(t) : [e, t]
    }
    var invariant/*a*/ = t("invariant");
    i.exports = o
});