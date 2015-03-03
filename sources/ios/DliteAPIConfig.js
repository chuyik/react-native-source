__d("DliteAPIConfig",["DliteAPIConfigDefaults"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var DliteAPIConfigDefaults/*o*/ = require/*t*/("DliteAPIConfigDefaults"),
        exports/*a*/ = Object.assign({}, DliteAPIConfigDefaults/*o*/, {
            setLocale: function(global/*e*/) {
                exports/*a*/.graphBatchURI.setQueryData({
                    locale: global/*e*/
                }), exports/*a*/.graphURI.setQueryData({
                    locale: global/*e*/
                })
            }
        });
    module/*i*/.exports = exports/*a*/
});