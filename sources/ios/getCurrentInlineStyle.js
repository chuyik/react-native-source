__d("getCurrentInlineStyle",["ComposedInlineStyle","getCurrentInlineStyleForOffset"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        if (!require/*t*/.hasFocus()) return ComposedInlineStyle/*a*/;
        var requireDynamic/*n*/ = require/*t*/.getStartOffset();
        return require/*t*/.isCollapsed() ? getCurrentInlineStyleForOffset/*s*/(global/*e*/, requireDynamic/*n*/) : global/*e*/.getInlineStyles()[requireDynamic/*n*/] || ComposedInlineStyle/*a*/
    }
    var ComposedInlineStyle/*a*/ = require/*t*/("ComposedInlineStyle").NONE,
        getCurrentInlineStyleForOffset/*s*/ = require/*t*/("getCurrentInlineStyleForOffset");
    module/*i*/.exports = o
});