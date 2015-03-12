__d("CallbackQueue",["PooledClass","invariant"],function (e, t, n, r, i) {
    "use strict";

    function o() {
        this._callbacks = null, this._contexts = null
    }
    var PooledClass/*a*/ = t("PooledClass"),
        invariant/*s*/ = t("invariant");
    Object.assign(o.prototype, {
        enqueue: function(e, t) {
            this._callbacks = this._callbacks || [], this._contexts = this._contexts || [], this._callbacks.push(e), this._contexts.push(t)
        },
        notifyAll: function() {
            var e = this._callbacks,
                t = this._contexts;
            if (e) {
                e.length !== t.length && invariant/*s*/(0, "Mismatched list of contexts in callback queue"), this._callbacks = null, this._contexts = null;
                for (var n = 0, r = e.length; r > n; n++) e[n].call(t[n]);
                e.length = 0, t.length = 0
            }
        },
        reset: function() {
            this._callbacks = null, this._contexts = null
        },
        destructor: function() {
            this.reset()
        }
    }), PooledClass/*a*/.addPoolingTo(o), i.exports = o
});