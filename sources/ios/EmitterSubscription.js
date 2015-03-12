__d("EmitterSubscription",["EventSubscription"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t, n) {
        EventSubscription/*a*/.call(this, e), this.listener = t, this.context = n
    }
    var EventSubscription/*a*/ = t("EventSubscription");
    for (var s in EventSubscription/*a*/) EventSubscription/*a*/.hasOwnProperty(s) && (o[s] = EventSubscription/*a*/[s]);
    var l = null === EventSubscription/*a*/ ? null : EventSubscription/*a*/.prototype;
    o.prototype = Object.create(l), o.prototype.constructor = o, o.__superConstructor__ = EventSubscription/*a*/, i.exports = o
});