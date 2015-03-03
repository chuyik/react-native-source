__d("RQLError",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        this.name = "RQLError", exports/*this.message*/ = global/*e*/, this.type = "mustfix", Error.captureStackTrace ? Error.captureStackTrace(this) : this.stack = (new Error).stack, __DEV__ && (exports/*this.message*/ += " -- Check your console.log or slog!")
    }
    for (var a in Error) Error.hasOwnProperty(a) && (o[a] = Error[a]);
    var s = null === Error ? null : Error.prototype;
    o.prototype = Object.create(s), o.prototype.constructor = o, o.__superConstructor__ = Error, module/*i*/.exports = o
});