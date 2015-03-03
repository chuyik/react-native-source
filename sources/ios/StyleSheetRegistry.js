__d("StyleSheetRegistry",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {}
    var a = {},
        s = 1,
        l = {};
    o.registerStyle = function(global/*e*/) {
        var require/*t*/ = ++s;
        return __DEV__ && Object.freeze(global/*e*/), a[require/*t*/] = global/*e*/, require/*t*/
    }, o.getStyleByID = function(global/*e*/) {
        if (!global/*e*/) return l;
        var require/*t*/ = a[global/*e*/];
        return require/*t*/ ? require/*t*/ : (console.warn("Invalid style with id `" + global/*e*/ + "`. Skipping ..."), l)
    }, module/*i*/.exports = o
});