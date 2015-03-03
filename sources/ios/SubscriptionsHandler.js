__d("SubscriptionsHandler",["invariant"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*invariant/*n*/*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        return global/*e*/.remove || global/*e*/.reset || global/*e*/.unsubscribe
    }

    function a(global/*e*/) {
        var require/*exports/*t*/*/ = o(global/*e*/);
        require/*exports/*t*/*/.call(global/*e*/)
    }

    function s() {
        "use strict";
        this._subscriptions = []
    }
    var l = require/*exports/*t*/*/("invariant");
    s.prototype.addSubscriptions = function() {
        "use strict";
        for (var global/*e*/ = [], require/*exports/*t*/*/ = 0, requireDynamic/*invariant/*n*/*/ = arguments.length; requireDynamic/*invariant/*n*/*/ > require/*exports/*t*/*/; require/*exports/*t*/*/++) global/*e*/.push(arguments[require/*exports/*t*/*/]);
        global/*e*/.forEach(function(global/*e*/) {
            var require/*exports/*t*/*/ = o(global/*e*/);
            require/*exports/*t*/*/ || l(0, "Subscription requires release function")
        }), this._subscriptions ? this._subscriptions = this._subscriptions.concat(global/*e*/) : global/*e*/.forEach(a)
    }, s.prototype.engage = function() {
        "use strict";
        this._subscriptions = this._subscriptions || []
    }, s.prototype.release = function() {
        "use strict";
        this._subscriptions && (this._subscriptions.forEach(a), this._subscriptions = null)
    }, module/*i*/.exports = s
});