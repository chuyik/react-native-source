__d("PromiseMap",["PublicPromise","invariant"],function (e, t, n, r, i) {
    "use strict";

    function o() {
        this.$PromiseMap_deferred = {}
    }

    function a(e, t) {
        return e.hasOwnProperty(t) || (e[t] = new PublicPromise/*s*/), e[t]
    }
    var PublicPromise/*s*/ = t("PublicPromise"),
        invariant/*l*/ = t("invariant");
    o.prototype.get = function(e) {
        return a(this.$PromiseMap_deferred, e).getPromise()
    }, o.prototype.resolveKey = function(e, t) {
        var n = a(this.$PromiseMap_deferred, e);
        n.isSettled() && invariant/*l*/(0, "PromiseMap: Already settled `%PublicPromise/*s*/`.", e), n.resolve(t)
    }, o.prototype.rejectKey = function(e, t) {
        var n = a(this.$PromiseMap_deferred, e);
        n.isSettled() && invariant/*l*/(0, "PromiseMap: Already settled `%PublicPromise/*s*/`.", e), n.reject(t)
    }, i.exports = o
});