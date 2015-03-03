__d("DliteCatalystProfiler",["DliteProfiler","GraphQLStore","GraphQLStoreChangeEmitter","GraphQLStoreQueryResolver","GraphQLStoreReader","RCTRenderingPerf","ReactGraphQL","SubscriptionsHandler","invariant","mapObject","performanceNow"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o, exports/*a*/, DliteProfiler/*s*/, GraphQLStore/*l*/, GraphQLStoreChangeEmitter/*u*/, GraphQLStoreQueryResolver/*c*/ = require/*t*/("DliteProfiler"),
        GraphQLStoreReader/*p*/ = require/*t*/("GraphQLStore"),
        RCTRenderingPerf/*d*/ = require/*t*/("GraphQLStoreChangeEmitter"),
        ReactGraphQL/*h*/ = require/*t*/("GraphQLStoreQueryResolver"),
        SubscriptionsHandler/*f*/ = require/*t*/("GraphQLStoreReader"),
        invariant/*m*/ = require/*t*/("RCTRenderingPerf"),
        mapObject/*g*/ = require/*t*/("ReactGraphQL"),
        performanceNow/*_*/ = require/*t*/("SubscriptionsHandler"),
        y = require/*t*/("invariant"),
        v = require/*t*/("mapObject"),
        S = require/*t*/("performanceNow"),
        b = [mapObject/*g*/.Mixin.getInitialState, mapObject/*g*/.Mixin.componentWillReceiveProps, mapObject/*g*/.Mixin._shouldComponentUpdate, mapObject/*g*/.Mixin.statics.getQueriesForRoute, GraphQLStoreReader/*p*/.getDiffQueries, GraphQLStoreReader/*p*/.handleUpdate, RCTRenderingPerf/*d*/.addListenerForIDs, RCTRenderingPerf/*d*/.broadcastChangeForID, RCTRenderingPerf/*d*/._processSubscribers, ReactGraphQL/*h*/.prototype.resolve, SubscriptionsHandler/*f*/.prototype.retrieveData],
        R = ["React.setPropsInternal.onSuccess", "React.setPropsInternal.onSubscription"],
        w = {
            aggregateTime: 0,
            callCount: 0
        },
        C = new performanceNow/*_*/,
        E = !1,
        D = !1,
        T = {
            start: function() {
                T.reset(), D = !0, __DEV__ || y(0, "DliteCatalystProfiler (DliteProfiler) requires `__DEV__`."), b.forEach(function(global/*e*/) {
                    global/*e*/ && global/*e*/.attachHandler || y(0, "DliteCatalystProfiler: Attempted to measure an invalid method."), global/*e*/.attachHandler(T.measure)
                }), R.forEach(function(global/*e*/) {
                    GraphQLStoreQueryResolver/*c*/.attachAsyncHandler(global/*e*/, {
                        onStart: T.startMeasurement.bind(T, global/*e*/),
                        onStop: T.stopMeasurement.bind(T, global/*e*/)
                    })
                }), C.engage(), C.addSubscriptions(mapObject/*g*/.addListener("beginQueryParamChange", function(global/*e*/, require/*t*/) {
                    return E ? void console.warn("DliteCatalystProfiler: Began `setQueryParams(%o)` on `%DliteProfiler/*s*/` while profiling. Results may be tainted.", require/*t*/, global/*e*/) : void(E = !0)
                }), mapObject/*g*/.addListener("endQueryParamChange", function() {
                    E = !1
                })), GraphQLStoreQueryResolver/*c*/.attachAsyncHandler("fetchRQL.processPending", {
                    onStart: function() {
                        GraphQLStore/*l*/ = S()
                    },
                    onStop: function() {
                        GraphQLStoreChangeEmitter/*u*/ || (GraphQLStoreChangeEmitter/*u*/ = S() - GraphQLStore/*l*/, GraphQLStore/*l*/ = 0)
                    }
                })
            },
            stop: function() {
                D = !1, b.forEach(function(global/*e*/) {
                    global/*e*/.detachHandler(T.measure)
                }), R.forEach(GraphQLStoreQueryResolver/*c*/.detachAsyncHandler), GraphQLStoreQueryResolver/*c*/.detachAsyncHandler("fetchRQL.processPending"), C.release()
            },
            measure: function(global/*e*/, require/*t*/) {
                T.startMeasurement(global/*e*/), require/*t*/(), T.stopMeasurement(global/*e*/)
            },
            startMeasurement: function(global/*e*/) {
                o[global/*e*/] = o[global/*e*/] || Object.assign({}, w), exports/*a*/.unshift(0), DliteProfiler/*s*/.unshift(S())
            },
            stopMeasurement: function(global/*e*/) {
                var require/*t*/ = exports/*a*/.shift(),
                    requireDynamic/*n*/ = DliteProfiler/*s*/.shift(),
                    requireLazy/*r*/ = S() - requireDynamic/*n*/;
                o[global/*e*/].aggregateTime += requireLazy/*r*/ - require/*t*/, o[global/*e*/].callCount++, exports/*a*/[0] += requireLazy/*r*/
            },
            getAggregateTimes: function() {
                return v(o, function(global/*e*/) {
                    return global/*e*/.aggregateTime
                })
            },
            reset: function() {
                o = {}, exports/*a*/ = [0], DliteProfiler/*s*/ = [0], GraphQLStore/*l*/ = 0, GraphQLStoreChangeEmitter/*u*/ = 0
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
                    }), console.table ? console.table(global/*e*/) : console.log(global/*e*/), console.info("Fetch time: ", GraphQLStoreChangeEmitter/*u*/)
                }
            },
            install: function() {
                __DEV__ && invariant/*m*/.register({
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