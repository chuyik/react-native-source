__d("PromiseMap",["PublicPromise","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        this.$PromiseMap_deferred = {}
    }

    function a(global/*e*/, require/*t*/) {
        return global/*e*/.hasOwnProperty(require/*t*/) || (global/*e*/[require/*t*/] = new PublicPromise/*s*/), global/*e*/[require/*t*/]
    }
    var PublicPromise/*s*/ = require/*t*/("PublicPromise"),
        invariant/*l*/ = require/*t*/("invariant");
    o.prototype.get = function(global/*e*/) {
        return a(this.$PromiseMap_deferred, global/*e*/).getPromise()
    }, o.prototype.resolveKey = function(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = a(this.$PromiseMap_deferred, global/*e*/);
        requireDynamic/*n*/.isSettled() && invariant/*l*/(0, "PromiseMap: Already settled `%PublicPromise/*s*/`.", global/*e*/), requireDynamic/*n*/.resolve(require/*t*/)
    }, o.prototype.rejectKey = function(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = a(this.$PromiseMap_deferred, global/*e*/);
        requireDynamic/*n*/.isSettled() && invariant/*l*/(0, "PromiseMap: Already settled `%PublicPromise/*s*/`.", global/*e*/), requireDynamic/*n*/.reject(require/*t*/)
    }, module/*i*/.exports = o
});