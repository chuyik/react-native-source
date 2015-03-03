__d("Dimensions",["NativeModules","invariant","mergeInto"],function (global/*mergeInto/*e*/*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {}
    var a = require/*t*/("NativeModules"),
        exports/*s*/ = require/*t*/("invariant"),
        NativeModules/*l*/ = require/*t*/("mergeInto"),
        invariant/*u*/ = a.RKUIManager.Dimensions;
    o.set = function(global/*mergeInto/*e*/*/) {
        return NativeModules/*l*/(invariant/*u*/, global/*mergeInto/*e*/*/), !0
    }, o.get = function(global/*mergeInto/*e*/*/) {
        return invariant/*u*/[global/*mergeInto/*e*/*/] || exports/*s*/(0, "No dimension set for key " + global/*mergeInto/*e*/*/), invariant/*u*/[global/*mergeInto/*e*/*/]
    }, module/*i*/.exports = o
});