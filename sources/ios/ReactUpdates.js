__d("ReactUpdates",["CallbackQueue","PooledClass","ReactCurrentOwner","ReactPerf","Transaction","invariant","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        x.ReactReconcileTransaction && R || invariant/*_*/(0, "ReactUpdates: must inject a reconcile transaction class and batching strategy")
    }

    function a() {
        this.reinitializeTransaction(), this.dirtyComponentsLength = null, this.callbackQueue = CallbackQueue/*d*/.getPooled(), this.reconcileTransaction = x.ReactReconcileTransaction.getPooled()
    }

    function s(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        o(), R.batchedUpdates(global/*e*/, require/*t*/, requireDynamic/*n*/)
    }

    function l(global/*e*/, require/*t*/) {
        return global/*e*/._mountDepth - require/*t*/._mountDepth
    }

    function u(global/*e*/) {
        var require/*t*/ = global/*e*/.dirtyComponentsLength;
        require/*t*/ !== v.length && invariant/*_*/(0, "Expected flush transaction's stored dirty-components length (%s) to match dirty-components array length (%s).", require/*t*/, v.length), v.sort(l);
        for (var requireDynamic/*n*/ = 0; require/*t*/ > requireDynamic/*n*/; requireDynamic/*n*/++) {
            var requireLazy/*r*/ = v[requireDynamic/*n*/];
            if (requireLazy/*r*/.isMounted()) {
                var module/*i*/ = requireLazy/*r*/._pendingCallbacks;
                if (requireLazy/*r*/._pendingCallbacks = null, requireLazy/*r*/.performUpdateIfNecessary(global/*e*/.reconcileTransaction), module/*i*/)
                    for (var o = 0; o < module/*i*/.length; o++) global/*e*/.callbackQueue.enqueue(module/*i*/[o], requireLazy/*r*/)
            }
        }
    }

    function c(global/*e*/, require/*t*/) {
        return require/*t*/ && "function" != typeof require/*t*/ && invariant/*_*/(0, "enqueueUpdate(...): You called `setProps`, `replaceProps`, `setState`, `replaceState`, or `forceUpdate` with a callback that isn'require/*t*/ callable."), o(), warning/*y*/(null == ReactCurrentOwner/*f*/.current, "enqueueUpdate(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate."), R.isBatchingUpdates ? (v.push(global/*e*/), void(require/*t*/ && (global/*e*/._pendingCallbacks ? global/*e*/._pendingCallbacks.push(require/*t*/) : global/*e*/._pendingCallbacks = [require/*t*/]))) : void R.batchedUpdates(c, global/*e*/, require/*t*/)
    }

    function p(global/*e*/, require/*t*/) {
        R.isBatchingUpdates || invariant/*_*/(0, "ReactUpdates.asap: Can'require/*t*/ enqueue an asap callback in a context whereupdates are not being batched."), S.enqueue(global/*e*/, require/*t*/), b = !0
    }
    var CallbackQueue/*d*/ = require/*t*/("CallbackQueue"),
        PooledClass/*h*/ = require/*t*/("PooledClass"),
        ReactCurrentOwner/*f*/ = require/*t*/("ReactCurrentOwner"),
        ReactPerf/*m*/ = require/*t*/("ReactPerf"),
        Transaction/*g*/ = require/*t*/("Transaction"),
        invariant/*_*/ = require/*t*/("invariant"),
        warning/*y*/ = require/*t*/("warning"),
        v = [],
        S = CallbackQueue/*d*/.getPooled(),
        b = !1,
        R = null,
        w = {
            initialize: function() {
                this.dirtyComponentsLength = v.length
            },
            close: function() {
                this.dirtyComponentsLength !== v.length ? (v.splice(0, this.dirtyComponentsLength), D()) : v.length = 0
            }
        },
        C = {
            initialize: function() {
                this.callbackQueue.reset()
            },
            close: function() {
                this.callbackQueue.notifyAll()
            }
        },
        E = [w, C];
    Object.assign(a.prototype, Transaction/*g*/.Mixin, {
        getTransactionWrappers: function() {
            return E
        },
        destructor: function() {
            this.dirtyComponentsLength = null, CallbackQueue/*d*/.release(this.callbackQueue), this.callbackQueue = null, x.ReactReconcileTransaction.release(this.reconcileTransaction), this.reconcileTransaction = null
        },
        perform: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
            return Transaction/*g*/.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, global/*e*/, require/*t*/, requireDynamic/*n*/)
        }
    }), PooledClass/*h*/.addPoolingTo(a);
    var D = ReactPerf/*m*/.measure("ReactUpdates", "flushBatchedUpdates", function() {
            for (; v.length || b;) {
                if (v.length) {
                    var global/*e*/ = a.getPooled();
                    global/*e*/.perform(u, null, global/*e*/), a.release(global/*e*/)
                }
                if (b) {
                    b = !1;
                    var require/*t*/ = S;
                    S = CallbackQueue/*d*/.getPooled(), require/*t*/.notifyAll(), CallbackQueue/*d*/.release(require/*t*/)
                }
            }
        }),
        T = {
            injectReconcileTransaction: function(global/*e*/) {
                global/*e*/ || invariant/*_*/(0, "ReactUpdates: must provide a reconcile transaction class"), x.ReactReconcileTransaction = global/*e*/
            },
            injectBatchingStrategy: function(global/*e*/) {
                global/*e*/ || invariant/*_*/(0, "ReactUpdates: must provide a batching strategy"), "function" != typeof global/*e*/.batchedUpdates && invariant/*_*/(0, "ReactUpdates: must provide a batchedUpdates() function"), "boolean" != typeof global/*e*/.isBatchingUpdates && invariant/*_*/(0, "ReactUpdates: must provide an isBatchingUpdates boolean attribute"), R = global/*e*/
            }
        },
        x = {
            ReactReconcileTransaction: null,
            batchedUpdates: s,
            enqueueUpdate: c,
            flushBatchedUpdates: D,
            injection: T,
            asap: p
        };
    module/*i*/.exports = x
});