__d("getCurrentInlineStyle",["ComposedInlineStyle","getCurrentInlineStyleForOffset"],function (e, t, n, r, i) {
    function o(e, t) {
        if (!t.hasFocus()) return ComposedInlineStyle/*a*/;
        var n = t.getStartOffset();
        return t.isCollapsed() ? getCurrentInlineStyleForOffset/*s*/(e, n) : e.getInlineStyles()[n] || ComposedInlineStyle/*a*/
    }
    var ComposedInlineStyle/*a*/ = t("ComposedInlineStyle").NONE,
        getCurrentInlineStyleForOffset/*s*/ = t("getCurrentInlineStyleForOffset");
    i.exports = o
});