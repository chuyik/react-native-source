__d("EmitterSubscription",["EventSubscription"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*EventSubscription/*n*/*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*t*/*/, requireDynamic/*EventSubscription/*n*/*/) {
        a.call(this, global/*e*/), this.listener = require/*exports/*t*/*/, this.context = requireDynamic/*EventSubscription/*n*/*/
    }
    var a = require/*exports/*t*/*/("EventSubscription");
    for (var s in a) a.hasOwnProperty(s) && (o[s] = a[s]);
    var l = null === a ? null : a.prototype;
    o.prototype = Object.create(l), o.prototype.constructor = o, o.__superConstructor__ = a, module/*i*/.exports = o
});