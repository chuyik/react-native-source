__d("UnicodeBidi",["Locale","UnicodeBidiDirection"],function (global/*e*/, require/*exports/*Locale/*t*/*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        var require/*exports/*Locale/*t*/*/*/ = m.exec(global/*e*/);
        if (!require/*exports/*Locale/*t*/*/*/) return p.NEUTRAL;
        var requireDynamic/*n*/ = g.exec(require/*exports/*Locale/*t*/*/*/[0]);
        return requireDynamic/*n*/ ? p.RTL : p.LTR
    }

    function UnicodeBidiDirection/*a*/(global/*e*/, require/*exports/*Locale/*t*/*/*/) {
        if (require/*exports/*Locale/*t*/*/*/ = require/*exports/*Locale/*t*/*/*/ || p.NEUTRAL, !global/*e*/.length) return require/*exports/*Locale/*t*/*/*/;
        var requireDynamic/*n*/ = o(global/*e*/);
        return requireDynamic/*n*/ === p.NEUTRAL ? require/*exports/*Locale/*t*/*/*/ : requireDynamic/*n*/
    }

    function s(global/*e*/, require/*exports/*Locale/*t*/*/*/) {
        return require/*exports/*Locale/*t*/*/*/ && p.isStrong(require/*exports/*Locale/*t*/*/*/) || (require/*exports/*Locale/*t*/*/*/ = c.getDirection()), UnicodeBidiDirection/*a*/(global/*e*/, require/*exports/*Locale/*t*/*/*/)
    }

    function l(global/*e*/, require/*exports/*Locale/*t*/*/*/) {
        return s(global/*e*/, require/*exports/*Locale/*t*/*/*/) === p.LTR
    }

    function u(global/*e*/, require/*exports/*Locale/*t*/*/*/) {
        return s(global/*e*/, require/*exports/*Locale/*t*/*/*/) === p.RTL
    }
    var c = require/*exports/*Locale/*t*/*/*/("Locale"),
        p = require/*exports/*Locale/*t*/*/*/("UnicodeBidiDirection"),
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
            resolveBlockDir: UnicodeBidiDirection/*a*/,
            getDirection: s,
            isDirectionLTR: l,
            isDirectionRTL: u
        };
    module/*i*/.exports = _
});