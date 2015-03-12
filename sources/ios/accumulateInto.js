__d("accumulateInto",["invariant"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        if (null == t && invariant/*a*/(0, "accumulateInto(...): Accumulated items must not be null or undefined."), null == e) return t;
        var n = Array.isArray(e),
            r = Array.isArray(t);
        return n && r ? (e.push.apply(e, t), e) : n ? (e.push(t), e) : r ? [e].concat(t) : [e, t]
    }
    var invariant/*a*/ = t("invariant");
    i.exports = o
});