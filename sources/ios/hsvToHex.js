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
                return a(requireDynamic/*n*/, l, o);
            case 1:
                return a(s, requireDynamic/*n*/, o);
            case 2:
                return a(o, requireDynamic/*n*/, l);
            case 3:
                return a(o, s, requireDynamic/*n*/);
            case 4:
                return a(l, o, requireDynamic/*n*/);
            case 5:
                return a(requireDynamic/*n*/, o, s)
        }
    }
    var a = require/*t*/("rgbToHex");
    module/*i*/.exports = o
});