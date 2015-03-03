__d("hsvToHex",["rgbToHex"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*rgbToHex/*n*/*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*t*/*/, requireDynamic/*rgbToHex/*n*/*/) {
        global/*e*/ /= 255, require/*exports/*t*/*/ /= 255, requireDynamic/*rgbToHex/*n*/*/ /= 255;
        var requireLazy/*r*/ = Math.floor(6 * global/*e*/),
            module/*i*/ = 6 * global/*e*/ - requireLazy/*r*/,
            o = requireDynamic/*rgbToHex/*n*/*/ * (1 - require/*exports/*t*/*/),
            s = requireDynamic/*rgbToHex/*n*/*/ * (1 - module/*i*/ * require/*exports/*t*/*/),
            l = requireDynamic/*rgbToHex/*n*/*/ * (1 - (1 - module/*i*/) * require/*exports/*t*/*/);
        switch (requireDynamic/*rgbToHex/*n*/*/ *= 255, l *= 255, o *= 255, s *= 255, requireLazy/*r*/ % 6) {
            case 0:
                return a(requireDynamic/*rgbToHex/*n*/*/, l, o);
            case 1:
                return a(s, requireDynamic/*rgbToHex/*n*/*/, o);
            case 2:
                return a(o, requireDynamic/*rgbToHex/*n*/*/, l);
            case 3:
                return a(o, s, requireDynamic/*rgbToHex/*n*/*/);
            case 4:
                return a(l, o, requireDynamic/*rgbToHex/*n*/*/);
            case 5:
                return a(requireDynamic/*rgbToHex/*n*/*/, o, s)
        }
    }
    var a = require/*exports/*t*/*/("rgbToHex");
    module/*i*/.exports = o
});