__d("ReactIOSReconcileTransaction",["CallbackQueue","PooledClass","Transaction"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        this.reinitializeTransaction(), this.reactMountReady = a.getPooled(null)
    }
    var a = require/*t*/("CallbackQueue"),
        s = require/*t*/("PooledClass"),
        l = require/*t*/("Transaction"),
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
                a.release(this.reactMountReady), this.reactMountReady = null
            }
        };
    Object.assign(o.prototype, l.Mixin, o, p), s.addPoolingTo(o), module/*i*/.exports = o
});