__d("ReactChildren",["PooledClass","traverseAllChildren","warning"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        this.forEachFunction = e, this.forEachContext = t
    }

    function a(e, t, n, r) {
        var i = e;
        i.forEachFunction.call(i.forEachContext, t, r)
    }

    function s(e, t, n) {
        if (null == e) return e;
        var r = o.getPooled(t, n);
        traverseAllChildren/*f*/(e, a, r), o.release(r)
    }

    function l(e, t, n) {
        this.mapResult = e, this.mapFunction = t, this.mapContext = n
    }

    function u(e, t, n, r) {
        var i = e,
            o = i.mapResult,
            a = !o.hasOwnProperty(n);
        if (warning/*m*/(a, "ReactChildren.map(...): Encountered two children with the same key, `%s`. Child keys must be unique; when two children share a key, only the first child will be used.", n), a) {
            var s = i.mapFunction.call(i.mapContext, t, r);
            o[n] = s
        }
    }

    function c(e, t, n) {
        if (null == e) return e;
        var r = {},
            i = l.getPooled(r, t, n);
        return traverseAllChildren/*f*/(e, u, i), l.release(i), r
    }

    function p() {
        return null
    }

    function d(e) {
        return traverseAllChildren/*f*/(e, p, null)
    }
    var PooledClass/*h*/ = t("PooledClass"),
        traverseAllChildren/*f*/ = t("traverseAllChildren"),
        warning/*m*/ = t("warning"),
        g = PooledClass/*h*/.twoArgumentPooler,
        _ = PooledClass/*h*/.threeArgumentPooler;
    PooledClass/*h*/.addPoolingTo(o, g), PooledClass/*h*/.addPoolingTo(l, _);
    var y = {
        forEach: s,
        map: c,
        count: d
    };
    i.exports = y
});