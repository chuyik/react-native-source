__d("flattenStyle",["StyleSheetRegistry","mergeIntoFast"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        return "number" == typeof global/*e*/ ? s.getStyleByID(global/*e*/) : global/*e*/
    }

    function a(global/*e*/) {
        if (!global/*e*/) return void 0;
        if (!Array.isArray(global/*e*/)) return o(global/*e*/);
        for (var require/*t*/ = {}, requireDynamic/*n*/ = 0; requireDynamic/*n*/ < global/*e*/.length; ++requireDynamic/*n*/) {
            var requireLazy/*r*/ = a(global/*e*/[requireDynamic/*n*/]);
            requireLazy/*r*/ && l(require/*t*/, requireLazy/*r*/)
        }
        return require/*t*/
    }
    var s = require/*t*/("StyleSheetRegistry"),
        l = require/*t*/("mergeIntoFast");
    module/*i*/.exports = a
});