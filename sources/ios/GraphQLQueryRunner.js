__d("GraphQLQueryRunner",["DliteFetchModeConstants","DliteLog","DliteLogger","DliteProfiler","DliteTaskScheduler","GraphQL_EXPERIMENTAL","GraphQLDeferredQueryTracker","GraphQLStore","Promise","PromiseMap","containsQueryRootCall","extendArray","fetchRQL","forEachObject","generateForceIndex","mapObject","setImmediate","splitDeferredQueries","subtractQuery","throwImmediate"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        return !!global/*e*/
    }

    function a(global/*e*/) {
        var require/*t*/ = [],
            requireDynamic/*n*/ = global/*e*/.getQuery().rootCall();
        return F.every(function(requireLazy/*r*/) {
            var module/*i*/ = requireLazy/*r*/.query;
            if (b(module/*i*/.getQuery().rootCall(), requireDynamic/*n*/)) {
                var o = P(global/*e*/, module/*i*/);
                o !== global/*e*/ && (require/*t*/.push(requireLazy/*r*/.promise), global/*e*/ = o)
            }
            return null !== global/*e*/
        }), {
            query: global/*e*/,
            dependencies: require/*t*/
        }
    }

    function s(global/*e*/) {
        var require/*t*/ = global/*e*/.getOwnFields();
        return 1 !== require/*t*/.length || "id" !== require/*t*/[0].getFieldName() ? !0 : global/*e*/.getFragments().some(s)
    }

    function l(global/*e*/) {
        var require/*t*/ = global/*e*/.getQuery();
        return "node" === require/*t*/.rootCall().getName() && !s(require/*t*/)
    }

    function u(global/*e*/) {
        return global/*e*/.getQuery().isDeferred()
    }

    function c(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
        var module/*i*/ = require/*t*/.onBlockingRequest,
            o = require/*t*/.onResolvable,
            s = require/*t*/.onSuccess,
            c = require/*t*/.onFailure,
            p = 0;
        g.await(function() {
            var require/*t*/ = [];
            global/*e*/.forEach(function(global/*e*/) {
                x(global/*e*/).forEach(function(global/*e*/) {
                    l(global/*e*/) || (u(global/*e*/) || p++, require/*t*/.push(global/*e*/))
                })
            });
            var f = requireLazy/*r*/ === d.FETCH_MODE_REFETCH ? E() : null,
                m = function(global/*e*/) {
                    if (u(global/*e*/) || p--, !p) try {
                        o()
                    } catch (require/*t*/) {
                        I(require/*t*/)
                    }
                },
                g = function(global/*e*/, require/*t*/) {
                    return global/*e*/.map(requireLazy/*r*/ === d.FETCH_MODE_CLIENT || requireLazy/*r*/ === d.FETCH_MODE_REFETCH ? function(global/*e*/) {
                        var requireDynamic/*n*/ = a(global/*e*/);
                        return requireDynamic/*n*/.query && requireDynamic/*n*/.dependencies.push(M.add(requireDynamic/*n*/.query, w(requireDynamic/*n*/.query), require/*t*/, f)), v.all(requireDynamic/*n*/.dependencies).then(function() {
                            return m(global/*e*/)
                        })
                    } : function(global/*e*/) {
                        return M.add(global/*e*/, L.get(global/*e*/.getQuery().getID()), require/*t*/, null).then(function() {
                            return m(global/*e*/)
                        })
                    })
                };
            if (require/*t*/.length) {
                var _ = u(require/*t*/[0]) ? [] : require/*t*/.splice(0, 1),
                    y = g(_, []),
                    S = g(require/*t*/, y);
                v.all(y.concat(S)).done(function() {
                    requireDynamic/*n*/.stop(), s()
                }, function(global/*e*/) {
                    requireDynamic/*n*/.stop(), c(global/*e*/), h.warn(global/*e*/.message)
                }), T(p ? module/*i*/ : o)
            } else T(o), T(s)
        })
    }

    function p(global/*e*/) {
        var require/*t*/ = global/*e*/.onBlockingRequest,
            requireDynamic/*n*/ = global/*e*/.onResolvable,
            requireLazy/*r*/ = global/*e*/.onSuccess,
            module/*i*/ = global/*e*/.onFailure,
            o = !1;
        return {
            abort: function() {
                o = !0
            },
            abortableCallbacks: D({
                onBlockingRequest: require/*t*/,
                onResolvable: requireDynamic/*n*/,
                onSuccess: requireLazy/*r*/,
                onFailure: module/*i*/
            }, function(global/*e*/) {
                return function() {
                    return global/*e*/ && !o ? global/*e*/.apply(null, arguments) : void 0
                }
            })
        }
    }
    var d = require/*t*/("DliteFetchModeConstants"),
        h = require/*t*/("DliteLog"),
        f = require/*t*/("DliteLogger"),
        m = require/*t*/("DliteProfiler"),
        g = require/*t*/("DliteTaskScheduler"),
        _ = (require/*t*/("GraphQL_EXPERIMENTAL"), require/*t*/("GraphQLDeferredQueryTracker")),
        y = require/*t*/("GraphQLStore"),
        v = require/*t*/("Promise"),
        S = require/*t*/("PromiseMap"),
        b = require/*t*/("containsQueryRootCall"),
        R = require/*t*/("extendArray"),
        w = require/*t*/("fetchRQL"),
        C = require/*t*/("forEachObject"),
        E = require/*t*/("generateForceIndex"),
        D = require/*t*/("mapObject"),
        T = require/*t*/("setImmediate"),
        x = require/*t*/("splitDeferredQueries"),
        P = require/*t*/("subtractQuery"),
        I = require/*t*/("throwImmediate"),
        F = [],
        L = new S,
        M = {
            run: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = p(require/*t*/),
                    module/*i*/ = requireLazy/*r*/.abort,
                    o = requireLazy/*r*/.abortableCallbacks;
                y.emit(y.Events.beginQuery, global/*e*/);
                var a = f.logClientEvent("GraphQLQueryRunner.run");
                requireDynamic/*n*/ = requireDynamic/*n*/ || d.FETCH_MODE_CLIENT;
                var s = [];
                return requireDynamic/*n*/ === d.FETCH_MODE_CLIENT ? C(global/*e*/, function(global/*e*/) {
                    global/*e*/ && R(s, y.getDiffQueries(global/*e*/))
                }) : C(global/*e*/, function(global/*e*/) {
                    global/*e*/ && s.push(global/*e*/)
                }), c(s, o, a, requireDynamic/*n*/), y.emit(y.Events.endQuery), {
                    abort: module/*i*/
                }
            },
            forceFetch: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = p(require/*t*/),
                    requireLazy/*r*/ = requireDynamic/*n*/.abort,
                    module/*i*/ = requireDynamic/*n*/.abortableCallbacks;
                y.emit(y.Events.beginQuery, global/*e*/);
                var o = f.logClientEvent("GraphQLQueryRunner.forceFetch"),
                    a = [];
                C(global/*e*/, function(global/*e*/) {
                    global/*e*/ && R(a, y.getDiffQueries(global/*e*/))
                }), 0 === a.length && (T(module/*i*/.onResolvable), module/*i*/.onBlockingRequest = function() {});
                var s = [];
                return C(global/*e*/, function(global/*e*/) {
                    global/*e*/ && s.push(global/*e*/)
                }), c(s, module/*i*/, o, d.FETCH_MODE_REFETCH), y.emit(y.Events.endQuery), {
                    abort: requireLazy/*r*/
                }
            },
            add: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                _.recordQuery(global/*e*/);
                var module/*i*/ = F.length,
                    o = v.all(requireDynamic/*n*/).finally(function() {
                        return require/*t*/.then(function(require/*t*/) {
                            return g.await(function() {
                                var requireDynamic/*n*/ = require/*t*/.response;
                                y.emit(y.Events.dataFromServer, requireDynamic/*n*/), y.handleUpdate(requireDynamic/*n*/, global/*e*/, null, requireLazy/*r*/), _.resolveQuery(global/*e*/, requireDynamic/*n*/), delete F[module/*i*/]
                            })
                        }, function(require/*t*/) {
                            if (_.rejectQuery(global/*e*/, require/*t*/), delete F[module/*i*/], h.warn(require/*t*/.message), !u(global/*e*/)) throw require/*t*/
                        })
                    });
                return F[module/*i*/] = {
                    query: global/*e*/,
                    promise: o
                }, o
            },
            resetPending: function() {
                F = [], _.reset()
            },
            resolveQueryByID: function(global/*e*/, require/*t*/) {
                L.resolveKey(global/*e*/, require/*t*/)
            },
            rejectQueryByID: function(global/*e*/, require/*t*/) {
                L.rejectKey(global/*e*/, require/*t*/)
            },
            hasPendingQueries: function() {
                return F.some(o)
            },
            hasPendingQuery: function(global/*e*/) {
                return _.isQueryPending(global/*e*/)
            }
        };
    m.instrumentMethods(M, {
        hasPendingQuery: "GraphQLQueryRunner.hasPendingQuery"
    }), module/*i*/.exports = M
});