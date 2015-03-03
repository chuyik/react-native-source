__d("mixInEventEmitter",["EventEmitter","EventEmitterWithHolding","EventHolder","EventValidator","copyProperties","invariant","keyOf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        require/*t*/ || p(0, "Must supply set of valid event types"), this.__eventEmitter && p(0, "An active emitter is already mixed in");
        var requireDynamic/*n*/ = global/*e*/.prototype || global/*e*/,
            requireLazy/*r*/ = global/*e*/.constructor;
        requireLazy/*r*/ && requireLazy/*r*/ !== Object && requireLazy/*r*/ !== Function && p(0, "Mix EventEmitter into a class, not an instance"), requireDynamic/*n*/.hasOwnProperty(h) ? c(requireDynamic/*n*/.__types, require/*t*/) : requireDynamic/*n*/.__types = requireDynamic/*n*/.__types ? c({}, requireDynamic/*n*/.__types, require/*t*/) : require/*t*/, c(requireDynamic/*n*/, f)
    }
    var a = require/*t*/("EventEmitter"),
        s = require/*t*/("EventEmitterWithHolding"),
        l = require/*t*/("EventHolder"),
        u = require/*t*/("EventValidator"),
        c = require/*t*/("copyProperties"),
        p = require/*t*/("invariant"),
        d = require/*t*/("keyOf"),
        h = d({
            __types: !0
        }),
        f = {
            emit: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o, a) {
                return this.__getEventEmitter().emit(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o, a)
            },
            emitAndHold: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o, a) {
                return this.__getEventEmitter().emitAndHold(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o, a)
            },
            addListener: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                return this.__getEventEmitter().addListener(global/*e*/, require/*t*/, requireDynamic/*n*/)
            },
            once: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                return this.__getEventEmitter().once(global/*e*/, require/*t*/, requireDynamic/*n*/)
            },
            addRetroactiveListener: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                return this.__getEventEmitter().addRetroactiveListener(global/*e*/, require/*t*/, requireDynamic/*n*/)
            },
            addListenerMap: function(global/*e*/, require/*t*/) {
                return this.__getEventEmitter().addListenerMap(global/*e*/, require/*t*/)
            },
            addRetroactiveListenerMap: function(global/*e*/, require/*t*/) {
                return this.__getEventEmitter().addListenerMap(global/*e*/, require/*t*/)
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
                if (!this.__eventEmitter) {
                    var global/*e*/ = new a;
                    global/*e*/ = u.addValidation(global/*e*/, this.__types);
                    var require/*t*/ = new l;
                    this.__eventEmitter = new s(global/*e*/, require/*t*/)
                }
                return this.__eventEmitter
            }
        };
    module/*i*/.exports = o
});