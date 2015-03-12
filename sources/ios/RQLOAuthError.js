__d("RQLOAuthError",["RQLError"],function (e, t, n, r, i) {
    "use strict";

    function o() {
        this.message = "OAuth Exception", this.name = "RQLOAuthError", this.type = "mustfix"
    }
    var RQLError/*a*/ = t("RQLError");
    for (var s in RQLError/*a*/) RQLError/*a*/.hasOwnProperty(s) && (o[s] = RQLError/*a*/[s]);
    var l = null === RQLError/*a*/ ? null : RQLError/*a*/.prototype;
    o.prototype = Object.create(l), o.prototype.constructor = o, o.__superConstructor__ = RQLError/*a*/, i.exports = o
});