__d("EmitterSubscription",["EventSubscription"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        EventSubscription/*a*/.call(this, global/*e*/), this.listener = require/*t*/, this.context = requireDynamic/*n*/
    }
    var EventSubscription/*a*/ = require/*t*/("EventSubscription");
    for (var s in EventSubscription/*a*/) EventSubscription/*a*/.hasOwnProperty(s) && (o[s] = EventSubscription/*a*/[s]);
    var l = null === EventSubscription/*a*/ ? null : EventSubscription/*a*/.prototype;
    o.prototype = Object.create(l), o.prototype.constructor = o, o.__superConstructor__ = EventSubscription/*a*/, module/*i*/.exports = o
});