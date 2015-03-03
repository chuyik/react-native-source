__d("EmitterSubscription",["EventSubscription"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        a.call(this, global/*e*/), this.listener = require/*t*/, this.context = requireDynamic/*n*/
    }
    var a = require/*t*/("EventSubscription");
    for (var s in a) a.hasOwnProperty(s) && (o[s] = a[s]);
    var l = null === a ? null : a.prototype;
    o.prototype = Object.create(l), o.prototype.constructor = o, o.__superConstructor__ = a, module/*i*/.exports = o
});