__d("flattenChildren",["ReactTextComponent","traverseAllChildren","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = global/*e*/,
            module/*i*/ = !requireLazy/*r*/.hasOwnProperty(requireDynamic/*n*/);
        if (u(module/*i*/, "flattenChildren(...): Encountered two children with the same key, `%s`. Child keys must be unique; when two children share a key, only the first child will be used.", requireDynamic/*n*/), module/*i*/ && null != require/*t*/) {
            var o, a = typeof require/*t*/;
            o = "string" === a ? s(require/*t*/) : "number" === a ? s("" + require/*t*/) : require/*t*/, requireLazy/*r*/[requireDynamic/*n*/] = o
        }
    }

    function a(global/*e*/) {
        if (null == global/*e*/) return global/*e*/;
        var require/*t*/ = {};
        return l(global/*e*/, o, require/*t*/), require/*t*/
    }
    var s = require/*t*/("ReactTextComponent"),
        l = require/*t*/("traverseAllChildren"),
        u = require/*t*/("warning");
    module/*i*/.exports = a
});