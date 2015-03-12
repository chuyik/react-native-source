__d("ReactEmptyComponent",["ReactElement","invariant"],function (e, t, n, r, i) {
    "use strict";

    function o() {
        return u || invariant/*p*/(0, "Trying to return null from a render, but no null placeholder component was injected."), u()
    }

    function a(e) {
        d[e] = !0
    }

    function s(e) {
        delete d[e]
    }

    function l(e) {
        return d[e]
    }
    var u, ReactElement/*c*/ = t("ReactElement"),
        invariant/*p*/ = t("invariant"),
        d = {},
        h = {
            injectEmptyComponent: function(e) {
                u = ReactElement/*c*/.createFactory(e)
            }
        },
        f = {
            deregisterNullComponentID: s,
            getEmptyComponent: o,
            injection: h,
            isNullComponentID: l,
            registerNullComponentID: a
        };
    i.exports = f
});