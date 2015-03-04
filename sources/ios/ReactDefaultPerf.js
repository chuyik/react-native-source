__d("ReactDefaultPerf",["DOMProperty","ReactDefaultPerfAnalysis","ReactMount","ReactPerf","performanceNow"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        return Math.floor(100 * global/*e*/) / 100
    }

    function a(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        global/*e*/[require/*t*/] = (global/*e*/[require/*t*/] || 0) + requireDynamic/*n*/
    }
    var DOMProperty/*s*/ = require/*t*/("DOMProperty"),
        ReactDefaultPerfAnalysis/*l*/ = require/*t*/("ReactDefaultPerfAnalysis"),
        ReactMount/*u*/ = require/*t*/("ReactMount"),
        ReactPerf/*c*/ = require/*t*/("ReactPerf"),
        performanceNow/*p*/ = require/*t*/("performanceNow"),
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
            printExclusive: function(global/*e*/) {
                global/*e*/ = global/*e*/ || d._allMeasurements;
                var require/*t*/ = ReactDefaultPerfAnalysis/*l*/.getExclusiveSummary(global/*e*/);
                console.table(require/*t*/.map(function(global/*e*/) {
                    return {
                        "Component class name": global/*e*/.componentName,
                        "Total inclusive time (ms)": o(global/*e*/.inclusive),
                        "Exclusive mount time (ms)": o(global/*e*/.exclusive),
                        "Exclusive render time (ms)": o(global/*e*/.render),
                        "Mount time per instance (ms)": o(global/*e*/.exclusive / global/*e*/.count),
                        "Render time per instance (ms)": o(global/*e*/.render / global/*e*/.count),
                        Instances: global/*e*/.count
                    }
                }))
            },
            printInclusive: function(global/*e*/) {
                global/*e*/ = global/*e*/ || d._allMeasurements;
                var require/*t*/ = ReactDefaultPerfAnalysis/*l*/.getInclusiveSummary(global/*e*/);
                console.table(require/*t*/.map(function(global/*e*/) {
                    return {
                        "Owner > component": global/*e*/.componentName,
                        "Inclusive time (ms)": o(global/*e*/.time),
                        Instances: global/*e*/.count
                    }
                })), console.log("Total time:", ReactDefaultPerfAnalysis/*l*/.getTotalTime(global/*e*/).toFixed(2) + " ms")
            },
            getMeasurementsSummaryMap: function(global/*e*/) {
                var require/*t*/ = ReactDefaultPerfAnalysis/*l*/.getInclusiveSummary(global/*e*/, !0);
                return require/*t*/.map(function(global/*e*/) {
                    return {
                        "Owner > component": global/*e*/.componentName,
                        "Wasted time (ms)": global/*e*/.time,
                        Instances: global/*e*/.count
                    }
                })
            },
            printWasted: function(global/*e*/) {
                global/*e*/ = global/*e*/ || d._allMeasurements, console.table(d.getMeasurementsSummaryMap(global/*e*/)), console.log("Total time:", ReactDefaultPerfAnalysis/*l*/.getTotalTime(global/*e*/).toFixed(2) + " ms")
            },
            printDOM: function(global/*e*/) {
                global/*e*/ = global/*e*/ || d._allMeasurements;
                var require/*t*/ = ReactDefaultPerfAnalysis/*l*/.getDOMSummary(global/*e*/);
                console.table(require/*t*/.map(function(global/*e*/) {
                    var require/*t*/ = {};
                    return require/*t*/[DOMProperty/*s*/.ID_ATTRIBUTE_NAME] = global/*e*/.id, require/*t*/.type = global/*e*/.type, require/*t*/.args = JSON.stringify(global/*e*/.args), require/*t*/
                })), console.log("Total time:", ReactDefaultPerfAnalysis/*l*/.getTotalTime(global/*e*/).toFixed(2) + " ms")
            },
            _recordWrite: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                var module/*i*/ = d._allMeasurements[d._allMeasurements.length - 1].writes;
                module/*i*/[global/*e*/] = module/*i*/[global/*e*/] || [], module/*i*/[global/*e*/].push({
                    type: require/*t*/,
                    time: requireDynamic/*n*/,
                    args: requireLazy/*r*/
                })
            },
            measure: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                return function() {
                    for (var requireLazy/*r*/ = [], module/*i*/ = 0, o = arguments.length; o > module/*i*/; module/*i*/++) requireLazy/*r*/.push(arguments[module/*i*/]);
                    var DOMProperty/*s*/, ReactDefaultPerfAnalysis/*l*/, ReactPerf/*c*/;
                    if ("_renderNewRootComponent" === require/*t*/ || "flushBatchedUpdates" === require/*t*/) return d._allMeasurements.push({
                        exclusive: {},
                        inclusive: {},
                        render: {},
                        counts: {},
                        writes: {},
                        displayNames: {},
                        totalTime: 0
                    }), ReactPerf/*c*/ = performanceNow/*p*/(), ReactDefaultPerfAnalysis/*l*/ = requireDynamic/*n*/.apply(this, requireLazy/*r*/), d._allMeasurements[d._allMeasurements.length - 1].totalTime = performanceNow/*p*/() - ReactPerf/*c*/, ReactDefaultPerfAnalysis/*l*/;
                    if ("ReactDOMIDOperations" === global/*e*/ || "ReactComponentBrowserEnvironment" === global/*e*/) {
                        if (ReactPerf/*c*/ = performanceNow/*p*/(), ReactDefaultPerfAnalysis/*l*/ = requireDynamic/*n*/.apply(this, requireLazy/*r*/), DOMProperty/*s*/ = performanceNow/*p*/() - ReactPerf/*c*/, "mountImageIntoNode" === require/*t*/) {
                            var h = ReactMount/*u*/.getID(requireLazy/*r*/[1]);
                            d._recordWrite(h, require/*t*/, DOMProperty/*s*/, requireLazy/*r*/[0])
                        } else "dangerouslyProcessChildrenUpdates" === require/*t*/ ? requireLazy/*r*/[0].forEach(function(global/*e*/) {
                            var require/*t*/ = {};
                            null !== global/*e*/.fromIndex && (require/*t*/.fromIndex = global/*e*/.fromIndex), null !== global/*e*/.toIndex && (require/*t*/.toIndex = global/*e*/.toIndex), null !== global/*e*/.textContent && (require/*t*/.textContent = global/*e*/.textContent), null !== global/*e*/.markupIndex && (require/*t*/.markup = requireLazy/*r*/[1][global/*e*/.markupIndex]), d._recordWrite(global/*e*/.parentID, global/*e*/.type, DOMProperty/*s*/, require/*t*/)
                        }) : d._recordWrite(requireLazy/*r*/[0], require/*t*/, DOMProperty/*s*/, Array.prototype.slice.call(requireLazy/*r*/, 1));
                        return ReactDefaultPerfAnalysis/*l*/
                    }
                    if ("ReactCompositeComponent" !== global/*e*/ || "mountComponent" !== require/*t*/ && "updateComponent" !== require/*t*/ && "_renderValidatedComponent" !== require/*t*/) return requireDynamic/*n*/.apply(this, requireLazy/*r*/);
                    var f = "mountComponent" === require/*t*/ ? requireLazy/*r*/[0] : this._rootNodeID,
                        m = "_renderValidatedComponent" === require/*t*/,
                        g = "mountComponent" === require/*t*/,
                        _ = d._mountStack,
                        y = d._allMeasurements[d._allMeasurements.length - 1];
                    if (m ? a(y.counts, f, 1) : g && _.push(0), ReactPerf/*c*/ = performanceNow/*p*/(), ReactDefaultPerfAnalysis/*l*/ = requireDynamic/*n*/.apply(this, requireLazy/*r*/), DOMProperty/*s*/ = performanceNow/*p*/() - ReactPerf/*c*/, m) a(y.render, f, DOMProperty/*s*/);
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
    module/*i*/.exports = d
});