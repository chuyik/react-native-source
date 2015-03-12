__d("EventSubscription",[],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        this.subscriber = e
    }
    o.prototype.remove = function() {
        this.subscriber.removeSubscription(this)
    }, i.exports = o
});