__d("documentContentsAreEqual",["DocumentContent"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        if (global/*e*/ === require/*t*/) return !0;
        if (!global/*e*/ || !require/*t*/) return !1;
        var requireDynamic/*n*/ = global/*e*/.getData(),
            requireLazy/*r*/ = require/*t*/.getData();
        if (requireDynamic/*n*/.text !== requireLazy/*r*/.text) return !1;
        if (!requireDynamic/*n*/.text) return !0;
        for (var module/*i*/ = 0; module/*i*/ < requireDynamic/*n*/.inlines.length; module/*i*/++)
            if (requireDynamic/*n*/.inlines[module/*i*/] !== requireLazy/*r*/.inlines[module/*i*/] || requireDynamic/*n*/.blocks[module/*i*/] !== requireLazy/*r*/.blocks[module/*i*/] || requireDynamic/*n*/.entities[module/*i*/] !== requireLazy/*r*/.entities[module/*i*/]) return !1;
        return !0
    }
    require/*t*/("DocumentContent");
    module/*i*/.exports = o
});