__d("getCurrentInlineStyleForOffset",["ComposedInlineStyle"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = global/*e*/.getText().length,
            requireLazy/*r*/ = global/*e*/.getInlineStyles();
        return 0 === require/*t*/ ? require/*t*/ = 0 : require/*t*/ === requireDynamic/*n*/ + 1 ? require/*t*/ = requireDynamic/*n*/ - 1 : require/*t*/ -= 1, requireLazy/*r*/[require/*t*/] || ComposedInlineStyle/*a*/
    }
    var ComposedInlineStyle/*a*/ = require/*t*/("ComposedInlineStyle").NONE;
    module/*i*/.exports = o
});