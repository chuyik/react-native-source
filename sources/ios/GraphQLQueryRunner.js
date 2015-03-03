__d("GraphQLQueryRunner",["DliteFetchModeConstants","DliteLog","DliteLogger","DliteProfiler","DliteTaskScheduler","GraphQL_EXPERIMENTAL","GraphQLDeferredQueryTracker","GraphQLStore","Promise","PromiseMap","containsQueryRootCall","extendArray","fetchRQL","forEachObject","generateForceIndex","mapObject","setImmediate","splitDeferredQueries","subtractQuery","throwImmediate"],function (global/*DliteLogger/*e*/*/, require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/, requireDynamic/*exports/*DliteFetchModeConstants/*GraphQL_EXPERIMENTAL/*n*/*/*/*/, requireLazy/*GraphQLDeferredQueryTracker/*r*/*/, module/*DliteLog/*i*/*/) {
    "use strict";

    function GraphQLStore/*o*/(global/*DliteLogger/*e*/*/) {
        return !!global/*DliteLogger/*e*/*/
    }

    function a(global/*DliteLogger/*e*/*/) {
        var require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/ = [],
            requireDynamic/*exports/*DliteFetchModeConstants/*GraphQL_EXPERIMENTAL/*n*/*/*/*/ = global/*DliteLogger/*e*/*/.getQuery().rootCall();
        return F.every(function(requireLazy/*GraphQLDeferredQueryTracker/*r*/*/) {
            var module/*DliteLog/*i*/*/ = requireLazy/*GraphQLDeferredQueryTracker/*r*/*/.query;
            if (b(module/*DliteLog/*i*/*/.getQuery().rootCall(), requireDynamic/*exports/*DliteFetchModeConstants/*GraphQL_EXPERIMENTAL/*n*/*/*/*/)) {
                var GraphQLStore/*o*/ = P(global/*DliteLogger/*e*/*/, module/*DliteLog/*i*/*/);
                GraphQLStore/*o*/ !== global/*DliteLogger/*e*/*/ && (require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/.push(requireLazy/*GraphQLDeferredQueryTracker/*r*/*/.promise), global/*DliteLogger/*e*/*/ = GraphQLStore/*o*/)
            }
            return null !== global/*DliteLogger/*e*/*/
        }), {
            query: global/*DliteLogger/*e*/*/,
            DliteProfiler/*dependencies*/: require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/
        }
    }

    function Promise/*s*/(global/*DliteLogger/*e*/*/) {
        var require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/ = global/*DliteLogger/*e*/*/.getOwnFields();
        return 1 !== require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/.length || "id" !== require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/[0].getFieldName() ? !0 : global/*DliteLogger/*e*/*/.getFragments().some(Promise/*s*/)
    }

    function l(global/*DliteLogger/*e*/*/) {
        var require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/ = global/*DliteLogger/*e*/*/.getQuery();
        return "node" === require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/.rootCall().getName() && !Promise/*s*/(require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/)
    }

    function u(global/*DliteLogger/*e*/*/) {
        return global/*DliteLogger/*e*/*/.getQuery().isDeferred()
    }

    function PromiseMap/*c*/(global/*DliteLogger/*e*/*/, require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/, requireDynamic/*exports/*DliteFetchModeConstants/*GraphQL_EXPERIMENTAL/*n*/*/*/*/, requireLazy/*GraphQLDeferredQueryTracker/*r*/*/) {
        var module/*DliteLog/*i*/*/ = require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/.onBlockingRequest,
            GraphQLStore/*o*/ = require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/.onResolvable,
            Promise/*s*/ = require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/.onSuccess,
            PromiseMap/*c*/ = require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/.onFailure,
            containsQueryRootCall/*p*/ = 0;
        forEachObject/*g*/.await(function() {
            var require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/ = [];
            global/*DliteLogger/*e*/*/.forEach(function(global/*DliteLogger/*e*/*/) {
                x(global/*DliteLogger/*e*/*/).forEach(function(global/*DliteLogger/*e*/*/) {
                    l(global/*DliteLogger/*e*/*/) || (u(global/*DliteLogger/*e*/*/) || containsQueryRootCall/*p*/++, require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/.push(global/*DliteLogger/*e*/*/))
                })
            });
            var splitDeferredQueries/*f*/ = requireLazy/*GraphQLDeferredQueryTracker/*r*/*/ === d.FETCH_MODE_REFETCH ? E() : null,
                fetchRQL/*m*/ = function(global/*DliteLogger/*e*/*/) {
                    if (u(global/*DliteLogger/*e*/*/) || containsQueryRootCall/*p*/--, !containsQueryRootCall/*p*/) try {
                        GraphQLStore/*o*/()
                    } catch (require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/) {
                        I(require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/)
                    }
                },
                forEachObject/*g*/ = function(global/*DliteLogger/*e*/*/, require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/) {
                    return global/*DliteLogger/*e*/*/.map(requireLazy/*GraphQLDeferredQueryTracker/*r*/*/ === d.FETCH_MODE_CLIENT || requireLazy/*GraphQLDeferredQueryTracker/*r*/*/ === d.FETCH_MODE_REFETCH ? function(global/*DliteLogger/*e*/*/) {
                        var requireDynamic/*exports/*DliteFetchModeConstants/*GraphQL_EXPERIMENTAL/*n*/*/*/*/ = a(global/*DliteLogger/*e*/*/);
                        return requireDynamic/*exports/*DliteFetchModeConstants/*GraphQL_EXPERIMENTAL/*n*/*/*/*/.query && requireDynamic/*exports/*DliteFetchModeConstants/*GraphQL_EXPERIMENTAL/*n*/*/*/*/.DliteProfiler/*dependencies*/.push(M.add(requireDynamic/*exports/*DliteFetchModeConstants/*GraphQL_EXPERIMENTAL/*n*/*/*/*/.query, mapObject/*w*/(requireDynamic/*exports/*DliteFetchModeConstants/*GraphQL_EXPERIMENTAL/*n*/*/*/*/.query), require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/, splitDeferredQueries/*f*/)), subtractQuery/*v.all*/(requireDynamic/*exports/*DliteFetchModeConstants/*GraphQL_EXPERIMENTAL/*n*/*/*/*/.DliteProfiler/*dependencies*/).then(function() {
                            return fetchRQL/*m*/(global/*DliteLogger/*e*/*/)
                        })
                    } : function(global/*DliteLogger/*e*/*/) {
                        return M.add(global/*DliteLogger/*e*/*/, throwImmediate/*L.get*/(global/*DliteLogger/*e*/*/.getQuery().getID()), require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/, null).then(function() {
                            return fetchRQL/*m*/(global/*DliteLogger/*e*/*/)
                        })
                    })
                };
            if (require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/.length) {
                var _ = u(require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/[0]) ? [] : require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/.splice(0, 1),
                    y = forEachObject/*g*/(_, []),
                    S = forEachObject/*g*/(require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/, y);
                subtractQuery/*v.all*/(y.concat(S)).done(function() {
                    requireDynamic/*exports/*DliteFetchModeConstants/*GraphQL_EXPERIMENTAL/*n*/*/*/*/.stop(), Promise/*s*/()
                }, function(global/*DliteLogger/*e*/*/) {
                    requireDynamic/*exports/*DliteFetchModeConstants/*GraphQL_EXPERIMENTAL/*n*/*/*/*/.stop(), PromiseMap/*c*/(global/*DliteLogger/*e*/*/), h.warn(global/*DliteLogger/*e*/*/.message)
                }), T(containsQueryRootCall/*p*/ ? module/*DliteLog/*i*/*/ : GraphQLStore/*o*/)
            } else T(GraphQLStore/*o*/), T(Promise/*s*/)
        })
    }

    function containsQueryRootCall/*p*/(global/*DliteLogger/*e*/*/) {
        var require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/ = global/*DliteLogger/*e*/*/.onBlockingRequest,
            requireDynamic/*exports/*DliteFetchModeConstants/*GraphQL_EXPERIMENTAL/*n*/*/*/*/ = global/*DliteLogger/*e*/*/.onResolvable,
            requireLazy/*GraphQLDeferredQueryTracker/*r*/*/ = global/*DliteLogger/*e*/*/.onSuccess,
            module/*DliteLog/*i*/*/ = global/*DliteLogger/*e*/*/.onFailure,
            GraphQLStore/*o*/ = !1;
        return {
            abort: function() {
                GraphQLStore/*o*/ = !0
            },
            abortableCallbacks: D({
                onBlockingRequest: require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/,
                onResolvable: requireDynamic/*exports/*DliteFetchModeConstants/*GraphQL_EXPERIMENTAL/*n*/*/*/*/,
                onSuccess: requireLazy/*GraphQLDeferredQueryTracker/*r*/*/,
                onFailure: module/*DliteLog/*i*/*/
            }, function(global/*DliteLogger/*e*/*/) {
                return function() {
                    return global/*DliteLogger/*e*/*/ && !GraphQLStore/*o*/ ? global/*DliteLogger/*e*/*/.apply(null, arguments) : void 0
                }
            })
        }
    }
    var d = require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/("DliteFetchModeConstants"),
        h = require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/("DliteLog"),
        splitDeferredQueries/*f*/ = require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/("DliteLogger"),
        fetchRQL/*m*/ = require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/("DliteProfiler"),
        forEachObject/*g*/ = require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/("DliteTaskScheduler"),
        _ = (require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/("GraphQL_EXPERIMENTAL"), require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/("GraphQLDeferredQueryTracker")),
        y = require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/("GraphQLStore"),
        v = require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/("Promise"),
        S = require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/("PromiseMap"),
        b = require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/("containsQueryRootCall"),
        R = require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/("extendArray"),
        mapObject/*w*/ = require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/("fetchRQL"),
        C = require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/("forEachObject"),
        E = require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/("generateForceIndex"),
        D = require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/("mapObject"),
        T = require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/("setImmediate"),
        x = require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/("splitDeferredQueries"),
        P = require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/("subtractQuery"),
        I = require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/("throwImmediate"),
        F = [],
        L = new S,
        M = {
            run: function(global/*DliteLogger/*e*/*/, require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/, requireDynamic/*exports/*DliteFetchModeConstants/*GraphQL_EXPERIMENTAL/*n*/*/*/*/) {
                var requireLazy/*GraphQLDeferredQueryTracker/*r*/*/ = containsQueryRootCall/*p*/(require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/),
                    module/*DliteLog/*i*/*/ = requireLazy/*GraphQLDeferredQueryTracker/*r*/*/.abort,
                    GraphQLStore/*o*/ = requireLazy/*GraphQLDeferredQueryTracker/*r*/*/.abortableCallbacks;
                y.emit(y.Events.beginQuery, global/*DliteLogger/*e*/*/);
                var a = splitDeferredQueries/*f*/.logClientEvent("GraphQLQueryRunner.run");
                requireDynamic/*exports/*DliteFetchModeConstants/*GraphQL_EXPERIMENTAL/*n*/*/*/*/ = requireDynamic/*exports/*DliteFetchModeConstants/*GraphQL_EXPERIMENTAL/*n*/*/*/*/ || d.FETCH_MODE_CLIENT;
                var Promise/*s*/ = [];
                return requireDynamic/*exports/*DliteFetchModeConstants/*GraphQL_EXPERIMENTAL/*n*/*/*/*/ === d.FETCH_MODE_CLIENT ? C(global/*DliteLogger/*e*/*/, function(global/*DliteLogger/*e*/*/) {
                    global/*DliteLogger/*e*/*/ && R(Promise/*s*/, y.getDiffQueries(global/*DliteLogger/*e*/*/))
                }) : C(global/*DliteLogger/*e*/*/, function(global/*DliteLogger/*e*/*/) {
                    global/*DliteLogger/*e*/*/ && Promise/*s*/.push(global/*DliteLogger/*e*/*/)
                }), PromiseMap/*c*/(Promise/*s*/, GraphQLStore/*o*/, a, requireDynamic/*exports/*DliteFetchModeConstants/*GraphQL_EXPERIMENTAL/*n*/*/*/*/), y.emit(y.Events.endQuery), {
                    abort: module/*DliteLog/*i*/*/
                }
            },
            forceFetch: function(global/*DliteLogger/*e*/*/, require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/) {
                var requireDynamic/*exports/*DliteFetchModeConstants/*GraphQL_EXPERIMENTAL/*n*/*/*/*/ = containsQueryRootCall/*p*/(require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/),
                    requireLazy/*GraphQLDeferredQueryTracker/*r*/*/ = requireDynamic/*exports/*DliteFetchModeConstants/*GraphQL_EXPERIMENTAL/*n*/*/*/*/.abort,
                    module/*DliteLog/*i*/*/ = requireDynamic/*exports/*DliteFetchModeConstants/*GraphQL_EXPERIMENTAL/*n*/*/*/*/.abortableCallbacks;
                y.emit(y.Events.beginQuery, global/*DliteLogger/*e*/*/);
                var GraphQLStore/*o*/ = splitDeferredQueries/*f*/.logClientEvent("GraphQLQueryRunner.forceFetch"),
                    a = [];
                C(global/*DliteLogger/*e*/*/, function(global/*DliteLogger/*e*/*/) {
                    global/*DliteLogger/*e*/*/ && R(a, y.getDiffQueries(global/*DliteLogger/*e*/*/))
                }), 0 === a.length && (T(module/*DliteLog/*i*/*/.onResolvable), module/*DliteLog/*i*/*/.onBlockingRequest = function() {});
                var Promise/*s*/ = [];
                return C(global/*DliteLogger/*e*/*/, function(global/*DliteLogger/*e*/*/) {
                    global/*DliteLogger/*e*/*/ && Promise/*s*/.push(global/*DliteLogger/*e*/*/)
                }), PromiseMap/*c*/(Promise/*s*/, module/*DliteLog/*i*/*/, GraphQLStore/*o*/, d.FETCH_MODE_REFETCH), y.emit(y.Events.endQuery), {
                    abort: requireLazy/*GraphQLDeferredQueryTracker/*r*/*/
                }
            },
            add: function(global/*DliteLogger/*e*/*/, require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/, requireDynamic/*exports/*DliteFetchModeConstants/*GraphQL_EXPERIMENTAL/*n*/*/*/*/, requireLazy/*GraphQLDeferredQueryTracker/*r*/*/) {
                _.recordQuery(global/*DliteLogger/*e*/*/);
                var module/*DliteLog/*i*/*/ = F.length,
                    GraphQLStore/*o*/ = subtractQuery/*v.all*/(requireDynamic/*exports/*DliteFetchModeConstants/*GraphQL_EXPERIMENTAL/*n*/*/*/*/).finally(function() {
                        return require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/.then(function(require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/) {
                            return forEachObject/*g*/.await(function() {
                                var requireDynamic/*exports/*DliteFetchModeConstants/*GraphQL_EXPERIMENTAL/*n*/*/*/*/ = require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/.response;
                                y.emit(y.Events.dataFromServer, requireDynamic/*exports/*DliteFetchModeConstants/*GraphQL_EXPERIMENTAL/*n*/*/*/*/), y.handleUpdate(requireDynamic/*exports/*DliteFetchModeConstants/*GraphQL_EXPERIMENTAL/*n*/*/*/*/, global/*DliteLogger/*e*/*/, null, requireLazy/*GraphQLDeferredQueryTracker/*r*/*/), _.resolveQuery(global/*DliteLogger/*e*/*/, requireDynamic/*exports/*DliteFetchModeConstants/*GraphQL_EXPERIMENTAL/*n*/*/*/*/), delete F[module/*DliteLog/*i*/*/]
                            })
                        }, function(require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/) {
                            if (_.rejectQuery(global/*DliteLogger/*e*/*/, require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/), delete F[module/*DliteLog/*i*/*/], h.warn(require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/.message), !u(global/*DliteLogger/*e*/*/)) throw require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/
                        })
                    });
                return F[module/*DliteLog/*i*/*/] = {
                    query: global/*DliteLogger/*e*/*/,
                    promise: GraphQLStore/*o*/
                }, GraphQLStore/*o*/
            },
            resetPending: function() {
                F = [], _.reset()
            },
            resolveQueryByID: function(global/*DliteLogger/*e*/*/, require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/) {
                L.resolveKey(global/*DliteLogger/*e*/*/, require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/)
            },
            rejectQueryByID: function(global/*DliteLogger/*e*/*/, require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/) {
                L.rejectKey(global/*DliteLogger/*e*/*/, require/*DliteTaskScheduler/*generateForceIndex/*setImmediate/*t*/*/*/*/)
            },
            hasPendingQueries: function() {
                return F.some(GraphQLStore/*o*/)
            },
            hasPendingQuery: function(global/*DliteLogger/*e*/*/) {
                return _.isQueryPending(global/*DliteLogger/*e*/*/)
            }
        };
    fetchRQL/*m*/.instrumentMethods(M, {
        hasPendingQuery: "GraphQLQueryRunner.hasPendingQuery"
    }), module/*DliteLog/*i*/*/.exports = M
});