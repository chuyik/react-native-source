__d("hsvToHex",["rgbToHex"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t, n) {
        e /= 255, t /= 255, n /= 255;
        var r = Math.floor(6 * e),
            i = 6 * e - r,
            o = n * (1 - t),
            s = n * (1 - i * t),
            l = n * (1 - (1 - i) * t);
        switch (n *= 255, l *= 255, o *= 255, s *= 255, r % 6) {
            case 0:
                return rgbToHex/*a*/(n, l, o);
            case 1:
                return rgbToHex/*a*/(s, n, o);
            case 2:
                return rgbToHex/*a*/(o, n, l);
            case 3:
                return rgbToHex/*a*/(o, s, n);
            case 4:
                return rgbToHex/*a*/(l, o, n);
            case 5:
                return rgbToHex/*a*/(n, o, s)
        }
    }
    var rgbToHex/*a*/ = t("rgbToHex");
    i.exports = o
});