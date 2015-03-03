__d("EventEmitter",["EmitterSubscription","ErrorUtils","EventSubscriptionVendor","emptyFunction","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o() {
        "use strict";
        this.$EventEmitter_subscriber = new l
    }
    var a = require/*t*/("EmitterSubscription"),
        s = require/*t*/("ErrorUtils"),
        l = require/*t*/("EventSubscriptionVendor"),
        u = require/*t*/("emptyFunction"),
        c = require/*t*/("invariant");
    o.prototype.addListener = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        "use strict";
        return this.$EventEmitter_subscriber.addSubscription(global/*e*/, new a(this.$EventEmitter_subscriber, require/*t*/, requireDynamic/*n*/))
    }, o.prototype.once = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        "use strict";
        var requireLazy/*r*/ = this;
        return this.addListener(global/*e*/, function() {
            requireLazy/*r*/.removeCurrentListener(), require/*t*/.apply(requireDynamic/*n*/, arguments)
        })
    }, o.prototype.removeAllListeners = function(global/*e*/) {
        "use strict";
        this.$EventEmitter_subscriber.removeAllSubscriptions(global/*e*/)
    }, o.prototype.removeCurrentListener = function() {
        "use strict";
        this.$EventEmitter_currentSubscription || c(0, "Not in an emitting cycle; there is no current subscription"), this.$EventEmitter_subscriber.removeSubscription(this.$EventEmitter_currentSubscription)
    }, o.prototype.listeners = function(global/*e*/) {
        "use strict";
        var require/*t*/ = this.$EventEmitter_subscriber.getSubscriptionsForType(global/*e*/);
        return require/*t*/ ? require/*t*/.filter(u.thatReturnsTrue).map(function(global/*e*/) {
            return global/*e*/.listener
        }) : []
    }, o.prototype.emit = function(global/*e*/) {
        "use strict";
        var require/*t*/ = this.$EventEmitter_subscriber.getSubscriptionsForType(global/*e*/);
        if (require/*t*/) {
            for (var requireDynamic/*n*/ = Object.keys(require/*t*/), requireLazy/*r*/ = 0; requireLazy/*r*/ < requireDynamic/*n*/.length; requireLazy/*r*/++) {
                var module/*i*/ = requireDynamic/*n*/[requireLazy/*r*/],
                    o = require/*t*/[module/*i*/];
                o && (this.$EventEmitter_currentSubscription = o, s.applyWithGuard(o.listener, o.context, Array.prototype.slice.call(arguments, 1), null, "EventEmitter:" + global/*e*/))
            }
            this.$EventEmitter_currentSubscription = null
        }
    }, module/*i*/.exports = o
});