__d("StyleSheetRegistry",[],function (e, t, n, r, i) {
    "use strict";

    function o() {}
    var a = {},
        s = 1,
        l = {};
    o.registerStyle = function(e) {
        var t = ++s;
        return __DEV__ && Object.freeze(e), a[t] = e, t
    }, o.getStyleByID = function(e) {
        if (!e) return l;
        var t = a[e];
        return t ? t : (console.warn("Invalid style with id `" + e + "`. Skipping ..."), l)
    }, i.exports = o
});