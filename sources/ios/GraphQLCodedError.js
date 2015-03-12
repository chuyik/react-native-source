__d("GraphQLCodedError",["ex"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        this.name = "GraphQLCodedError", this.code = e.code, this.summary = e.summary, this.userMessage = e.description, this.debugInfo = e.debug_info, this.message = ex/*a*/(this.name + "(" + this.code + "): %s description: %s debug_info: %s", this.summary, this.userMessage, this.debugInfo), Error.captureStackTrace ? Error.captureStackTrace(this) : this.stack = (new Error).stack
    }
    var ex/*a*/ = t("ex");
    for (var s in Error) Error.hasOwnProperty(s) && (o[s] = Error[s]);
    var l = null === Error ? null : Error.prototype;
    o.prototype = Object.create(l), o.prototype.constructor = o, o.__superConstructor__ = Error, i.exports = o
});