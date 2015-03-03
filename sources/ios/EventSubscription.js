__d("EventSubscription",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        this.subscriber = global/*e*/
    }
    o.prototype.remove = function() {
        this.subscriber.removeSubscription(this)
    }, module/*i*/.exports = o
});