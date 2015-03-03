__d("EventEmitterWithHolding",[],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*t*/*/) {
        this.$EventEmitterWithHolding_emitter = global/*e*/, this.$EventEmitterWithHolding_eventHolder = require/*exports/*t*/*/, this.$EventEmitterWithHolding_currentEventToken = null, this.$EventEmitterWithHolding_emittingHeldEvents = !1
    }
    o.prototype.addListener = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
        return this.$EventEmitterWithHolding_emitter.addListener(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/)
    }, o.prototype.once = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
        return this.$EventEmitterWithHolding_emitter.once(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/)
    }, o.prototype.addRetroactiveListener = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = this.$EventEmitterWithHolding_emitter.addListener(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/);
        return this.$EventEmitterWithHolding_emittingHeldEvents = !0, this.$EventEmitterWithHolding_eventHolder.emitToListener(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/), this.$EventEmitterWithHolding_emittingHeldEvents = !1, requireLazy/*r*/
    }, o.prototype.removeAllListeners = function(global/*e*/) {
        this.$EventEmitterWithHolding_emitter.removeAllListeners(global/*e*/)
    }, o.prototype.removeCurrentListener = function() {
        this.$EventEmitterWithHolding_emitter.removeCurrentListener()
    }, o.prototype.listeners = function(global/*e*/) {
        return this.$EventEmitterWithHolding_emitter.listeners(global/*e*/)
    }, o.prototype.emit = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o, a) {
        this.$EventEmitterWithHolding_emitter.emit(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o, a)
    }, o.prototype.emitAndHold = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o, a) {
        this.$EventEmitterWithHolding_currentEventToken = this.$EventEmitterWithHolding_eventHolder.holdEvent(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o, a), this.$EventEmitterWithHolding_emitter.emit(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o, a), this.$EventEmitterWithHolding_currentEventToken = null
    }, o.prototype.releaseCurrentEvent = function() {
        null !== this.$EventEmitterWithHolding_currentEventToken ? this.$EventEmitterWithHolding_eventHolder.releaseEvent(this.$EventEmitterWithHolding_currentEventToken) : this.$EventEmitterWithHolding_emittingHeldEvents && this.$EventEmitterWithHolding_eventHolder.releaseCurrentEvent()
    }, o.prototype.releaseHeldEventType = function(global/*e*/) {
        this.$EventEmitterWithHolding_eventHolder.releaseEventType(global/*e*/)
    }, module/*i*/.exports = o
});