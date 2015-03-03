__d("flattenStyle",["StyleSheetRegistry","mergeIntoFast"],function (global/*e*/, require/*t*/, requireDynamic/*exports/*n*/*/, requireLazy/*StyleSheetRegistry/*r*/*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        return "number" == typeof global/*e*/ ? s.getStyleByID(global/*e*/) : global/*e*/
    }

    function a(global/*e*/) {
        if (!global/*e*/) return void 0;
        if (!Array.isArray(global/*e*/)) return o(global/*e*/);
        for (var require/*t*/ = {}, requireDynamic/*exports/*n*/*/ = 0; requireDynamic/*exports/*n*/*/ < global/*e*/.length; ++requireDynamic/*exports/*n*/*/) {
            var requireLazy/*StyleSheetRegistry/*r*/*/ = a(global/*e*/[requireDynamic/*exports/*n*/*/]);
            requireLazy/*StyleSheetRegistry/*r*/*/ && mergeIntoFast/*l*/(require/*t*/, requireLazy/*StyleSheetRegistry/*r*/*/)
        }
        return require/*t*/
    }
    var s = require/*t*/("StyleSheetRegistry"),
        mergeIntoFast/*l*/ = require/*t*/("mergeIntoFast");
    module/*i*/.exports = a
});