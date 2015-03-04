__d("DliteCatalystProfiler",["DliteProfiler","GraphQLStore","GraphQLStoreChangeEmitter","GraphQLStoreQueryResolver","GraphQLStoreReader","RCTRenderingPerf","ReactGraphQL","SubscriptionsHandler","invariant","mapObject","performanceNow"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o, a, s, l, u, DliteProfiler/*c*/ = require/*t*/("DliteProfiler"),
        GraphQLStore/*p*/ = require/*t*/("GraphQLStore"),
        GraphQLStoreChangeEmitter/*d*/ = require/*t*/("GraphQLStoreChangeEmitter"),
        GraphQLStoreQueryResolver/*h*/ = require/*t*/("GraphQLStoreQueryResolver"),
        GraphQLStoreReader/*f*/ = require/*t*/("GraphQLStoreReader"),
        RCTRenderingPerf/*m*/ = require/*t*/("RCTRenderingPerf"),
        ReactGraphQL/*g*/ = require/*t*/("ReactGraphQL"),
        SubscriptionsHandler/*_*/ = require/*t*/("SubscriptionsHandler"),
        invariant/*y*/ = require/*t*/("invariant"),
        mapObject/*v*/ = require/*t*/("mapObject"),
        performanceNow/*S*/ = require/*t*/("performanceNow"),
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
                T.reset(), D = !0, __DEV__ || invariant/*y*/(0, "DliteCatalystProfiler (DliteProfiler) requires `__DEV__`."), b.forEach(function(global/*e*/) {
                    global/*e*/ && global/*e*/.attachHandler || invariant/*y*/(0, "DliteCatalystProfiler: Attempted to measure an invalid method."), global/*e*/.attachHandler(T.measure)
                }), R.forEach(function(global/*e*/) {
                    DliteProfiler/*c*/.attachAsyncHandler(global/*e*/, {
                        onStart: T.startMeasurement.bind(T, global/*e*/),
                        onStop: T.stopMeasurement.bind(T, global/*e*/)
                    })
                }), C.engage(), C.addSubscriptions(ReactGraphQL/*g*/.addListener("beginQueryParamChange", function(global/*e*/, require/*t*/) {
                    return E ? void console.warn("DliteCatalystProfiler: Began `setQueryParams(%o)` on `%s` while profiling. Results may be tainted.", require/*t*/, global/*e*/) : void(E = !0)
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
                D = !1, b.forEach(function(global/*e*/) {
                    global/*e*/.detachHandler(T.measure)
                }), R.forEach(DliteProfiler/*c*/.detachAsyncHandler), DliteProfiler/*c*/.detachAsyncHandler("fetchRQL.processPending"), C.release()
            },
            measure: function(global/*e*/, require/*t*/) {
                T.startMeasurement(global/*e*/), require/*t*/(), T.stopMeasurement(global/*e*/)
            },
            startMeasurement: function(global/*e*/) {
                o[global/*e*/] = o[global/*e*/] || Object.assign({}, w), a.unshift(0), s.unshift(performanceNow/*S*/())
            },
            stopMeasurement: function(global/*e*/) {
                var require/*t*/ = a.shift(),
                    requireDynamic/*n*/ = s.shift(),
                    requireLazy/*r*/ = performanceNow/*S*/() - requireDynamic/*n*/;
                o[global/*e*/].aggregateTime += requireLazy/*r*/ - require/*t*/, o[global/*e*/].callCount++, a[0] += requireLazy/*r*/
            },
            getAggregateTimes: function() {
                return mapObject/*v*/(o, function(global/*e*/) {
                    return global/*e*/.aggregateTime
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
                    var global/*e*/ = {};
                    Object.keys(o).sort(function(global/*e*/, require/*t*/) {
                        return o[require/*t*/].aggregateTime - o[global/*e*/].aggregateTime
                    }).forEach(function(require/*t*/) {
                        global/*e*/[require/*t*/] = o[require/*t*/]
                    }), console.table ? console.table(global/*e*/) : console.log(global/*e*/), console.info("Fetch time: ", u)
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
    module/*i*/.exports = T
});