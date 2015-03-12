__d("RQLError",[],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        this.name = "RQLError", this.message = e, this.type = "mustfix", Error.captureStackTrace ? Error.captureStackTrace(this) : this.stack = (new Error).stack, __DEV__ && (this.message += " -- Check your console.log or slog!")
    }
    for (var a in Error) Error.hasOwnProperty(a) && (o[a] = Error[a]);
    var s = null === Error ? null : Error.prototype;
    o.prototype = Object.create(s), o.prototype.constructor = o, o.__superConstructor__ = Error, i.exports = o
});