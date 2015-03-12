__d("UnicodeBidi",["Locale","UnicodeBidiDirection"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        var t = m.exec(e);
        if (!t) return UnicodeBidiDirection/*p*/.NEUTRAL;
        var n = g.exec(t[0]);
        return n ? UnicodeBidiDirection/*p*/.RTL : UnicodeBidiDirection/*p*/.LTR
    }

    function a(e, t) {
        if (t = t || UnicodeBidiDirection/*p*/.NEUTRAL, !e.length) return t;
        var n = o(e);
        return n === UnicodeBidiDirection/*p*/.NEUTRAL ? t : n
    }

    function s(e, t) {
        return t && UnicodeBidiDirection/*p*/.isStrong(t) || (t = Locale/*c*/.getDirection()), a(e, t)
    }

    function l(e, t) {
        return s(e, t) === UnicodeBidiDirection/*p*/.LTR
    }

    function u(e, t) {
        return s(e, t) === UnicodeBidiDirection/*p*/.RTL
    }
    var Locale/*c*/ = t("Locale"),
        UnicodeBidiDirection/*p*/ = t("UnicodeBidiDirection"),
        d = {
            L: "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-퟿-﬜︀-﹯﻽-￿",
            R: "־׀׃׆א-תװ-ײ׳-״߀-߉ߊ-ߪߴ-ߵߺࠀ-ࠕࠚࠤࠨ࠰-࠾ࡀ-ࡘ࡞‏יִײַ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﭏ",
            AL: "؈؋؍؛؜؞-؟ؠ-ؿـف-ي٭ٮ-ٯٱ-ۓ۔ەۥ-ۦۮ-ۯۺ-ۼ۽-۾ۿ܀-܍܏ܐܒ-ܯݍ-ޥޱࢠࢢ-ࢬﭐ-ﮱ﮲-﯁ﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ﷼ﹰ-ﹴﹶ-ﻼ"
        },
        h = d.L + d.R + d.AL,
        f = d.R + d.AL,
        m = new RegExp("[" + h + "]"),
        g = new RegExp("[" + f + "]"),
        _ = {
            firstStrongCharDir: o,
            resolveBlockDir: a,
            getDirection: s,
            isDirectionLTR: l,
            isDirectionRTL: u
        };
    i.exports = _
});