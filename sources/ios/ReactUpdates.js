__d("ReactUpdates",["CallbackQueue","PooledClass","ReactCurrentOwner","ReactPerf","Transaction","invariant","warning"],function (e, t, n, r, i) {
    "use strict";

    function o() {
        x.ReactReconcileTransaction && R || invariant/*_*/(0, "ReactUpdates: must inject a reconcile transaction class and batching strategy")
    }

    function a() {
        this.reinitializeTransaction(), this.dirtyComponentsLength = null, this.callbackQueue = CallbackQueue/*d*/.getPooled(), this.reconcileTransaction = x.ReactReconcileTransaction.getPooled()
    }

    function s(e, t, n) {
        o(), R.batchedUpdates(e, t, n)
    }

    function l(e, t) {
        return e._mountDepth - t._mountDepth
    }

    function u(e) {
        var t = e.dirtyComponentsLength;
        t !== v.length && invariant/*_*/(0, "Expected flush transaction's stored dirty-components length (%s) to match dirty-components array length (%s).", t, v.length), v.sort(l);
        for (var n = 0; t > n; n++) {
            var r = v[n];
            if (r.isMounted()) {
                var i = r._pendingCallbacks;
                if (r._pendingCallbacks = null, r.performUpdateIfNecessary(e.reconcileTransaction), i)
                    for (var o = 0; o < i.length; o++) e.callbackQueue.enqueue(i[o], r)
            }
        }
    }

    function c(e, t) {
        return t && "function" != typeof t && invariant/*_*/(0, "enqueueUpdate(...): You called `setProps`, `replaceProps`, `setState`, `replaceState`, or `forceUpdate` with a callback that isn't callable."), o(), warning/*y*/(null == ReactCurrentOwner/*f*/.current, "enqueueUpdate(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate."), R.isBatchingUpdates ? (v.push(e), void(t && (e._pendingCallbacks ? e._pendingCallbacks.push(t) : e._pendingCallbacks = [t]))) : void R.batchedUpdates(c, e, t)
    }

    function p(e, t) {
        R.isBatchingUpdates || invariant/*_*/(0, "ReactUpdates.asap: Can't enqueue an asap callback in a context whereupdates are not being batched."), S.enqueue(e, t), b = !0
    }
    var CallbackQueue/*d*/ = t("CallbackQueue"),
        PooledClass/*h*/ = t("PooledClass"),
        ReactCurrentOwner/*f*/ = t("ReactCurrentOwner"),
        ReactPerf/*m*/ = t("ReactPerf"),
        Transaction/*g*/ = t("Transaction"),
        invariant/*_*/ = t("invariant"),
        warning/*y*/ = t("warning"),
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
        perform: function(e, t, n) {
            return Transaction/*g*/.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, e, t, n)
        }
    }), PooledClass/*h*/.addPoolingTo(a);
    var D = ReactPerf/*m*/.measure("ReactUpdates", "flushBatchedUpdates", function() {
            for (; v.length || b;) {
                if (v.length) {
                    var e = a.getPooled();
                    e.perform(u, null, e), a.release(e)
                }
                if (b) {
                    b = !1;
                    var t = S;
                    S = CallbackQueue/*d*/.getPooled(), t.notifyAll(), CallbackQueue/*d*/.release(t)
                }
            }
        }),
        T = {
            injectReconcileTransaction: function(e) {
                e || invariant/*_*/(0, "ReactUpdates: must provide a reconcile transaction class"), x.ReactReconcileTransaction = e
            },
            injectBatchingStrategy: function(e) {
                e || invariant/*_*/(0, "ReactUpdates: must provide a batching strategy"), "function" != typeof e.batchedUpdates && invariant/*_*/(0, "ReactUpdates: must provide a batchedUpdates() function"), "boolean" != typeof e.isBatchingUpdates && invariant/*_*/(0, "ReactUpdates: must provide an isBatchingUpdates boolean attribute"), R = e
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
    i.exports = x
});