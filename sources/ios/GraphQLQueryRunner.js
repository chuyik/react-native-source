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
            if (containsQueryRootCall/*b*/(module/*i*/.getQuery().rootCall(), requireDynamic/*n*/)) {
                var o = subtractQuery/*P*/(global/*e*/, module/*i*/);
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
        DliteTaskScheduler/*g*/.await(function() {
            var require/*t*/ = [];
            global/*e*/.forEach(function(global/*e*/) {
                splitDeferredQueries/*x*/(global/*e*/).forEach(function(global/*e*/) {
                    l(global/*e*/) || (u(global/*e*/) || p++, require/*t*/.push(global/*e*/))
                })
            });
            var DliteLogger/*f*/ = requireLazy/*r*/ === DliteFetchModeConstants/*d*/.FETCH_MODE_REFETCH ? generateForceIndex/*E*/() : null,
                DliteProfiler/*m*/ = function(global/*e*/) {
                    if (u(global/*e*/) || p--, !p) try {
                        o()
                    } catch (require/*t*/) {
                        throwImmediate/*I*/(require/*t*/)
                    }
                },
                DliteTaskScheduler/*g*/ = function(global/*e*/, require/*t*/) {
                    return global/*e*/.map(requireLazy/*r*/ === DliteFetchModeConstants/*d*/.FETCH_MODE_CLIENT || requireLazy/*r*/ === DliteFetchModeConstants/*d*/.FETCH_MODE_REFETCH ? function(global/*e*/) {
                        var requireDynamic/*n*/ = a(global/*e*/);
                        return requireDynamic/*n*/.query && requireDynamic/*n*/.dependencies.push(M.add(requireDynamic/*n*/.query, fetchRQL/*w*/(requireDynamic/*n*/.query), require/*t*/, DliteLogger/*f*/)), Promise/*v*/.all(requireDynamic/*n*/.dependencies).then(function() {
                            return DliteProfiler/*m*/(global/*e*/)
                        })
                    } : function(global/*e*/) {
                        return M.add(global/*e*/, L.get(global/*e*/.getQuery().getID()), require/*t*/, null).then(function() {
                            return DliteProfiler/*m*/(global/*e*/)
                        })
                    })
                };
            if (require/*t*/.length) {
                var _ = u(require/*t*/[0]) ? [] : require/*t*/.splice(0, 1),
                    GraphQLStore/*y*/ = DliteTaskScheduler/*g*/(_, []),
                    PromiseMap/*S*/ = DliteTaskScheduler/*g*/(require/*t*/, GraphQLStore/*y*/);
                Promise/*v*/.all(GraphQLStore/*y*/.concat(PromiseMap/*S*/)).done(function() {
                    requireDynamic/*n*/.stop(), s()
                }, function(global/*e*/) {
                    requireDynamic/*n*/.stop(), c(global/*e*/), DliteLog/*h*/.warn(global/*e*/.message)
                }), setImmediate/*T*/(p ? module/*i*/ : o)
            } else setImmediate/*T*/(o), setImmediate/*T*/(s)
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
            abortableCallbacks: mapObject/*D*/({
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
    var DliteFetchModeConstants/*d*/ = require/*t*/("DliteFetchModeConstants"),
        DliteLog/*h*/ = require/*t*/("DliteLog"),
        DliteLogger/*f*/ = require/*t*/("DliteLogger"),
        DliteProfiler/*m*/ = require/*t*/("DliteProfiler"),
        DliteTaskScheduler/*g*/ = require/*t*/("DliteTaskScheduler"),
        _ = (require/*t*/("GraphQL_EXPERIMENTAL"), require/*t*/("GraphQLDeferredQueryTracker")),
        GraphQLStore/*y*/ = require/*t*/("GraphQLStore"),
        Promise/*v*/ = require/*t*/("Promise"),
        PromiseMap/*S*/ = require/*t*/("PromiseMap"),
        containsQueryRootCall/*b*/ = require/*t*/("containsQueryRootCall"),
        extendArray/*R*/ = require/*t*/("extendArray"),
        fetchRQL/*w*/ = require/*t*/("fetchRQL"),
        forEachObject/*C*/ = require/*t*/("forEachObject"),
        generateForceIndex/*E*/ = require/*t*/("generateForceIndex"),
        mapObject/*D*/ = require/*t*/("mapObject"),
        setImmediate/*T*/ = require/*t*/("setImmediate"),
        splitDeferredQueries/*x*/ = require/*t*/("splitDeferredQueries"),
        subtractQuery/*P*/ = require/*t*/("subtractQuery"),
        throwImmediate/*I*/ = require/*t*/("throwImmediate"),
        F = [],
        L = new PromiseMap/*S*/,
        M = {
            run: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = p(require/*t*/),
                    module/*i*/ = requireLazy/*r*/.abort,
                    o = requireLazy/*r*/.abortableCallbacks;
                GraphQLStore/*y*/.emit(GraphQLStore/*y*/.Events.beginQuery, global/*e*/);
                var a = DliteLogger/*f*/.logClientEvent("GraphQLQueryRunner.run");
                requireDynamic/*n*/ = requireDynamic/*n*/ || DliteFetchModeConstants/*d*/.FETCH_MODE_CLIENT;
                var s = [];
                return requireDynamic/*n*/ === DliteFetchModeConstants/*d*/.FETCH_MODE_CLIENT ? forEachObject/*C*/(global/*e*/, function(global/*e*/) {
                    global/*e*/ && extendArray/*R*/(s, GraphQLStore/*y*/.getDiffQueries(global/*e*/))
                }) : forEachObject/*C*/(global/*e*/, function(global/*e*/) {
                    global/*e*/ && s.push(global/*e*/)
                }), c(s, o, a, requireDynamic/*n*/), GraphQLStore/*y*/.emit(GraphQLStore/*y*/.Events.endQuery), {
                    abort: module/*i*/
                }
            },
            forceFetch: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = p(require/*t*/),
                    requireLazy/*r*/ = requireDynamic/*n*/.abort,
                    module/*i*/ = requireDynamic/*n*/.abortableCallbacks;
                GraphQLStore/*y*/.emit(GraphQLStore/*y*/.Events.beginQuery, global/*e*/);
                var o = DliteLogger/*f*/.logClientEvent("GraphQLQueryRunner.forceFetch"),
                    a = [];
                forEachObject/*C*/(global/*e*/, function(global/*e*/) {
                    global/*e*/ && extendArray/*R*/(a, GraphQLStore/*y*/.getDiffQueries(global/*e*/))
                }), 0 === a.length && (setImmediate/*T*/(module/*i*/.onResolvable), module/*i*/.onBlockingRequest = function() {});
                var s = [];
                return forEachObject/*C*/(global/*e*/, function(global/*e*/) {
                    global/*e*/ && s.push(global/*e*/)
                }), c(s, module/*i*/, o, DliteFetchModeConstants/*d*/.FETCH_MODE_REFETCH), GraphQLStore/*y*/.emit(GraphQLStore/*y*/.Events.endQuery), {
                    abort: requireLazy/*r*/
                }
            },
            add: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                _.recordQuery(global/*e*/);
                var module/*i*/ = F.length,
                    o = Promise/*v*/.all(requireDynamic/*n*/).finally(function() {
                        return require/*t*/.then(function(require/*t*/) {
                            return DliteTaskScheduler/*g*/.await(function() {
                                var requireDynamic/*n*/ = require/*t*/.response;
                                GraphQLStore/*y*/.emit(GraphQLStore/*y*/.Events.dataFromServer, requireDynamic/*n*/), GraphQLStore/*y*/.handleUpdate(requireDynamic/*n*/, global/*e*/, null, requireLazy/*r*/), _.resolveQuery(global/*e*/, requireDynamic/*n*/), delete F[module/*i*/]
                            })
                        }, function(require/*t*/) {
                            if (_.rejectQuery(global/*e*/, require/*t*/), delete F[module/*i*/], DliteLog/*h*/.warn(require/*t*/.message), !u(global/*e*/)) throw require/*t*/
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
    DliteProfiler/*m*/.instrumentMethods(M, {
        hasPendingQuery: "GraphQLQueryRunner.hasPendingQuery"
    }), module/*i*/.exports = M
});