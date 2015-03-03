__d("GraphQLMutationQueryCreator",["DliteLog","GraphQL_EXPERIMENTAL","GraphQLConstants","GraphQLMutationProperties","GraphQLStore","GraphQLStoreDataHandler","invariant","isEmpty"],function (global/*e*/, require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/, requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/, requireLazy/*r*/, module/*GraphQL_EXPERIMENTAL/*i*/*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/, requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/) {
        if (require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/ = f(require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/), !l(require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/)) return global/*e*/;
        for (var requireLazy/*r*/ = [], module/*GraphQL_EXPERIMENTAL/*i*/*/ = global/*e*/.getOwnFields(), GraphQLConstants/*s*/ = 0; GraphQLConstants/*s*/ < module/*GraphQL_EXPERIMENTAL/*i*/*/.length; GraphQLConstants/*s*/++) {
            var u = a(module/*GraphQL_EXPERIMENTAL/*i*/*/[GraphQLConstants/*s*/], require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/, requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/);
            u && requireLazy/*r*/.push(u)
        }
        for (var c = [], GraphQLStoreDataHandler/*p*/ = global/*e*/.getFragments(), invariant/*d*/ = 0; invariant/*d*/ < GraphQLStoreDataHandler/*p*/.length; invariant/*d*/++) c.push(o(GraphQLStoreDataHandler/*p*/[invariant/*d*/], require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/, requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/));
        return global/*e*/.shallowClone(requireLazy/*r*/, c)
    }

    function a(global/*e*/, require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/, requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/) {
        var requireLazy/*r*/ = global/*e*/.getFieldName();
        if ("id" === requireLazy/*r*/) return global/*e*/;
        var module/*GraphQL_EXPERIMENTAL/*i*/*/ = require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/.getOwnField(requireLazy/*r*/);
        if (!module/*GraphQL_EXPERIMENTAL/*i*/*/) return null;
        if (l(module/*GraphQL_EXPERIMENTAL/*i*/*/)) {
            var a = o(global/*e*/, module/*GraphQL_EXPERIMENTAL/*i*/*/, requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/);
            return a.hasFields() ? a : null
        }
        return global/*e*/.isConnection() ? requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/ && requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/(global/*e*/) ? u(global/*e*/) : global/*e*/ : global/*e*/
    }

    function GraphQLConstants/*s*/(global/*e*/) {
        return !global/*e*/.isGenerated()
    }

    function l(global/*e*/) {
        return global/*e*/.getOwnFields().some(GraphQLConstants/*s*/)
    }

    function u(global/*e*/) {
        for (var require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/ = null, requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/ = null, requireLazy/*r*/ = global/*e*/.getOwnFields(), module/*GraphQL_EXPERIMENTAL/*i*/*/ = 0; module/*GraphQL_EXPERIMENTAL/*i*/*/ < requireLazy/*r*/.length; module/*GraphQL_EXPERIMENTAL/*i*/*/++) {
            var o = requireLazy/*r*/[module/*GraphQL_EXPERIMENTAL/*i*/*/],
                a = o.getFieldName(),
                GraphQLConstants/*s*/ = a === _.EDGES || a === _.PAGE_INFO;
            GraphQLConstants/*s*/ || (require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/ = require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/ || [], require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/.push(o))
        }
        for (var l = global/*e*/.getFragments(), c = 0; c < l.length; c++) {
            var GraphQLStoreDataHandler/*p*/ = u(l[c]);
            GraphQLStoreDataHandler/*p*/ && (requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/ = requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/ || [], requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/.push(GraphQLStoreDataHandler/*p*/))
        }
        return require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/ || requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/ ? global/*e*/.shallowClone(require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/, requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/) : null
    }

    function c(global/*e*/) {
        var require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/ = global/*e*/.getOwnFields().filter(function(global/*e*/) {
                return global/*e*/.getFieldName() !== _.NODE && global/*e*/.getFieldName() !== _.CURSOR
            }),
            requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/ = global/*e*/.getFragments().map(c);
        return new g.QueryFragment("MutationQueryCreatorEdge", "UnknownType", require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/, requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/)
    }

    function GraphQLStoreDataHandler/*p*/(global/*e*/) {
        return Array.isArray(global/*e*/)
    }

    function invariant/*d*/(global/*e*/) {
        var require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/, requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/ = [];
        for (var requireLazy/*r*/ in global/*e*/)
            if (!S.isMetadataKey(requireLazy/*r*/)) {
                if (require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/ = null, "object" == typeof global/*e*/[requireLazy/*r*/])
                    if (Array.isArray(global/*e*/[requireLazy/*r*/]))
                        if (R(global/*e*/[requireLazy/*r*/])) require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/ = [];
                        else {
                            var module/*GraphQL_EXPERIMENTAL/*i*/*/ = global/*e*/[requireLazy/*r*/][0];
                            require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/ = "object" == typeof module/*GraphQL_EXPERIMENTAL/*i*/*/ ? invariant/*d*/(module/*GraphQL_EXPERIMENTAL/*i*/*/) : []
                        } else require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/ = invariant/*d*/(global/*e*/[requireLazy/*r*/]);
                "node" === requireLazy/*r*/ && (require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/.push(new g.Field("id")), requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/.push(new g.Field("cursor")));
                var o = h(requireLazy/*r*/, require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/);
                requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/.push(o)
            }
        return requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/
    }

    function h(global/*e*/, require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/) {
        var requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/ = global/*e*/.indexOf(".");
        if (-1 === requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/) return new g.Field(global/*e*/, require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/);
        for (var requireLazy/*r*/ = [], module/*GraphQL_EXPERIMENTAL/*i*/*/ = global/*e*/.substring(requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/ + 1), o = global/*e*/.substring(0, requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/), a = module/*GraphQL_EXPERIMENTAL/*i*/*/.split("."), GraphQLConstants/*s*/ = 0; GraphQLConstants/*s*/ < a.length; GraphQLConstants/*s*/++) {
            var l = a[GraphQLConstants/*s*/],
                u = l.match(/^(\w+)\(([^()]*)\)$/);
            u || b(0, "Malformed field name %GraphQLConstants/*s*/ provided in optimistic payload", global/*e*/), requireLazy/*r*/.push(new g.Callv(u[1], u[2].split(",")))
        }
        return new g.Field(o, require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/, null, requireLazy/*r*/)
    }

    function f(global/*e*/) {
        return 0 !== global/*e*/.getFragments().length && b(0, "Fat queries do not support fragments yet"), global/*e*/
    }
    var m = require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/("DliteLog"),
        g = require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/("GraphQL_EXPERIMENTAL"),
        _ = require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/("GraphQLConstants"),
        y = require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/("GraphQLMutationProperties"),
        v = require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/("GraphQLStore"),
        S = require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/("GraphQLStoreDataHandler"),
        b = require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/("invariant"),
        R = require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/("isEmpty"),
        w = {
            createQuery: function(global/*e*/, require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/) {
                var requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/ = f(y.getFatQueryForType(global/*e*/)),
                    requireLazy/*r*/ = [];
                for (var module/*GraphQL_EXPERIMENTAL/*i*/*/ in require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/)
                    if (require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/.hasOwnProperty(module/*GraphQL_EXPERIMENTAL/*i*/*/)) {
                        requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/.hasOwnField(module/*GraphQL_EXPERIMENTAL/*i*/*/) || b(0, "Anything in the idMap for createQuery should be part of the relevant mutation'GraphQLConstants/*s*/ fat query.");
                        var a = requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/.getOwnField(module/*GraphQL_EXPERIMENTAL/*i*/*/),
                            GraphQLConstants/*s*/ = require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/[module/*GraphQL_EXPERIMENTAL/*i*/*/],
                            l = v.getTrackedQueryByID(GraphQLConstants/*s*/),
                            u = new g.Field(module/*GraphQL_EXPERIMENTAL/*i*/*/, l.getOwnFields(), l.getFragments());
                        requireLazy/*r*/.push(o(u, a))
                    }
                return new g.QueryFragment("MutationQuery", requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/.type(), requireLazy/*r*/)
            },
            createRangeDeleteQuery: function(global/*e*/, require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/, requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/, requireLazy/*r*/) {
                var module/*GraphQL_EXPERIMENTAL/*i*/*/ = f(y.getFatQueryForType(global/*e*/));
                module/*GraphQL_EXPERIMENTAL/*i*/*/.hasOwnField(requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/) || b(0, "The fatQuery must include the range field for a delete mutation");
                var a = v.getTrackedQueryByID(require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/),
                    GraphQLConstants/*s*/ = new g.Field(requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/, a.getOwnFields(), a.getFragments()),
                    l = function(global/*e*/) {
                        return global/*e*/.getFieldName() === requireLazy/*r*/
                    },
                    u = o(GraphQLConstants/*s*/, module/*GraphQL_EXPERIMENTAL/*i*/*/.getOwnField(requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/), l);
                return new g.QueryFragment("MutationQuery", module/*GraphQL_EXPERIMENTAL/*i*/*/.type(), [u])
            },
            createRangeAddQuery: function(global/*e*/, require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/, requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/, requireLazy/*r*/, module/*GraphQL_EXPERIMENTAL/*i*/*/) {
                var a = f(y.getFatQueryForType(global/*e*/)),
                    GraphQLConstants/*s*/ = y.getRangeConfigForType(global/*e*/),
                    l = v.getTrackedQueryByID(requireLazy/*r*/),
                    u = new g.Field(module/*GraphQL_EXPERIMENTAL/*i*/*/ ? module/*GraphQL_EXPERIMENTAL/*i*/*/ : "range_parent_field", l.getOwnFields(), l.getFragments()),
                    GraphQLStoreDataHandler/*p*/ = u.getUnaliasedFields(require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/),
                    invariant/*d*/ = requireLazy/*r*/ === _.VIEWER_CLIENT_ID ? [E] : [C];
                if (0 === GraphQLStoreDataHandler/*p*/.length) return m.warn("Did not find range as a child of the parent field"), invariant/*d*/.push(D), new g.QueryFragment("MutationQuery", a.type(), [new g.Field(requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/, null, invariant/*d*/)]);
                for (var h = [], S = [], b = {}, R = 0; R < GraphQLStoreDataHandler/*p*/.length; R++) {
                    var w = GraphQLStoreDataHandler/*p*/[R],
                        T = w.getUnaliasedFields(_.EDGES);
                    if (T.length) {
                        var x = w.getCalls().filter(function(global/*e*/) {
                            return !_.RANGE_CALLS[global/*e*/.getName()]
                        });
                        if (x.join(".") in GraphQLConstants/*s*/)
                            for (var P = 0; P < T.length; P++) {
                                for (var I = T[P], F = I.getUnaliasedFields(_.NODE), L = 0; L < F.length; L++) S.push(new g.QueryFragment("MutationQueryCreatorEdge", "UnknownType", [F[L]]));
                                invariant/*d*/.push(c(I))
                            } else b[w.getGeneratedAlias()] = !0
                    }
                }
                S.length ? h.push(new g.Field(requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/, null, S.concat(invariant/*d*/))) : __DEV__ && console.warn("Did you forget to update GraphQLMutationProperties.rangeConfigs for your mutation %GraphQLConstants/*s*/? No edge field could be added to the query.", global/*e*/);
                var M = function(global/*e*/) {
                    return !(global/*e*/.getGeneratedAlias() in b)
                };
                if (module/*GraphQL_EXPERIMENTAL/*i*/*/ && a.hasOwnField(module/*GraphQL_EXPERIMENTAL/*i*/*/)) {
                    var Q = o(u, a.getOwnField(module/*GraphQL_EXPERIMENTAL/*i*/*/), M);
                    Q.hasFields() && h.push(Q)
                }
                return new g.QueryFragment("MutationQuery", a.type(), h)
            },
            createQueryFromOptimisticPayload: function(global/*e*/) {
                global/*e*/ && 1 === Object.keys(global/*e*/).length || b(0, "malformed optimistic payload received");
                var require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/ = Object.keys(global/*e*/)[0],
                    requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/ = f(y.getFatQueryForType(require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/)),
                    requireLazy/*r*/ = global/*e*/[require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/];
                return new g.Mutation("OptimisticQuery", requireDynamic/*DliteLog/*GraphQLStore/*n*/*/*/.type(), new g.Call(require/*exports/*GraphQLMutationProperties/*isEmpty/*t*/*/*/*/), invariant/*d*/(GraphQLStoreDataHandler/*p*/(requireLazy/*r*/) ? requireLazy/*r*/[0] : requireLazy/*r*/))
            }
        },
        C = new g.QueryFragment("MutationQueryCreatorEdgeMetadata", "UnknownType", [new g.Field("cursor"), new g.Field("source", [new g.Field("id")])]),
        E = new g.QueryFragment("MutationQueryCreatorEdgeMetadata", "UnknownType", [new g.Field("cursor")]),
        D = new g.QueryFragment("MutationQueryCreatorEdgeMetadata", "UnknownType", [new g.Field("node", [new g.Field("id")])]);
    module/*GraphQL_EXPERIMENTAL/*i*/*/.exports = w
});