__d("documentContentsAreEqual",["DocumentContent"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*DocumentContent/*r*/*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*t*/*/) {
        if (global/*e*/ === require/*exports/*t*/*/) return !0;
        if (!global/*e*/ || !require/*exports/*t*/*/) return !1;
        var requireDynamic/*n*/ = global/*e*/.getData(),
            requireLazy/*DocumentContent/*r*/*/ = require/*exports/*t*/*/.getData();
        if (requireDynamic/*n*/.text !== requireLazy/*DocumentContent/*r*/*/.text) return !1;
        if (!requireDynamic/*n*/.text) return !0;
        for (var module/*i*/ = 0; module/*i*/ < requireDynamic/*n*/.inlines.length; module/*i*/++)
            if (requireDynamic/*n*/.inlines[module/*i*/] !== requireLazy/*DocumentContent/*r*/*/.inlines[module/*i*/] || requireDynamic/*n*/.blocks[module/*i*/] !== requireLazy/*DocumentContent/*r*/*/.blocks[module/*i*/] || requireDynamic/*n*/.entities[module/*i*/] !== requireLazy/*DocumentContent/*r*/*/.entities[module/*i*/]) return !1;
        return !0
    }
    require/*exports/*t*/*/("DocumentContent");
    module/*i*/.exports = o
});