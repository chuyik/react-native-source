__d("RQLTimeoutError",["RQLError"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        this.name = "RQLTimeoutError", this.message = "Request timed out", this.type = "warn"
    }
    var RQLError/*a*/ = require/*t*/("RQLError");
    for (var s in RQLError/*a*/) RQLError/*a*/.hasOwnProperty(s) && (o[s] = RQLError/*a*/[s]);
    var l = null === RQLError/*a*/ ? null : RQLError/*a*/.prototype;
    o.prototype = Object.create(l), o.prototype.constructor = o, o.__superConstructor__ = RQLError/*a*/, module/*i*/.exports = o
});