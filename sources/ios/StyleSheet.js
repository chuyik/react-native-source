__d("StyleSheet",["ImageStylePropTypes","ReactPropTypeLocations","StyleSheetRegistry","TextStylePropTypes","ViewStylePropTypes","invariant"],function (global/*ViewStylePropTypes/*e*/*/, require/*invariant/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {}
    var a = require/*invariant/*t*/*/("ImageStylePropTypes"),
        exports/*s*/ = require/*invariant/*t*/*/("ReactPropTypeLocations"),
        ImageStylePropTypes/*l*/ = require/*invariant/*t*/*/("StyleSheetRegistry"),
        ReactPropTypeLocations/*u*/ = require/*invariant/*t*/*/("TextStylePropTypes"),
        StyleSheetRegistry/*c*/ = require/*invariant/*t*/*/("ViewStylePropTypes"),
        TextStylePropTypes/*p*/ = require/*invariant/*t*/*/("invariant");
    o.create = function(global/*ViewStylePropTypes/*e*/*/) {
        var require/*invariant/*t*/*/ = {};
        for (var requireDynamic/*n*/ in global/*ViewStylePropTypes/*e*/*/) o.validateStyle(requireDynamic/*n*/, global/*ViewStylePropTypes/*e*/*/), require/*invariant/*t*/*/[requireDynamic/*n*/] = ImageStylePropTypes/*l*/.registerStyle(global/*ViewStylePropTypes/*e*/*/[requireDynamic/*n*/]);
        return require/*invariant/*t*/*/
    }, o.validateStyleProp = function(global/*ViewStylePropTypes/*e*/*/, require/*invariant/*t*/*/, requireDynamic/*n*/) {
        if (__DEV__) {
            if (void 0 === h[global/*ViewStylePropTypes/*e*/*/]) {
                var requireLazy/*r*/ = '"' + global/*ViewStylePropTypes/*e*/*/ + '" is not a valid style property.',
                    module/*i*/ = "\nValid style props: " + JSON.stringify(Object.keys(h), null, "  ");
                d(requireLazy/*r*/, require/*invariant/*t*/*/, requireDynamic/*n*/, module/*i*/)
            }
            var o = h[global/*ViewStylePropTypes/*e*/*/](require/*invariant/*t*/*/, global/*ViewStylePropTypes/*e*/*/, requireDynamic/*n*/, exports/*s*/.prop);
            o && d(o.message, require/*invariant/*t*/*/, requireDynamic/*n*/)
        }
    }, o.validateStyle = function(global/*ViewStylePropTypes/*e*/*/, require/*invariant/*t*/*/) {
        if (__DEV__)
            for (var requireDynamic/*n*/ in require/*invariant/*t*/*/[global/*ViewStylePropTypes/*e*/*/]) o.validateStyleProp(requireDynamic/*n*/, require/*invariant/*t*/*/[global/*ViewStylePropTypes/*e*/*/], "StyleSheet " + global/*ViewStylePropTypes/*e*/*/)
    }, o.addValidStylePropTypes = function(global/*ViewStylePropTypes/*e*/*/) {
        for (var require/*invariant/*t*/*/ in global/*ViewStylePropTypes/*e*/*/) void 0 !== h[require/*invariant/*t*/*/] && h[require/*invariant/*t*/*/] !== global/*ViewStylePropTypes/*e*/*/[require/*invariant/*t*/*/] && TextStylePropTypes/*p*/(0, 'Attemped to redefine existing style prop type "' + require/*invariant/*t*/*/ + '".'), h[require/*invariant/*t*/*/] = global/*ViewStylePropTypes/*e*/*/[require/*invariant/*t*/*/]
    };
    var d = function(global/*ViewStylePropTypes/*e*/*/, require/*invariant/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/) {
            TextStylePropTypes/*p*/(0, global/*ViewStylePropTypes/*e*/*/ + "\requireDynamic/*n*/" + (requireDynamic/*n*/ || "<<unknown>>") + ": " + JSON.stringify(require/*invariant/*t*/*/, null, "  ") + (requireLazy/*r*/ || ""))
        },
        h = {};
    o.addValidStylePropTypes(a), o.addValidStylePropTypes(ReactPropTypeLocations/*u*/), o.addValidStylePropTypes(StyleSheetRegistry/*c*/), module/*i*/.exports = o
});