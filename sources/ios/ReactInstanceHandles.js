__d("ReactInstanceHandles",["ReactRootIndex","invariant"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        return m + e.toString(36)
    }

    function a(e, t) {
        return e.charAt(t) === m || t === e.length
    }

    function s(e) {
        return "" === e || e.charAt(0) === m && e.charAt(e.length - 1) !== m
    }

    function l(e, t) {
        return 0 === t.indexOf(e) && a(t, e.length)
    }

    function u(e) {
        return e ? e.substr(0, e.lastIndexOf(m)) : ""
    }

    function c(e, t) {
        if (s(e) && s(t) || invariant/*f*/(0, "getNextDescendantID(%s, %s): Received an invalid React DOM ID.", e, t), l(e, t) || invariant/*f*/(0, "getNextDescendantID(...): React has made an invalid assumption about the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.", e, t), e === t) return e;
        for (var n = e.length + g, r = n; r < t.length && !a(t, r); r++);
        return t.substr(0, r)
    }

    function p(e, t) {
        var n = Math.min(e.length, t.length);
        if (0 === n) return "";
        for (var r = 0, i = 0; n >= i; i++)
            if (a(e, i) && a(t, i)) r = i;
            else if (e.charAt(i) !== t.charAt(i)) break;
        var o = e.substr(0, r);
        return s(o) || invariant/*f*/(0, "getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s", e, t, o), o
    }

    function d(e, t, n, r, i, o) {
        e = e || "", t = t || "", e === t && invariant/*f*/(0, "traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.", e);
        var a = l(t, e);
        a || l(e, t) || invariant/*f*/(0, "traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do not have a parent path.", e, t);
        for (var s = 0, p = a ? u : c, d = e;; d = p(d, t)) {
            var ReactRootIndex/*h*/;
            if (i && d === e || o && d === t || (ReactRootIndex/*h*/ = n(d, a, r)), ReactRootIndex/*h*/ === !1 || d === t) break;
            s++ < _ || invariant/*f*/(0, "traverseParentPath(%s, %s, ...): Detected an infinite loop while traversing the React DOM ID tree. This may be due to malformed IDs: %s", e, t)
        }
    }
    var ReactRootIndex/*h*/ = t("ReactRootIndex"),
        invariant/*f*/ = t("invariant"),
        m = ".",
        g = m.length,
        _ = 100,
        y = {
            createReactRootID: function() {
                return o(ReactRootIndex/*h*/.createReactRootIndex())
            },
            createReactID: function(e, t) {
                return e + t
            },
            getReactRootIDFromNodeID: function(e) {
                if (e && e.charAt(0) === m && e.length > 1) {
                    var t = e.indexOf(m, 1);
                    return t > -1 ? e.substr(0, t) : e
                }
                return null
            },
            traverseEnterLeave: function(e, t, n, r, i) {
                var o = p(e, t);
                o !== e && d(e, o, n, r, !1, !0), o !== t && d(o, t, n, i, !0, !1)
            },
            traverseTwoPhase: function(e, t, n) {
                e && (d("", e, t, n, !0, !1), d(e, "", t, n, !1, !0))
            },
            traverseTwoPhaseSkipTarget: function(e, t, n) {
                e && (d("", e, t, n, !0, !0), d(e, "", t, n, !0, !0))
            },
            traverseAncestors: function(e, t, n) {
                d("", e, t, n, !0, !1)
            },
            _getFirstCommonAncestorID: p,
            _getNextDescendantID: c,
            isAncestorIDOf: l,
            SEPARATOR: m
        };
    i.exports = y
});