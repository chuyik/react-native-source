__d("GraphQLQueryRunner",["DliteFetchModeConstants","DliteLog","DliteLogger","DliteProfiler","DliteTaskScheduler","GraphQL_EXPERIMENTAL","GraphQLDeferredQueryTracker","GraphQLStore","Promise","PromiseMap","containsQueryRootCall","extendArray","fetchRQL","forEachObject","generateForceIndex","mapObject","setImmediate","splitDeferredQueries","subtractQuery","throwImmediate"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        return !!e
    }

    function a(e) {
        var t = [],
            n = e.getQuery().rootCall();
        return F.every(function(r) {
            var i = r.query;
            if (containsQueryRootCall/*b*/(i.getQuery().rootCall(), n)) {
                var o = subtractQuery/*P*/(e, i);
                o !== e && (t.push(r.promise), e = o)
            }
            return null !== e
        }), {
            query: e,
            dependencies: t
        }
    }

    function s(e) {
        var t = e.getOwnFields();
        return 1 !== t.length || "id" !== t[0].getFieldName() ? !0 : e.getFragments().some(s)
    }

    function l(e) {
        var t = e.getQuery();
        return "node" === t.rootCall().getName() && !s(t)
    }

    function u(e) {
        return e.getQuery().isDeferred()
    }

    function c(e, t, n, r) {
        var i = t.onBlockingRequest,
            o = t.onResolvable,
            s = t.onSuccess,
            c = t.onFailure,
            p = 0;
        DliteTaskScheduler/*g*/.await(function() {
            var t = [];
            e.forEach(function(e) {
                splitDeferredQueries/*x*/(e).forEach(function(e) {
                    l(e) || (u(e) || p++, t.push(e))
                })
            });
            var DliteLogger/*f*/ = r === DliteFetchModeConstants/*d*/.FETCH_MODE_REFETCH ? generateForceIndex/*E*/() : null,
                DliteProfiler/*m*/ = function(e) {
                    if (u(e) || p--, !p) try {
                        o()
                    } catch (t) {
                        throwImmediate/*I*/(t)
                    }
                },
                DliteTaskScheduler/*g*/ = function(e, t) {
                    return e.map(r === DliteFetchModeConstants/*d*/.FETCH_MODE_CLIENT || r === DliteFetchModeConstants/*d*/.FETCH_MODE_REFETCH ? function(e) {
                        var n = a(e);
                        return n.query && n.dependencies.push(M.add(n.query, fetchRQL/*w*/(n.query), t, DliteLogger/*f*/)), Promise/*v*/.all(n.dependencies).then(function() {
                            return DliteProfiler/*m*/(e)
                        })
                    } : function(e) {
                        return M.add(e, L.get(e.getQuery().getID()), t, null).then(function() {
                            return DliteProfiler/*m*/(e)
                        })
                    })
                };
            if (t.length) {
                var _ = u(t[0]) ? [] : t.splice(0, 1),
                    GraphQLStore/*y*/ = DliteTaskScheduler/*g*/(_, []),
                    PromiseMap/*S*/ = DliteTaskScheduler/*g*/(t, GraphQLStore/*y*/);
                Promise/*v*/.all(GraphQLStore/*y*/.concat(PromiseMap/*S*/)).done(function() {
                    n.stop(), s()
                }, function(e) {
                    n.stop(), c(e), DliteLog/*h*/.warn(e.message)
                }), setImmediate/*T*/(p ? i : o)
            } else setImmediate/*T*/(o), setImmediate/*T*/(s)
        })
    }

    function p(e) {
        var t = e.onBlockingRequest,
            n = e.onResolvable,
            r = e.onSuccess,
            i = e.onFailure,
            o = !1;
        return {
            abort: function() {
                o = !0
            },
            abortableCallbacks: mapObject/*D*/({
                onBlockingRequest: t,
                onResolvable: n,
                onSuccess: r,
                onFailure: i
            }, function(e) {
                return function() {
                    return e && !o ? e.apply(null, arguments) : void 0
                }
            })
        }
    }
    var DliteFetchModeConstants/*d*/ = t("DliteFetchModeConstants"),
        DliteLog/*h*/ = t("DliteLog"),
        DliteLogger/*f*/ = t("DliteLogger"),
        DliteProfiler/*m*/ = t("DliteProfiler"),
        DliteTaskScheduler/*g*/ = t("DliteTaskScheduler"),
        _ = (t("GraphQL_EXPERIMENTAL"), t("GraphQLDeferredQueryTracker")),
        GraphQLStore/*y*/ = t("GraphQLStore"),
        Promise/*v*/ = t("Promise"),
        PromiseMap/*S*/ = t("PromiseMap"),
        containsQueryRootCall/*b*/ = t("containsQueryRootCall"),
        extendArray/*R*/ = t("extendArray"),
        fetchRQL/*w*/ = t("fetchRQL"),
        forEachObject/*C*/ = t("forEachObject"),
        generateForceIndex/*E*/ = t("generateForceIndex"),
        mapObject/*D*/ = t("mapObject"),
        setImmediate/*T*/ = t("setImmediate"),
        splitDeferredQueries/*x*/ = t("splitDeferredQueries"),
        subtractQuery/*P*/ = t("subtractQuery"),
        throwImmediate/*I*/ = t("throwImmediate"),
        F = [],
        L = new PromiseMap/*S*/,
        M = {
            run: function(e, t, n) {
                var r = p(t),
                    i = r.abort,
                    o = r.abortableCallbacks;
                GraphQLStore/*y*/.emit(GraphQLStore/*y*/.Events.beginQuery, e);
                var a = DliteLogger/*f*/.logClientEvent("GraphQLQueryRunner.run");
                n = n || DliteFetchModeConstants/*d*/.FETCH_MODE_CLIENT;
                var s = [];
                return n === DliteFetchModeConstants/*d*/.FETCH_MODE_CLIENT ? forEachObject/*C*/(e, function(e) {
                    e && extendArray/*R*/(s, GraphQLStore/*y*/.getDiffQueries(e))
                }) : forEachObject/*C*/(e, function(e) {
                    e && s.push(e)
                }), c(s, o, a, n), GraphQLStore/*y*/.emit(GraphQLStore/*y*/.Events.endQuery), {
                    abort: i
                }
            },
            forceFetch: function(e, t) {
                var n = p(t),
                    r = n.abort,
                    i = n.abortableCallbacks;
                GraphQLStore/*y*/.emit(GraphQLStore/*y*/.Events.beginQuery, e);
                var o = DliteLogger/*f*/.logClientEvent("GraphQLQueryRunner.forceFetch"),
                    a = [];
                forEachObject/*C*/(e, function(e) {
                    e && extendArray/*R*/(a, GraphQLStore/*y*/.getDiffQueries(e))
                }), 0 === a.length && (setImmediate/*T*/(i.onResolvable), i.onBlockingRequest = function() {});
                var s = [];
                return forEachObject/*C*/(e, function(e) {
                    e && s.push(e)
                }), c(s, i, o, DliteFetchModeConstants/*d*/.FETCH_MODE_REFETCH), GraphQLStore/*y*/.emit(GraphQLStore/*y*/.Events.endQuery), {
                    abort: r
                }
            },
            add: function(e, t, n, r) {
                _.recordQuery(e);
                var i = F.length,
                    o = Promise/*v*/.all(n).finally(function() {
                        return t.then(function(t) {
                            return DliteTaskScheduler/*g*/.await(function() {
                                var n = t.response;
                                GraphQLStore/*y*/.emit(GraphQLStore/*y*/.Events.dataFromServer, n), GraphQLStore/*y*/.handleUpdate(n, e, null, r), _.resolveQuery(e, n), delete F[i]
                            })
                        }, function(t) {
                            if (_.rejectQuery(e, t), delete F[i], DliteLog/*h*/.warn(t.message), !u(e)) throw t
                        })
                    });
                return F[i] = {
                    query: e,
                    promise: o
                }, o
            },
            resetPending: function() {
                F = [], _.reset()
            },
            resolveQueryByID: function(e, t) {
                L.resolveKey(e, t)
            },
            rejectQueryByID: function(e, t) {
                L.rejectKey(e, t)
            },
            hasPendingQueries: function() {
                return F.some(o)
            },
            hasPendingQuery: function(e) {
                return _.isQueryPending(e)
            }
        };
    DliteProfiler/*m*/.instrumentMethods(M, {
        hasPendingQuery: "GraphQLQueryRunner.hasPendingQuery"
    }), i.exports = M
});