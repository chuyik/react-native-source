__d("SubscriptionsHandler",["invariant"],function (e, t, n, r, i) {
    function o(e) {
        return e.remove || e.reset || e.unsubscribe
    }

    function a(e) {
        var t = o(e);
        t.call(e)
    }

    function s() {
        "use strict";
        this._subscriptions = []
    }
    var invariant/*l*/ = t("invariant");
    s.prototype.addSubscriptions = function() {
        "use strict";
        for (var e = [], t = 0, n = arguments.length; n > t; t++) e.push(arguments[t]);
        e.forEach(function(e) {
            var t = o(e);
            t || invariant/*l*/(0, "Subscription requires release function")
        }), this._subscriptions ? this._subscriptions = this._subscriptions.concat(e) : e.forEach(a)
    }, s.prototype.engage = function() {
        "use strict";
        this._subscriptions = this._subscriptions || []
    }, s.prototype.release = function() {
        "use strict";
        this._subscriptions && (this._subscriptions.forEach(a), this._subscriptions = null)
    }, i.exports = s
});