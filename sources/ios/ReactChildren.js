__d("ReactChildren",["PooledClass","traverseAllChildren","warning"],function (global/*e*/, require/*exports/*traverseAllChildren/*t*/*/*/, requireDynamic/*warning/*n*/*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*traverseAllChildren/*t*/*/*/) {
        this.forEachFunction = global/*e*/, PooledClass/*this.forEachContext*/ = require/*exports/*traverseAllChildren/*t*/*/*/
    }

    function a(global/*e*/, require/*exports/*traverseAllChildren/*t*/*/*/, requireDynamic/*warning/*n*/*/, requireLazy/*r*/) {
        var module/*i*/ = global/*e*/;
        module/*i*/.forEachFunction.call(module/*i*/.forEachContext, require/*exports/*traverseAllChildren/*t*/*/*/, requireLazy/*r*/)
    }

    function s(global/*e*/, require/*exports/*traverseAllChildren/*t*/*/*/, requireDynamic/*warning/*n*/*/) {
        if (null == global/*e*/) return global/*e*/;
        var requireLazy/*r*/ = o.getPooled(require/*exports/*traverseAllChildren/*t*/*/*/, requireDynamic/*warning/*n*/*/);
        f(global/*e*/, a, requireLazy/*r*/), o.release(requireLazy/*r*/)
    }

    function l(global/*e*/, require/*exports/*traverseAllChildren/*t*/*/*/, requireDynamic/*warning/*n*/*/) {
        this.mapResult = global/*e*/, this.mapFunction = require/*exports/*traverseAllChildren/*t*/*/*/, this.mapContext = requireDynamic/*warning/*n*/*/
    }

    function u(global/*e*/, require/*exports/*traverseAllChildren/*t*/*/*/, requireDynamic/*warning/*n*/*/, requireLazy/*r*/) {
        var module/*i*/ = global/*e*/,
            o = module/*i*/.mapResult,
            a = !o.hasOwnProperty(requireDynamic/*warning/*n*/*/);
        if (m(a, "ReactChildren.map(...): Encountered two children with the same key, `%s`. Child keys must be unique; when two children share a key, only the first child will be used.", requireDynamic/*warning/*n*/*/), a) {
            var s = module/*i*/.mapFunction.call(module/*i*/.mapContext, require/*exports/*traverseAllChildren/*t*/*/*/, requireLazy/*r*/);
            o[requireDynamic/*warning/*n*/*/] = s
        }
    }

    function c(global/*e*/, require/*exports/*traverseAllChildren/*t*/*/*/, requireDynamic/*warning/*n*/*/) {
        if (null == global/*e*/) return global/*e*/;
        var requireLazy/*r*/ = {},
            module/*i*/ = l.getPooled(requireLazy/*r*/, require/*exports/*traverseAllChildren/*t*/*/*/, requireDynamic/*warning/*n*/*/);
        return f(global/*e*/, u, module/*i*/), l.release(module/*i*/), requireLazy/*r*/
    }

    function p() {
        return null
    }

    function d(global/*e*/) {
        return f(global/*e*/, p, null)
    }
    var h = require/*exports/*traverseAllChildren/*t*/*/*/("PooledClass"),
        f = require/*exports/*traverseAllChildren/*t*/*/*/("traverseAllChildren"),
        m = require/*exports/*traverseAllChildren/*t*/*/*/("warning"),
        g = h.twoArgumentPooler,
        _ = h.threeArgumentPooler;
    h.addPoolingTo(o, g), h.addPoolingTo(l, _);
    var y = {
        forEach: s,
        map: c,
        count: d
    };
    module/*i*/.exports = y
});