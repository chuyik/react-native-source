__d("PublicPromise",["Promise"],function (e, t, n, r, i) {
    function o() {
        "use strict";
        this.$PublicPromise_aborted = !1, this.$PublicPromise_settled = !1, this.$PublicPromise_promise = new Promise/*a*/(function(e, t) {
            this.$PublicPromise_resolve = e, this.$PublicPromise_reject = t
        }.bind(this))
    }
    var Promise/*a*/ = t("Promise");
    o.prototype.getPromise = function() {
        "use strict";
        return this.$PublicPromise_promise
    }, o.prototype.resolve = function(e) {
        "use strict";
        this.$PublicPromise_aborted || (this.$PublicPromise_settled = !0, this.$PublicPromise_resolve(e))
    }, o.prototype.reject = function(e) {
        "use strict";
        this.$PublicPromise_aborted || (this.$PublicPromise_settled = !0, this.$PublicPromise_reject(e))
    }, o.prototype.then = function() {
        "use strict";
        return Promise/*a*/.prototype.then.apply(this.$PublicPromise_promise, arguments)
    }, o.prototype.done = function() {
        "use strict";
        return Promise/*a*/.prototype.done.apply(this.$PublicPromise_promise, arguments)
    }, o.prototype.abort = function() {
        "use strict";
        this.$PublicPromise_aborted = !0
    }, o.prototype.isSettled = function() {
        "use strict";
        return this.$PublicPromise_settled
    }, o.prototype.isAborted = function() {
        "use strict";
        return this.$PublicPromise_aborted
    }, i.exports = o
});