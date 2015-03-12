__d("RQLTransportError",["RQLError"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        this.name = "RQLTransportError", this.message = e, this.type = "warn"
    }
    var RQLError/*a*/ = t("RQLError");
    for (var s in RQLError/*a*/) RQLError/*a*/.hasOwnProperty(s) && (o[s] = RQLError/*a*/[s]);
    var l = null === RQLError/*a*/ ? null : RQLError/*a*/.prototype;
    o.prototype = Object.create(l), o.prototype.constructor = o, o.__superConstructor__ = RQLError/*a*/, i.exports = o
});