__d("ReactInstanceHandles",["ReactRootIndex","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        return m + global/*e*/.toString(36)
    }

    function a(global/*e*/, require/*t*/) {
        return global/*e*/.charAt(require/*t*/) === m || require/*t*/ === global/*e*/.length
    }

    function s(global/*e*/) {
        return "" === global/*e*/ || global/*e*/.charAt(0) === m && global/*e*/.charAt(global/*e*/.length - 1) !== m
    }

    function l(global/*e*/, require/*t*/) {
        return 0 === require/*t*/.indexOf(global/*e*/) && a(require/*t*/, global/*e*/.length)
    }

    function u(global/*e*/) {
        return global/*e*/ ? global/*e*/.substr(0, global/*e*/.lastIndexOf(m)) : ""
    }

    function c(global/*e*/, require/*t*/) {
        if (s(global/*e*/) && s(require/*t*/) || invariant/*f*/(0, "getNextDescendantID(%s, %s): Received an invalid React DOM ID.", global/*e*/, require/*t*/), l(global/*e*/, require/*t*/) || invariant/*f*/(0, "getNextDescendantID(...): React has made an invalid assumption about the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.", global/*e*/, require/*t*/), global/*e*/ === require/*t*/) return global/*e*/;
        for (var requireDynamic/*n*/ = global/*e*/.length + g, requireLazy/*r*/ = requireDynamic/*n*/; requireLazy/*r*/ < require/*t*/.length && !a(require/*t*/, requireLazy/*r*/); requireLazy/*r*/++);
        return require/*t*/.substr(0, requireLazy/*r*/)
    }

    function p(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = Math.min(global/*e*/.length, require/*t*/.length);
        if (0 === requireDynamic/*n*/) return "";
        for (var requireLazy/*r*/ = 0, module/*i*/ = 0; requireDynamic/*n*/ >= module/*i*/; module/*i*/++)
            if (a(global/*e*/, module/*i*/) && a(require/*t*/, module/*i*/)) requireLazy/*r*/ = module/*i*/;
            else if (global/*e*/.charAt(module/*i*/) !== require/*t*/.charAt(module/*i*/)) break;
        var o = global/*e*/.substr(0, requireLazy/*r*/);
        return s(o) || invariant/*f*/(0, "getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s", global/*e*/, require/*t*/, o), o
    }

    function d(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o) {
        global/*e*/ = global/*e*/ || "", require/*t*/ = require/*t*/ || "", global/*e*/ === require/*t*/ && invariant/*f*/(0, "traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.", global/*e*/);
        var a = l(require/*t*/, global/*e*/);
        a || l(global/*e*/, require/*t*/) || invariant/*f*/(0, "traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do not have a parent path.", global/*e*/, require/*t*/);
        for (var s = 0, p = a ? u : c, d = global/*e*/;; d = p(d, require/*t*/)) {
            var ReactRootIndex/*h*/;
            if (module/*i*/ && d === global/*e*/ || o && d === require/*t*/ || (ReactRootIndex/*h*/ = requireDynamic/*n*/(d, a, requireLazy/*r*/)), ReactRootIndex/*h*/ === !1 || d === require/*t*/) break;
            s++ < _ || invariant/*f*/(0, "traverseParentPath(%s, %s, ...): Detected an infinite loop while traversing the React DOM ID tree. This may be due to malformed IDs: %s", global/*e*/, require/*t*/)
        }
    }
    var ReactRootIndex/*h*/ = require/*t*/("ReactRootIndex"),
        invariant/*f*/ = require/*t*/("invariant"),
        m = ".",
        g = m.length,
        _ = 100,
        y = {
            createReactRootID: function() {
                return o(ReactRootIndex/*h*/.createReactRootIndex())
            },
            createReactID: function(global/*e*/, require/*t*/) {
                return global/*e*/ + require/*t*/
            },
            getReactRootIDFromNodeID: function(global/*e*/) {
                if (global/*e*/ && global/*e*/.charAt(0) === m && global/*e*/.length > 1) {
                    var require/*t*/ = global/*e*/.indexOf(m, 1);
                    return require/*t*/ > -1 ? global/*e*/.substr(0, require/*t*/) : global/*e*/
                }
                return null
            },
            traverseEnterLeave: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                var o = p(global/*e*/, require/*t*/);
                o !== global/*e*/ && d(global/*e*/, o, requireDynamic/*n*/, requireLazy/*r*/, !1, !0), o !== require/*t*/ && d(o, require/*t*/, requireDynamic/*n*/, module/*i*/, !0, !1)
            },
            traverseTwoPhase: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                global/*e*/ && (d("", global/*e*/, require/*t*/, requireDynamic/*n*/, !0, !1), d(global/*e*/, "", require/*t*/, requireDynamic/*n*/, !1, !0))
            },
            traverseTwoPhaseSkipTarget: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                global/*e*/ && (d("", global/*e*/, require/*t*/, requireDynamic/*n*/, !0, !0), d(global/*e*/, "", require/*t*/, requireDynamic/*n*/, !0, !0))
            },
            traverseAncestors: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                d("", global/*e*/, require/*t*/, requireDynamic/*n*/, !0, !1)
            },
            _getFirstCommonAncestorID: p,
            _getNextDescendantID: c,
            isAncestorIDOf: l,
            SEPARATOR: m
        };
    module/*i*/.exports = y
});