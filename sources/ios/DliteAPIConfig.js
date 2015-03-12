__d("DliteAPIConfig",["DliteAPIConfigDefaults"],function (e, t, n, r, i) {
    "use strict";
    var DliteAPIConfigDefaults/*o*/ = t("DliteAPIConfigDefaults"),
        a = Object.assign({}, DliteAPIConfigDefaults/*o*/, {
            setLocale: function(e) {
                a.graphBatchURI.setQueryData({
                    locale: e
                }), a.graphURI.setQueryData({
                    locale: e
                })
            }
        });
    i.exports = a
});