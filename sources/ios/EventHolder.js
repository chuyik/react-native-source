__d("EventHolder",["invariant"],function (global/*e*/, require/*invariant/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        this.$EventHolder_heldEvents = {}, exports/*this.$EventHolder_currentEventKey*/ = null
    }
    var a = require/*invariant/*t*/*/("invariant");
    o.prototype.holdEvent = function(global/*e*/, require/*invariant/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o, a) {
        this.$EventHolder_heldEvents[global/*e*/] = this.$EventHolder_heldEvents[global/*e*/] || [];
        var s = this.$EventHolder_heldEvents[global/*e*/],
            l = {
                eventType: global/*e*/,
                index: s.length
            };
        return s.push([require/*invariant/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o, a]), l
    }, o.prototype.emitToListener = function(global/*e*/, require/*invariant/*t*/*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = this.$EventHolder_heldEvents[global/*e*/];
        if (requireLazy/*r*/) {
            var module/*i*/ = exports/*this.$EventHolder_currentEventKey*/;
            requireLazy/*r*/.forEach(function(requireLazy/*r*/, module/*i*/) {
                requireLazy/*r*/ && (exports/*this.$EventHolder_currentEventKey*/ = {
                    eventType: global/*e*/,
                    index: module/*i*/
                }, require/*invariant/*t*/*/.apply(requireDynamic/*n*/, requireLazy/*r*/))
            }.bind(this)), exports/*this.$EventHolder_currentEventKey*/ = module/*i*/
        }
    }, o.prototype.releaseCurrentEvent = function() {
        null === exports/*this.$EventHolder_currentEventKey*/ && a(0, "Not in an emitting cycle; there is no current event"), this.releaseEvent(exports/*this.$EventHolder_currentEventKey*/)
    }, o.prototype.releaseEvent = function(global/*e*/) {
        delete this.$EventHolder_heldEvents[global/*e*/.eventType][global/*e*/.index]
    }, o.prototype.releaseEventType = function(global/*e*/) {
        this.$EventHolder_heldEvents[global/*e*/] = []
    }, module/*i*/.exports = o
});