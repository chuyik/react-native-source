__d("rgbToHex",[],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        var require/*exports/*t*/*/ = Math.round(global/*e*/).toString(16);
        return 1 === require/*exports/*t*/*/.length ? "0" + require/*exports/*t*/*/ : require/*exports/*t*/*/
    }

    function a(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
        return "#" + o(global/*e*/) + o(require/*exports/*t*/*/) + o(requireDynamic/*n*/)
    }
    module/*i*/.exports = a
});