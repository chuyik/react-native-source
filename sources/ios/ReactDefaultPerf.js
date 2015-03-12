__d("ReactDefaultPerf",["DOMProperty","ReactDefaultPerfAnalysis","ReactMount","ReactPerf","performanceNow"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        return Math.floor(100 * e) / 100
    }

    function a(e, t, n) {
        e[t] = (e[t] || 0) + n
    }
    var DOMProperty/*s*/ = t("DOMProperty"),
        ReactDefaultPerfAnalysis/*l*/ = t("ReactDefaultPerfAnalysis"),
        ReactMount/*u*/ = t("ReactMount"),
        ReactPerf/*c*/ = t("ReactPerf"),
        performanceNow/*p*/ = t("performanceNow"),
        d = {
            _allMeasurements: [],
            _mountStack: [0],
            _injected: !1,
            start: function() {
                d._injected || ReactPerf/*c*/.injection.injectMeasure(d.measure), d._allMeasurements.length = 0, ReactPerf/*c*/.enableMeasure = !0
            },
            stop: function() {
                ReactPerf/*c*/.enableMeasure = !1
            },
            getLastMeasurements: function() {
                return d._allMeasurements
            },
            printExclusive: function(e) {
                e = e || d._allMeasurements;
                var t = ReactDefaultPerfAnalysis/*l*/.getExclusiveSummary(e);
                console.table(t.map(function(e) {
                    return {
                        "Component class name": e.componentName,
                        "Total inclusive time (ms)": o(e.inclusive),
                        "Exclusive mount time (ms)": o(e.exclusive),
                        "Exclusive render time (ms)": o(e.render),
                        "Mount time per instance (ms)": o(e.exclusive / e.count),
                        "Render time per instance (ms)": o(e.render / e.count),
                        Instances: e.count
                    }
                }))
            },
            printInclusive: function(e) {
                e = e || d._allMeasurements;
                var t = ReactDefaultPerfAnalysis/*l*/.getInclusiveSummary(e);
                console.table(t.map(function(e) {
                    return {
                        "Owner > component": e.componentName,
                        "Inclusive time (ms)": o(e.time),
                        Instances: e.count
                    }
                })), console.log("Total time:", ReactDefaultPerfAnalysis/*l*/.getTotalTime(e).toFixed(2) + " ms")
            },
            getMeasurementsSummaryMap: function(e) {
                var t = ReactDefaultPerfAnalysis/*l*/.getInclusiveSummary(e, !0);
                return t.map(function(e) {
                    return {
                        "Owner > component": e.componentName,
                        "Wasted time (ms)": e.time,
                        Instances: e.count
                    }
                })
            },
            printWasted: function(e) {
                e = e || d._allMeasurements, console.table(d.getMeasurementsSummaryMap(e)), console.log("Total time:", ReactDefaultPerfAnalysis/*l*/.getTotalTime(e).toFixed(2) + " ms")
            },
            printDOM: function(e) {
                e = e || d._allMeasurements;
                var t = ReactDefaultPerfAnalysis/*l*/.getDOMSummary(e);
                console.table(t.map(function(e) {
                    var t = {};
                    return t[DOMProperty/*s*/.ID_ATTRIBUTE_NAME] = e.id, t.type = e.type, t.args = JSON.stringify(e.args), t
                })), console.log("Total time:", ReactDefaultPerfAnalysis/*l*/.getTotalTime(e).toFixed(2) + " ms")
            },
            _recordWrite: function(e, t, n, r) {
                var i = d._allMeasurements[d._allMeasurements.length - 1].writes;
                i[e] = i[e] || [], i[e].push({
                    type: t,
                    time: n,
                    args: r
                })
            },
            measure: function(e, t, n) {
                return function() {
                    for (var r = [], i = 0, o = arguments.length; o > i; i++) r.push(arguments[i]);
                    var DOMProperty/*s*/, ReactDefaultPerfAnalysis/*l*/, ReactPerf/*c*/;
                    if ("_renderNewRootComponent" === t || "flushBatchedUpdates" === t) return d._allMeasurements.push({
                        exclusive: {},
                        inclusive: {},
                        render: {},
                        counts: {},
                        writes: {},
                        displayNames: {},
                        totalTime: 0
                    }), ReactPerf/*c*/ = performanceNow/*p*/(), ReactDefaultPerfAnalysis/*l*/ = n.apply(this, r), d._allMeasurements[d._allMeasurements.length - 1].totalTime = performanceNow/*p*/() - ReactPerf/*c*/, ReactDefaultPerfAnalysis/*l*/;
                    if ("ReactDOMIDOperations" === e || "ReactComponentBrowserEnvironment" === e) {
                        if (ReactPerf/*c*/ = performanceNow/*p*/(), ReactDefaultPerfAnalysis/*l*/ = n.apply(this, r), DOMProperty/*s*/ = performanceNow/*p*/() - ReactPerf/*c*/, "mountImageIntoNode" === t) {
                            var h = ReactMount/*u*/.getID(r[1]);
                            d._recordWrite(h, t, DOMProperty/*s*/, r[0])
                        } else "dangerouslyProcessChildrenUpdates" === t ? r[0].forEach(function(e) {
                            var t = {};
                            null !== e.fromIndex && (t.fromIndex = e.fromIndex), null !== e.toIndex && (t.toIndex = e.toIndex), null !== e.textContent && (t.textContent = e.textContent), null !== e.markupIndex && (t.markup = r[1][e.markupIndex]), d._recordWrite(e.parentID, e.type, DOMProperty/*s*/, t)
                        }) : d._recordWrite(r[0], t, DOMProperty/*s*/, Array.prototype.slice.call(r, 1));
                        return ReactDefaultPerfAnalysis/*l*/
                    }
                    if ("ReactCompositeComponent" !== e || "mountComponent" !== t && "updateComponent" !== t && "_renderValidatedComponent" !== t) return n.apply(this, r);
                    var f = "mountComponent" === t ? r[0] : this._rootNodeID,
                        m = "_renderValidatedComponent" === t,
                        g = "mountComponent" === t,
                        _ = d._mountStack,
                        y = d._allMeasurements[d._allMeasurements.length - 1];
                    if (m ? a(y.counts, f, 1) : g && _.push(0), ReactPerf/*c*/ = performanceNow/*p*/(), ReactDefaultPerfAnalysis/*l*/ = n.apply(this, r), DOMProperty/*s*/ = performanceNow/*p*/() - ReactPerf/*c*/, m) a(y.render, f, DOMProperty/*s*/);
                    else if (g) {
                        var v = _.pop();
                        _[_.length - 1] += DOMProperty/*s*/, a(y.exclusive, f, DOMProperty/*s*/ - v), a(y.inclusive, f, DOMProperty/*s*/)
                    } else a(y.inclusive, f, DOMProperty/*s*/);
                    return y.displayNames[f] = {
                        current: this.constructor.displayName,
                        owner: this._owner ? this._owner.constructor.displayName : "<root>"
                    }, ReactDefaultPerfAnalysis/*l*/
                }
            }
        };
    i.exports = d
});