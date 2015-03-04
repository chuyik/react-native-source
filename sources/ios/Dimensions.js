__d("Dimensions",["NativeModules","invariant","mergeInto"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {}
    var NativeModules/*a*/ = require/*t*/("NativeModules"),
        invariant/*s*/ = require/*t*/("invariant"),
        mergeInto/*l*/ = require/*t*/("mergeInto"),
        u = NativeModules/*a*/.RKUIManager.Dimensions;
    o.set = function(global/*e*/) {
        return mergeInto/*l*/(u, global/*e*/), !0
    }, o.get = function(global/*e*/) {
        return u[global/*e*/] || invariant/*s*/(0, "No dimension set for key " + global/*e*/), u[global/*e*/]
    }, module/*i*/.exports = o
});