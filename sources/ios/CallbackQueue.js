__d("CallbackQueue",["PooledClass","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        this._callbacks = null, this._contexts = null
    }
    var PooledClass/*a*/ = require/*t*/("PooledClass"),
        invariant/*s*/ = require/*t*/("invariant");
    Object.assign(o.prototype, {
        enqueue: function(global/*e*/, require/*t*/) {
            this._callbacks = this._callbacks || [], this._contexts = this._contexts || [], this._callbacks.push(global/*e*/), this._contexts.push(require/*t*/)
        },
        notifyAll: function() {
            var global/*e*/ = this._callbacks,
                require/*t*/ = this._contexts;
            if (global/*e*/) {
                global/*e*/.length !== require/*t*/.length && invariant/*s*/(0, "Mismatched list of contexts in callback queue"), this._callbacks = null, this._contexts = null;
                for (var requireDynamic/*n*/ = 0, requireLazy/*r*/ = global/*e*/.length; requireLazy/*r*/ > requireDynamic/*n*/; requireDynamic/*n*/++) global/*e*/[requireDynamic/*n*/].call(require/*t*/[requireDynamic/*n*/]);
                global/*e*/.length = 0, require/*t*/.length = 0
            }
        },
        reset: function() {
            this._callbacks = null, this._contexts = null
        },
        destructor: function() {
            this.reset()
        }
    }), PooledClass/*a*/.addPoolingTo(o), module/*i*/.exports = o
});