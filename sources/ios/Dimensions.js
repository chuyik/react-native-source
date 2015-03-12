__d("Dimensions",["NativeModules","invariant","mergeInto"],function (e, t, n, r, i) {
    "use strict";

    function o() {}
    var NativeModules/*a*/ = t("NativeModules"),
        invariant/*s*/ = t("invariant"),
        mergeInto/*l*/ = t("mergeInto"),
        u = NativeModules/*a*/.RKUIManager.Dimensions;
    o.set = function(e) {
        return mergeInto/*l*/(u, e), !0
    }, o.get = function(e) {
        return u[e] || invariant/*s*/(0, "No dimension set for key " + e), u[e]
    }, i.exports = o
});