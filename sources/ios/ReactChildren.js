__d("ReactChildren",["PooledClass","traverseAllChildren","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        this.forEachFunction = global/*e*/, this.forEachContext = require/*t*/
    }

    function a(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
        var module/*i*/ = global/*e*/;
        module/*i*/.forEachFunction.call(module/*i*/.forEachContext, require/*t*/, requireLazy/*r*/)
    }

    function s(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        if (null == global/*e*/) return global/*e*/;
        var requireLazy/*r*/ = o.getPooled(require/*t*/, requireDynamic/*n*/);
        traverseAllChildren/*f*/(global/*e*/, a, requireLazy/*r*/), o.release(requireLazy/*r*/)
    }

    function l(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        this.mapResult = global/*e*/, this.mapFunction = require/*t*/, this.mapContext = requireDynamic/*n*/
    }

    function u(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
        var module/*i*/ = global/*e*/,
            o = module/*i*/.mapResult,
            a = !o.hasOwnProperty(requireDynamic/*n*/);
        if (warning/*m*/(a, "ReactChildren.map(...): Encountered two children with the same key, `%s`. Child keys must be unique; when two children share a key, only the first child will be used.", requireDynamic/*n*/), a) {
            var s = module/*i*/.mapFunction.call(module/*i*/.mapContext, require/*t*/, requireLazy/*r*/);
            o[requireDynamic/*n*/] = s
        }
    }

    function c(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        if (null == global/*e*/) return global/*e*/;
        var requireLazy/*r*/ = {},
            module/*i*/ = l.getPooled(requireLazy/*r*/, require/*t*/, requireDynamic/*n*/);
        return traverseAllChildren/*f*/(global/*e*/, u, module/*i*/), l.release(module/*i*/), requireLazy/*r*/
    }

    function p() {
        return null
    }

    function d(global/*e*/) {
        return traverseAllChildren/*f*/(global/*e*/, p, null)
    }
    var PooledClass/*h*/ = require/*t*/("PooledClass"),
        traverseAllChildren/*f*/ = require/*t*/("traverseAllChildren"),
        warning/*m*/ = require/*t*/("warning"),
        g = PooledClass/*h*/.twoArgumentPooler,
        _ = PooledClass/*h*/.threeArgumentPooler;
    PooledClass/*h*/.addPoolingTo(o, g), PooledClass/*h*/.addPoolingTo(l, _);
    var y = {
        forEach: s,
        map: c,
        count: d
    };
    module/*i*/.exports = y
});