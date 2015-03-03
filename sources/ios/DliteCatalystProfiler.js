__d("DliteCatalystProfiler",["DliteProfiler","GraphQLStore","GraphQLStoreChangeEmitter","GraphQLStoreQueryResolver","GraphQLStoreReader","RCTRenderingPerf","ReactGraphQL","SubscriptionsHandler","invariant","mapObject","performanceNow"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o, a, s, l, u, c = require/*t*/("DliteProfiler"),
        p = require/*t*/("GraphQLStore"),
        d = require/*t*/("GraphQLStoreChangeEmitter"),
        h = require/*t*/("GraphQLStoreQueryResolver"),
        f = require/*t*/("GraphQLStoreReader"),
        m = require/*t*/("RCTRenderingPerf"),
        g = require/*t*/("ReactGraphQL"),
        _ = require/*t*/("SubscriptionsHandler"),
        y = require/*t*/("invariant"),
        v = require/*t*/("mapObject"),
        S = require/*t*/("performanceNow"),
        b = [g.Mixin.getInitialState, g.Mixin.componentWillReceiveProps, g.Mixin._shouldComponentUpdate, g.Mixin.statics.getQueriesForRoute, p.getDiffQueries, p.handleUpdate, d.addListenerForIDs, d.broadcastChangeForID, d._processSubscribers, h.prototype.resolve, f.prototype.retrieveData],
        R = ["React.setPropsInternal.onSuccess", "React.setPropsInternal.onSubscription"],
        w = {
            aggregateTime: 0,
            callCount: 0
        },
        C = new _,
        E = !1,
        D = !1,
        T = {
            start: function() {
                T.reset(), D = !0, __DEV__ || y(0, "DliteCatalystProfiler (DliteProfiler) requires `__DEV__`."), b.forEach(function(global/*e*/) {
                    global/*e*/ && global/*e*/.attachHandler || y(0, "DliteCatalystProfiler: Attempted to measure an invalid method."), global/*e*/.attachHandler(T.measure)
                }), R.forEach(function(global/*e*/) {
                    c.attachAsyncHandler(global/*e*/, {
                        onStart: T.startMeasurement.bind(T, global/*e*/),
                        onStop: T.stopMeasurement.bind(T, global/*e*/)
                    })
                }), C.engage(), C.addSubscriptions(g.addListener("beginQueryParamChange", function(global/*e*/, require/*t*/) {
                    return E ? void console.warn("DliteCatalystProfiler: Began `setQueryParams(%o)` on `%s` while profiling. Results may be tainted.", require/*t*/, global/*e*/) : void(E = !0)
                }), g.addListener("endQueryParamChange", function() {
                    E = !1
                })), c.attachAsyncHandler("fetchRQL.processPending", {
                    onStart: function() {
                        l = S()
                    },
                    onStop: function() {
                        u || (u = S() - l, l = 0)
                    }
                })
            },
            stop: function() {
                D = !1, b.forEach(function(global/*e*/) {
                    global/*e*/.detachHandler(T.measure)
                }), R.forEach(c.detachAsyncHandler), c.detachAsyncHandler("fetchRQL.processPending"), C.release()
            },
            measure: function(global/*e*/, require/*t*/) {
                T.startMeasurement(global/*e*/), require/*t*/(), T.stopMeasurement(global/*e*/)
            },
            startMeasurement: function(global/*e*/) {
                o[global/*e*/] = o[global/*e*/] || Object.assign({}, w), a.unshift(0), s.unshift(S())
            },
            stopMeasurement: function(global/*e*/) {
                var require/*t*/ = a.shift(),
                    requireDynamic/*n*/ = s.shift(),
                    requireLazy/*r*/ = S() - requireDynamic/*n*/;
                o[global/*e*/].aggregateTime += requireLazy/*r*/ - require/*t*/, o[global/*e*/].callCount++, a[0] += requireLazy/*r*/
            },
            getAggregateTimes: function() {
                return v(o, function(global/*e*/) {
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
                __DEV__ && m.register({
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