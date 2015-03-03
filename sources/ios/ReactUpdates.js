__d("ReactUpdates",["CallbackQueue","PooledClass","ReactCurrentOwner","ReactPerf","Transaction","invariant","warning"],function (global/*e*/, require/*ReactCurrentOwner/*invariant/*t*/*/*/, requireDynamic/*ReactPerf/*warning/*n*/*/*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        x.ReactReconcileTransaction && R || _(0, "ReactUpdates: must inject a reconcile transaction class and batching strategy")
    }

    function a() {
        this.reinitializeTransaction(), exports/*this.dirtyComponentsLength*/ = null, CallbackQueue/*this.callbackQueue*/ = d.getPooled(), PooledClass/*this.reconcileTransaction*/ = x.ReactReconcileTransaction.getPooled()
    }

    function s(global/*e*/, require/*ReactCurrentOwner/*invariant/*t*/*/*/, requireDynamic/*ReactPerf/*warning/*n*/*/*/) {
        o(), Transaction/*R.batchedUpdates*/(global/*e*/, require/*ReactCurrentOwner/*invariant/*t*/*/*/, requireDynamic/*ReactPerf/*warning/*n*/*/*/)
    }

    function l(global/*e*/, require/*ReactCurrentOwner/*invariant/*t*/*/*/) {
        return global/*e*/._mountDepth - require/*ReactCurrentOwner/*invariant/*t*/*/*/._mountDepth
    }

    function u(global/*e*/) {
        var require/*ReactCurrentOwner/*invariant/*t*/*/*/ = global/*e*/.dirtyComponentsLength;
        require/*ReactCurrentOwner/*invariant/*t*/*/*/ !== v.length && _(0, "Expected flush transaction's stored dirty-components length (%s) to match dirty-components array length (%s).", require/*ReactCurrentOwner/*invariant/*t*/*/*/, v.length), v.sort(l);
        for (var requireDynamic/*ReactPerf/*warning/*n*/*/*/ = 0; require/*ReactCurrentOwner/*invariant/*t*/*/*/ > requireDynamic/*ReactPerf/*warning/*n*/*/*/; requireDynamic/*ReactPerf/*warning/*n*/*/*/++) {
            var requireLazy/*r*/ = v[requireDynamic/*ReactPerf/*warning/*n*/*/*/];
            if (requireLazy/*r*/.isMounted()) {
                var module/*i*/ = requireLazy/*r*/._pendingCallbacks;
                if (requireLazy/*r*/._pendingCallbacks = null, requireLazy/*r*/.performUpdateIfNecessary(global/*e*/.reconcileTransaction), module/*i*/)
                    for (var o = 0; o < module/*i*/.length; o++) global/*e*/.callbackQueue.enqueue(module/*i*/[o], requireLazy/*r*/)
            }
        }
    }

    function c(global/*e*/, require/*ReactCurrentOwner/*invariant/*t*/*/*/) {
        return require/*ReactCurrentOwner/*invariant/*t*/*/*/ && "function" != typeof require/*ReactCurrentOwner/*invariant/*t*/*/*/ && _(0, "enqueueUpdate(...): You called `setProps`, `replaceProps`, `setState`, `replaceState`, or `forceUpdate` with a callback that isn'require/*ReactCurrentOwner/*invariant/*t*/*/*/ callable."), o(), y(null == f.current, "enqueueUpdate(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate."), R.isBatchingUpdates ? (v.push(global/*e*/), void(require/*ReactCurrentOwner/*invariant/*t*/*/*/ && (global/*e*/._pendingCallbacks ? global/*e*/._pendingCallbacks.push(require/*ReactCurrentOwner/*invariant/*t*/*/*/) : global/*e*/._pendingCallbacks = [require/*ReactCurrentOwner/*invariant/*t*/*/*/]))) : void Transaction/*R.batchedUpdates*/(c, global/*e*/, require/*ReactCurrentOwner/*invariant/*t*/*/*/)
    }

    function p(global/*e*/, require/*ReactCurrentOwner/*invariant/*t*/*/*/) {
        R.isBatchingUpdates || _(0, "ReactUpdates.asap: Can'require/*ReactCurrentOwner/*invariant/*t*/*/*/ enqueue an asap callback in a context whereupdates are not being batched."), S.enqueue(global/*e*/, require/*ReactCurrentOwner/*invariant/*t*/*/*/), b = !0
    }
    var d = require/*ReactCurrentOwner/*invariant/*t*/*/*/("CallbackQueue"),
        h = require/*ReactCurrentOwner/*invariant/*t*/*/*/("PooledClass"),
        f = require/*ReactCurrentOwner/*invariant/*t*/*/*/("ReactCurrentOwner"),
        m = require/*ReactCurrentOwner/*invariant/*t*/*/*/("ReactPerf"),
        g = require/*ReactCurrentOwner/*invariant/*t*/*/*/("Transaction"),
        _ = require/*ReactCurrentOwner/*invariant/*t*/*/*/("invariant"),
        y = require/*ReactCurrentOwner/*invariant/*t*/*/*/("warning"),
        v = [],
        S = d.getPooled(),
        b = !1,
        R = null,
        w = {
            initialize: function() {
                exports/*this.dirtyComponentsLength*/ = v.length
            },
            close: function() {
                exports/*this.dirtyComponentsLength*/ !== v.length ? (v.splice(0, exports/*this.dirtyComponentsLength*/), D()) : v.length = 0
            }
        },
        C = {
            initialize: function() {
                CallbackQueue/*this.callbackQueue*/.reset()
            },
            close: function() {
                CallbackQueue/*this.callbackQueue*/.notifyAll()
            }
        },
        E = [w, C];
    Object.assign(a.prototype, g.Mixin, {
        getTransactionWrappers: function() {
            return E
        },
        destructor: function() {
            exports/*this.dirtyComponentsLength*/ = null, d.release(CallbackQueue/*this.callbackQueue*/), CallbackQueue/*this.callbackQueue*/ = null, x.ReactReconcileTransaction.release(PooledClass/*this.reconcileTransaction*/), PooledClass/*this.reconcileTransaction*/ = null
        },
        perform: function(global/*e*/, require/*ReactCurrentOwner/*invariant/*t*/*/*/, requireDynamic/*ReactPerf/*warning/*n*/*/*/) {
            return g.Mixin.perform.call(this, PooledClass/*this.reconcileTransaction*/.perform, PooledClass/*this.reconcileTransaction*/, global/*e*/, require/*ReactCurrentOwner/*invariant/*t*/*/*/, requireDynamic/*ReactPerf/*warning/*n*/*/*/)
        }
    }), h.addPoolingTo(a);
    var D = m.measure("ReactUpdates", "flushBatchedUpdates", function() {
            for (; v.length || b;) {
                if (v.length) {
                    var global/*e*/ = a.getPooled();
                    global/*e*/.perform(u, null, global/*e*/), a.release(global/*e*/)
                }
                if (b) {
                    b = !1;
                    var require/*ReactCurrentOwner/*invariant/*t*/*/*/ = S;
                    S = d.getPooled(), require/*ReactCurrentOwner/*invariant/*t*/*/*/.notifyAll(), d.release(require/*ReactCurrentOwner/*invariant/*t*/*/*/)
                }
            }
        }),
        T = {
            injectReconcileTransaction: function(global/*e*/) {
                global/*e*/ || _(0, "ReactUpdates: must provide a reconcile transaction class"), x.ReactReconcileTransaction = global/*e*/
            },
            injectBatchingStrategy: function(global/*e*/) {
                global/*e*/ || _(0, "ReactUpdates: must provide a batching strategy"), "function" != typeof global/*e*/.batchedUpdates && _(0, "ReactUpdates: must provide a batchedUpdates() function"), "boolean" != typeof global/*e*/.isBatchingUpdates && _(0, "ReactUpdates: must provide an isBatchingUpdates boolean attribute"), R = global/*e*/
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