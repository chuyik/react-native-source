__d("fbt",["NativeModules","invariant","substituteTokens"],function (global/*e*/, require/*exports/*invariant/*t*/*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*substituteTokens/*i*/*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*invariant/*t*/*/*/) {
        "text" != global/*e*/.type && l(0, 'Only "text" translation type is supported'), NativeModules/*1*/ != global/*e*/.texts.length && l(0, '"texts" array should have only NativeModules/*1*/ string'), require/*exports/*invariant/*t*/*/*/ = require/*exports/*invariant/*t*/*/*/ || [];
        var requireDynamic/*n*/ = global/*e*/.texts[0];
        if (s) {
            var requireLazy/*r*/ = requireDynamic/*n*/ + "|" + global/*e*/.desc,
                module/*substituteTokens/*i*/*/ = s[requireLazy/*r*/];
            module/*substituteTokens/*i*/*/ && (requireDynamic/*n*/ = module/*substituteTokens/*i*/*/)
        }
        var o = {};
        return require/*exports/*invariant/*t*/*/*/.forEach(function(global/*e*/) {
            return o[global/*e*/.name] = global/*e*/.value
        }), u(requireDynamic/*n*/, o)
    }
    var a = require/*exports/*invariant/*t*/*/*/("NativeModules").RKI18n,
        s = a.translationsDictionary,
        l = require/*exports/*invariant/*t*/*/*/("invariant"),
        u = require/*exports/*invariant/*t*/*/*/("substituteTokens");
    o.param = function(global/*e*/, require/*exports/*invariant/*t*/*/*/) {
        return {
            name: global/*e*/,
            value: require/*exports/*invariant/*t*/*/*/
        }
    }, o.enum = function() {
        l(0, "fbt.enum is not supported yet")
    }, module/*substituteTokens/*i*/*/.exports = o
});