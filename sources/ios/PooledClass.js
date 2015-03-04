__d("PooledClass",["invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var invariant/*o*/ = require/*t*/("invariant"),
        a = function(global/*e*/) {
            var require/*t*/ = this;
            if (require/*t*/.instancePool.length) {
                var requireDynamic/*n*/ = require/*t*/.instancePool.pop();
                return require/*t*/.call(requireDynamic/*n*/, global/*e*/), requireDynamic/*n*/
            }
            return new require/*t*/(global/*e*/)
        },
        s = function(global/*e*/, require/*t*/) {
            var requireDynamic/*n*/ = this;
            if (requireDynamic/*n*/.instancePool.length) {
                var requireLazy/*r*/ = requireDynamic/*n*/.instancePool.pop();
                return requireDynamic/*n*/.call(requireLazy/*r*/, global/*e*/, require/*t*/), requireLazy/*r*/
            }
            return new requireDynamic/*n*/(global/*e*/, require/*t*/)
        },
        l = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
            var requireLazy/*r*/ = this;
            if (requireLazy/*r*/.instancePool.length) {
                var module/*i*/ = requireLazy/*r*/.instancePool.pop();
                return requireLazy/*r*/.call(module/*i*/, global/*e*/, require/*t*/, requireDynamic/*n*/), module/*i*/
            }
            return new requireLazy/*r*/(global/*e*/, require/*t*/, requireDynamic/*n*/)
        },
        u = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
            var invariant/*o*/ = this;
            if (invariant/*o*/.instancePool.length) {
                var a = invariant/*o*/.instancePool.pop();
                return invariant/*o*/.call(a, global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/), a
            }
            return new invariant/*o*/(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/)
        },
        c = function(global/*e*/) {
            var require/*t*/ = this;
            global/*e*/ instanceof require/*t*/ || invariant/*o*/(0, "Trying to release an instance into a pool of a different type."), global/*e*/.destructor && global/*e*/.destructor(), require/*t*/.instancePool.length < require/*t*/.poolSize && require/*t*/.instancePool.push(global/*e*/)
        },
        p = 10,
        d = a,
        h = function(global/*e*/, require/*t*/) {
            var requireDynamic/*n*/ = global/*e*/;
            return requireDynamic/*n*/.instancePool = [], requireDynamic/*n*/.getPooled = require/*t*/ || d, requireDynamic/*n*/.poolSize || (requireDynamic/*n*/.poolSize = p), requireDynamic/*n*/.release = c, requireDynamic/*n*/
        },
        f = {
            addPoolingTo: h,
            oneArgumentPooler: a,
            twoArgumentPooler: s,
            threeArgumentPooler: l,
            fiveArgumentPooler: u
        };
    module/*i*/.exports = f
});