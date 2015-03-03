__d("getDocumentSelection",["binarySearch","findAncestorOffsetKey","getSelectionOffsetKeyForNode","invariant"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*binarySearch/*invariant/*r*/*/*/, module/*findAncestorOffsetKey/*i*/*/) {
    function getSelectionOffsetKeyForNode/*o*/(global/*e*/) {
        for (; global/*e*/.firstChild && m(global/*e*/.firstChild);) global/*e*/ = global/*e*/.firstChild;
        return global/*e*/
    }

    function a(global/*e*/) {
        for (; global/*e*/.lastChild && m(global/*e*/.lastChild);) global/*e*/ = global/*e*/.lastChild;
        return global/*e*/
    }

    function s(global/*e*/, require/*exports/*t*/*/) {
        var requireDynamic/*n*/ = document.selection,
            requireLazy/*binarySearch/*invariant/*r*/*/*/ = requireDynamic/*n*/.createRange(),
            module/*findAncestorOffsetKey/*i*/*/ = requireLazy/*binarySearch/*invariant/*r*/*/*/.text,
            getSelectionOffsetKeyForNode/*o*/ = l(global/*e*/, requireLazy/*binarySearch/*invariant/*r*/*/*/, _),
            a = getSelectionOffsetKeyForNode/*o*/;
        null !== getSelectionOffsetKeyForNode/*o*/ && module/*findAncestorOffsetKey/*i*/*/.length > 0 && (a = l(global/*e*/, requireLazy/*binarySearch/*invariant/*r*/*/*/, y)), getSelectionOffsetKeyForNode/*o*/ && a ? require/*exports/*t*/*/(getSelectionOffsetKeyForNode/*o*/.key, getSelectionOffsetKeyForNode/*o*/.offset, a.key, a.offset) : require/*exports/*t*/*/(null, null, null, null)
    }

    function l(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
        for (var requireLazy/*binarySearch/*invariant/*r*/*/*/ = require/*exports/*t*/*/.duplicate(), module/*findAncestorOffsetKey/*i*/*/ = function(global/*e*/) {
                return requireLazy/*binarySearch/*invariant/*r*/*/*/.moveToElementText(global/*e*/), u(requireLazy/*binarySearch/*invariant/*r*/*/*/, require/*exports/*t*/*/, requireDynamic/*n*/)
            }; global/*e*/ && global/*e*/.childNodes;) {
            var getSelectionOffsetKeyForNode/*o*/ = h(global/*e*/.childNodes, module/*findAncestorOffsetKey/*i*/*/);
            if (-1 === getSelectionOffsetKeyForNode/*o*/) break;
            global/*e*/ = global/*e*/.childNodes[getSelectionOffsetKeyForNode/*o*/];
            var a = m(global/*e*/);
            if (null !== a) return requireLazy/*binarySearch/*invariant/*r*/*/*/.moveToElementText(global/*e*/), requireLazy/*binarySearch/*invariant/*r*/*/*/.setEndPoint("EndTo" + requireDynamic/*n*/, require/*exports/*t*/*/), {
                key: a,
                offset: requireLazy/*binarySearch/*invariant/*r*/*/*/.text.length
            }
        }
        return null
    }

    function u(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
        return 1 == global/*e*/.compareEndPoints("StartTo" + requireDynamic/*n*/, require/*exports/*t*/*/) ? 1 : -1 == global/*e*/.compareEndPoints("EndTo" + requireDynamic/*n*/, require/*exports/*t*/*/) ? -1 : 0
    }

    function c(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
        var requireLazy/*binarySearch/*invariant/*r*/*/*/ = f(require/*exports/*t*/*/);
        if (null == requireLazy/*binarySearch/*invariant/*r*/*/*/ && global/*e*/ !== require/*exports/*t*/*/ && g(0, "Unknown node in selection range."), 0 === requireDynamic/*n*/) return {
            key: requireLazy/*binarySearch/*invariant/*r*/*/*/ || m(getSelectionOffsetKeyForNode/*o*/(require/*exports/*t*/*/)),
            offset: 0
        };
        var module/*findAncestorOffsetKey/*i*/*/, s, l = require/*exports/*t*/*/.childNodes[requireDynamic/*n*/ - 1];
        if (m(l)) {
            var u = a(l);
            module/*findAncestorOffsetKey/*i*/*/ = m(u), s = u.textContent.length
        } else module/*findAncestorOffsetKey/*i*/*/ = requireLazy/*binarySearch/*invariant/*r*/*/*/, s = l.textContent.length;
        return {
            key: module/*findAncestorOffsetKey/*i*/*/,
            offset: s
        }
    }

    function p(require/*exports/*t*/*/, requireDynamic/*n*/) {
        var requireLazy/*binarySearch/*invariant/*r*/*/*/ = global/*e*/.getSelection();
        if (0 === requireLazy/*binarySearch/*invariant/*r*/*/*/.rangeCount) return void requireDynamic/*n*/(null, null, null, null);
        var module/*findAncestorOffsetKey/*i*/*/ = requireLazy/*binarySearch/*invariant/*r*/*/*/.anchorNode,
            getSelectionOffsetKeyForNode/*o*/ = requireLazy/*binarySearch/*invariant/*r*/*/*/.focusNode,
            a = requireLazy/*binarySearch/*invariant/*r*/*/*/.anchorOffset,
            s = requireLazy/*binarySearch/*invariant/*r*/*/*/.focusOffset,
            l = module/*findAncestorOffsetKey/*i*/*/.nodeType === Node.TEXT_NODE,
            u = getSelectionOffsetKeyForNode/*o*/.nodeType === Node.TEXT_NODE;
        if (l && u) return void requireDynamic/*n*/(f(module/*findAncestorOffsetKey/*i*/*/), a, f(getSelectionOffsetKeyForNode/*o*/), s);
        var p = null,
            d = null;
        l ? (p = {
            key: f(module/*findAncestorOffsetKey/*i*/*/),
            offset: a
        }, d = c(require/*exports/*t*/*/, getSelectionOffsetKeyForNode/*o*/, s)) : u ? (d = {
            key: f(getSelectionOffsetKeyForNode/*o*/),
            offset: s
        }, p = c(require/*exports/*t*/*/, module/*findAncestorOffsetKey/*i*/*/, a)) : (p = c(require/*exports/*t*/*/, module/*findAncestorOffsetKey/*i*/*/, a), d = c(require/*exports/*t*/*/, getSelectionOffsetKeyForNode/*o*/, s)), requireDynamic/*n*/(p.key, p.offset, d.key, d.offset, !0)
    }

    function d(global/*e*/, require/*exports/*t*/*/) {
        document.selection ? s(global/*e*/, require/*exports/*t*/*/) : p(global/*e*/, require/*exports/*t*/*/)
    }
    var h = require/*exports/*t*/*/("binarySearch"),
        f = require/*exports/*t*/*/("findAncestorOffsetKey"),
        m = require/*exports/*t*/*/("getSelectionOffsetKeyForNode"),
        g = require/*exports/*t*/*/("invariant"),
        _ = "Start",
        y = "End";
    module/*findAncestorOffsetKey/*i*/*/.exports = d
});