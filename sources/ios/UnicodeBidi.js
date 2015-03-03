__d("UnicodeBidi",["Locale","UnicodeBidiDirection"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        var require/*t*/ = m.exec(global/*e*/);
        if (!require/*t*/) return p.NEUTRAL;
        var requireDynamic/*n*/ = g.exec(require/*t*/[0]);
        return requireDynamic/*n*/ ? p.RTL : p.LTR
    }

    function a(global/*e*/, require/*t*/) {
        if (require/*t*/ = require/*t*/ || p.NEUTRAL, !global/*e*/.length) return require/*t*/;
        var requireDynamic/*n*/ = o(global/*e*/);
        return requireDynamic/*n*/ === p.NEUTRAL ? require/*t*/ : requireDynamic/*n*/
    }

    function s(global/*e*/, require/*t*/) {
        return require/*t*/ && p.isStrong(require/*t*/) || (require/*t*/ = c.getDirection()), a(global/*e*/, require/*t*/)
    }

    function l(global/*e*/, require/*t*/) {
        return s(global/*e*/, require/*t*/) === p.LTR
    }

    function u(global/*e*/, require/*t*/) {
        return s(global/*e*/, require/*t*/) === p.RTL
    }
    var c = require/*t*/("Locale"),
        p = require/*t*/("UnicodeBidiDirection"),
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
    module/*i*/.exports = _
});