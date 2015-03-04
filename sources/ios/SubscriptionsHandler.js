__d("SubscriptionsHandler",["invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        return global/*e*/.remove || global/*e*/.reset || global/*e*/.unsubscribe
    }

    function a(global/*e*/) {
        var require/*t*/ = o(global/*e*/);
        require/*t*/.call(global/*e*/)
    }

    function s() {
        "use strict";
        this._subscriptions = []
    }
    var invariant/*l*/ = require/*t*/("invariant");
    s.prototype.addSubscriptions = function() {
        "use strict";
        for (var global/*e*/ = [], require/*t*/ = 0, requireDynamic/*n*/ = arguments.length; requireDynamic/*n*/ > require/*t*/; require/*t*/++) global/*e*/.push(arguments[require/*t*/]);
        global/*e*/.forEach(function(global/*e*/) {
            var require/*t*/ = o(global/*e*/);
            require/*t*/ || invariant/*l*/(0, "Subscription requires release function")
        }), this._subscriptions ? this._subscriptions = this._subscriptions.concat(global/*e*/) : global/*e*/.forEach(a)
    }, s.prototype.engage = function() {
        "use strict";
        this._subscriptions = this._subscriptions || []
    }, s.prototype.release = function() {
        "use strict";
        this._subscriptions && (this._subscriptions.forEach(a), this._subscriptions = null)
    }, module/*i*/.exports = s
});