__d("UnicodeBidiDirection",["keyMirror"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var keyMirror/*o*/ = require/*t*/("keyMirror"),
        a = keyMirror/*o*/({
            NEUTRAL: !0,
            LTR: !0,
            RTL: !0
        });
    a.isStrong = function(global/*e*/) {
        return global/*e*/ === a.LTR || global/*e*/ === a.RTL
    }, module/*i*/.exports = a
});