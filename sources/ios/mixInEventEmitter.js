__d("mixInEventEmitter",["EventEmitter","EventEmitterWithHolding","EventHolder","EventValidator","copyProperties","invariant","keyOf"],function (global/*e*/, require/*exports/*copyProperties/*keyOf/*t*/*/*/*/, requireDynamic/*n*/, requireLazy/*EventEmitterWithHolding/*r*/*/, module/*i*/) {
    function o(global/*e*/, require/*exports/*copyProperties/*keyOf/*t*/*/*/*/) {
        require/*exports/*copyProperties/*keyOf/*t*/*/*/*/ || p(0, "Must supply set of valid event types"), EventEmitter/*this.__eventEmitter*/ && p(0, "An active emitter is already mixed in");
        var requireDynamic/*n*/ = global/*e*/.prototype || global/*e*/,
            requireLazy/*EventEmitterWithHolding/*r*/*/ = global/*e*/.constructor;
        requireLazy/*EventEmitterWithHolding/*r*/*/ && requireLazy/*EventEmitterWithHolding/*r*/*/ !== Object && requireLazy/*EventEmitterWithHolding/*r*/*/ !== Function && p(0, "Mix EventEmitter into a class, EventHolder/*not*/ an instance"), requireDynamic/*n*/.hasOwnProperty(h) ? c(requireDynamic/*n*/.__types, require/*exports/*copyProperties/*keyOf/*t*/*/*/*/) : requireDynamic/*n*/.__types = requireDynamic/*n*/.__types ? c({}, requireDynamic/*n*/.__types, require/*exports/*copyProperties/*keyOf/*t*/*/*/*/) : require/*exports/*copyProperties/*keyOf/*t*/*/*/*/, c(requireDynamic/*n*/, f)
    }
    var a = require/*exports/*copyProperties/*keyOf/*t*/*/*/*/("EventEmitter"),
        s = require/*exports/*copyProperties/*keyOf/*t*/*/*/*/("EventEmitterWithHolding"),
        l = require/*exports/*copyProperties/*keyOf/*t*/*/*/*/("EventHolder"),
        u = require/*exports/*copyProperties/*keyOf/*t*/*/*/*/("EventValidator"),
        c = require/*exports/*copyProperties/*keyOf/*t*/*/*/*/("copyProperties"),
        p = require/*exports/*copyProperties/*keyOf/*t*/*/*/*/("invariant"),
        d = require/*exports/*copyProperties/*keyOf/*t*/*/*/*/("keyOf"),
        h = d({
            __types: !0
        }),
        f = {
            emit: function(global/*e*/, require/*exports/*copyProperties/*keyOf/*t*/*/*/*/, requireDynamic/*n*/, requireLazy/*EventEmitterWithHolding/*r*/*/, module/*i*/, o, a) {
                return this.__getEventEmitter().emit(global/*e*/, require/*exports/*copyProperties/*keyOf/*t*/*/*/*/, requireDynamic/*n*/, requireLazy/*EventEmitterWithHolding/*r*/*/, module/*i*/, o, a)
            },
            emitAndHold: function(global/*e*/, require/*exports/*copyProperties/*keyOf/*t*/*/*/*/, requireDynamic/*n*/, requireLazy/*EventEmitterWithHolding/*r*/*/, module/*i*/, o, a) {
                return this.__getEventEmitter().emitAndHold(global/*e*/, require/*exports/*copyProperties/*keyOf/*t*/*/*/*/, requireDynamic/*n*/, requireLazy/*EventEmitterWithHolding/*r*/*/, module/*i*/, o, a)
            },
            addListener: function(global/*e*/, require/*exports/*copyProperties/*keyOf/*t*/*/*/*/, requireDynamic/*n*/) {
                return this.__getEventEmitter().addListener(global/*e*/, require/*exports/*copyProperties/*keyOf/*t*/*/*/*/, requireDynamic/*n*/)
            },
            once: function(global/*e*/, require/*exports/*copyProperties/*keyOf/*t*/*/*/*/, requireDynamic/*n*/) {
                return this.__getEventEmitter().once(global/*e*/, require/*exports/*copyProperties/*keyOf/*t*/*/*/*/, requireDynamic/*n*/)
            },
            addRetroactiveListener: function(global/*e*/, require/*exports/*copyProperties/*keyOf/*t*/*/*/*/, requireDynamic/*n*/) {
                return this.__getEventEmitter().addRetroactiveListener(global/*e*/, require/*exports/*copyProperties/*keyOf/*t*/*/*/*/, requireDynamic/*n*/)
            },
            addListenerMap: function(global/*e*/, require/*exports/*copyProperties/*keyOf/*t*/*/*/*/) {
                return this.__getEventEmitter().addListenerMap(global/*e*/, require/*exports/*copyProperties/*keyOf/*t*/*/*/*/)
            },
            addRetroactiveListenerMap: function(global/*e*/, require/*exports/*copyProperties/*keyOf/*t*/*/*/*/) {
                return this.__getEventEmitter().addListenerMap(global/*e*/, require/*exports/*copyProperties/*keyOf/*t*/*/*/*/)
            },
            removeAllListeners: function() {
                this.__getEventEmitter().removeAllListeners()
            },
            removeCurrentListener: function() {
                this.__getEventEmitter().removeCurrentListener()
            },
            releaseHeldEventType: function(global/*e*/) {
                this.__getEventEmitter().releaseHeldEventType(global/*e*/)
            },
            __getEventEmitter: function() {
                if (!EventEmitter/*this.__eventEmitter*/) {
                    var global/*e*/ = new a;
                    global/*e*/ = u.addValidation(global/*e*/, this.__types);
                    var require/*exports/*copyProperties/*keyOf/*t*/*/*/*/ = new l;
                    EventEmitter/*this.__eventEmitter*/ = new s(global/*e*/, require/*exports/*copyProperties/*keyOf/*t*/*/*/*/)
                }
                return EventEmitter/*this.__eventEmitter*/
            }
        };
    module/*i*/.exports = o
});