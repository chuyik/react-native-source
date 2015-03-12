__d("EventEmitter",["EmitterSubscription","ErrorUtils","EventSubscriptionVendor","emptyFunction","invariant"],function (e, t, n, r, i) {
    function o() {
        "use strict";
        this.$EventEmitter_subscriber = new EventSubscriptionVendor/*l*/
    }
    var EmitterSubscription/*a*/ = t("EmitterSubscription"),
        ErrorUtils/*s*/ = t("ErrorUtils"),
        EventSubscriptionVendor/*l*/ = t("EventSubscriptionVendor"),
        emptyFunction/*u*/ = t("emptyFunction"),
        invariant/*c*/ = t("invariant");
    o.prototype.addListener = function(e, t, n) {
        "use strict";
        return this.$EventEmitter_subscriber.addSubscription(e, new EmitterSubscription/*a*/(this.$EventEmitter_subscriber, t, n))
    }, o.prototype.once = function(e, t, n) {
        "use strict";
        var r = this;
        return this.addListener(e, function() {
            r.removeCurrentListener(), t.apply(n, arguments)
        })
    }, o.prototype.removeAllListeners = function(e) {
        "use strict";
        this.$EventEmitter_subscriber.removeAllSubscriptions(e)
    }, o.prototype.removeCurrentListener = function() {
        "use strict";
        this.$EventEmitter_currentSubscription || invariant/*c*/(0, "Not in an emitting cycle; there is no current subscription"), this.$EventEmitter_subscriber.removeSubscription(this.$EventEmitter_currentSubscription)
    }, o.prototype.listeners = function(e) {
        "use strict";
        var t = this.$EventEmitter_subscriber.getSubscriptionsForType(e);
        return t ? t.filter(emptyFunction/*u*/.thatReturnsTrue).map(function(e) {
            return e.listener
        }) : []
    }, o.prototype.emit = function(e) {
        "use strict";
        var t = this.$EventEmitter_subscriber.getSubscriptionsForType(e);
        if (t) {
            for (var n = Object.keys(t), r = 0; r < n.length; r++) {
                var i = n[r],
                    o = t[i];
                o && (this.$EventEmitter_currentSubscription = o, ErrorUtils/*s*/.applyWithGuard(o.listener, o.context, Array.prototype.slice.call(arguments, 1), null, "EventEmitter:" + e))
            }
            this.$EventEmitter_currentSubscription = null
        }
    }, i.exports = o
});