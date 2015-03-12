__d("EventSubscriptionVendor",["invariant"],function (e, t, n, r, i) {
    "use strict";

    function o() {
        this.$EventSubscriptionVendor_subscriptionsForType = {}, this.$EventSubscriptionVendor_currentSubscription = null
    }
    var invariant/*a*/ = t("invariant");
    o.prototype.addSubscription = function(e, t) {
        t.subscriber !== this && invariant/*a*/(0, "The subscriber of the subscription is incorrectly set."), this.$EventSubscriptionVendor_subscriptionsForType[e] || (this.$EventSubscriptionVendor_subscriptionsForType[e] = []);
        var n = this.$EventSubscriptionVendor_subscriptionsForType[e].length;
        return this.$EventSubscriptionVendor_subscriptionsForType[e].push(t), t.eventType = e, t.key = n, t
    }, o.prototype.removeAllSubscriptions = function(e) {
        void 0 === e ? this.$EventSubscriptionVendor_subscriptionsForType = {} : delete this.$EventSubscriptionVendor_subscriptionsForType[e]
    }, o.prototype.removeSubscription = function(e) {
        var t = e.eventType,
            n = e.key,
            r = this.$EventSubscriptionVendor_subscriptionsForType[t];
        r && delete r[n]
    }, o.prototype.getSubscriptionsForType = function(e) {
        return this.$EventSubscriptionVendor_subscriptionsForType[e]
    }, i.exports = o
});