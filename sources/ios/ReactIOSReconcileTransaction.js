__d("ReactIOSReconcileTransaction",["CallbackQueue","PooledClass","Transaction"],function (e, t, n, r, i) {
    "use strict";

    function o() {
        this.reinitializeTransaction(), this.reactMountReady = CallbackQueue/*a*/.getPooled(null)
    }
    var CallbackQueue/*a*/ = t("CallbackQueue"),
        PooledClass/*s*/ = t("PooledClass"),
        Transaction/*l*/ = t("Transaction"),
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
    Object.assign(o.prototype, Transaction/*l*/.Mixin, o, p), PooledClass/*s*/.addPoolingTo(o), i.exports = o
});