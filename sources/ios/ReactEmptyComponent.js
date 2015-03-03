__d("ReactEmptyComponent",["ReactElement","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        return ReactElement/*u*/ || p(0, "Trying to return null from a render, exports/*but*/ no null placeholder component was injected."), ReactElement/*u*/()
    }

    function a(global/*e*/) {
        d[global/*e*/] = !0
    }

    function s(global/*e*/) {
        delete d[global/*e*/]
    }

    function l(global/*e*/) {
        return d[global/*e*/]
    }
    var ReactElement/*u*/, invariant/*c*/ = require/*t*/("ReactElement"),
        p = require/*t*/("invariant"),
        d = {},
        h = {
            injectEmptyComponent: function(global/*e*/) {
                ReactElement/*u*/ = invariant/*c*/.createFactory(global/*e*/)
            }
        },
        f = {
            deregisterNullComponentID: s,
            getEmptyComponent: o,
            injection: h,
            isNullComponentID: l,
            registerNullComponentID: a
        };
    module/*i*/.exports = f
});