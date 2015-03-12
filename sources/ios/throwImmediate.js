__d("throwImmediate",["setImmediate"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        throw e
    }

    function a(e) {
        setImmediate/*s*/(o, e)
    }
    var setImmediate/*s*/ = t("setImmediate");
    i.exports = a
});