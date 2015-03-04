__d("ReactIOSReconcileTransaction",["CallbackQueue","PooledClass","Transaction"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        this.reinitializeTransaction(), this.reactMountReady = CallbackQueue/*a*/.getPooled(null)
    }
    var CallbackQueue/*a*/ = require/*t*/("CallbackQueue"),
        PooledClass/*s*/ = require/*t*/("PooledClass"),
        Transaction/*l*/ = require/*t*/("Transaction"),
        u = {
            initialize: function() {
                this.reactMountReady.reset()
            },
            close: function() {
                this.reactMountReady.notifyAll()
            }
        },
        c = [u],
        p = {
            getTransactionWrappers: function() {
                return c
            },
            getReactMountReady: function() {
                return this.reactMountReady
            },
            destructor: function() {
                CallbackQueue/*a*/.release(this.reactMountReady), this.reactMountReady = null
            }
        };
    Object.assign(o.prototype, Transaction/*l*/.Mixin, o, p), PooledClass/*s*/.addPoolingTo(o), module/*i*/.exports = o
});