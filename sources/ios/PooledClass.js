__d("PooledClass",["invariant"],function (global/*invariant/*e*/*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("invariant"),
        exports/*a*/ = function(global/*invariant/*e*/*/) {
            var require/*t*/ = this;
            if (require/*t*/.instancePool.length) {
                var requireDynamic/*n*/ = require/*t*/.instancePool.pop();
                return require/*t*/.call(requireDynamic/*n*/, global/*invariant/*e*/*/), requireDynamic/*n*/
            }
            return new require/*t*/(global/*invariant/*e*/*/)
        },
        s = function(global/*invariant/*e*/*/, require/*t*/) {
            var requireDynamic/*n*/ = this;
            if (requireDynamic/*n*/.instancePool.length) {
                var requireLazy/*r*/ = requireDynamic/*n*/.instancePool.pop();
                return requireDynamic/*n*/.call(requireLazy/*r*/, global/*invariant/*e*/*/, require/*t*/), requireLazy/*r*/
            }
            return new requireDynamic/*n*/(global/*invariant/*e*/*/, require/*t*/)
        },
        l = function(global/*invariant/*e*/*/, require/*t*/, requireDynamic/*n*/) {
            var requireLazy/*r*/ = this;
            if (requireLazy/*r*/.instancePool.length) {
                var module/*i*/ = requireLazy/*r*/.instancePool.pop();
                return requireLazy/*r*/.call(module/*i*/, global/*invariant/*e*/*/, require/*t*/, requireDynamic/*n*/), module/*i*/
            }
            return new requireLazy/*r*/(global/*invariant/*e*/*/, require/*t*/, requireDynamic/*n*/)
        },
        u = function(global/*invariant/*e*/*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
            var o = this;
            if (o.instancePool.length) {
                var exports/*a*/ = o.instancePool.pop();
                return o.call(exports/*a*/, global/*invariant/*e*/*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/), exports/*a*/
            }
            return new o(global/*invariant/*e*/*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/)
        },
        c = function(global/*invariant/*e*/*/) {
            var require/*t*/ = this;
            global/*invariant/*e*/*/ instanceof require/*t*/ || o(0, "Trying to release an instance into exports/*a*/ pool of exports/*a*/ different type."), global/*invariant/*e*/*/.destructor && global/*invariant/*e*/*/.destructor(), require/*t*/.instancePool.length < require/*t*/.poolSize && require/*t*/.instancePool.push(global/*invariant/*e*/*/)
        },
        p = 10,
        d = exports/*a*/,
        h = function(global/*invariant/*e*/*/, require/*t*/) {
            var requireDynamic/*n*/ = global/*invariant/*e*/*/;
            return requireDynamic/*n*/.instancePool = [], requireDynamic/*n*/.getPooled = require/*t*/ || d, requireDynamic/*n*/.poolSize || (requireDynamic/*n*/.poolSize = p), requireDynamic/*n*/.release = c, requireDynamic/*n*/
        },
        f = {
            addPoolingTo: h,
            oneArgumentPooler: exports/*a*/,
            twoArgumentPooler: s,
            threeArgumentPooler: l,
            fiveArgumentPooler: u
        };
    module/*i*/.exports = f
});