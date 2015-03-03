__d("UnicodeBidiDirection",["keyMirror"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("keyMirror"),
        exports/*a*/ = o({
            NEUTRAL: !0,
            keyMirror/*LTR*/: !0,
            RTL: !0
        });
    exports/*a*/.isStrong = function(global/*e*/) {
        return global/*e*/ === exports/*a*/.keyMirror/*LTR*/ || global/*e*/ === exports/*a*/.RTL
    }, module/*i*/.exports = exports/*a*/
});