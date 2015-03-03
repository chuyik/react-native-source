__d("UnicodeUtils",["ES6StringUtils"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*ES6StringUtils/*n*/*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        return global/*e*/ >= h && f >= global/*e*/
    }

    function a(global/*e*/) {
        return m.test(global/*e*/)
    }

    function s(global/*e*/, require/*exports/*t*/*/) {
        return 1 + o(global/*e*/.charCodeAt(require/*exports/*t*/*/))
    }

    function l(global/*e*/) {
        if (!a(global/*e*/)) return global/*e*/.length;
        for (var require/*exports/*t*/*/ = 0, requireDynamic/*ES6StringUtils/*n*/*/ = 0; requireDynamic/*ES6StringUtils/*n*/*/ < global/*e*/.length; requireDynamic/*ES6StringUtils/*n*/*/ += s(global/*e*/, requireDynamic/*ES6StringUtils/*n*/*/)) require/*exports/*t*/*/++;
        return require/*exports/*t*/*/
    }

    function u(global/*e*/, require/*exports/*t*/*/, requireDynamic/*ES6StringUtils/*n*/*/) {
        if (require/*exports/*t*/*/ = require/*exports/*t*/*/ || 0, requireDynamic/*ES6StringUtils/*n*/*/ = void 0 === requireDynamic/*ES6StringUtils/*n*/*/ ? 1 / 0 : requireDynamic/*ES6StringUtils/*n*/*/ || 0, !a(global/*e*/)) return global/*e*/.substr(require/*exports/*t*/*/, requireDynamic/*ES6StringUtils/*n*/*/);
        var requireLazy/*r*/ = global/*e*/.length;
        if (0 >= requireLazy/*r*/ || require/*exports/*t*/*/ > requireLazy/*r*/ || 0 >= requireDynamic/*ES6StringUtils/*n*/*/) return "";
        var module/*i*/ = 0;
        if (require/*exports/*t*/*/ > 0) {
            for (; require/*exports/*t*/*/ > 0 && requireLazy/*r*/ > module/*i*/; require/*exports/*t*/*/--) module/*i*/ += s(global/*e*/, module/*i*/);
            if (module/*i*/ >= requireLazy/*r*/) return ""
        } else if (0 > require/*exports/*t*/*/) {
            for (module/*i*/ = requireLazy/*r*/; 0 > require/*exports/*t*/*/ && module/*i*/ > 0; require/*exports/*t*/*/++) module/*i*/ -= s(global/*e*/, module/*i*/ - 1);
            0 > module/*i*/ && (module/*i*/ = 0)
        }
        var o = requireLazy/*r*/;
        if (requireLazy/*r*/ > requireDynamic/*ES6StringUtils/*n*/*/)
            for (o = module/*i*/; requireDynamic/*ES6StringUtils/*n*/*/ > 0 && requireLazy/*r*/ > o; requireDynamic/*ES6StringUtils/*n*/*/--) o += s(global/*e*/, o);
        return global/*e*/.substring(module/*i*/, o)
    }

    function c(global/*e*/, require/*exports/*t*/*/, requireDynamic/*ES6StringUtils/*n*/*/) {
        require/*exports/*t*/*/ = require/*exports/*t*/*/ || 0, requireDynamic/*ES6StringUtils/*n*/*/ = void 0 === requireDynamic/*ES6StringUtils/*n*/*/ ? 1 / 0 : requireDynamic/*ES6StringUtils/*n*/*/ || 0, 0 > require/*exports/*t*/*/ && (require/*exports/*t*/*/ = 0), 0 > requireDynamic/*ES6StringUtils/*n*/*/ && (requireDynamic/*ES6StringUtils/*n*/*/ = 0);
        var requireLazy/*r*/ = Math.abs(requireDynamic/*ES6StringUtils/*n*/*/ - require/*exports/*t*/*/);
        return require/*exports/*t*/*/ = requireDynamic/*ES6StringUtils/*n*/*/ > require/*exports/*t*/*/ ? require/*exports/*t*/*/ : requireDynamic/*ES6StringUtils/*n*/*/, u(global/*e*/, require/*exports/*t*/*/, requireLazy/*r*/)
    }

    function p(global/*e*/) {
        for (var require/*exports/*t*/*/ = [], requireDynamic/*ES6StringUtils/*n*/*/ = 0; requireDynamic/*ES6StringUtils/*n*/*/ < global/*e*/.length; requireDynamic/*ES6StringUtils/*n*/*/ += s(global/*e*/, requireDynamic/*ES6StringUtils/*n*/*/)) {
            var requireLazy/*r*/ = d.codePointAt.call(global/*e*/, requireDynamic/*ES6StringUtils/*n*/*/);
            require/*exports/*t*/*/.push(requireLazy/*r*/)
        }
        return require/*exports/*t*/*/
    }
    var d = require/*exports/*t*/*/("ES6StringUtils"),
        h = 55296,
        f = 57343,
        m = /[\uD800-\uDFFF]/,
        g = {
            isCodeUnitInSurrogateRange: o,
            strlen: l,
            substr: u,
            substring: c,
            getCodePoints: p
        };
    module/*i*/.exports = g
});