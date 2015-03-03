__d("DliteRouter",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = global/*e*/.getSortKey(),
            module/*i*/ = requireDynamic/*n*/ - require/*t*/;
        if (0 === module/*i*/) return require/*t*/;
        var a = require/*t*/ + module/*i*/ / 2 | 0;
        return s(requireLazy/*r*/, u[a].getSortKey()) <= 0 ? o(global/*e*/, require/*t*/, a) : o(global/*e*/, a + 1, requireDynamic/*n*/)
    }

    function a(global/*e*/) {
        for (var require/*t*/ = [], requireDynamic/*n*/ = 0, requireLazy/*r*/ = 0, module/*i*/ = 0; requireDynamic/*n*/ < global/*e*/.length; requireDynamic/*n*/++) switch (global/*e*/.charAt(requireDynamic/*n*/)) {
            case "/":
                module/*i*/ || (requireDynamic/*n*/ - requireLazy/*r*/ > 0 && require/*t*/.push(global/*e*/.slice(requireLazy/*r*/, requireDynamic/*n*/)), "?" === global/*e*/.charAt(requireDynamic/*n*/ + 1) && requireDynamic/*n*/++, requireLazy/*r*/ = requireDynamic/*n*/ + 1);
                break;
            case "(":
                module/*i*/++ || (requireDynamic/*n*/ - requireLazy/*r*/ > 0 && require/*t*/.push(global/*e*/.slice(requireLazy/*r*/, requireDynamic/*n*/)), requireLazy/*r*/ = requireDynamic/*n*/);
                break;
            case ")":
                --module/*i*/ || ("?" === global/*e*/.charAt(requireDynamic/*n*/ + 1) && requireDynamic/*n*/++, require/*t*/.push(global/*e*/.slice(requireLazy/*r*/, requireDynamic/*n*/ + 1)), requireLazy/*r*/ = requireDynamic/*n*/ + 1)
        }
        return require/*t*/
    }

    function s(global/*e*/, require/*t*/) {
        global/*e*/ = a(global/*e*/), require/*t*/ = a(require/*t*/);
        for (var requireDynamic/*n*/ = 0; requireDynamic/*n*/ < Math.min(global/*e*/.length, require/*t*/.length); requireDynamic/*n*/++) {
            var requireLazy/*r*/ = global/*e*/[requireDynamic/*n*/],
                module/*i*/ = require/*t*/[requireDynamic/*n*/],
                o = l(requireLazy/*r*/) - l(module/*i*/);
            if (o) return o;
            var s = requireLazy/*r*/.toLowerCase(),
                u = module/*i*/.toLowerCase();
            if (s !== u) return u > s ? -1 : 1;
            if (requireLazy/*r*/ !== module/*i*/) return module/*i*/ > requireLazy/*r*/ ? -1 : 1
        }
        return global/*e*/.length - require/*t*/.length
    }

    function l(global/*e*/) {
        return "<<vanity>>" == global/*e*/ ? 3 : (global/*e*/ = global/*e*/.replace(/\\\./, "x"), /[.+*?\[\](){}=!|:]/.test(global/*e*/) ? -1 !== global/*e*/.indexOf("\\d") ? 1 : 2 : 0)
    }
    var u = [],
        c = {
            addRoute: function(global/*e*/) {
                var require/*t*/ = o(global/*e*/, 0, u.length);
                u[require/*t*/] !== global/*e*/ && u.splice(require/*t*/, 0, global/*e*/)
            },
            __getRoutes: function() {
                return u
            },
            getRoute: function(global/*e*/) {
                for (var require/*t*/ = 0; require/*t*/ < u.length; require/*t*/++) {
                    var requireDynamic/*n*/ = u[require/*t*/],
                        requireLazy/*r*/ = requireDynamic/*n*/.parse(global/*e*/);
                    if (null !== requireLazy/*r*/) return new requireDynamic/*n*/(global/*e*/, requireLazy/*r*/)
                }
                return null
            },
            orderExpressions: s
        };
    module/*i*/.exports = c
});