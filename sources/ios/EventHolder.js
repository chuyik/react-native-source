__d("EventHolder",["invariant"],function (e, t, n, r, i) {
    "use strict";

    function o() {
        this.$EventHolder_heldEvents = {}, this.$EventHolder_currentEventKey = null
    }
    var invariant/*a*/ = t("invariant");
    o.prototype.holdEvent = function(e, t, n, r, i, o, invariant/*a*/) {
        this.$EventHolder_heldEvents[e] = this.$EventHolder_heldEvents[e] || [];
        var s = this.$EventHolder_heldEvents[e],
            l = {
                eventType: e,
                index: s.length
            };
        return s.push([t, n, r, i, o, invariant/*a*/]), l
    }, o.prototype.emitToListener = function(e, t, n) {
        var r = this.$EventHolder_heldEvents[e];
        if (r) {
            var i = this.$EventHolder_currentEventKey;
            r.forEach(function(r, i) {
                r && (this.$EventHolder_currentEventKey = {
                    eventType: e,
                    index: i
                }, t.apply(n, r))
            }.bind(this)), this.$EventHolder_currentEventKey = i
        }
    }, o.prototype.releaseCurrentEvent = function() {
        null === this.$EventHolder_currentEventKey && invariant/*a*/(0, "Not in an emitting cycle; there is no current event"), this.releaseEvent(this.$EventHolder_currentEventKey)
    }, o.prototype.releaseEvent = function(e) {
        delete this.$EventHolder_heldEvents[e.eventType][e.index]
    }, o.prototype.releaseEventType = function(e) {
        this.$EventHolder_heldEvents[e] = []
    }, i.exports = o
});