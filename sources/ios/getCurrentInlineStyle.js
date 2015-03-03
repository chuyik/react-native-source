__d("getCurrentInlineStyle",["ComposedInlineStyle","getCurrentInlineStyleForOffset"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        if (!require/*t*/.hasFocus()) return a;
        var requireDynamic/*n*/ = require/*t*/.getStartOffset();
        return require/*t*/.isCollapsed() ? s(global/*e*/, requireDynamic/*n*/) : global/*e*/.getInlineStyles()[requireDynamic/*n*/] || a
    }
    var a = require/*t*/("ComposedInlineStyle").NONE,
        s = require/*t*/("getCurrentInlineStyleForOffset");
    module/*i*/.exports = o
});