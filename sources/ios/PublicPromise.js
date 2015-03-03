__d("PublicPromise",["Promise"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o() {
        "use strict";
        this.$PublicPromise_aborted = !1, exports/*this.$PublicPromise_settled*/ = !1, Promise/*this.$PublicPromise_promise*/ = new a(function(global/*e*/, require/*t*/) {
            this.$PublicPromise_resolve = global/*e*/, this.$PublicPromise_reject = require/*t*/
        }.bind(this))
    }
    var a = require/*t*/("Promise");
    o.prototype.getPromise = function() {
        "use strict";
        return Promise/*this.$PublicPromise_promise*/
    }, o.prototype.resolve = function(global/*e*/) {
        "use strict";
        this.$PublicPromise_aborted || (exports/*this.$PublicPromise_settled*/ = !0, this.$PublicPromise_resolve(global/*e*/))
    }, o.prototype.reject = function(global/*e*/) {
        "use strict";
        this.$PublicPromise_aborted || (exports/*this.$PublicPromise_settled*/ = !0, this.$PublicPromise_reject(global/*e*/))
    }, o.prototype.then = function() {
        "use strict";
        return a.prototype.then.apply(Promise/*this.$PublicPromise_promise*/, arguments)
    }, o.prototype.done = function() {
        "use strict";
        return a.prototype.done.apply(Promise/*this.$PublicPromise_promise*/, arguments)
    }, o.prototype.abort = function() {
        "use strict";
        this.$PublicPromise_aborted = !0
    }, o.prototype.isSettled = function() {
        "use strict";
        return exports/*this.$PublicPromise_settled*/
    }, o.prototype.isAborted = function() {
        "use strict";
        return this.$PublicPromise_aborted
    }, module/*i*/.exports = o
});