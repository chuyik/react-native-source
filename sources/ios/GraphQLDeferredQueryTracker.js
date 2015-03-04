__d("GraphQLDeferredQueryTracker",["ErrorUtils","GraphQL_EXPERIMENTAL","GraphQLCodedError","GraphQLStore","Map","forEachObject","invariant","isEmpty","setImmediate"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = global/*e*/.getQuery(),
            requireLazy/*r*/ = requireDynamic/*n*/.getDeferredFragmentNames();
        if (requireLazy/*r*/) {
            var module/*i*/ = requireDynamic/*n*/.rootCall().hasRefParam() ? D.get(requireDynamic/*n*/.getID()) || {} : g.getIDsFromQuery(global/*e*/);
            forEachObject/*y*/(module/*i*/, function(global/*e*/) {
                var requireDynamic/*n*/ = C.get(global/*e*/) || {};
                forEachObject/*y*/(requireLazy/*r*/, function(requireLazy/*r*/) {
                    delete requireDynamic/*n*/[requireLazy/*r*/], require/*t*/(global/*e*/, requireLazy/*r*/)
                }), isEmpty/*S*/(requireDynamic/*n*/) ? C.delete(global/*e*/) : C.set(global/*e*/, requireDynamic/*n*/)
            })
        }
    }

    function a(global/*e*/) {
        var require/*t*/ = f(global/*e*/),
            requireDynamic/*n*/ = E.get(require/*t*/) || [];
        requireDynamic/*n*/ = requireDynamic/*n*/.filter(function(require/*t*/) {
            return require/*t*/ !== global/*e*/
        }), requireDynamic/*n*/.length ? E.set(require/*t*/, requireDynamic/*n*/) : E.delete(require/*t*/), D.delete(global/*e*/.getQuery().getID())
    }

    function s(global/*e*/, require/*t*/) {
        for (var requireDynamic/*n*/ = global/*e*/.getQuery(), requireLazy/*r*/ = E.get(requireDynamic/*n*/.getID()) || [], module/*i*/ = 0; module/*i*/ < requireLazy/*r*/.length; module/*i*/++) {
            var o = requireLazy/*r*/[module/*i*/],
                a = o.getQuery(),
                s = a.getDeferredFragmentNames(),
                l = d(require/*t*/, o);
            D.set(a.getID(), l), forEachObject/*y*/(l, function(global/*e*/) {
                var require/*t*/ = C.get(global/*e*/) || {};
                Object.assign(require/*t*/, s), C.set(global/*e*/, require/*t*/)
            })
        }
    }

    function l(global/*e*/) {
        for (var require/*t*/ = global/*e*/.getQuery().getID(), requireDynamic/*n*/ = E.get(require/*t*/) || [], requireLazy/*r*/ = 0; requireLazy/*r*/ < requireDynamic/*n*/.length; requireLazy/*r*/++) D.delete(requireDynamic/*n*/[requireLazy/*r*/].getQuery().getID());
        E.delete(require/*t*/)
    }

    function u(global/*e*/, require/*t*/) {
        w || (w = [], setImmediate/*b*/(p)), w.push({
            dataID: global/*e*/,
            fragmentName: require/*t*/,
            error: null
        })
    }

    function c(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        w || (w = [], setImmediate/*b*/(p)), w.push({
            dataID: global/*e*/,
            fragmentName: require/*t*/,
            error: requireDynamic/*n*/
        })
    }

    function p() {
        if (w) {
            for (var global/*e*/ = 0; global/*e*/ < R.length; global/*e*/++)
                for (var require/*t*/ = R[global/*e*/], requireDynamic/*n*/ = 0; requireDynamic/*n*/ < w.length; requireDynamic/*n*/++) {
                    var requireLazy/*r*/, module/*i*/, o = w[requireDynamic/*n*/],
                        a = o.dataID,
                        s = o.error,
                        l = o.fragmentName;
                    s ? (requireLazy/*r*/ = require/*t*/.callbacks.onFailure, module/*i*/ = [a, l, s]) : (requireLazy/*r*/ = require/*t*/.callbacks.onSuccess, module/*i*/ = [a, l]), ErrorUtils/*m*/.applyWithGuard(requireLazy/*r*/, null, module/*i*/, null, "GraphQLDeferredQueryTracker")
                }
            w = null
        }
    }

    function d(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = require/*t*/.getQuery().rootCall().getRefTarget();
        if (!requireDynamic/*n*/) return {};
        var requireLazy/*r*/ = {},
            module/*i*/ = requireDynamic/*n*/.split(".");
        return h(requireLazy/*r*/, global/*e*/, module/*i*/, 1), requireLazy/*r*/
    }

    function h(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
        if (requireLazy/*r*/ === requireDynamic/*n*/.length && "string" == typeof require/*t*/) return void(global/*e*/[require/*t*/] = require/*t*/);
        if (!(requireLazy/*r*/ >= requireDynamic/*n*/.length || !require/*t*/ || "object" != typeof require/*t*/ || Array.isArray(require/*t*/))) {
            var module/*i*/ = requireDynamic/*n*/[requireLazy/*r*/];
            "*" === module/*i*/ ? forEachObject/*y*/(require/*t*/, function(require/*t*/) {
                h(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/ + 1)
            }) : require/*t*/.hasOwnProperty(module/*i*/) && h(global/*e*/, require/*t*/[module/*i*/], requireDynamic/*n*/, requireLazy/*r*/ + 1)
        }
    }

    function f(global/*e*/) {
        return global/*e*/.getQuery().rootCall().getSourceQueryID()
    }
    var ErrorUtils/*m*/ = require/*t*/("ErrorUtils"),
        g = (require/*t*/("GraphQL_EXPERIMENTAL"), require/*t*/("GraphQLCodedError"), require/*t*/("GraphQLStore")),
        Map/*_*/ = require/*t*/("Map"),
        forEachObject/*y*/ = require/*t*/("forEachObject"),
        invariant/*v*/ = require/*t*/("invariant"),
        isEmpty/*S*/ = require/*t*/("isEmpty"),
        setImmediate/*b*/ = require/*t*/("setImmediate"),
        R = [],
        w = null,
        C = new Map/*_*/,
        E = new Map/*_*/,
        D = new Map/*_*/,
        T = {
            addListenerForFragment: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = {
                    callbacks: requireDynamic/*n*/,
                    dataID: global/*e*/,
                    fragmentName: require/*t*/
                };
                return R.push(requireLazy/*r*/), {
                    remove: function() {
                        var global/*e*/ = R.indexOf(requireLazy/*r*/);
                        global/*e*/ >= 0 || invariant/*v*/(0, "remove() can only be called once"), R.splice(global/*e*/, 1)
                    }
                }
            },
            recordQuery: function(global/*e*/) {
                var require/*t*/ = f(global/*e*/);
                if (require/*t*/) {
                    var requireDynamic/*n*/ = E.get(require/*t*/) || [];
                    requireDynamic/*n*/.push(global/*e*/), E.set(require/*t*/, requireDynamic/*n*/)
                } else {
                    var requireLazy/*r*/ = global/*e*/.getQuery().getDeferredFragmentNames();
                    if (requireLazy/*r*/) {
                        var module/*i*/ = g.getIDsFromQuery(global/*e*/);
                        forEachObject/*y*/(module/*i*/, function(global/*e*/) {
                            var require/*t*/ = C.get(global/*e*/) || {};
                            Object.assign(require/*t*/, requireLazy/*r*/), C.set(global/*e*/, require/*t*/)
                        })
                    }
                }
            },
            resolveQuery: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = f(global/*e*/);
                global/*e*/.getQuery().isDeferred() ? (o(global/*e*/, u), requireDynamic/*n*/ && a(global/*e*/)) : require/*t*/ && s(global/*e*/, require/*t*/)
            },
            rejectQuery: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = f(global/*e*/);
                global/*e*/.getQuery().isDeferred() ? (o(global/*e*/, function(global/*e*/, requireDynamic/*n*/) {
                    c(global/*e*/, requireDynamic/*n*/, require/*t*/)
                }), requireDynamic/*n*/ && a(global/*e*/)) : l(global/*e*/)
            },
            isQueryPending: function(global/*e*/) {
                var require/*t*/ = global/*e*/.getQuery().getAllFragmentNames(),
                    requireDynamic/*n*/ = g.getIDsFromQuery(global/*e*/);
                for (var requireLazy/*r*/ in requireDynamic/*n*/)
                    if (requireDynamic/*n*/.hasOwnProperty(requireLazy/*r*/) && C.has(requireDynamic/*n*/[requireLazy/*r*/])) {
                        var module/*i*/ = C.get(requireDynamic/*n*/[requireLazy/*r*/]);
                        for (var o in require/*t*/)
                            if (require/*t*/.hasOwnProperty(o) && module/*i*/.hasOwnProperty(o)) return !0
                    }
                return !1
            },
            reset: function() {
                C = new Map/*_*/, D = new Map/*_*/, E = new Map/*_*/, R = [], w = []
            }
        };
    module/*i*/.exports = T
});