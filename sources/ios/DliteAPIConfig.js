__d("DliteAPIConfig",["DliteAPIConfigDefaults"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var DliteAPIConfigDefaults/*o*/ = require/*t*/("DliteAPIConfigDefaults"),
        a = Object.assign({}, DliteAPIConfigDefaults/*o*/, {
            setLocale: function(global/*e*/) {
                a.graphBatchURI.setQueryData({
                    locale: global/*e*/
                }), a.graphURI.setQueryData({
                    locale: global/*e*/
                })
            }
        });
    module/*i*/.exports = a
});