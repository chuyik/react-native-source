__d("subtractQuery",["GraphQL_EXPERIMENTAL"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = global/*e*/.getQuery(),
            requireLazy/*r*/ = require/*t*/.getQuery();
        if (!f(requireDynamic/*n*/, requireLazy/*r*/)) return global/*e*/;
        var module/*i*/ = requireDynamic/*n*/.isRefQueryDependency(),
            o = a(requireDynamic/*n*/, [requireLazy/*r*/], module/*i*/);
        return o === requireDynamic/*n*/ ? global/*e*/ : o ? !module/*i*/ && l(o) ? null : new GraphQL_EXPERIMENTAL/*g*/.QueryWithValues(o) : null
    }

    function a(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = global/*e*/.getOwnFields(),
            module/*i*/ = m(requireLazy/*r*/, function(global/*e*/) {
                return s(global/*e*/, require/*t*/, requireDynamic/*n*/)
            }),
            o = global/*e*/.getFragments(),
            l = m(o, function(global/*e*/) {
                return a(global/*e*/, require/*t*/, requireDynamic/*n*/)
            });
        return !requireDynamic/*n*/ && module/*i*/ && 1 === module/*i*/.length && "id" === module/*i*/[0].getFieldName() && (module/*i*/ = null), requireLazy/*r*/ === module/*i*/ && o === l ? global/*e*/ : module/*i*/ && 0 !== module/*i*/.length || l && 0 !== l.length ? global/*e*/.shallowClone(module/*i*/, l) : null
    }

    function s(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = global/*e*/.getFieldName();
        if (global/*e*/.hasOwnFields() || global/*e*/.getFragments().length) {
            var module/*i*/;
            if (require/*t*/.forEach(function(require/*t*/) {
                    u(require/*t*/, requireLazy/*r*/, function(require/*t*/) {
                        p(global/*e*/, require/*t*/) && (module/*i*/ = module/*i*/ || [], module/*i*/.push(require/*t*/))
                    })
                }), module/*i*/) return a(global/*e*/, module/*i*/, requireDynamic/*n*/)
        } else if (!global/*e*/.isRequisite() && "id" !== requireLazy/*r*/) {
            var o = require/*t*/.some(function(require/*t*/) {
                return c(require/*t*/, requireLazy/*r*/, function(require/*t*/) {
                    return p(global/*e*/, require/*t*/)
                })
            });
            if (o) return null
        }
        return global/*e*/
    }

    function l(global/*e*/) {
        var require/*t*/ = global/*e*/.getOwnFields(),
            requireDynamic/*n*/ = global/*e*/.getFragments();
        return require/*t*/.length || requireDynamic/*n*/.length ? require/*t*/.every(l) && requireDynamic/*n*/.every(l) : "id" === global/*e*/.getFieldName() || global/*e*/.isRequisite()
    }

    function u(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        c(global/*e*/, require/*t*/, function() {
            requireDynamic/*n*/.apply(this, arguments)
        })
    }

    function c(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        for (var requireLazy/*r*/, module/*i*/ = [global/*e*/]; requireLazy/*r*/ = module/*i*/.shift();) {
            if (requireLazy/*r*/.getOwnUnaliasedFields(require/*t*/).some(requireDynamic/*n*/)) return !0;
            _.apply(module/*i*/, requireLazy/*r*/.getFragments())
        }
        return !1
    }

    function p(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = global/*e*/.getCalls(),
            requireLazy/*r*/ = require/*t*/.getCalls(),
            module/*i*/ = requireDynamic/*n*/.length;
        if (module/*i*/ !== requireLazy/*r*/.length) return !1;
        if (module/*i*/)
            for (var o = global/*e*/.isConnection() ? d : h, a = 0; module/*i*/ > a; a++) {
                var s = requireDynamic/*n*/[a],
                    l = requireLazy/*r*/[a];
                if (s.getName() !== l.getName() || !o(s, l)) return !1
            }
        return !0
    }

    function d(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = global/*e*/.getName();
        return "first" === requireDynamic/*n*/ || "last" === requireDynamic/*n*/ ? global/*e*/.getArgs()[0] <= require/*t*/.getArgs()[0] : h(global/*e*/, require/*t*/)
    }

    function h(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = global/*e*/.getArgs(),
            requireLazy/*r*/ = require/*t*/.getArgs(),
            module/*i*/ = requireDynamic/*n*/.length;
        if (module/*i*/ !== requireLazy/*r*/.length) return !1;
        for (var o = 0; module/*i*/ > o; o++)
            if (!requireDynamic/*n*/[o].equals(requireLazy/*r*/[o])) return !1;
        return !0
    }

    function f(global/*e*/, require/*t*/) {
        return global/*e*/.rootCall().equals(require/*t*/.rootCall())
    }

    function m(global/*e*/, require/*t*/) {
        if (0 === global/*e*/.length) return global/*e*/;
        var requireDynamic/*n*/ = null;
        return global/*e*/.forEach(function(requireLazy/*r*/, module/*i*/) {
            var o = require/*t*/(requireLazy/*r*/);
            o !== requireLazy/*r*/ && (requireDynamic/*n*/ = requireDynamic/*n*/ || global/*e*/.slice(0, module/*i*/)), null !== requireDynamic/*n*/ && null !== o && requireDynamic/*n*/.push(o)
        }), requireDynamic/*n*/ ? 0 === requireDynamic/*n*/.length ? null : requireDynamic/*n*/ : global/*e*/
    }
    var GraphQL_EXPERIMENTAL/*g*/ = require/*t*/("GraphQL_EXPERIMENTAL"),
        _ = Array.prototype.push;
    module/*i*/.exports = o
});