__d("ReactPropTransferer",["emptyFunction","invariant","joinClasses","warning"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        return function(t, n, r) {
            t[n] = t.hasOwnProperty(n) ? e(t[n], r) : r
        }
    }

    function a(e, t) {
        for (var n in t)
            if (t.hasOwnProperty(n)) {
                var r = h[n];
                r && h.hasOwnProperty(n) ? r(e, n, t[n]) : e.hasOwnProperty(n) || (e[n] = t[n])
            }
        return e
    }
    var emptyFunction/*s*/ = t("emptyFunction"),
        invariant/*l*/ = t("invariant"),
        joinClasses/*u*/ = t("joinClasses"),
        warning/*c*/ = t("warning"),
        p = !1,
        d = o(function(e, t) {
            return Object.assign({}, t, e)
        }),
        h = {
            children: emptyFunction/*s*/,
            className: o(joinClasses/*u*/),
            style: d
        },
        f = {
            TransferStrategies: h,
            mergeProps: function(e, t) {
                return a(Object.assign({}, e), t)
            },
            Mixin: {
                transferPropsTo: function(e) {
                    return e._owner !== this && invariant/*l*/(0, "%emptyFunction/*s*/: You can't call transferPropsTo() on a component that you don't own, %emptyFunction/*s*/. This usually means you are calling transferPropsTo() on a component passed in as props or children.", this.constructor.displayName, "string" == typeof e.type ? e.type : e.type.displayName), __DEV__ && (p || (p = !0, warning/*c*/(!1, "transferPropsTo is deprecated. See http://fb.me/react-transferpropsto for more information."))), a(e.props, this.props), e
                }
            }
        };
    i.exports = f
});