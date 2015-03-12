__d("DliteCatalystProfiler",["DliteProfiler","GraphQLStore","GraphQLStoreChangeEmitter","GraphQLStoreQueryResolver","GraphQLStoreReader","RCTRenderingPerf","ReactGraphQL","SubscriptionsHandler","invariant","mapObject","performanceNow"],function (e, t, n, r, i) {
    "use strict";
    var o, a, s, l, u, DliteProfiler/*c*/ = t("DliteProfiler"),
        GraphQLStore/*p*/ = t("GraphQLStore"),
        GraphQLStoreChangeEmitter/*d*/ = t("GraphQLStoreChangeEmitter"),
        GraphQLStoreQueryResolver/*h*/ = t("GraphQLStoreQueryResolver"),
        GraphQLStoreReader/*f*/ = t("GraphQLStoreReader"),
        RCTRenderingPerf/*m*/ = t("RCTRenderingPerf"),
        ReactGraphQL/*g*/ = t("ReactGraphQL"),
        SubscriptionsHandler/*_*/ = t("SubscriptionsHandler"),
        invariant/*y*/ = t("invariant"),
        mapObject/*v*/ = t("mapObject"),
        performanceNow/*S*/ = t("performanceNow"),
        b = [ReactGraphQL/*g*/.Mixin.getInitialState, ReactGraphQL/*g*/.Mixin.componentWillReceiveProps, ReactGraphQL/*g*/.Mixin._shouldComponentUpdate, ReactGraphQL/*g*/.Mixin.statics.getQueriesForRoute, GraphQLStore/*p*/.getDiffQueries, GraphQLStore/*p*/.handleUpdate, GraphQLStoreChangeEmitter/*d*/.addListenerForIDs, GraphQLStoreChangeEmitter/*d*/.broadcastChangeForID, GraphQLStoreChangeEmitter/*d*/._processSubscribers, GraphQLStoreQueryResolver/*h*/.prototype.resolve, GraphQLStoreReader/*f*/.prototype.retrieveData],
        R = ["React.setPropsInternal.onSuccess", "React.setPropsInternal.onSubscription"],
        w = {
            aggregateTime: 0,
            callCount: 0
        },
        C = new SubscriptionsHandler/*_*/,
        E = !1,
        D = !1,
        T = {
            start: function() {
                T.reset(), D = !0, __DEV__ || invariant/*y*/(0, "DliteCatalystProfiler (DliteProfiler) requires `__DEV__`."), b.forEach(function(e) {
                    e && e.attachHandler || invariant/*y*/(0, "DliteCatalystProfiler: Attempted to measure an invalid method."), e.attachHandler(T.measure)
                }), R.forEach(function(e) {
                    DliteProfiler/*c*/.attachAsyncHandler(e, {
                        onStart: T.startMeasurement.bind(T, e),
                        onStop: T.stopMeasurement.bind(T, e)
                    })
                }), C.engage(), C.addSubscriptions(ReactGraphQL/*g*/.addListener("beginQueryParamChange", function(e, t) {
                    return E ? void console.warn("DliteCatalystProfiler: Began `setQueryParams(%o)` on `%s` while profiling. Results may be tainted.", t, e) : void(E = !0)
                }), ReactGraphQL/*g*/.addListener("endQueryParamChange", function() {
                    E = !1
                })), DliteProfiler/*c*/.attachAsyncHandler("fetchRQL.processPending", {
                    onStart: function() {
                        l = performanceNow/*S*/()
                    },
                    onStop: function() {
                        u || (u = performanceNow/*S*/() - l, l = 0)
                    }
                })
            },
            stop: function() {
                D = !1, b.forEach(function(e) {
                    e.detachHandler(T.measure)
                }), R.forEach(DliteProfiler/*c*/.detachAsyncHandler), DliteProfiler/*c*/.detachAsyncHandler("fetchRQL.processPending"), C.release()
            },
            measure: function(e, t) {
                T.startMeasurement(e), t(), T.stopMeasurement(e)
            },
            startMeasurement: function(e) {
                o[e] = o[e] || Object.assign({}, w), a.unshift(0), s.unshift(performanceNow/*S*/())
            },
            stopMeasurement: function(e) {
                var t = a.shift(),
                    n = s.shift(),
                    r = performanceNow/*S*/() - n;
                o[e].aggregateTime += r - t, o[e].callCount++, a[0] += r
            },
            getAggregateTimes: function() {
                return mapObject/*v*/(o, function(e) {
                    return e.aggregateTime
                })
            },
            reset: function() {
                o = {}, a = [0], s = [0], l = 0, u = 0
            },
            getMeasurements: function() {
                return Object.assign({}, o)
            },
            print: function() {
                if (D) {
                    var e = {};
                    Object.keys(o).sort(function(e, t) {
                        return o[t].aggregateTime - o[e].aggregateTime
                    }).forEach(function(t) {
                        e[t] = o[t]
                    }), console.table ? console.table(e) : console.log(e), console.info("Fetch time: ", u)
                }
            },
            install: function() {
                __DEV__ && RCTRenderingPerf/*m*/.register({
                    start: function() {
                        T.start(), console.log("Dlite perfomance measurements started")
                    },
                    stop: function() {
                        T.print(), T.stop()
                    }
                })
            }
        };
    i.exports = T
});