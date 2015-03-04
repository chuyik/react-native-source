__d("StyleSheet",["ImageStylePropTypes","ReactPropTypeLocations","StyleSheetRegistry","TextStylePropTypes","ViewStylePropTypes","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {}
    var ImageStylePropTypes/*a*/ = require/*t*/("ImageStylePropTypes"),
        ReactPropTypeLocations/*s*/ = require/*t*/("ReactPropTypeLocations"),
        StyleSheetRegistry/*l*/ = require/*t*/("StyleSheetRegistry"),
        TextStylePropTypes/*u*/ = require/*t*/("TextStylePropTypes"),
        ViewStylePropTypes/*c*/ = require/*t*/("ViewStylePropTypes"),
        invariant/*p*/ = require/*t*/("invariant");
    o.create = function(global/*e*/) {
        var require/*t*/ = {};
        for (var requireDynamic/*n*/ in global/*e*/) o.validateStyle(requireDynamic/*n*/, global/*e*/), require/*t*/[requireDynamic/*n*/] = StyleSheetRegistry/*l*/.registerStyle(global/*e*/[requireDynamic/*n*/]);
        return require/*t*/
    }, o.validateStyleProp = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        if (__DEV__) {
            if (void 0 === h[global/*e*/]) {
                var requireLazy/*r*/ = '"' + global/*e*/ + '" is not ImageStylePropTypes/*a*/ valid style property.',
                    module/*i*/ = "\nValid style props: " + JSON.stringify(Object.keys(h), null, "  ");
                d(requireLazy/*r*/, require/*t*/, requireDynamic/*n*/, module/*i*/)
            }
            var o = h[global/*e*/](require/*t*/, global/*e*/, requireDynamic/*n*/, ReactPropTypeLocations/*s*/.prop);
            o && d(o.message, require/*t*/, requireDynamic/*n*/)
        }
    }, o.validateStyle = function(global/*e*/, require/*t*/) {
        if (__DEV__)
            for (var requireDynamic/*n*/ in require/*t*/[global/*e*/]) o.validateStyleProp(requireDynamic/*n*/, require/*t*/[global/*e*/], "StyleSheet " + global/*e*/)
    }, o.addValidStylePropTypes = function(global/*e*/) {
        for (var require/*t*/ in global/*e*/) void 0 !== h[require/*t*/] && h[require/*t*/] !== global/*e*/[require/*t*/] && invariant/*p*/(0, 'Attemped to redefine existing style prop type "' + require/*t*/ + '".'), h[require/*t*/] = global/*e*/[require/*t*/]
    };
    var d = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
            invariant/*p*/(0, global/*e*/ + "\requireDynamic/*n*/" + (requireDynamic/*n*/ || "<<unknown>>") + ": " + JSON.stringify(require/*t*/, null, "  ") + (requireLazy/*r*/ || ""))
        },
        h = {};
    o.addValidStylePropTypes(ImageStylePropTypes/*a*/), o.addValidStylePropTypes(TextStylePropTypes/*u*/), o.addValidStylePropTypes(ViewStylePropTypes/*c*/), module/*i*/.exports = o
});