__d("PooledClass",["invariant"],function (e, t, n, r, i) {
    "use strict";
    var invariant/*o*/ = t("invariant"),
        a = function(e) {
            var t = this;
            if (t.instancePool.length) {
                var n = t.instancePool.pop();
                return t.call(n, e), n
            }
            return new t(e)
        },
        s = function(e, t) {
            var n = this;
            if (n.instancePool.length) {
                var r = n.instancePool.pop();
                return n.call(r, e, t), r
            }
            return new n(e, t)
        },
        l = function(e, t, n) {
            var r = this;
            if (r.instancePool.length) {
                var i = r.instancePool.pop();
                return r.call(i, e, t, n), i
            }
            return new r(e, t, n)
        },
        u = function(e, t, n, r, i) {
            var invariant/*o*/ = this;
            if (invariant/*o*/.instancePool.length) {
                var a = invariant/*o*/.instancePool.pop();
                return invariant/*o*/.call(a, e, t, n, r, i), a
            }
            return new invariant/*o*/(e, t, n, r, i)
        },
        c = function(e) {
            var t = this;
            e instanceof t || invariant/*o*/(0, "Trying to release an instance into a pool of a different type."), e.destructor && e.destructor(), t.instancePool.length < t.poolSize && t.instancePool.push(e)
        },
        p = 10,
        d = a,
        h = function(e, t) {
            var n = e;
            return n.instancePool = [], n.getPooled = t || d, n.poolSize || (n.poolSize = p), n.release = c, n
        },
        f = {
            addPoolingTo: h,
            oneArgumentPooler: a,
            twoArgumentPooler: s,
            threeArgumentPooler: l,
            fiveArgumentPooler: u
        };
    i.exports = f
});