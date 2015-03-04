__d("UnicodeUtils",["ES6StringUtils"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        return global/*e*/ >= h && f >= global/*e*/
    }

    function a(global/*e*/) {
        return m.test(global/*e*/)
    }

    function s(global/*e*/, require/*t*/) {
        return 1 + o(global/*e*/.charCodeAt(require/*t*/))
    }

    function l(global/*e*/) {
        if (!a(global/*e*/)) return global/*e*/.length;
        for (var require/*t*/ = 0, requireDynamic/*n*/ = 0; requireDynamic/*n*/ < global/*e*/.length; requireDynamic/*n*/ += s(global/*e*/, requireDynamic/*n*/)) require/*t*/++;
        return require/*t*/
    }

    function u(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        if (require/*t*/ = require/*t*/ || 0, requireDynamic/*n*/ = void 0 === requireDynamic/*n*/ ? 1 / 0 : requireDynamic/*n*/ || 0, !a(global/*e*/)) return global/*e*/.substr(require/*t*/, requireDynamic/*n*/);
        var requireLazy/*r*/ = global/*e*/.length;
        if (0 >= requireLazy/*r*/ || require/*t*/ > requireLazy/*r*/ || 0 >= requireDynamic/*n*/) return "";
        var module/*i*/ = 0;
        if (require/*t*/ > 0) {
            for (; require/*t*/ > 0 && requireLazy/*r*/ > module/*i*/; require/*t*/--) module/*i*/ += s(global/*e*/, module/*i*/);
            if (module/*i*/ >= requireLazy/*r*/) return ""
        } else if (0 > require/*t*/) {
            for (module/*i*/ = requireLazy/*r*/; 0 > require/*t*/ && module/*i*/ > 0; require/*t*/++) module/*i*/ -= s(global/*e*/, module/*i*/ - 1);
            0 > module/*i*/ && (module/*i*/ = 0)
        }
        var o = requireLazy/*r*/;
        if (requireLazy/*r*/ > requireDynamic/*n*/)
            for (o = module/*i*/; requireDynamic/*n*/ > 0 && requireLazy/*r*/ > o; requireDynamic/*n*/--) o += s(global/*e*/, o);
        return global/*e*/.substring(module/*i*/, o)
    }

    function c(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        require/*t*/ = require/*t*/ || 0, requireDynamic/*n*/ = void 0 === requireDynamic/*n*/ ? 1 / 0 : requireDynamic/*n*/ || 0, 0 > require/*t*/ && (require/*t*/ = 0), 0 > requireDynamic/*n*/ && (requireDynamic/*n*/ = 0);
        var requireLazy/*r*/ = Math.abs(requireDynamic/*n*/ - require/*t*/);
        return require/*t*/ = requireDynamic/*n*/ > require/*t*/ ? require/*t*/ : requireDynamic/*n*/, u(global/*e*/, require/*t*/, requireLazy/*r*/)
    }

    function p(global/*e*/) {
        for (var require/*t*/ = [], requireDynamic/*n*/ = 0; requireDynamic/*n*/ < global/*e*/.length; requireDynamic/*n*/ += s(global/*e*/, requireDynamic/*n*/)) {
            var requireLazy/*r*/ = ES6StringUtils/*d*/.codePointAt.call(global/*e*/, requireDynamic/*n*/);
            require/*t*/.push(requireLazy/*r*/)
        }
        return require/*t*/
    }
    var ES6StringUtils/*d*/ = require/*t*/("ES6StringUtils"),
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