__d("getDocumentSelection",["binarySearch","findAncestorOffsetKey","getSelectionOffsetKeyForNode","invariant"],function (e, t, n, r, i) {
    function o(e) {
        for (; e.firstChild && getSelectionOffsetKeyForNode/*m*/(e.firstChild);) e = e.firstChild;
        return e
    }

    function a(e) {
        for (; e.lastChild && getSelectionOffsetKeyForNode/*m*/(e.lastChild);) e = e.lastChild;
        return e
    }

    function s(e, t) {
        var n = document.selection,
            r = n.createRange(),
            i = r.text,
            o = l(e, r, _),
            a = o;
        null !== o && i.length > 0 && (a = l(e, r, y)), o && a ? t(o.key, o.offset, a.key, a.offset) : t(null, null, null, null)
    }

    function l(e, t, n) {
        for (var r = t.duplicate(), i = function(e) {
                return r.moveToElementText(e), u(r, t, n)
            }; e && e.childNodes;) {
            var o = binarySearch/*h*/(e.childNodes, i);
            if (-1 === o) break;
            e = e.childNodes[o];
            var a = getSelectionOffsetKeyForNode/*m*/(e);
            if (null !== a) return r.moveToElementText(e), r.setEndPoint("EndTo" + n, t), {
                key: a,
                offset: r.text.length
            }
        }
        return null
    }

    function u(e, t, n) {
        return 1 == e.compareEndPoints("StartTo" + n, t) ? 1 : -1 == e.compareEndPoints("EndTo" + n, t) ? -1 : 0
    }

    function c(e, t, n) {
        var r = findAncestorOffsetKey/*f*/(t);
        if (null == r && e !== t && invariant/*g*/(0, "Unknown node in selection range."), 0 === n) return {
            key: r || getSelectionOffsetKeyForNode/*m*/(o(t)),
            offset: 0
        };
        var i, s, l = t.childNodes[n - 1];
        if (getSelectionOffsetKeyForNode/*m*/(l)) {
            var u = a(l);
            i = getSelectionOffsetKeyForNode/*m*/(u), s = u.textContent.length
        } else i = r, s = l.textContent.length;
        return {
            key: i,
            offset: s
        }
    }

    function p(t, n) {
        var r = e.getSelection();
        if (0 === r.rangeCount) return void n(null, null, null, null);
        var i = r.anchorNode,
            o = r.focusNode,
            a = r.anchorOffset,
            s = r.focusOffset,
            l = i.nodeType === Node.TEXT_NODE,
            u = o.nodeType === Node.TEXT_NODE;
        if (l && u) return void n(findAncestorOffsetKey/*f*/(i), a, findAncestorOffsetKey/*f*/(o), s);
        var p = null,
            d = null;
        l ? (p = {
            key: findAncestorOffsetKey/*f*/(i),
            offset: a
        }, d = c(t, o, s)) : u ? (d = {
            key: findAncestorOffsetKey/*f*/(o),
            offset: s
        }, p = c(t, i, a)) : (p = c(t, i, a), d = c(t, o, s)), n(p.key, p.offset, d.key, d.offset, !0)
    }

    function d(e, t) {
        document.selection ? s(e, t) : p(e, t)
    }
    var binarySearch/*h*/ = t("binarySearch"),
        findAncestorOffsetKey/*f*/ = t("findAncestorOffsetKey"),
        getSelectionOffsetKeyForNode/*m*/ = t("getSelectionOffsetKeyForNode"),
        invariant/*g*/ = t("invariant"),
        _ = "Start",
        y = "End";
    i.exports = d
});