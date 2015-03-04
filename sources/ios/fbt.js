__d("fbt",["NativeModules","invariant","substituteTokens"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        "text" != global/*e*/.type && invariant/*l*/(0, 'Only "text" translation type is supported'), 1 != global/*e*/.texts.length && invariant/*l*/(0, '"texts" array should have only 1 string'), require/*t*/ = require/*t*/ || [];
        var requireDynamic/*n*/ = global/*e*/.texts[0];
        if (s) {
            var requireLazy/*r*/ = requireDynamic/*n*/ + "|" + global/*e*/.desc,
                module/*i*/ = s[requireLazy/*r*/];
            module/*i*/ && (requireDynamic/*n*/ = module/*i*/)
        }
        var o = {};
        return require/*t*/.forEach(function(global/*e*/) {
            return o[global/*e*/.name] = global/*e*/.value
        }), substituteTokens/*u*/(requireDynamic/*n*/, o)
    }
    var NativeModules/*a*/ = require/*t*/("NativeModules").RKI18n,
        s = NativeModules/*a*/.translationsDictionary,
        invariant/*l*/ = require/*t*/("invariant"),
        substituteTokens/*u*/ = require/*t*/("substituteTokens");
    o.param = function(global/*e*/, require/*t*/) {
        return {
            name: global/*e*/,
            value: require/*t*/
        }
    }, o.enum = function() {
        invariant/*l*/(0, "fbt.enum is not supported yet")
    }, module/*i*/.exports = o
});