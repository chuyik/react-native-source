__d("mixInEventEmitter",["EventEmitter","EventEmitterWithHolding","EventHolder","EventValidator","copyProperties","invariant","keyOf"],function (e, t, n, r, i) {
    function o(e, t) {
        t || invariant/*p*/(0, "Must supply set of valid event types"), this.__eventEmitter && invariant/*p*/(0, "An active emitter is already mixed in");
        var n = e.prototype || e,
            r = e.constructor;
        r && r !== Object && r !== Function && invariant/*p*/(0, "Mix EventEmitter into EventEmitter/*a*/ class, not an instance"), n.hasOwnProperty(h) ? copyProperties/*c*/(n.__types, t) : n.__types = n.__types ? copyProperties/*c*/({}, n.__types, t) : t, copyProperties/*c*/(n, f)
    }
    var EventEmitter/*a*/ = t("EventEmitter"),
        EventEmitterWithHolding/*s*/ = t("EventEmitterWithHolding"),
        EventHolder/*l*/ = t("EventHolder"),
        EventValidator/*u*/ = t("EventValidator"),
        copyProperties/*c*/ = t("copyProperties"),
        invariant/*p*/ = t("invariant"),
        keyOf/*d*/ = t("keyOf"),
        h = keyOf/*d*/({
            __types: !0
        }),
        f = {
            emit: function(e, t, n, r, i, o, EventEmitter/*a*/) {
                return this.__getEventEmitter().emit(e, t, n, r, i, o, EventEmitter/*a*/)
            },
            emitAndHold: function(e, t, n, r, i, o, EventEmitter/*a*/) {
                return this.__getEventEmitter().emitAndHold(e, t, n, r, i, o, EventEmitter/*a*/)
            },
            addListener: function(e, t, n) {
                return this.__getEventEmitter().addListener(e, t, n)
            },
            once: function(e, t, n) {
                return this.__getEventEmitter().once(e, t, n)
            },
            addRetroactiveListener: function(e, t, n) {
                return this.__getEventEmitter().addRetroactiveListener(e, t, n)
            },
            addListenerMap: function(e, t) {
                return this.__getEventEmitter().addListenerMap(e, t)
            },
            addRetroactiveListenerMap: function(e, t) {
                return this.__getEventEmitter().addListenerMap(e, t)
            },
            removeAllListeners: function() {
                this.__getEventEmitter().removeAllListeners()
            },
            removeCurrentListener: function() {
                this.__getEventEmitter().removeCurrentListener()
            },
            releaseHeldEventType: function(e) {
                this.__getEventEmitter().releaseHeldEventType(e)
            },
            __getEventEmitter: function() {
                if (!this.__eventEmitter) {
                    var e = new EventEmitter/*a*/;
                    e = EventValidator/*u*/.addValidation(e, this.__types);
                    var t = new EventHolder/*l*/;
                    this.__eventEmitter = new EventEmitterWithHolding/*s*/(e, t)
                }
                return this.__eventEmitter
            }
        };
    i.exports = o
});