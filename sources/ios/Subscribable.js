__d("Subscribable",["EventEmitter","invariant","logError"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t, n, r) {
        this.$Subscribable_internalEmitter = new EventEmitter/*a*/, this.$Subscribable_eventMapping = n || function(e) {
            return e
        }, this.$Subscribable_upstreamSubscription = e.addListener(t, this.$Subscribable_handleEmit, this), r && r(this.$Subscribable_handleInitData.bind(this), logError/*l*/)
    }
    var EventEmitter/*a*/ = t("EventEmitter"),
        invariant/*s*/ = t("invariant"),
        logError/*l*/ = t("logError"),
        u = "subscriptionEvent";
    o.prototype.get = function() {
        return this.$Subscribable_lastData
    }, o.prototype.cleanup = function() {
        this.$Subscribable_upstreamSubscription && this.$Subscribable_upstreamSubscription.remove()
    }, o.prototype.subscribe = function(e, t, n) {
        "function" != typeof e.addUnmountCallback && invariant/*s*/(0, "Must provide EventEmitter/*a*/ valid lifespan, which provides EventEmitter/*a*/ way to add EventEmitter/*a*/ callback for when subscription can be cleaned up. This is used automatically by Subscribable.Mixin"), "function" != typeof t && invariant/*s*/(0, "Must provide EventEmitter/*a*/ valid subscription handler.");
        var r = this.$Subscribable_internalEmitter.addListener(u, t, n);
        return e.addUnmountCallback(function() {
            r.remove()
        }), r
    }, o.prototype.$Subscribable_handleInitData = function(e) {
        var t = this.$Subscribable_eventMapping(e);
        this.$Subscribable_lastData = t, this.$Subscribable_internalEmitter.emit(u, t)
    }, o.prototype.$Subscribable_handleEmit = function(e) {
        var t = this.$Subscribable_eventMapping(e);
        this.$Subscribable_lastData = t, this.$Subscribable_internalEmitter.emit(u, t)
    }, o.Mixin = {
        _getSubscribableLifespan: function() {
            return this._subscribableLifespan || (this._subscribableLifespan = {
                addUnmountCallback: function(e) {
                    this._endSubscribableLifespanCallbacks.push(e)
                }.bind(this)
            }), this._subscribableLifespan
        },
        _endSubscribableLifespan: function() {
            this._endSubscribableLifespanCallbacks.forEach(function(e) {
                return e()
            })
        },
        subscribeTo: function(e, t, n) {
            return e instanceof o || invariant/*s*/(0, "Must provide EventEmitter/*a*/ Subscribable"), e.subscribe(this._getSubscribableLifespan(), t, n)
        },
        provideSubscribable: function(e, t, n, r) {
            return this._localSubscribables = this._localSubscribables || {}, this._localSubscribables[e] = this._localSubscribables[e] || {}, this._localSubscribables[e][t] || (this._localSubscribables[e][t] = new o(e, t, n, r)), this._localSubscribables[e][t]
        },
        _cleanupLocalSubscribables: function() {
            if (this._localSubscribables) {
                var e;
                Object.keys(this._localSubscribables).forEach(function(t) {
                    e = this._localSubscribables[t], Object.keys(e).forEach(function(t) {
                        e[t].cleanup()
                    })
                }.bind(this)), this._localSubscribables = null
            }
        },
        componentWillMount: function() {
            this._endSubscribableLifespanCallbacks = [], this._subscribableSubscriptions = []
        },
        componentWillUnmount: function() {
            this._endSubscribableLifespan && this._endSubscribableLifespan(), this._cleanupLocalSubscribables(), this._subscribableSubscriptions.forEach(function(e) {
                return e.remove()
            }), this._subscribableSubscriptions = null
        },
        addListenerOn: function(e, t, n, r) {
            this._subscribableSubscriptions.push(e.addListener(t, n, r))
        }
    }, i.exports = o
});