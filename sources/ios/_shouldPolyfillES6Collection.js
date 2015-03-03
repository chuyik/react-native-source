__d("_shouldPolyfillES6Collection",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(require/*t*/) {
        var requireDynamic/*n*/ = global/*e*/[require/*t*/];
        if (null == requireDynamic/*n*/) return !0;
        var requireLazy/*r*/ = requireDynamic/*n*/.prototype;
        return null == requireDynamic/*n*/ || "function" != typeof requireDynamic/*n*/ || "function" != typeof requireLazy/*r*/.clear || 0 !== (new requireDynamic/*n*/).size || "function" != typeof requireLazy/*r*/.keys || "function" != typeof requireLazy/*r*/.forEach || s(requireDynamic/*n*/) || !a(requireDynamic/*n*/)
    }

    function a(global/*e*/) {
        function require/*t*/() {
            "use strict";
            null !== global/*e*/ && global/*e*/.apply(this, exports/*arguments*/)
        }
        for (var requireDynamic/*n*/ in global/*e*/) global/*e*/.hasOwnProperty(requireDynamic/*n*/) && (require/*t*/[requireDynamic/*n*/] = global/*e*/[requireDynamic/*n*/]);
        var requireLazy/*r*/ = null === global/*e*/ ? null : global/*e*/.prototype;
        require/*t*/.prototype = Object.create(requireLazy/*r*/), require/*t*/.prototype.constructor = require/*t*/, require/*t*/.__superConstructor__ = global/*e*/;
        try {
            var module/*i*/ = new require/*t*/([]);
            return module/*i*/.size, module/*i*/ instanceof global/*e*/
        } catch (o) {
            return !1
        }
    }

    function s(global/*e*/) {
        try {
            global/*e*/()
        } catch (require/*t*/) {
            return !1
        }
        return !0
    }
    module/*i*/.exports = o
});