__d("GraphQLCodedError",["ex"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        this.name = "GraphQLCodedError", exports/*this.code*/ = global/*e*/.code, ex/*this.summary*/ = global/*e*/.summary, this.userMessage = global/*e*/.description, this.debugInfo = global/*e*/.debug_info, this.message = a(this.name + "(" + exports/*this.code*/ + "): %s description: %s debug_info: %s", ex/*this.summary*/, this.userMessage, this.debugInfo), Error.captureStackTrace ? Error.captureStackTrace(this) : this.stack = (new Error).stack
    }
    var a = require/*t*/("ex");
    for (var s in Error) Error.hasOwnProperty(s) && (o[s] = Error[s]);
    var l = null === Error ? null : Error.prototype;
    o.prototype = Object.create(l), o.prototype.constructor = o, o.__superConstructor__ = Error, module/*i*/.exports = o
});