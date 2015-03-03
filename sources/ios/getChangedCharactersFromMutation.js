__d("getChangedCharactersFromMutation",[],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*exports/*t*/*/) {
        var requireDynamic/*n*/, requireLazy/*r*/ = Math.min(global/*e*/.length, require/*exports/*t*/*/.length),
            module/*i*/ = requireLazy/*r*/,
            o = requireLazy/*r*/;
        for (requireDynamic/*n*/ = 0; requireLazy/*r*/ > requireDynamic/*n*/; requireDynamic/*n*/++)
            if (global/*e*/.charAt(requireDynamic/*n*/) !== require/*exports/*t*/*/.charAt(requireDynamic/*n*/)) {
                module/*i*/ = requireDynamic/*n*/;
                break
            }
        for (requireDynamic/*n*/ = 0; requireLazy/*r*/ > requireDynamic/*n*/; requireDynamic/*n*/++)
            if (global/*e*/.charAt(global/*e*/.length - requireDynamic/*n*/ - 1) !== require/*exports/*t*/*/.charAt(require/*exports/*t*/*/.length - requireDynamic/*n*/ - 1)) {
                o = requireDynamic/*n*/;
                break
            }
        return {
            prefix: module/*i*/,
            suffix: o
        }
    }

    function a(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
        for (var requireLazy/*r*/ = 0; requireDynamic/*n*/ > requireLazy/*r*/; requireLazy/*r*/++) require/*exports/*t*/*/.charAt(global/*e*/.prefix - 1).match(/^\s?$/) ? global/*e*/.suffix-- : global/*e*/.prefix--
    }

    function s(global/*e*/, require/*exports/*t*/*/) {
        return global/*e*/.substr(require/*exports/*t*/*/.prefix, global/*e*/.length - require/*exports/*t*/*/.prefix - require/*exports/*t*/*/.suffix)
    }

    function l(global/*e*/) {
        var require/*exports/*t*/*/, requireDynamic/*n*/;
        if (3 === global/*e*/.length) require/*exports/*t*/*/ = global/*e*/[1], requireDynamic/*n*/ = global/*e*/[2];
        else {
            if (2 !== global/*e*/.length) return;
            require/*exports/*t*/*/ = global/*e*/[0], requireDynamic/*n*/ = global/*e*/[1]
        }
        if (require/*exports/*t*/*/.target === requireDynamic/*n*/.target) {
            var requireLazy/*r*/ = require/*exports/*t*/*/.oldValue,
                module/*i*/ = requireDynamic/*n*/.oldValue,
                l = requireDynamic/*n*/.target.data;
            if (l !== requireLazy/*r*/ && l.length > module/*i*/.length && requireLazy/*r*/.length > module/*i*/.length) {
                var u = o(requireLazy/*r*/, module/*i*/),
                    c = o(l, module/*i*/),
                    p = u.prefix < c.prefix ? u : c,
                    d = requireLazy/*r*/.length - p.prefix - p.suffix,
                    h = requireLazy/*r*/.length - module/*i*/.length;
                return a(p, requireLazy/*r*/, h - d), {
                    node: requireDynamic/*n*/.target,
                    offset: p.prefix,
                    oldText: s(requireLazy/*r*/, p),
                    newText: s(l, p)
                }
            }
        }
    }
    module/*i*/.exports = l
});