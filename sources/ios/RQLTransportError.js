__d("RQLTransportError",["RQLError"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        this.name = "RQLTransportError", this.message = global/*e*/, this.type = "warn"
    }
    var RQLError/*a*/ = require/*t*/("RQLError");
    for (var s in RQLError/*a*/) RQLError/*a*/.hasOwnProperty(s) && (o[s] = RQLError/*a*/[s]);
    var l = null === RQLError/*a*/ ? null : RQLError/*a*/.prototype;
    o.prototype = Object.create(l), o.prototype.constructor = o, o.__superConstructor__ = RQLError/*a*/, module/*i*/.exports = o
});