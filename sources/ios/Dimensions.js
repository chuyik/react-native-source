__d("Dimensions",["NativeModules","invariant","mergeInto"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {}
    var a = require/*t*/("NativeModules"),
        s = require/*t*/("invariant"),
        l = require/*t*/("mergeInto"),
        u = a.RKUIManager.Dimensions;
    o.set = function(global/*e*/) {
        return l(u, global/*e*/), !0
    }, o.get = function(global/*e*/) {
        return u[global/*e*/] || s(0, "No dimension set for key " + global/*e*/), u[global/*e*/]
    }, module/*i*/.exports = o
});