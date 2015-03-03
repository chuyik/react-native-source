__d("ReactIOSReconcileTransaction",["CallbackQueue","PooledClass","Transaction"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        this.reinitializeTransaction(), exports/*this.reactMountReady*/ = a.getPooled(null)
    }
    var a = require/*t*/("CallbackQueue"),
        CallbackQueue/*s*/ = require/*t*/("PooledClass"),
        PooledClass/*l*/ = require/*t*/("Transaction"),
        Transaction/*u*/ = {
            initialize: function() {
                exports/*this.reactMountReady*/.reset()
            },
            close: function() {
                exports/*this.reactMountReady*/.notifyAll()
            }
        },
        c = [Transaction/*u*/],
        p = {
            getTransactionWrappers: function() {
                return c
            },
            getReactMountReady: function() {
                return exports/*this.reactMountReady*/
            },
            destructor: function() {
                a.release(exports/*this.reactMountReady*/), exports/*this.reactMountReady*/ = null
            }
        };
    Object.assign(o.prototype, PooledClass/*l*/.Mixin, o, p), CallbackQueue/*s*/.addPoolingTo(o), module/*i*/.exports = o
});