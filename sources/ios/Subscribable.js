__d("Subscribable",["EventEmitter","invariant","logError"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*EventEmitter/*n*/*/, requireLazy/*invariant/*r*/*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*t*/*/, requireDynamic/*EventEmitter/*n*/*/, requireLazy/*invariant/*r*/*/) {
        this.$Subscribable_internalEmitter = new a, logError/*this.$Subscribable_eventMapping*/ = requireDynamic/*EventEmitter/*n*/*/ || function(global/*e*/) {
            return global/*e*/
        }, this.$Subscribable_upstreamSubscription = global/*e*/.addListener(require/*exports/*t*/*/, this.$Subscribable_handleEmit, this), requireLazy/*invariant/*r*/*/ && requireLazy/*invariant/*r*/*/(this.$Subscribable_handleInitData.bind(this), l)
    }
    var a = require/*exports/*t*/*/("EventEmitter"),
        s = require/*exports/*t*/*/("invariant"),
        l = require/*exports/*t*/*/("logError"),
        u = "subscriptionEvent";
    o.prototype.get = function() {
        return this.$Subscribable_lastData
    }, o.prototype.cleanup = function() {
        this.$Subscribable_upstreamSubscription && this.$Subscribable_upstreamSubscription.remove()
    }, o.prototype.subscribe = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*EventEmitter/*n*/*/) {
        "function" != typeof global/*e*/.addUnmountCallback && s(0, "Must provide a valid lifespan, which provides a way to add a callback for when subscription can be cleaned up. This is used automatically by Subscribable.Mixin"), "function" != typeof require/*exports/*t*/*/ && s(0, "Must provide a valid subscription handler.");
        var requireLazy/*invariant/*r*/*/ = this.$Subscribable_internalEmitter.addListener(u, require/*exports/*t*/*/, requireDynamic/*EventEmitter/*n*/*/);
        return global/*e*/.addUnmountCallback(function() {
            requireLazy/*invariant/*r*/*/.remove()
        }), requireLazy/*invariant/*r*/*/
    }, o.prototype.$Subscribable_handleInitData = function(global/*e*/) {
        var require/*exports/*t*/*/ = logError/*this.$Subscribable_eventMapping*/(global/*e*/);
        this.$Subscribable_lastData = require/*exports/*t*/*/, this.$Subscribable_internalEmitter.emit(u, require/*exports/*t*/*/)
    }, o.prototype.$Subscribable_handleEmit = function(global/*e*/) {
        var require/*exports/*t*/*/ = logError/*this.$Subscribable_eventMapping*/(global/*e*/);
        this.$Subscribable_lastData = require/*exports/*t*/*/, this.$Subscribable_internalEmitter.emit(u, require/*exports/*t*/*/)
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
        subscribeTo: function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*EventEmitter/*n*/*/) {
            return global/*e*/ instanceof o || s(0, "Must provide a Subscribable"), global/*e*/.subscribe(this._getSubscribableLifespan(), require/*exports/*t*/*/, requireDynamic/*EventEmitter/*n*/*/)
        },
        provideSubscribable: function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*EventEmitter/*n*/*/, requireLazy/*invariant/*r*/*/) {
            return this._localSubscribables = this._localSubscribables || {}, this._localSubscribables[global/*e*/] = this._localSubscribables[global/*e*/] || {}, this._localSubscribables[global/*e*/][require/*exports/*t*/*/] || (this._localSubscribables[global/*e*/][require/*exports/*t*/*/] = new o(global/*e*/, require/*exports/*t*/*/, requireDynamic/*EventEmitter/*n*/*/, requireLazy/*invariant/*r*/*/)), this._localSubscribables[global/*e*/][require/*exports/*t*/*/]
        },
        _cleanupLocalSubscribables: function() {
            if (this._localSubscribables) {
                var global/*e*/;
                Object.keys(this._localSubscribables).forEach(function(require/*exports/*t*/*/) {
                    global/*e*/ = this._localSubscribables[require/*exports/*t*/*/], Object.keys(global/*e*/).forEach(function(require/*exports/*t*/*/) {
                        global/*e*/[require/*exports/*t*/*/].cleanup()
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
        addListenerOn: function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*EventEmitter/*n*/*/, requireLazy/*invariant/*r*/*/) {
            this._subscribableSubscriptions.push(global/*e*/.addListener(require/*exports/*t*/*/, requireDynamic/*EventEmitter/*n*/*/, requireLazy/*invariant/*r*/*/))
        }
    }, module/*i*/.exports = o
});