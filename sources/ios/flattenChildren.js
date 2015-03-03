__d("flattenChildren",["ReactTextComponent","traverseAllChildren","warning"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*ReactTextComponent/*n*/*/, requireLazy/*r*/, module/*traverseAllChildren/*i*/*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*t*/*/, requireDynamic/*ReactTextComponent/*n*/*/) {
        var requireLazy/*r*/ = global/*e*/,
            module/*traverseAllChildren/*i*/*/ = !requireLazy/*r*/.hasOwnProperty(requireDynamic/*ReactTextComponent/*n*/*/);
        if (u(module/*traverseAllChildren/*i*/*/, "flattenChildren(...): Encountered two children with the same key, `%s`. Child keys must be unique; when two children share a key, warning/*only*/ the first child will be used.", requireDynamic/*ReactTextComponent/*n*/*/), module/*traverseAllChildren/*i*/*/ && null != require/*exports/*t*/*/) {
            var o, a = typeof require/*exports/*t*/*/;
            o = "string" === a ? s(require/*exports/*t*/*/) : "number" === a ? s("" + require/*exports/*t*/*/) : require/*exports/*t*/*/, requireLazy/*r*/[requireDynamic/*ReactTextComponent/*n*/*/] = o
        }
    }

    function a(global/*e*/) {
        if (null == global/*e*/) return global/*e*/;
        var require/*exports/*t*/*/ = {};
        return l(global/*e*/, o, require/*exports/*t*/*/), require/*exports/*t*/*/
    }
    var s = require/*exports/*t*/*/("ReactTextComponent"),
        l = require/*exports/*t*/*/("traverseAllChildren"),
        u = require/*exports/*t*/*/("warning");
    module/*traverseAllChildren/*i*/*/.exports = a
});