__d("rgbToHex",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        var require/*t*/ = Math.round(global/*e*/).toString(16);
        return 1 === require/*t*/.length ? "0" + require/*t*/ : require/*t*/
    }

    function a(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        return "#" + o(global/*e*/) + o(require/*t*/) + o(requireDynamic/*n*/)
    }
    module/*i*/.exports = a
});