__d("EventSubscriptionVendor",["invariant"],function (global/*e*/, require/*invariant/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        this.$EventSubscriptionVendor_subscriptionsForType = {}, exports/*this.$EventSubscriptionVendor_currentSubscription*/ = null
    }
    var a = require/*invariant/*t*/*/("invariant");
    o.prototype.addSubscription = function(global/*e*/, require/*invariant/*t*/*/) {
        require/*invariant/*t*/*/.subscriber !== this && a(0, "The subscriber of the subscription is incorrectly set."), this.$EventSubscriptionVendor_subscriptionsForType[global/*e*/] || (this.$EventSubscriptionVendor_subscriptionsForType[global/*e*/] = []);
        var requireDynamic/*n*/ = this.$EventSubscriptionVendor_subscriptionsForType[global/*e*/].length;
        return this.$EventSubscriptionVendor_subscriptionsForType[global/*e*/].push(require/*invariant/*t*/*/), require/*invariant/*t*/*/.eventType = global/*e*/, require/*invariant/*t*/*/.key = requireDynamic/*n*/, require/*invariant/*t*/*/
    }, o.prototype.removeAllSubscriptions = function(global/*e*/) {
        void 0 === global/*e*/ ? this.$EventSubscriptionVendor_subscriptionsForType = {} : delete this.$EventSubscriptionVendor_subscriptionsForType[global/*e*/]
    }, o.prototype.removeSubscription = function(global/*e*/) {
        var require/*invariant/*t*/*/ = global/*e*/.eventType,
            requireDynamic/*n*/ = global/*e*/.key,
            requireLazy/*r*/ = this.$EventSubscriptionVendor_subscriptionsForType[require/*invariant/*t*/*/];
        requireLazy/*r*/ && delete requireLazy/*r*/[requireDynamic/*n*/]
    }, o.prototype.getSubscriptionsForType = function(global/*e*/) {
        return this.$EventSubscriptionVendor_subscriptionsForType[global/*e*/]
    }, module/*i*/.exports = o
});