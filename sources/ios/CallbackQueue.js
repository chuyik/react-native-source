__d("CallbackQueue",["PooledClass","invariant"],function (global/*e*/, require/*invariant/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        this._callbacks = null, exports/*this._contexts*/ = null
    }
    var a = require/*invariant/*t*/*/("PooledClass"),
        PooledClass/*s*/ = require/*invariant/*t*/*/("invariant");
    Object.assign(o.prototype, {
        enqueue: function(global/*e*/, require/*invariant/*t*/*/) {
            this._callbacks = this._callbacks || [], exports/*this._contexts*/ = exports/*this._contexts*/ || [], this._callbacks.push(global/*e*/), exports/*this._contexts*/.push(require/*invariant/*t*/*/)
        },
        notifyAll: function() {
            var global/*e*/ = this._callbacks,
                require/*invariant/*t*/*/ = exports/*this._contexts*/;
            if (global/*e*/) {
                global/*e*/.length !== require/*invariant/*t*/*/.length && PooledClass/*s*/(0, "Mismatched list of contexts in callback queue"), this._callbacks = null, exports/*this._contexts*/ = null;
                for (var requireDynamic/*n*/ = 0, requireLazy/*r*/ = global/*e*/.length; requireLazy/*r*/ > requireDynamic/*n*/; requireDynamic/*n*/++) global/*e*/[requireDynamic/*n*/].call(require/*invariant/*t*/*/[requireDynamic/*n*/]);
                global/*e*/.length = 0, require/*invariant/*t*/*/.length = 0
            }
        },
        reset: function() {
            this._callbacks = null, exports/*this._contexts*/ = null
        },
        destructor: function() {
            this.reset()
        }
    }), a.addPoolingTo(o), module/*i*/.exports = o
});