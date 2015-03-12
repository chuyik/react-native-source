__d("EventEmitterWithHolding",[],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        this.$EventEmitterWithHolding_emitter = e, this.$EventEmitterWithHolding_eventHolder = t, this.$EventEmitterWithHolding_currentEventToken = null, this.$EventEmitterWithHolding_emittingHeldEvents = !1
    }
    o.prototype.addListener = function(e, t, n) {
        return this.$EventEmitterWithHolding_emitter.addListener(e, t, n)
    }, o.prototype.once = function(e, t, n) {
        return this.$EventEmitterWithHolding_emitter.once(e, t, n)
    }, o.prototype.addRetroactiveListener = function(e, t, n) {
        var r = this.$EventEmitterWithHolding_emitter.addListener(e, t, n);
        return this.$EventEmitterWithHolding_emittingHeldEvents = !0, this.$EventEmitterWithHolding_eventHolder.emitToListener(e, t, n), this.$EventEmitterWithHolding_emittingHeldEvents = !1, r
    }, o.prototype.removeAllListeners = function(e) {
        this.$EventEmitterWithHolding_emitter.removeAllListeners(e)
    }, o.prototype.removeCurrentListener = function() {
        this.$EventEmitterWithHolding_emitter.removeCurrentListener()
    }, o.prototype.listeners = function(e) {
        return this.$EventEmitterWithHolding_emitter.listeners(e)
    }, o.prototype.emit = function(e, t, n, r, i, o, a) {
        this.$EventEmitterWithHolding_emitter.emit(e, t, n, r, i, o, a)
    }, o.prototype.emitAndHold = function(e, t, n, r, i, o, a) {
        this.$EventEmitterWithHolding_currentEventToken = this.$EventEmitterWithHolding_eventHolder.holdEvent(e, t, n, r, i, o, a), this.$EventEmitterWithHolding_emitter.emit(e, t, n, r, i, o, a), this.$EventEmitterWithHolding_currentEventToken = null
    }, o.prototype.releaseCurrentEvent = function() {
        null !== this.$EventEmitterWithHolding_currentEventToken ? this.$EventEmitterWithHolding_eventHolder.releaseEvent(this.$EventEmitterWithHolding_currentEventToken) : this.$EventEmitterWithHolding_emittingHeldEvents && this.$EventEmitterWithHolding_eventHolder.releaseCurrentEvent()
    }, o.prototype.releaseHeldEventType = function(e) {
        this.$EventEmitterWithHolding_eventHolder.releaseEventType(e)
    }, i.exports = o
});