__d("ReactInstanceHandles",["ReactRootIndex","invariant"],function (global/*e*/, require/*exports/*ReactRootIndex/*t*/*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        return m + global/*e*/.toString(36)
    }

    function a(global/*e*/, require/*exports/*ReactRootIndex/*t*/*/*/) {
        return global/*e*/.charAt(require/*exports/*ReactRootIndex/*t*/*/*/) === m || require/*exports/*ReactRootIndex/*t*/*/*/ === global/*e*/.length
    }

    function s(global/*e*/) {
        return "" === global/*e*/ || global/*e*/.charAt(0) === m && global/*e*/.charAt(global/*e*/.length - 1) !== m
    }

    function l(global/*e*/, require/*exports/*ReactRootIndex/*t*/*/*/) {
        return 0 === require/*exports/*ReactRootIndex/*t*/*/*/.indexOf(global/*e*/) && a(require/*exports/*ReactRootIndex/*t*/*/*/, global/*e*/.length)
    }

    function u(global/*e*/) {
        return global/*e*/ ? global/*e*/.substr(0, global/*e*/.lastIndexOf(m)) : ""
    }

    function c(global/*e*/, require/*exports/*ReactRootIndex/*t*/*/*/) {
        if (s(global/*e*/) && s(require/*exports/*ReactRootIndex/*t*/*/*/) || f(0, "getNextDescendantID(%s, %s): Received an invalid React DOM ID.", global/*e*/, require/*exports/*ReactRootIndex/*t*/*/*/), l(global/*e*/, require/*exports/*ReactRootIndex/*t*/*/*/) || f(0, "getNextDescendantID(...): React has made an invalid assumption about the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.", global/*e*/, require/*exports/*ReactRootIndex/*t*/*/*/), global/*e*/ === require/*exports/*ReactRootIndex/*t*/*/*/) return global/*e*/;
        for (var requireDynamic/*n*/ = global/*e*/.length + g, requireLazy/*r*/ = requireDynamic/*n*/; requireLazy/*r*/ < require/*exports/*ReactRootIndex/*t*/*/*/.length && !a(require/*exports/*ReactRootIndex/*t*/*/*/, requireLazy/*r*/); requireLazy/*r*/++);
        return require/*exports/*ReactRootIndex/*t*/*/*/.substr(0, requireLazy/*r*/)
    }

    function p(global/*e*/, require/*exports/*ReactRootIndex/*t*/*/*/) {
        var requireDynamic/*n*/ = Math.min(global/*e*/.length, require/*exports/*ReactRootIndex/*t*/*/*/.length);
        if (0 === requireDynamic/*n*/) return "";
        for (var requireLazy/*r*/ = 0, module/*i*/ = 0; requireDynamic/*n*/ >= module/*i*/; module/*i*/++)
            if (a(global/*e*/, module/*i*/) && a(require/*exports/*ReactRootIndex/*t*/*/*/, module/*i*/)) requireLazy/*r*/ = module/*i*/;
            else if (global/*e*/.charAt(module/*i*/) !== require/*exports/*ReactRootIndex/*t*/*/*/.charAt(module/*i*/)) break;
        var o = global/*e*/.substr(0, requireLazy/*r*/);
        return s(o) || f(0, "getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s", global/*e*/, require/*exports/*ReactRootIndex/*t*/*/*/, o), o
    }

    function d(global/*e*/, require/*exports/*ReactRootIndex/*t*/*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o) {
        global/*e*/ = global/*e*/ || "", require/*exports/*ReactRootIndex/*t*/*/*/ = require/*exports/*ReactRootIndex/*t*/*/*/ || "", global/*e*/ === require/*exports/*ReactRootIndex/*t*/*/*/ && f(0, "traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.", global/*e*/);
        var a = l(require/*exports/*ReactRootIndex/*t*/*/*/, global/*e*/);
        a || l(global/*e*/, require/*exports/*ReactRootIndex/*t*/*/*/) || f(0, "traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do not have a parent path.", global/*e*/, require/*exports/*ReactRootIndex/*t*/*/*/);
        for (var s = 0, p = a ? u : c, d = global/*e*/;; d = p(d, require/*exports/*ReactRootIndex/*t*/*/*/)) {
            var h;
            if (module/*i*/ && d === global/*e*/ || o && d === require/*exports/*ReactRootIndex/*t*/*/*/ || (h = requireDynamic/*n*/(d, a, requireLazy/*r*/)), h === !1 || d === require/*exports/*ReactRootIndex/*t*/*/*/) break;
            s++ < _ || f(0, "traverseParentPath(%s, %s, ...): Detected an infinite loop while traversing the React DOM ID tree. This may be due to malformed IDs: %s", global/*e*/, require/*exports/*ReactRootIndex/*t*/*/*/)
        }
    }
    var h = require/*exports/*ReactRootIndex/*t*/*/*/("ReactRootIndex"),
        f = require/*exports/*ReactRootIndex/*t*/*/*/("invariant"),
        m = ".",
        g = m.length,
        _ = 100,
        y = {
            createReactRootID: function() {
                return o(h.createReactRootIndex())
            },
            createReactID: function(global/*e*/, require/*exports/*ReactRootIndex/*t*/*/*/) {
                return global/*e*/ + require/*exports/*ReactRootIndex/*t*/*/*/
            },
            getReactRootIDFromNodeID: function(global/*e*/) {
                if (global/*e*/ && global/*e*/.charAt(0) === m && global/*e*/.length > 1) {
                    var require/*exports/*ReactRootIndex/*t*/*/*/ = global/*e*/.indexOf(m, 1);
                    return require/*exports/*ReactRootIndex/*t*/*/*/ > -1 ? global/*e*/.substr(0, require/*exports/*ReactRootIndex/*t*/*/*/) : global/*e*/
                }
                return null
            },
            traverseEnterLeave: function(global/*e*/, require/*exports/*ReactRootIndex/*t*/*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                var o = p(global/*e*/, require/*exports/*ReactRootIndex/*t*/*/*/);
                o !== global/*e*/ && d(global/*e*/, o, requireDynamic/*n*/, requireLazy/*r*/, !1, !0), o !== require/*exports/*ReactRootIndex/*t*/*/*/ && d(o, require/*exports/*ReactRootIndex/*t*/*/*/, requireDynamic/*n*/, module/*i*/, !0, !1)
            },
            traverseTwoPhase: function(global/*e*/, require/*exports/*ReactRootIndex/*t*/*/*/, requireDynamic/*n*/) {
                global/*e*/ && (d("", global/*e*/, require/*exports/*ReactRootIndex/*t*/*/*/, requireDynamic/*n*/, !0, !1), d(global/*e*/, "", require/*exports/*ReactRootIndex/*t*/*/*/, requireDynamic/*n*/, !1, !0))
            },
            traverseTwoPhaseSkipTarget: function(global/*e*/, require/*exports/*ReactRootIndex/*t*/*/*/, requireDynamic/*n*/) {
                global/*e*/ && (d("", global/*e*/, require/*exports/*ReactRootIndex/*t*/*/*/, requireDynamic/*n*/, !0, !0), d(global/*e*/, "", require/*exports/*ReactRootIndex/*t*/*/*/, requireDynamic/*n*/, !0, !0))
            },
            traverseAncestors: function(global/*e*/, require/*exports/*ReactRootIndex/*t*/*/*/, requireDynamic/*n*/) {
                d("", global/*e*/, require/*exports/*ReactRootIndex/*t*/*/*/, requireDynamic/*n*/, !0, !1)
            },
            _getFirstCommonAncestorID: p,
            _getNextDescendantID: c,
            isAncestorIDOf: l,
            SEPARATOR: m
        };
    module/*i*/.exports = y
});