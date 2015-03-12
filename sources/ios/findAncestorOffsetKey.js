__d("findAncestorOffsetKey",["getSelectionOffsetKeyForNode"],function (e, t, n, r, i) {
    function o(e) {
        for (; e && e !== document.documentElement;) {
            var t = getSelectionOffsetKeyForNode/*a*/(e);
            if (null != t) return t;
            e = e.parentNode
        }
        return null
    }
    var getSelectionOffsetKeyForNode/*a*/ = t("getSelectionOffsetKeyForNode");
    i.exports = o
});