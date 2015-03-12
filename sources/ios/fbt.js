__d("fbt",["NativeModules","invariant","substituteTokens"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        "text" != e.type && invariant/*l*/(0, 'Only "text" translation type is supported'), 1 != e.texts.length && invariant/*l*/(0, '"texts" array should have only 1 string'), t = t || [];
        var n = e.texts[0];
        if (s) {
            var r = n + "|" + e.desc,
                i = s[r];
            i && (n = i)
        }
        var o = {};
        return t.forEach(function(e) {
            return o[e.name] = e.value
        }), substituteTokens/*u*/(n, o)
    }
    var NativeModules/*a*/ = t("NativeModules").RKI18n,
        s = NativeModules/*a*/.translationsDictionary,
        invariant/*l*/ = t("invariant"),
        substituteTokens/*u*/ = t("substituteTokens");
    o.param = function(e, t) {
        return {
            name: e,
            value: t
        }
    }, o.enum = function() {
        invariant/*l*/(0, "fbt.enum is not supported yet")
    }, i.exports = o
});