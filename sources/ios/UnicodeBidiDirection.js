__d("UnicodeBidiDirection",["keyMirror"],function (e, t, n, r, i) {
    "use strict";
    var keyMirror/*o*/ = t("keyMirror"),
        a = keyMirror/*o*/({
            NEUTRAL: !0,
            LTR: !0,
            RTL: !0
        });
    a.isStrong = function(e) {
        return e === a.LTR || e === a.RTL
    }, i.exports = a
});