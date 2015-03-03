__d("GraphQLDeferredQueryTracker",["ErrorUtils","GraphQL_EXPERIMENTAL","GraphQLCodedError","GraphQLStore","Map","forEachObject","invariant","isEmpty","setImmediate"],GraphQL_EXPERIMENTAL/*GraphQLCodedError/*function*/*/ (global/*e*/, require/*exports/*GraphQLStore/*t*/*/*/, requireDynamic/*invariant/*isEmpty/*n*/*/*/, requireLazy/*ErrorUtils/*Map/*r*/*/*/, module/*i*/) {
    "use strict";

    GraphQL_EXPERIMENTAL/*GraphQLCodedError/*function*/*/ o(global/*e*/, require/*exports/*GraphQLStore/*t*/*/*/) {
        var requireDynamic/*invariant/*isEmpty/*n*/*/*/ = global/*e*/.getQuery(),
            requireLazy/*ErrorUtils/*Map/*r*/*/*/ = requireDynamic/*invariant/*isEmpty/*n*/*/*/.getDeferredFragmentNames();
        if (requireLazy/*ErrorUtils/*Map/*r*/*/*/) {
            var module/*i*/ = requireDynamic/*invariant/*isEmpty/*n*/*/*/.rootCall().hasRefParam() ? D.get(requireDynamic/*invariant/*isEmpty/*n*/*/*/.getID()) || {} : g.getIDsFromQuery(global/*e*/);
            y(module/*i*/, GraphQL_EXPERIMENTAL/*GraphQLCodedError/*function*/*/(global/*e*/) {
                var requireDynamic/*invariant/*isEmpty/*n*/*/*/ = C.get(global/*e*/) || {};
                y(requireLazy/*ErrorUtils/*Map/*r*/*/*/, GraphQL_EXPERIMENTAL/*GraphQLCodedError/*function*/*/(requireLazy/*ErrorUtils/*Map/*r*/*/*/) {
                    delete requireDynamic/*invariant/*isEmpty/*n*/*/*/[requireLazy/*ErrorUtils/*Map/*r*/*/*/], require/*exports/*GraphQLStore/*t*/*/*/(global/*e*/, requireLazy/*ErrorUtils/*Map/*r*/*/*/)
                }), forEachObject/*S*/(requireDynamic/*invariant/*isEmpty/*n*/*/*/) ? C.delete(global/*e*/) : C.set(global/*e*/, requireDynamic/*invariant/*isEmpty/*n*/*/*/)
            })
        }
    }

    GraphQL_EXPERIMENTAL/*GraphQLCodedError/*function*/*/ a(global/*e*/) {
        var require/*exports/*GraphQLStore/*t*/*/*/ = f(global/*e*/),
            requireDynamic/*invariant/*isEmpty/*n*/*/*/ = E.get(require/*exports/*GraphQLStore/*t*/*/*/) || [];
        requireDynamic/*invariant/*isEmpty/*n*/*/*/ = requireDynamic/*invariant/*isEmpty/*n*/*/*/.filter(GraphQL_EXPERIMENTAL/*GraphQLCodedError/*function*/*/(require/*exports/*GraphQLStore/*t*/*/*/) {
            return require/*exports/*GraphQLStore/*t*/*/*/ !== global/*e*/
        }), requireDynamic/*invariant/*isEmpty/*n*/*/*/.length ? E.set(require/*exports/*GraphQLStore/*t*/*/*/, requireDynamic/*invariant/*isEmpty/*n*/*/*/) : E.delete(require/*exports/*GraphQLStore/*t*/*/*/), D.delete(global/*e*/.getQuery().getID())
    }

    GraphQL_EXPERIMENTAL/*GraphQLCodedError/*function*/*/ s(global/*e*/, require/*exports/*GraphQLStore/*t*/*/*/) {
        for (var requireDynamic/*invariant/*isEmpty/*n*/*/*/ = global/*e*/.getQuery(), requireLazy/*ErrorUtils/*Map/*r*/*/*/ = E.get(requireDynamic/*invariant/*isEmpty/*n*/*/*/.getID()) || [], module/*i*/ = 0; module/*i*/ < requireLazy/*ErrorUtils/*Map/*r*/*/*/.length; module/*i*/++) {
            var o = requireLazy/*ErrorUtils/*Map/*r*/*/*/[module/*i*/],
                a = o.getQuery(),
                s = a.getDeferredFragmentNames(),
                l = d(require/*exports/*GraphQLStore/*t*/*/*/, o);
            D.set(a.getID(), l), y(l, GraphQL_EXPERIMENTAL/*GraphQLCodedError/*function*/*/(global/*e*/) {
                var require/*exports/*GraphQLStore/*t*/*/*/ = C.get(global/*e*/) || {};
                Object.assign(require/*exports/*GraphQLStore/*t*/*/*/, s), C.set(global/*e*/, require/*exports/*GraphQLStore/*t*/*/*/)
            })
        }
    }

    GraphQL_EXPERIMENTAL/*GraphQLCodedError/*function*/*/ l(global/*e*/) {
        for (var require/*exports/*GraphQLStore/*t*/*/*/ = global/*e*/.getQuery().getID(), requireDynamic/*invariant/*isEmpty/*n*/*/*/ = E.get(require/*exports/*GraphQLStore/*t*/*/*/) || [], requireLazy/*ErrorUtils/*Map/*r*/*/*/ = 0; requireLazy/*ErrorUtils/*Map/*r*/*/*/ < requireDynamic/*invariant/*isEmpty/*n*/*/*/.length; requireLazy/*ErrorUtils/*Map/*r*/*/*/++) D.delete(requireDynamic/*invariant/*isEmpty/*n*/*/*/[requireLazy/*ErrorUtils/*Map/*r*/*/*/].getQuery().getID());
        E.delete(require/*exports/*GraphQLStore/*t*/*/*/)
    }

    GraphQL_EXPERIMENTAL/*GraphQLCodedError/*function*/*/ u(global/*e*/, require/*exports/*GraphQLStore/*t*/*/*/) {
        w || (w = [], b(p)), w.push({
            dataID: global/*e*/,
            fragmentName: require/*exports/*GraphQLStore/*t*/*/*/,
            error: null
        })
    }

    GraphQL_EXPERIMENTAL/*GraphQLCodedError/*function*/*/ c(global/*e*/, require/*exports/*GraphQLStore/*t*/*/*/, requireDynamic/*invariant/*isEmpty/*n*/*/*/) {
        w || (w = [], b(p)), w.push({
            dataID: global/*e*/,
            fragmentName: require/*exports/*GraphQLStore/*t*/*/*/,
            error: requireDynamic/*invariant/*isEmpty/*n*/*/*/
        })
    }

    GraphQL_EXPERIMENTAL/*GraphQLCodedError/*function*/*/ p() {
        if (w) {
            for (var global/*e*/ = 0; global/*e*/ < R.length; global/*e*/++)
                for (var require/*exports/*GraphQLStore/*t*/*/*/ = R[global/*e*/], requireDynamic/*invariant/*isEmpty/*n*/*/*/ = 0; requireDynamic/*invariant/*isEmpty/*n*/*/*/ < w.length; requireDynamic/*invariant/*isEmpty/*n*/*/*/++) {
                    var requireLazy/*ErrorUtils/*Map/*r*/*/*/, module/*i*/, o = w[requireDynamic/*invariant/*isEmpty/*n*/*/*/],
                        a = o.dataID,
                        s = o.error,
                        l = o.fragmentName;
                    s ? (requireLazy/*ErrorUtils/*Map/*r*/*/*/ = require/*exports/*GraphQLStore/*t*/*/*/.callbacks.onFailure, module/*i*/ = [a, l, s]) : (requireLazy/*ErrorUtils/*Map/*r*/*/*/ = require/*exports/*GraphQLStore/*t*/*/*/.callbacks.onSuccess, module/*i*/ = [a, l]), m.applyWithGuard(requireLazy/*ErrorUtils/*Map/*r*/*/*/, null, module/*i*/, null, "GraphQLDeferredQueryTracker")
                }
            w = null
        }
    }

    GraphQL_EXPERIMENTAL/*GraphQLCodedError/*function*/*/ d(global/*e*/, require/*exports/*GraphQLStore/*t*/*/*/) {
        var requireDynamic/*invariant/*isEmpty/*n*/*/*/ = require/*exports/*GraphQLStore/*t*/*/*/.getQuery().rootCall().getRefTarget();
        if (!requireDynamic/*invariant/*isEmpty/*n*/*/*/) return {};
        var requireLazy/*ErrorUtils/*Map/*r*/*/*/ = {},
            module/*i*/ = requireDynamic/*invariant/*isEmpty/*n*/*/*/.split(".");
        return h(requireLazy/*ErrorUtils/*Map/*r*/*/*/, global/*e*/, module/*i*/, 1), requireLazy/*ErrorUtils/*Map/*r*/*/*/
    }

    GraphQL_EXPERIMENTAL/*GraphQLCodedError/*function*/*/ h(global/*e*/, require/*exports/*GraphQLStore/*t*/*/*/, requireDynamic/*invariant/*isEmpty/*n*/*/*/, requireLazy/*ErrorUtils/*Map/*r*/*/*/) {
        if (requireLazy/*ErrorUtils/*Map/*r*/*/*/ === requireDynamic/*invariant/*isEmpty/*n*/*/*/.length && "string" == typeof require/*exports/*GraphQLStore/*t*/*/*/) return void(global/*e*/[require/*exports/*GraphQLStore/*t*/*/*/] = require/*exports/*GraphQLStore/*t*/*/*/);
        if (!(requireLazy/*ErrorUtils/*Map/*r*/*/*/ >= requireDynamic/*invariant/*isEmpty/*n*/*/*/.length || !require/*exports/*GraphQLStore/*t*/*/*/ || "object" != typeof require/*exports/*GraphQLStore/*t*/*/*/ || Array.isArray(require/*exports/*GraphQLStore/*t*/*/*/))) {
            var module/*i*/ = requireDynamic/*invariant/*isEmpty/*n*/*/*/[requireLazy/*ErrorUtils/*Map/*r*/*/*/];
            "*" === module/*i*/ ? y(require/*exports/*GraphQLStore/*t*/*/*/, GraphQL_EXPERIMENTAL/*GraphQLCodedError/*function*/*/(require/*exports/*GraphQLStore/*t*/*/*/) {
                h(global/*e*/, require/*exports/*GraphQLStore/*t*/*/*/, requireDynamic/*invariant/*isEmpty/*n*/*/*/, requireLazy/*ErrorUtils/*Map/*r*/*/*/ + 1)
            }) : require/*exports/*GraphQLStore/*t*/*/*/.hasOwnProperty(module/*i*/) && h(global/*e*/, require/*exports/*GraphQLStore/*t*/*/*/[module/*i*/], requireDynamic/*invariant/*isEmpty/*n*/*/*/, requireLazy/*ErrorUtils/*Map/*r*/*/*/ + 1)
        }
    }

    GraphQL_EXPERIMENTAL/*GraphQLCodedError/*function*/*/ f(global/*e*/) {
        return global/*e*/.getQuery().rootCall().getSourceQueryID()
    }
    var m = require/*exports/*GraphQLStore/*t*/*/*/("ErrorUtils"),
        g = (require/*exports/*GraphQLStore/*t*/*/*/("GraphQL_EXPERIMENTAL"), require/*exports/*GraphQLStore/*t*/*/*/("GraphQLCodedError"), require/*exports/*GraphQLStore/*t*/*/*/("GraphQLStore")),
        _ = require/*exports/*GraphQLStore/*t*/*/*/("Map"),
        y = require/*exports/*GraphQLStore/*t*/*/*/("forEachObject"),
        v = require/*exports/*GraphQLStore/*t*/*/*/("invariant"),
        forEachObject/*S*/ = require/*exports/*GraphQLStore/*t*/*/*/("isEmpty"),
        b = require/*exports/*GraphQLStore/*t*/*/*/("setImmediate"),
        R = [],
        w = null,
        C = new _,
        E = new _,
        D = new _,
        T = {
            addListenerForFragment: GraphQL_EXPERIMENTAL/*GraphQLCodedError/*function*/*/(global/*e*/, require/*exports/*GraphQLStore/*t*/*/*/, requireDynamic/*invariant/*isEmpty/*n*/*/*/) {
                var requireLazy/*ErrorUtils/*Map/*r*/*/*/ = {
                    callbacks: requireDynamic/*invariant/*isEmpty/*n*/*/*/,
                    dataID: global/*e*/,
                    fragmentName: require/*exports/*GraphQLStore/*t*/*/*/
                };
                return R.push(requireLazy/*ErrorUtils/*Map/*r*/*/*/), {
                    remove: GraphQL_EXPERIMENTAL/*GraphQLCodedError/*function*/*/() {
                        var global/*e*/ = R.indexOf(requireLazy/*ErrorUtils/*Map/*r*/*/*/);
                        global/*e*/ >= 0 || v(0, "remove() can only be called once"), R.splice(global/*e*/, 1)
                    }
                }
            },
            recordQuery: GraphQL_EXPERIMENTAL/*GraphQLCodedError/*function*/*/(global/*e*/) {
                var require/*exports/*GraphQLStore/*t*/*/*/ = f(global/*e*/);
                if (require/*exports/*GraphQLStore/*t*/*/*/) {
                    var requireDynamic/*invariant/*isEmpty/*n*/*/*/ = E.get(require/*exports/*GraphQLStore/*t*/*/*/) || [];
                    requireDynamic/*invariant/*isEmpty/*n*/*/*/.push(global/*e*/), E.set(require/*exports/*GraphQLStore/*t*/*/*/, requireDynamic/*invariant/*isEmpty/*n*/*/*/)
                } else {
                    var requireLazy/*ErrorUtils/*Map/*r*/*/*/ = global/*e*/.getQuery().getDeferredFragmentNames();
                    if (requireLazy/*ErrorUtils/*Map/*r*/*/*/) {
                        var module/*i*/ = g.getIDsFromQuery(global/*e*/);
                        y(module/*i*/, GraphQL_EXPERIMENTAL/*GraphQLCodedError/*function*/*/(global/*e*/) {
                            var require/*exports/*GraphQLStore/*t*/*/*/ = C.get(global/*e*/) || {};
                            Object.assign(require/*exports/*GraphQLStore/*t*/*/*/, requireLazy/*ErrorUtils/*Map/*r*/*/*/), C.set(global/*e*/, require/*exports/*GraphQLStore/*t*/*/*/)
                        })
                    }
                }
            },
            resolveQuery: GraphQL_EXPERIMENTAL/*GraphQLCodedError/*function*/*/(global/*e*/, require/*exports/*GraphQLStore/*t*/*/*/) {
                var requireDynamic/*invariant/*isEmpty/*n*/*/*/ = f(global/*e*/);
                global/*e*/.getQuery().isDeferred() ? (o(global/*e*/, u), requireDynamic/*invariant/*isEmpty/*n*/*/*/ && a(global/*e*/)) : require/*exports/*GraphQLStore/*t*/*/*/ && s(global/*e*/, require/*exports/*GraphQLStore/*t*/*/*/)
            },
            rejectQuery: GraphQL_EXPERIMENTAL/*GraphQLCodedError/*function*/*/(global/*e*/, require/*exports/*GraphQLStore/*t*/*/*/) {
                var requireDynamic/*invariant/*isEmpty/*n*/*/*/ = f(global/*e*/);
                global/*e*/.getQuery().isDeferred() ? (o(global/*e*/, GraphQL_EXPERIMENTAL/*GraphQLCodedError/*function*/*/(global/*e*/, requireDynamic/*invariant/*isEmpty/*n*/*/*/) {
                    c(global/*e*/, requireDynamic/*invariant/*isEmpty/*n*/*/*/, require/*exports/*GraphQLStore/*t*/*/*/)
                }), requireDynamic/*invariant/*isEmpty/*n*/*/*/ && a(global/*e*/)) : l(global/*e*/)
            },
            isQueryPending: GraphQL_EXPERIMENTAL/*GraphQLCodedError/*function*/*/(global/*e*/) {
                var require/*exports/*GraphQLStore/*t*/*/*/ = global/*e*/.getQuery().getAllFragmentNames(),
                    requireDynamic/*invariant/*isEmpty/*n*/*/*/ = g.getIDsFromQuery(global/*e*/);
                for (var requireLazy/*ErrorUtils/*Map/*r*/*/*/ in requireDynamic/*invariant/*isEmpty/*n*/*/*/)
                    if (requireDynamic/*invariant/*isEmpty/*n*/*/*/.hasOwnProperty(requireLazy/*ErrorUtils/*Map/*r*/*/*/) && C.has(requireDynamic/*invariant/*isEmpty/*n*/*/*/[requireLazy/*ErrorUtils/*Map/*r*/*/*/])) {
                        var module/*i*/ = C.get(requireDynamic/*invariant/*isEmpty/*n*/*/*/[requireLazy/*ErrorUtils/*Map/*r*/*/*/]);
                        for (var o in require/*exports/*GraphQLStore/*t*/*/*/)
                            if (require/*exports/*GraphQLStore/*t*/*/*/.hasOwnProperty(o) && module/*i*/.hasOwnProperty(o)) return !0
                    }
                return !1
            },
            reset: GraphQL_EXPERIMENTAL/*GraphQLCodedError/*function*/*/() {
                C = new _, D = new _, E = new _, R = [], w = []
            }
        };
    module/*i*/.exports = T
});