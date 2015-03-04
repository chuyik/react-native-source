__d("hsvToHex",["rgbToHex"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        global/*e*/ /= 255, require/*t*/ /= 255, requireDynamic/*n*/ /= 255;
        var requireLazy/*r*/ = Math.floor(6 * global/*e*/),
            module/*i*/ = 6 * global/*e*/ - requireLazy/*r*/,
            o = requireDynamic/*n*/ * (1 - require/*t*/),
            s = requireDynamic/*n*/ * (1 - module/*i*/ * require/*t*/),
            l = requireDynamic/*n*/ * (1 - (1 - module/*i*/) * require/*t*/);
        switch (requireDynamic/*n*/ *= 255, l *= 255, o *= 255, s *= 255, requireLazy/*r*/ % 6) {
            case 0:
                return rgbToHex/*a*/(requireDynamic/*n*/, l, o);
            case 1:
                return rgbToHex/*a*/(s, requireDynamic/*n*/, o);
            case 2:
                return rgbToHex/*a*/(o, requireDynamic/*n*/, l);
            case 3:
                return rgbToHex/*a*/(o, s, requireDynamic/*n*/);
            case 4:
                return rgbToHex/*a*/(l, o, requireDynamic/*n*/);
            case 5:
                return rgbToHex/*a*/(requireDynamic/*n*/, o, s)
        }
    }
    var rgbToHex/*a*/ = require/*t*/("rgbToHex");
    module/*i*/.exports = o
});