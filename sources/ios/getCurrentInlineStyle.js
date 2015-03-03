__d("getCurrentInlineStyle",["ComposedInlineStyle","getCurrentInlineStyleForOffset"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*ComposedInlineStyle/*n*/*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*exports/*t*/*/) {
        if (!require/*exports/*t*/*/.hasFocus()) return a;
        var requireDynamic/*ComposedInlineStyle/*n*/*/ = require/*exports/*t*/*/.getStartOffset();
        return require/*exports/*t*/*/.isCollapsed() ? getCurrentInlineStyleForOffset/*s*/(global/*e*/, requireDynamic/*ComposedInlineStyle/*n*/*/) : global/*e*/.getInlineStyles()[requireDynamic/*ComposedInlineStyle/*n*/*/] || a
    }
    var a = require/*exports/*t*/*/("ComposedInlineStyle").NONE,
        getCurrentInlineStyleForOffset/*s*/ = require/*exports/*t*/*/("getCurrentInlineStyleForOffset");
    module/*i*/.exports = o
});