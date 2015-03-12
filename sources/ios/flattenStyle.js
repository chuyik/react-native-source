__d("flattenStyle",["StyleSheetRegistry","mergeIntoFast"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        return "number" == typeof e ? StyleSheetRegistry/*s*/.getStyleByID(e) : e
    }

    function a(e) {
        if (!e) return void 0;
        if (!Array.isArray(e)) return o(e);
        for (var t = {}, n = 0; n < e.length; ++n) {
            var r = a(e[n]);
            r && mergeIntoFast/*l*/(t, r)
        }
        return t
    }
    var StyleSheetRegistry/*s*/ = t("StyleSheetRegistry"),
        mergeIntoFast/*l*/ = t("mergeIntoFast");
    i.exports = a
});