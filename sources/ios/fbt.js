__d("fbt",["NativeModules","invariant","substituteTokens"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        "text" != global/*e*/.type && l(0, 'Only "text" translation type is supported'), 1 != global/*e*/.texts.length && l(0, '"texts" array should have only 1 string'), require/*t*/ = require/*t*/ || [];
        var requireDynamic/*n*/ = global/*e*/.texts[0];
        if (s) {
            var requireLazy/*r*/ = requireDynamic/*n*/ + "|" + global/*e*/.desc,
                module/*i*/ = s[requireLazy/*r*/];
            module/*i*/ && (requireDynamic/*n*/ = module/*i*/)
        }
        var o = {};
        return require/*t*/.forEach(function(global/*e*/) {
            return o[global/*e*/.name] = global/*e*/.value
        }), u(requireDynamic/*n*/, o)
    }
    var a = require/*t*/("NativeModules").RKI18n,
        s = a.translationsDictionary,
        l = require/*t*/("invariant"),
        u = require/*t*/("substituteTokens");
    o.param = function(global/*e*/, require/*t*/) {
        return {
            name: global/*e*/,
            value: require/*t*/
        }
    }, o.enum = function() {
        l(0, "fbt.enum is not supported yet")
    }, module/*i*/.exports = o
});