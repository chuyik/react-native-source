__d("PromiseMap",["PublicPromise","invariant"],function (global/*PublicPromise/*e*/*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        this.$PromiseMap_deferred = {}
    }

    function a(global/*PublicPromise/*e*/*/, require/*exports/*t*/*/) {
        return global/*PublicPromise/*e*/*/.hasOwnProperty(require/*exports/*t*/*/) || (global/*PublicPromise/*e*/*/[require/*exports/*t*/*/] = new s), global/*PublicPromise/*e*/*/[require/*exports/*t*/*/]
    }
    var s = require/*exports/*t*/*/("PublicPromise"),
        invariant/*l*/ = require/*exports/*t*/*/("invariant");
    o.prototype.get = function(global/*PublicPromise/*e*/*/) {
        return a(this.$PromiseMap_deferred, global/*PublicPromise/*e*/*/).getPromise()
    }, o.prototype.resolveKey = function(global/*PublicPromise/*e*/*/, require/*exports/*t*/*/) {
        var requireDynamic/*n*/ = a(this.$PromiseMap_deferred, global/*PublicPromise/*e*/*/);
        requireDynamic/*n*/.isSettled() && invariant/*l*/(0, "PromiseMap: Already settled `%s`.", global/*PublicPromise/*e*/*/), requireDynamic/*n*/.resolve(require/*exports/*t*/*/)
    }, o.prototype.rejectKey = function(global/*PublicPromise/*e*/*/, require/*exports/*t*/*/) {
        var requireDynamic/*n*/ = a(this.$PromiseMap_deferred, global/*PublicPromise/*e*/*/);
        requireDynamic/*n*/.isSettled() && invariant/*l*/(0, "PromiseMap: Already settled `%s`.", global/*PublicPromise/*e*/*/), requireDynamic/*n*/.reject(require/*exports/*t*/*/)
    }, module/*i*/.exports = o
});