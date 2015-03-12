__d("ReactIOSStyleAttributes",["TextStylePropTypes","ViewStylePropTypes","deepDiffer","keyMirror","matricesDiffer","merge"],function (e, t, n, r, i) {
    "use strict";
    var TextStylePropTypes/*o*/ = t("TextStylePropTypes"),
        ViewStylePropTypes/*a*/ = t("ViewStylePropTypes"),
        deepDiffer/*s*/ = t("deepDiffer"),
        keyMirror/*l*/ = t("keyMirror"),
        matricesDiffer/*u*/ = t("matricesDiffer"),
        merge/*c*/ = t("merge"),
        p = merge/*c*/(keyMirror/*l*/(ViewStylePropTypes/*a*/), keyMirror/*l*/(TextStylePropTypes/*o*/));
    p.transformMatrix = {
        diff: matricesDiffer/*u*/
    }, p.shadowOffset = {
        diff: deepDiffer/*s*/
    }, i.exports = p
});