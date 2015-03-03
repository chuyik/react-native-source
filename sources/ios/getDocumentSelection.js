__d("getDocumentSelection",["binarySearch","findAncestorOffsetKey","getSelectionOffsetKeyForNode","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        for (; global/*e*/.firstChild && m(global/*e*/.firstChild);) global/*e*/ = global/*e*/.firstChild;
        return global/*e*/
    }

    function a(global/*e*/) {
        for (; global/*e*/.lastChild && m(global/*e*/.lastChild);) global/*e*/ = global/*e*/.lastChild;
        return global/*e*/
    }

    function s(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = document.selection,
            requireLazy/*r*/ = requireDynamic/*n*/.createRange(),
            module/*i*/ = requireLazy/*r*/.text,
            o = l(global/*e*/, requireLazy/*r*/, _),
            a = o;
        null !== o && module/*i*/.length > 0 && (a = l(global/*e*/, requireLazy/*r*/, y)), o && a ? require/*t*/(o.key, o.offset, a.key, a.offset) : require/*t*/(null, null, null, null)
    }

    function l(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        for (var requireLazy/*r*/ = require/*t*/.duplicate(), module/*i*/ = function(global/*e*/) {
                return requireLazy/*r*/.moveToElementText(global/*e*/), u(requireLazy/*r*/, require/*t*/, requireDynamic/*n*/)
            }; global/*e*/ && global/*e*/.childNodes;) {
            var o = h(global/*e*/.childNodes, module/*i*/);
            if (-1 === o) break;
            global/*e*/ = global/*e*/.childNodes[o];
            var a = m(global/*e*/);
            if (null !== a) return requireLazy/*r*/.moveToElementText(global/*e*/), requireLazy/*r*/.setEndPoint("EndTo" + requireDynamic/*n*/, require/*t*/), {
                key: a,
                offset: requireLazy/*r*/.text.length
            }
        }
        return null
    }

    function u(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        return 1 == global/*e*/.compareEndPoints("StartTo" + requireDynamic/*n*/, require/*t*/) ? 1 : -1 == global/*e*/.compareEndPoints("EndTo" + requireDynamic/*n*/, require/*t*/) ? -1 : 0
    }

    function c(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = f(require/*t*/);
        if (null == requireLazy/*r*/ && global/*e*/ !== require/*t*/ && g(0, "Unknown node in selection range."), 0 === requireDynamic/*n*/) return {
            key: requireLazy/*r*/ || m(o(require/*t*/)),
            offset: 0
        };
        var module/*i*/, s, l = require/*t*/.childNodes[requireDynamic/*n*/ - 1];
        if (m(l)) {
            var u = a(l);
            module/*i*/ = m(u), s = u.textContent.length
        } else module/*i*/ = requireLazy/*r*/, s = l.textContent.length;
        return {
            key: module/*i*/,
            offset: s
        }
    }

    function p(require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = global/*e*/.getSelection();
        if (0 === requireLazy/*r*/.rangeCount) return void requireDynamic/*n*/(null, null, null, null);
        var module/*i*/ = requireLazy/*r*/.anchorNode,
            o = requireLazy/*r*/.focusNode,
            a = requireLazy/*r*/.anchorOffset,
            s = requireLazy/*r*/.focusOffset,
            l = module/*i*/.nodeType === Node.TEXT_NODE,
            u = o.nodeType === Node.TEXT_NODE;
        if (l && u) return void requireDynamic/*n*/(f(module/*i*/), a, f(o), s);
        var p = null,
            d = null;
        l ? (p = {
            key: f(module/*i*/),
            offset: a
        }, d = c(require/*t*/, o, s)) : u ? (d = {
            key: f(o),
            offset: s
        }, p = c(require/*t*/, module/*i*/, a)) : (p = c(require/*t*/, module/*i*/, a), d = c(require/*t*/, o, s)), requireDynamic/*n*/(p.key, p.offset, d.key, d.offset, !0)
    }

    function d(global/*e*/, require/*t*/) {
        document.selection ? s(global/*e*/, require/*t*/) : p(global/*e*/, require/*t*/)
    }
    var h = require/*t*/("binarySearch"),
        f = require/*t*/("findAncestorOffsetKey"),
        m = require/*t*/("getSelectionOffsetKeyForNode"),
        g = require/*t*/("invariant"),
        _ = "Start",
        y = "End";
    module/*i*/.exports = d
});