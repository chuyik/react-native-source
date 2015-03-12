__d("ArrayOfPropType",["ReactPropTypes","deepDiffer"],function (e, t, n, r, i) {
    "use strict";
    var ReactPropTypes/*o*/ = t("ReactPropTypes"),
        deepDiffer/*a*/ = t("deepDiffer"),
        s = function(e, t) {
            var n = ReactPropTypes/*o*/.arrayOf(e);
            return n.differ = t ? t : deepDiffer/*a*/, n
        };
    i.exports = s
});