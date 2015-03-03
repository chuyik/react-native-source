__d("Subscribable",["EventEmitter","invariant","logError"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
        this.$Subscribable_internalEmitter = new a, this.$Subscribable_eventMapping = requireDynamic/*n*/ || function(global/*e*/) {
            return global/*e*/
        }, this.$Subscribable_upstreamSubscription = global/*e*/.addListener(require/*t*/, this.$Subscribable_handleEmit, this), requireLazy/*r*/ && requireLazy/*r*/(this.$Subscribable_handleInitData.bind(this), l)
    }
    var a = require/*t*/("EventEmitter"),
        s = require/*t*/("invariant"),
        l = require/*t*/("logError"),
        u = "subscriptionEvent";
    o.prototype.get = function() {
        return this.$Subscribable_lastData
    }, o.prototype.cleanup = function() {
        this.$Subscribable_upstreamSubscription && this.$Subscribable_upstreamSubscription.remove()
    }, o.prototype.subscribe = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        "function" != typeof global/*e*/.addUnmountCallback && s(0, "Must provide a valid lifespan, which provides a way to add a callback for when subscription can be cleaned up. This is used automatically by Subscribable.Mixin"), "function" != typeof require/*t*/ && s(0, "Must provide a valid subscription handler.");
        var requireLazy/*r*/ = this.$Subscribable_internalEmitter.addListener(u, require/*t*/, requireDynamic/*n*/);
        return global/*e*/.addUnmountCallback(function() {
            requireLazy/*r*/.remove()
        }), requireLazy/*r*/
    }, o.prototype.$Subscribable_handleInitData = function(global/*e*/) {
        var require/*t*/ = this.$Subscribable_eventMapping(global/*e*/);
        this.$Subscribable_lastData = require/*t*/, this.$Subscribable_internalEmitter.emit(u, require/*t*/)
    }, o.prototype.$Subscribable_handleEmit = function(global/*e*/) {
        var require/*t*/ = this.$Subscribable_eventMapping(global/*e*/);
        this.$Subscribable_lastData = require/*t*/, this.$Subscribable_internalEmitter.emit(u, require/*t*/)
    }, o.Mixin = {
        _getSubscribableLifespan: function() {
            return this._subscribableLifespan || (this._subscribableLifespan = {
                addUnmountCallback: function(global/*e*/) {
                    this._endSubscribableLifespanCallbacks.push(global/*e*/)
                }.bind(this)
            }), this._subscribableLifespan
        },
        _endSubscribableLifespan: function() {
            this._endSubscribableLifespanCallbacks.forEach(function(global/*e*/) {
                return global/*e*/()
            })
        },
        subscribeTo: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
            return global/*e*/ instanceof o || s(0, "Must provide a Subscribable"), global/*e*/.subscribe(this._getSubscribableLifespan(), require/*t*/, requireDynamic/*n*/)
        },
        provideSubscribable: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
            return this._localSubscribables = this._localSubscribables || {}, this._localSubscribables[global/*e*/] = this._localSubscribables[global/*e*/] || {}, this._localSubscribables[global/*e*/][require/*t*/] || (this._localSubscribables[global/*e*/][require/*t*/] = new o(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/)), this._localSubscribables[global/*e*/][require/*t*/]
        },
        _cleanupLocalSubscribables: function() {
            if (this._localSubscribables) {
                var global/*e*/;
                Object.keys(this._localSubscribables).forEach(function(require/*t*/) {
                    global/*e*/ = this._localSubscribables[require/*t*/], Object.keys(global/*e*/).forEach(function(require/*t*/) {
                        global/*e*/[require/*t*/].cleanup()
                    })
                }.bind(this)), this._localSubscribables = null
            }
        },
        componentWillMount: function() {
            this._endSubscribableLifespanCallbacks = [], this._subscribableSubscriptions = []
        },
        componentWillUnmount: function() {
            this._endSubscribableLifespan && this._endSubscribableLifespan(), this._cleanupLocalSubscribables(), this._subscribableSubscriptions.forEach(function(global/*e*/) {
                return global/*e*/.remove()
            }), this._subscribableSubscriptions = null
        },
        addListenerOn: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
            this._subscribableSubscriptions.push(global/*e*/.addListener(require/*t*/, requireDynamic/*n*/, requireLazy/*r*/))
        }
    }, module/*i*/.exports = o
});