__d("EventEmitter",["EmitterSubscription","ErrorUtils","EventSubscriptionVendor","emptyFunction","invariant"],function (global/*e*/, require/*emptyFunction/*t*/*/, requireDynamic/*invariant/*n*/*/, requireLazy/*r*/, module/*i*/) {
    function o() {
        "use strict";
        this.$EventEmitter_subscriber = new EmitterSubscription/*l*/
    }
    var a = require/*emptyFunction/*t*/*/("EmitterSubscription"),
        exports/*s*/ = require/*emptyFunction/*t*/*/("ErrorUtils"),
        EmitterSubscription/*l*/ = require/*emptyFunction/*t*/*/("EventSubscriptionVendor"),
        ErrorUtils/*u*/ = require/*emptyFunction/*t*/*/("emptyFunction"),
        EventSubscriptionVendor/*c*/ = require/*emptyFunction/*t*/*/("invariant");
    o.prototype.addListener = function(global/*e*/, require/*emptyFunction/*t*/*/, requireDynamic/*invariant/*n*/*/) {
        "use strict";
        return this.$EventEmitter_subscriber.addSubscription(global/*e*/, new a(this.$EventEmitter_subscriber, require/*emptyFunction/*t*/*/, requireDynamic/*invariant/*n*/*/))
    }, o.prototype.once = function(global/*e*/, require/*emptyFunction/*t*/*/, requireDynamic/*invariant/*n*/*/) {
        "use strict";
        var requireLazy/*r*/ = this;
        return this.addListener(global/*e*/, function() {
            requireLazy/*r*/.removeCurrentListener(), require/*emptyFunction/*t*/*/.apply(requireDynamic/*invariant/*n*/*/, arguments)
        })
    }, o.prototype.removeAllListeners = function(global/*e*/) {
        "use strict";
        this.$EventEmitter_subscriber.removeAllSubscriptions(global/*e*/)
    }, o.prototype.removeCurrentListener = function() {
        "use strict";
        this.$EventEmitter_currentSubscription || EventSubscriptionVendor/*c*/(0, "Not in an emitting cycle; there is no current subscription"), this.$EventEmitter_subscriber.removeSubscription(this.$EventEmitter_currentSubscription)
    }, o.prototype.listeners = function(global/*e*/) {
        "use strict";
        var require/*emptyFunction/*t*/*/ = this.$EventEmitter_subscriber.getSubscriptionsForType(global/*e*/);
        return require/*emptyFunction/*t*/*/ ? require/*emptyFunction/*t*/*/.filter(ErrorUtils/*u*/.thatReturnsTrue).map(function(global/*e*/) {
            return global/*e*/.listener
        }) : []
    }, o.prototype.emit = function(global/*e*/) {
        "use strict";
        var require/*emptyFunction/*t*/*/ = this.$EventEmitter_subscriber.getSubscriptionsForType(global/*e*/);
        if (require/*emptyFunction/*t*/*/) {
            for (var requireDynamic/*invariant/*n*/*/ = Object.keys(require/*emptyFunction/*t*/*/), requireLazy/*r*/ = 0; requireLazy/*r*/ < requireDynamic/*invariant/*n*/*/.length; requireLazy/*r*/++) {
                var module/*i*/ = requireDynamic/*invariant/*n*/*/[requireLazy/*r*/],
                    o = require/*emptyFunction/*t*/*/[module/*i*/];
                o && (this.$EventEmitter_currentSubscription = o, exports/*s*/.applyWithGuard(o.listener, o.context, Array.prototype.slice.call(arguments, 1), null, "EventEmitter:" + global/*e*/))
            }
            this.$EventEmitter_currentSubscription = null
        }
    }, module/*i*/.exports = o
});