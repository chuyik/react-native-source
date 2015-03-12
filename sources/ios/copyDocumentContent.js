__d("copyDocumentContent",["DocumentContent"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        return e ? new DocumentContent/*a*/(e.getText(), e.getInlineStyles().slice(0), e.getBlockStyles().slice(0), e.getEntities().slice(0)) : new DocumentContent/*a*/
    }
    var DocumentContent/*a*/ = t("DocumentContent");
    i.exports = o
});