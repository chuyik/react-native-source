__d("getCurrentInlineStyleForOffset",["ComposedInlineStyle"],function (e, t, n, r, i) {
    function o(e, t) {
        var n = e.getText().length,
            r = e.getInlineStyles();
        return 0 === t ? t = 0 : t === n + 1 ? t = n - 1 : t -= 1, r[t] || ComposedInlineStyle/*a*/
    }
    var ComposedInlineStyle/*a*/ = t("ComposedInlineStyle").NONE;
    i.exports = o
});