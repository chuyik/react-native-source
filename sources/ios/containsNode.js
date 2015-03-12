__d("containsNode",["isTextNode"],function (e, t, n, r, i) {
    function o(e, t) {
        return e && t ? e === t ? !0 : isTextNode/*a*/(e) ? !1 : isTextNode/*a*/(t) ? o(e, t.parentNode) : e.contains ? e.contains(t) : e.compareDocumentPosition ? !!(16 & e.compareDocumentPosition(t)) : !1 : !1
    }
    var isTextNode/*a*/ = t("isTextNode");
    i.exports = o
});