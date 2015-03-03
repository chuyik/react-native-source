__d("StyleSheetPropType",["createStrictShapeTypeChecker","flattenStyle"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        var require/*t*/ = a(global/*e*/);
        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
            var o = global/*e*/;
            return global/*e*/[requireDynamic/*n*/] && (o = {}, o[requireDynamic/*n*/] = s(global/*e*/[requireDynamic/*n*/])), require/*t*/(o, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/)
        }
    }
    var a = require/*t*/("createStrictShapeTypeChecker"),
        s = require/*t*/("flattenStyle");
    module/*i*/.exports = o
});