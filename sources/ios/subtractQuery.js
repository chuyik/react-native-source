__d("subtractQuery",["GraphQL_EXPERIMENTAL"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*t*/*/) {
        var requireDynamic/*n*/ = global/*e*/.getQuery(),
            requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ = require/*exports/*t*/*/.getQuery();
        if (!f(requireDynamic/*n*/, requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/)) return global/*e*/;
        var module/*i*/ = requireDynamic/*n*/.isRefQueryDependency(),
            o = a(requireDynamic/*n*/, [requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/], module/*i*/);
        return o === requireDynamic/*n*/ ? global/*e*/ : o ? !module/*i*/ && l(o) ? null : new g.QueryWithValues(o) : null
    }

    function a(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
        var requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ = global/*e*/.getOwnFields(),
            module/*i*/ = m(requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/, function(global/*e*/) {
                return s(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/)
            }),
            o = global/*e*/.getFragments(),
            l = m(o, function(global/*e*/) {
                return a(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/)
            });
        return !requireDynamic/*n*/ && module/*i*/ && 1 === module/*i*/.length && "id" === module/*i*/[0].getFieldName() && (module/*i*/ = null), requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ === module/*i*/ && o === l ? global/*e*/ : module/*i*/ && 0 !== module/*i*/.length || l && 0 !== l.length ? global/*e*/.shallowClone(module/*i*/, l) : null
    }

    function s(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
        var requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ = global/*e*/.getFieldName();
        if (global/*e*/.hasOwnFields() || global/*e*/.getFragments().length) {
            var module/*i*/;
            if (require/*exports/*t*/*/.forEach(function(require/*exports/*t*/*/) {
                    u(require/*exports/*t*/*/, requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/, function(require/*exports/*t*/*/) {
                        p(global/*e*/, require/*exports/*t*/*/) && (module/*i*/ = module/*i*/ || [], module/*i*/.push(require/*exports/*t*/*/))
                    })
                }), module/*i*/) return a(global/*e*/, module/*i*/, requireDynamic/*n*/)
        } else if (!global/*e*/.isRequisite() && "id" !== requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/) {
            var o = require/*exports/*t*/*/.some(function(require/*exports/*t*/*/) {
                return c(require/*exports/*t*/*/, requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/, function(require/*exports/*t*/*/) {
                    return p(global/*e*/, require/*exports/*t*/*/)
                })
            });
            if (o) return null
        }
        return global/*e*/
    }

    function l(global/*e*/) {
        var require/*exports/*t*/*/ = global/*e*/.getOwnFields(),
            requireDynamic/*n*/ = global/*e*/.getFragments();
        return require/*exports/*t*/*/.length || requireDynamic/*n*/.length ? require/*exports/*t*/*/.every(l) && requireDynamic/*n*/.every(l) : "id" === global/*e*/.getFieldName() || global/*e*/.isRequisite()
    }

    function u(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
        c(global/*e*/, require/*exports/*t*/*/, function() {
            requireDynamic/*n*/.apply(this, arguments)
        })
    }

    function c(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
        for (var requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/, module/*i*/ = [global/*e*/]; requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ = module/*i*/.shift();) {
            if (requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/.getOwnUnaliasedFields(require/*exports/*t*/*/).some(requireDynamic/*n*/)) return !0;
            _.apply(module/*i*/, requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/.getFragments())
        }
        return !1
    }

    function p(global/*e*/, require/*exports/*t*/*/) {
        var requireDynamic/*n*/ = global/*e*/.getCalls(),
            requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ = require/*exports/*t*/*/.getCalls(),
            module/*i*/ = requireDynamic/*n*/.length;
        if (module/*i*/ !== requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/.length) return !1;
        if (module/*i*/)
            for (var o = global/*e*/.isConnection() ? d : h, a = 0; module/*i*/ > a; a++) {
                var s = requireDynamic/*n*/[a],
                    l = requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/[a];
                if (s.getName() !== l.getName() || !o(s, l)) return !1
            }
        return !0
    }

    function d(global/*e*/, require/*exports/*t*/*/) {
        var requireDynamic/*n*/ = global/*e*/.getName();
        return "first" === requireDynamic/*n*/ || "last" === requireDynamic/*n*/ ? global/*e*/.getArgs()[0] <= require/*exports/*t*/*/.getArgs()[0] : h(global/*e*/, require/*exports/*t*/*/)
    }

    function h(global/*e*/, require/*exports/*t*/*/) {
        var requireDynamic/*n*/ = global/*e*/.getArgs(),
            requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ = require/*exports/*t*/*/.getArgs(),
            module/*i*/ = requireDynamic/*n*/.length;
        if (module/*i*/ !== requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/.length) return !1;
        for (var o = 0; module/*i*/ > o; o++)
            if (!requireDynamic/*n*/[o].equals(requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/[o])) return !1;
        return !0
    }

    function f(global/*e*/, require/*exports/*t*/*/) {
        return global/*e*/.rootCall().equals(require/*exports/*t*/*/.rootCall())
    }

    function m(global/*e*/, require/*exports/*t*/*/) {
        if (0 === global/*e*/.length) return global/*e*/;
        var requireDynamic/*n*/ = null;
        return global/*e*/.forEach(function(requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/, module/*i*/) {
            var o = require/*exports/*t*/*/(requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/);
            o !== requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ && (requireDynamic/*n*/ = requireDynamic/*n*/ || global/*e*/.slice(0, module/*i*/)), null !== requireDynamic/*n*/ && null !== o && requireDynamic/*n*/.push(o)
        }), requireDynamic/*n*/ ? 0 === requireDynamic/*n*/.length ? null : requireDynamic/*n*/ : global/*e*/
    }
    var g = require/*exports/*t*/*/("GraphQL_EXPERIMENTAL"),
        _ = Array.prototype.push;
    module/*i*/.exports = o
});