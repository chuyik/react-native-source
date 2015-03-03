__d("GraphQLMutationQueryCreator",["DliteLog","GraphQL_EXPERIMENTAL","GraphQLConstants","GraphQLMutationProperties","GraphQLStore","GraphQLStoreDataHandler","invariant","isEmpty"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        if (require/*t*/ = f(require/*t*/), !l(require/*t*/)) return global/*e*/;
        for (var requireLazy/*r*/ = [], module/*i*/ = global/*e*/.getOwnFields(), s = 0; s < module/*i*/.length; s++) {
            var u = a(module/*i*/[s], require/*t*/, requireDynamic/*n*/);
            u && requireLazy/*r*/.push(u)
        }
        for (var c = [], p = global/*e*/.getFragments(), d = 0; d < p.length; d++) c.push(o(p[d], require/*t*/, requireDynamic/*n*/));
        return global/*e*/.shallowClone(requireLazy/*r*/, c)
    }

    function a(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = global/*e*/.getFieldName();
        if ("id" === requireLazy/*r*/) return global/*e*/;
        var module/*i*/ = require/*t*/.getOwnField(requireLazy/*r*/);
        if (!module/*i*/) return null;
        if (l(module/*i*/)) {
            var a = o(global/*e*/, module/*i*/, requireDynamic/*n*/);
            return a.hasFields() ? a : null
        }
        return global/*e*/.isConnection() ? requireDynamic/*n*/ && requireDynamic/*n*/(global/*e*/) ? u(global/*e*/) : global/*e*/ : global/*e*/
    }

    function s(global/*e*/) {
        return !global/*e*/.isGenerated()
    }

    function l(global/*e*/) {
        return global/*e*/.getOwnFields().some(s)
    }

    function u(global/*e*/) {
        for (var require/*t*/ = null, requireDynamic/*n*/ = null, requireLazy/*r*/ = global/*e*/.getOwnFields(), module/*i*/ = 0; module/*i*/ < requireLazy/*r*/.length; module/*i*/++) {
            var o = requireLazy/*r*/[module/*i*/],
                a = o.getFieldName(),
                s = a === _.EDGES || a === _.PAGE_INFO;
            s || (require/*t*/ = require/*t*/ || [], require/*t*/.push(o))
        }
        for (var l = global/*e*/.getFragments(), c = 0; c < l.length; c++) {
            var p = u(l[c]);
            p && (requireDynamic/*n*/ = requireDynamic/*n*/ || [], requireDynamic/*n*/.push(p))
        }
        return require/*t*/ || requireDynamic/*n*/ ? global/*e*/.shallowClone(require/*t*/, requireDynamic/*n*/) : null
    }

    function c(global/*e*/) {
        var require/*t*/ = global/*e*/.getOwnFields().filter(function(global/*e*/) {
                return global/*e*/.getFieldName() !== _.NODE && global/*e*/.getFieldName() !== _.CURSOR
            }),
            requireDynamic/*n*/ = global/*e*/.getFragments().map(c);
        return new g.QueryFragment("MutationQueryCreatorEdge", "UnknownType", require/*t*/, requireDynamic/*n*/)
    }

    function p(global/*e*/) {
        return Array.isArray(global/*e*/)
    }

    function d(global/*e*/) {
        var require/*t*/, requireDynamic/*n*/ = [];
        for (var requireLazy/*r*/ in global/*e*/)
            if (!S.isMetadataKey(requireLazy/*r*/)) {
                if (require/*t*/ = null, "object" == typeof global/*e*/[requireLazy/*r*/])
                    if (Array.isArray(global/*e*/[requireLazy/*r*/]))
                        if (R(global/*e*/[requireLazy/*r*/])) require/*t*/ = [];
                        else {
                            var module/*i*/ = global/*e*/[requireLazy/*r*/][0];
                            require/*t*/ = "object" == typeof module/*i*/ ? d(module/*i*/) : []
                        } else require/*t*/ = d(global/*e*/[requireLazy/*r*/]);
                "node" === requireLazy/*r*/ && (require/*t*/.push(new g.Field("id")), requireDynamic/*n*/.push(new g.Field("cursor")));
                var o = h(requireLazy/*r*/, require/*t*/);
                requireDynamic/*n*/.push(o)
            }
        return requireDynamic/*n*/
    }

    function h(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = global/*e*/.indexOf(".");
        if (-1 === requireDynamic/*n*/) return new g.Field(global/*e*/, require/*t*/);
        for (var requireLazy/*r*/ = [], module/*i*/ = global/*e*/.substring(requireDynamic/*n*/ + 1), o = global/*e*/.substring(0, requireDynamic/*n*/), a = module/*i*/.split("."), s = 0; s < a.length; s++) {
            var l = a[s],
                u = l.match(/^(\w+)\(([^()]*)\)$/);
            u || b(0, "Malformed field name %s provided in optimistic payload", global/*e*/), requireLazy/*r*/.push(new g.Callv(u[1], u[2].split(",")))
        }
        return new g.Field(o, require/*t*/, null, requireLazy/*r*/)
    }

    function f(global/*e*/) {
        return 0 !== global/*e*/.getFragments().length && b(0, "Fat queries do not support fragments yet"), global/*e*/
    }
    var m = require/*t*/("DliteLog"),
        g = require/*t*/("GraphQL_EXPERIMENTAL"),
        _ = require/*t*/("GraphQLConstants"),
        y = require/*t*/("GraphQLMutationProperties"),
        v = require/*t*/("GraphQLStore"),
        S = require/*t*/("GraphQLStoreDataHandler"),
        b = require/*t*/("invariant"),
        R = require/*t*/("isEmpty"),
        w = {
            createQuery: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = f(y.getFatQueryForType(global/*e*/)),
                    requireLazy/*r*/ = [];
                for (var module/*i*/ in require/*t*/)
                    if (require/*t*/.hasOwnProperty(module/*i*/)) {
                        requireDynamic/*n*/.hasOwnField(module/*i*/) || b(0, "Anything in the idMap for createQuery should be part of the relevant mutation's fat query.");
                        var a = requireDynamic/*n*/.getOwnField(module/*i*/),
                            s = require/*t*/[module/*i*/],
                            l = v.getTrackedQueryByID(s),
                            u = new g.Field(module/*i*/, l.getOwnFields(), l.getFragments());
                        requireLazy/*r*/.push(o(u, a))
                    }
                return new g.QueryFragment("MutationQuery", requireDynamic/*n*/.type(), requireLazy/*r*/)
            },
            createRangeDeleteQuery: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                var module/*i*/ = f(y.getFatQueryForType(global/*e*/));
                module/*i*/.hasOwnField(requireDynamic/*n*/) || b(0, "The fatQuery must include the range field for a delete mutation");
                var a = v.getTrackedQueryByID(require/*t*/),
                    s = new g.Field(requireDynamic/*n*/, a.getOwnFields(), a.getFragments()),
                    l = function(global/*e*/) {
                        return global/*e*/.getFieldName() === requireLazy/*r*/
                    },
                    u = o(s, module/*i*/.getOwnField(requireDynamic/*n*/), l);
                return new g.QueryFragment("MutationQuery", module/*i*/.type(), [u])
            },
            createRangeAddQuery: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                var a = f(y.getFatQueryForType(global/*e*/)),
                    s = y.getRangeConfigForType(global/*e*/),
                    l = v.getTrackedQueryByID(requireLazy/*r*/),
                    u = new g.Field(module/*i*/ ? module/*i*/ : "range_parent_field", l.getOwnFields(), l.getFragments()),
                    p = u.getUnaliasedFields(require/*t*/),
                    d = requireLazy/*r*/ === _.VIEWER_CLIENT_ID ? [E] : [C];
                if (0 === p.length) return m.warn("Did not find range as a child of the parent field"), d.push(D), new g.QueryFragment("MutationQuery", a.type(), [new g.Field(requireDynamic/*n*/, null, d)]);
                for (var h = [], S = [], b = {}, R = 0; R < p.length; R++) {
                    var w = p[R],
                        T = w.getUnaliasedFields(_.EDGES);
                    if (T.length) {
                        var x = w.getCalls().filter(function(global/*e*/) {
                            return !_.RANGE_CALLS[global/*e*/.getName()]
                        });
                        if (x.join(".") in s)
                            for (var P = 0; P < T.length; P++) {
                                for (var I = T[P], F = I.getUnaliasedFields(_.NODE), L = 0; L < F.length; L++) S.push(new g.QueryFragment("MutationQueryCreatorEdge", "UnknownType", [F[L]]));
                                d.push(c(I))
                            } else b[w.getGeneratedAlias()] = !0
                    }
                }
                S.length ? h.push(new g.Field(requireDynamic/*n*/, null, S.concat(d))) : __DEV__ && console.warn("Did you forget to update GraphQLMutationProperties.rangeConfigs for your mutation %s? No edge field could be added to the query.", global/*e*/);
                var M = function(global/*e*/) {
                    return !(global/*e*/.getGeneratedAlias() in b)
                };
                if (module/*i*/ && a.hasOwnField(module/*i*/)) {
                    var Q = o(u, a.getOwnField(module/*i*/), M);
                    Q.hasFields() && h.push(Q)
                }
                return new g.QueryFragment("MutationQuery", a.type(), h)
            },
            createQueryFromOptimisticPayload: function(global/*e*/) {
                global/*e*/ && 1 === Object.keys(global/*e*/).length || b(0, "malformed optimistic payload received");
                var require/*t*/ = Object.keys(global/*e*/)[0],
                    requireDynamic/*n*/ = f(y.getFatQueryForType(require/*t*/)),
                    requireLazy/*r*/ = global/*e*/[require/*t*/];
                return new g.Mutation("OptimisticQuery", requireDynamic/*n*/.type(), new g.Call(require/*t*/), d(p(requireLazy/*r*/) ? requireLazy/*r*/[0] : requireLazy/*r*/))
            }
        },
        C = new g.QueryFragment("MutationQueryCreatorEdgeMetadata", "UnknownType", [new g.Field("cursor"), new g.Field("source", [new g.Field("id")])]),
        E = new g.QueryFragment("MutationQueryCreatorEdgeMetadata", "UnknownType", [new g.Field("cursor")]),
        D = new g.QueryFragment("MutationQueryCreatorEdgeMetadata", "UnknownType", [new g.Field("node", [new g.Field("id")])]);
    module/*i*/.exports = w
});