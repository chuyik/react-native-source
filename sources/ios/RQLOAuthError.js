__d("RQLOAuthError",["RQLError"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        this.message = "OAuth Exception", exports/*this.name*/ = "RQLOAuthError", RQLError/*this.type*/ = "mustfix"
    }
    var a = require/*t*/("RQLError");
    for (var s in a) a.hasOwnProperty(s) && (o[s] = a[s]);
    var l = null === a ? null : a.prototype;
    o.prototype = Object.create(l), o.prototype.constructor = o, o.__superConstructor__ = a, module/*i*/.exports = o
});